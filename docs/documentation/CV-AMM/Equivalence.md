---
lang: en-US
title: CV-AMM Equivalence with Uniswap, Balancer & Curve
description: How one CV-AMM formula pair reproduces Uniswap's CPMM exactly, matches Balancer's weighted spot price, and approximates Curve's StableSwap flatness — without exponentiation or iteration.
keywords: [TTSWAP, CV-AMM, CPMM, Uniswap, Balancer, Curve, StableSwap, equivalence proof, AMM comparison]
image: /img/og-social-card.png
displayed_sidebar: guideSidebar
sidebar_position: 3
createTime: 2026/08/06
---

# Equivalence with Mainstream AMMs

One formula pair covers three market-making regimes. This page sketches the proofs; the full derivations are in Technical Whitepaper Appendices B–D.

$$
\Delta V = \frac{2 V_A \Delta a}{2 Q_A + \Delta a}, \qquad
\Delta b = \frac{2 Q_B \Delta V}{2 V_B + \Delta V}
$$

## 1. CPMM — exact degeneration when $V_A = V_B$

Set $V_A = V_B = V$ and substitute step 1 into step 2. Dividing numerator and denominator by $2V$ collapses the composition to:

$$
\Delta b = \frac{Q_B \cdot \Delta a}{Q_A + \Delta a}
$$

which is **exactly** Uniswap V2's output formula $\Delta y = \tfrac{y\,\Delta x}{x + \Delta x}$, i.e. $x \cdot y = k$. So whenever two shelves carry equal recorded value, TTSWAP offers the same depth and pricing behavior as a CPMM pair — with no pair contract.

## 2. Balancer weighted pool — identical spot price when $V_A \neq V_B$

Balancer's weighted invariant $(Q_A)^{W_A}(Q_B)^{W_B} = k$ gives the spot price:

$$
SP_{\text{Balancer}} = \frac{Q_A \cdot W_B}{Q_B \cdot W_A}
$$

Take the $\Delta a \to 0$ limit of the CV-AMM kernel:

$$
dV = \frac{V_A}{Q_A}\,da, \qquad db = \frac{Q_B}{V_B}\,dV
\;\;\Longrightarrow\;\;
SP_{\text{TTSWAP}} = \frac{da}{db} = \frac{Q_A \cdot V_B}{Q_B \cdot V_A}
$$

Mapping $V \leftrightarrow W$, the two spot prices are **identical**. For finite trade sizes, the harmonic-mean curve tracks Balancer's power curve in convexity, asymptotes, and slippage direction — but needs **no exponentiation**, so gas stays $O(1)$ regardless of "weights".

## 3. Curve StableSwap — flatness via M + safeLine

Curve achieves sub-basis-point stablecoin slippage with the amplified invariant

$$
A n^n \sum x_i + D = A D n^n + \frac{D^{n+1}}{n^n \prod x_i}
$$

but solving for $D$ requires Newton–Raphson iteration on-chain. TTSWAP reaches the same behavioral profile with two orthogonal per-token knobs:

- **Equilibrium flatness — M (liquidity amplification, `getPower`)**: virtual quantity deepens the pool. With $V_A = V_B$, $Q_A = Q_B = Q$ and large M (virtual quantity dominating):

$$
\Delta V \approx \frac{V_A \Delta a}{Q_A}, \qquad
\Delta b \approx \frac{Q_B \Delta V}{V_B} = \Delta a
$$

  i.e. a near-1:1 fill — constant-sum behavior in the balanced zone.

- **Deviation regression — `safeLine`**: as trades push $Q$ away from the baseline `I + virtual`, the harmonic curve's own slippage grows nonlinearly, and at the band edge the trade reverts outright (`TTSwapError(55/56)`). "Deviation raises friction; the boundary blocks" is the functional equivalent of Curve's soft hand-off from constant-sum to constant-product as balances diverge.

### Engineering comparison

| Dimension | Curve | TTSWAP |
|:--|:--|:--|
| Computation | Iterative $D$ solve + high powers | Add/sub/mul/div, $O(1)$ |
| Gas | Higher | ~93k steady-state swap tx |
| Scope | Stable pairs | Any token; M, `safeLine`, fees per good |
| Parameter agility | $A$ changed via slow governance | Per-token config by good owner / manager |
| Behavior off-peg | $A$ fixed; curve drifts toward product | Natural slippage + hard band revert drives $Q$ home |

## Summary

| Regime | Condition | What CV-AMM reproduces |
|:--|:--|:--|
| CPMM (Uniswap V2) | $V_A = V_B$ | Exact $x \cdot y = k$ output formula |
| Weighted (Balancer) | $V_A \neq V_B$ | Identical spot price under $V \leftrightarrow W$ |
| StableSwap (Curve) | large M + `safeLine` | Balanced-zone 1:1 fills + boundary regression |

The practical consequence: **listing a token never requires choosing a curve type**. The pool's recorded value, amplification, and safety band position it anywhere on the CPMM–weighted–stable spectrum, and all of it runs on the same constant-2 algebra.
