---
lang: en-US
title: Core Formulas
description: The CV-AMM two-step kernel — input-side value mapping, output-side quantity mapping, 1% slice iteration, safeLine bounds, and the exact code mapping in L_Good.
keywords: [TTSWAP, CV-AMM, buyGoodInput, buyGoodOutput, safeLine, slice iteration, harmonic mean, AMM formula]
image: /img/og-social-card.png
displayed_sidebar: guideSidebar
sidebar_position: 2
createTime: 2026/08/06
---

# Core Formulas

A swap of $\Delta a$ units of Token A into Token B runs through the value hub in two steps. Large trades iterate in **~1% pool-depth slices**, each slice applying the same algebraic kernel, and the loop finishes with a `safeLine` inventory check. The dual coefficient is **hardcoded to the constant 2** in `L_Good.buyGoodInput / buyGoodOutput` (and the `payGoodInput / payGoodOutput` reverse path).

## Step 1 — Input side: quantity → transferred value

Per slice (`buyGoodInput`):

$$
\Delta V_i \;=\; \frac{2 \cdot V \cdot \Delta q_i}{2 \cdot Q \;+\; \Delta q_i}
$$

## Step 2 — Output side: transferred value → quantity

Per slice (`buyGoodOutput`):

$$
\Delta q_i \;=\; \frac{2 \cdot Q \cdot \Delta V_i}{2 \cdot V \;+\; \Delta V_i}
$$

The total $\Delta V$ (and total output $\Delta b$) is the sum over slices. Each step caps the slice at `current_quantity / 100` (input side) or `current_value / 100` (output side):

```solidity
// Input side: sell Token A, accumulate transferred value ΔV
value = (2 * _swapParam * current_value)
      / (2 * current_quantity + _swapParam);
swapTemp.get += value;
swapTemp.current_quantity += _swapParam;

// Output side: buy Token B, accumulate output quantity Δq
quantity = (2 * _swapParam * current_quantity)
         / (2 * current_value + _swapParam);
swapTemp.get += quantity;
swapTemp.current_quantity -= quantity;
```

## Where the formula comes from

The spot price of shelf A is $P = V_A / Q_A$ before the trade and $V_A / (Q_A + \Delta a)$ after it. The kernel prices the whole fill at the **harmonic mean** of the two execution densities, which collapses to the closed form:

$$
\Delta V = \frac{2 \cdot V_A \cdot \Delta a}{2 \cdot Q_A + \Delta a}
$$

Design philosophy: a swap is a negotiation between **the quantity imbalance the trader is willing to bear** and **the value conservation the protocol enforces**. Slice iteration plus `safeLine` keeps the per-step math $O(1)$ while damping the instantaneous impact of a single large order on pool depth.

## Parameters mapped to code

| Symbol | Meaning | Code field |
|:--|:--|:--|
| $V$ | Total protocol value of the token (investment value) | `investState.amount1()` |
| $Q$ | Current pool quantity (incl. accumulated fees + virtual amount) | `currentState.amount1()` |
| $\Delta a$ | Net input after `sellFee` deduction | `_swapParam` in `buyGoodInput` |
| $\Delta V$ | Transferred value of this trade (slice-accumulated) | `buyGoodInput` return `amount1` |
| $\Delta b$ | Gross Token B out (before `buyFee`) | `buyGoodOutput` return `amount1` |
| $2$ | Fixed dual coefficient | hardcoded in `L_Good` |

Fees bracket the kernel: `sellFee` is deducted from the input *before* step 1; `buyFee` is deducted from the gross output *after* step 2 (`getBuyFee` at the end of `buyGoodOutput`). Both accumulate into the pool, monotonically raising LP net value.

## safeLine: inventory guard rails

After the slice loop, the kernel validates the resulting inventory against per-good bounds derived from the baseline `I + virtual`:

- **Input side** (pool absorbs tokens): `current_quantity ≤ getSafeLineUpper(...)`, else `TTSwapError(55)`;
- **Output side** (pool releases tokens): `current_quantity ≥ getSafeLineLower(...)`, else `TTSwapError(56)`.

This is what stops the classic "dump a worthless long-tail token, drain the USDT shelf" attack: sell pressure that would push a shelf past its healthy band simply reverts until real demand (or divestment) frees up room.

## Tunable dimensions (per token, not per pair)

| Knob | Field | Effect |
|:--|:--|:--|
| **M — liquidity amplification** | `getPower` / `getLimitPower` | Virtual quantity deepens the pool; large M flattens the curve around equilibrium (StableSwap-like) |
| **safeLine bounds** | `getSafeLineUpper/Lower` | Trading band for $Q$; breach → revert 55/56 |
| **Fees** | buy / sell / invest / disinvest | Basis-point precision, configured independently per good |

## State write-back after a swap

`buyGood` chains `good1change = g1.buyGoodInput(amount0)` → `good2change = g2.buyGoodOutput(good1change.amount1())`, then writes back:

| Side | `currentState.amount0` (actual in-pool) | `currentState.amount1` (current quantity) | `investState` |
|:--|:--|:--|:--|
| Token A (input) | +`sellFee` | +`swapParam` (net input + fee) | unchanged |
| Token B (output) | +`buyFee` | −`outputGross` | unchanged |

`investState` ($V$, $S$) only changes on invest / divest / welfare injection — **swaps move quantity, never recorded value**, which is exactly what makes the zero-IL principal return possible on the LP side.

## Run-block replay guard

Each state-changing path refreshes the good's **run-block slot** (`block.number % 4095`, bits 196–185 of `goodConfig`). Writing the same good twice in the same block slot reverts `TTSwapError(46)`:

| Entry | Good whose slot is updated | Integration note |
|:--|:--|:--|
| `investGood` | the invested good | no repeated invest on one good per block |
| `buyGood` | **output good only** | second buy into the same output token in one block fails |
| `payGood` | **output good**, written before the AMM math | same restriction as above |

Aggregators and test harnesses should roll `block.number` between consecutive operations, or arrange `multicall` batches to avoid hitting the same good's slot twice.

## Worked example

Initial state — Token A: $V=40000$, $Q=20000$ (price 2.0); Token B: $V=20000$, $Q=40000$ (price 0.5); fee 0.01% each side. User sends 2,500 Token A:

1. `sellFee = getSellFee(2500)` → net $\Delta a = 2500 - \text{sellFee}$;
2. Step 1 slices accumulate $\Delta V$ from $\Delta V_i = \tfrac{2 V \Delta q_i}{2 Q + \Delta q_i}$;
3. Step 2 slices accumulate output from $\Delta q_i = \tfrac{2 Q \Delta V_i}{2 V + \Delta V_i}$ → gross ≈ 8,420 B;
4. `buyFee` comes off the gross; the user receives net output;
5. New prices: A ≈ $40000/22500 ≈ 1.78$ (down), B ≈ $20000/31580 ≈ 0.63$ (up) — both shelves repriced by pure quantity movement.
