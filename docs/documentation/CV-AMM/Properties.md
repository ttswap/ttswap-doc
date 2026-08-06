---
lang: en-US
title: CV-AMM Model Properties — Value Conservation & Closure
description: Formal properties of the CV-AMM — value conservation, round-trip and triangular closure, split-trade error bounds, and why the value hub admits no risk-free arbitrage loop.
keywords: [TTSWAP, CV-AMM, path independence, value conservation, closure, arbitrage, slippage, AMM properties]
image: /img/og-social-card.png
displayed_sidebar: guideSidebar
sidebar_position: 4
createTime: 2026/08/06
---

# Model Properties

The CV-AMM kernel satisfies a set of algebraic closure properties (fee-free statements; fees only shift outcomes in the protocol's favor). Full derivations: Technical Whitepaper Appendices I–K.

## 1. Value conservation

Across any hop $A \to B$, the value removed from shelf A equals the value deposited on shelf B:

$$
\Delta V_{\text{out of } A} \;\equiv\; \Delta V_{\text{into } B}
$$

Swaps move **quantity** between shelves; the recorded value $V$ of each shelf changes only through invest, divest, or welfare injection. The value hub therefore behaves like a strict clearing house — no value is minted or burned by trading.

## 2. Round-trip closure (Appendix I)

Swap $\Delta a$ of A into $\Delta b$ of B, then swap that $\Delta b$ straight back:

1. Forward: $\Delta V = \dfrac{2 V_A \Delta a}{2 Q_A + \Delta a}$, $\;\Delta b = \dfrac{2 Q_B \Delta V}{2 V_B + \Delta V}$;
2. Reverse input against the post-trade B shelf:

$$
\Delta V' = \frac{2 V_B \Delta b}{2(Q_B - \Delta b) + \Delta b} = \frac{2 V_B \Delta b}{2 Q_B - \Delta b}
$$

3. Rearranging the forward $\Delta b$ formula gives the same expression, so $\Delta V' = \Delta V$;
4. The reverse output is $\Delta a_{\text{out}} = \dfrac{2 (Q_A + \Delta a) \Delta V}{2 V_A + \Delta V}$, and substituting $\Delta V (2 Q_A + \Delta a) = 2 V_A \Delta a$ yields:

$$
\Delta a_{\text{out}} = \Delta a
$$

You get back exactly what you put in, and both shelves return to their initial states. **There is no fee-free round-trip profit.**

## 3. Triangular closure (Appendix K)

For the three-hop loop $A \to B \to C \to A$, the reversibility of the $\Delta b$ formula forces every hop to carry the same transferred value:

$$
\Delta V_{AB} = \Delta V_{BC} = \Delta V_{CA} = \Delta V
$$

Shelf B absorbs then releases $\Delta b$; shelf C releases then absorbs $\Delta c$; and the final leg returns $\Delta a_{\text{final}} = \Delta a$ by the same substitution as the round-trip proof. All three shelves are restored — **no risk-free triangular arbitrage exists inside the hub**. (Arbitrage against *external* venues remains possible and is what keeps hub prices aligned with the market.)

## 4. Split-trade error (Appendix J)

Is splitting one order into two ever profitable? Compare a single fill of $\Delta a$ against two fills $x_1 + x_2 = \Delta a$:

$$
\text{Diff} = \frac{C_1 (x_1 + x_2)(V_A^2 - V_B^2)\, x_1 x_2}
{(C_2 + N(x_1+x_2))(C_2 + N x_1)(C_2 + 2 V_B x_1 + N x_2)}
$$

with $C_1 = 2 Q_B V_A$, $C_2 = 2 V_B Q_A$, $N = V_A + V_B$.

| Case | Result |
|:--|:--|
| $V_A = V_B$ | Diff = 0 — strictly path-independent (the CPMM regime) |
| $V_A > V_B$ | Diff > 0 — single fill slightly better |
| $V_A < V_B$ | Diff < 0 — split slightly better |

The relative magnitude is bounded by:

$$
\frac{\text{Diff}}{\Delta b} \;\approx\; \left(\frac{\Delta a}{Q_A}\right)^{2} \cdot \frac{V_A^2 - V_B^2}{V_B^2}
$$

At a typical trade size $\Delta a / Q_A \approx 10^{-3}$ the relative error is on the order of $10^{-6}$ — negligible in engineering terms, and in practice dominated by fees either way.

## 5. Bounded slippage

Both kernel maps are strictly concave in their inputs: the marginal price worsens monotonically as size grows, and the output asymptotically approaches (never reaches) $2Q_B$ of the destination shelf. Combined with 1%-depth slice iteration and the `safeLine` band, a single order can neither sweep a shelf at spot nor push inventory outside its healthy range.

## 6. Constant-cost execution

Every property above is achieved with **closed-form rational arithmetic**: no `exp`/`ln`, no Newton–Raphson invariant solving, no cross-contract routing. That is what keeps a full cross-token swap at roughly 93k gas per transaction and makes the cost independent of how many tokens the market lists.

## Why these properties matter

- **For traders**: quoted output is exact and reproducible; there is no hidden path dependence to game, and MEV surface from intra-hub loops is structurally zero.
- **For LPs**: swaps never touch `investState`, so recorded principal is untouched by price action — the algebraic precondition for the zero-IL divestment guarantee.
- **For integrators**: any-to-any pricing needs only the two shelves' $(V, Q)$ pairs; a router, quoter, or solver can price every possible route with one formula and no pool-topology graph.
