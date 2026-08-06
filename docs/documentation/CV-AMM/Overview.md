---
lang: en-US
title: CV-AMM Overview
description: What the Constant Value AMM is — a two-step value-hub trading model that unifies CPMM, weighted pools, and StableSwap behavior with O(1) algebra and no iteration.
keywords: [TTSWAP, CV-AMM, Constant Value AMM, value hub, Singleton, one-token-one-pool]
displayed_sidebar: guideSidebar
sidebar_position: 1
sidebar_class_name: hide-from-sidebar
createTime: 2026/08/06
---

# Constant Value AMM (CV-AMM)

The **Constant Value AMM (CV-AMM)** is TTSWAP's trading engine. Instead of pricing each token *pair* against an invariant curve, it prices each token *individually* against a shared internal unit of value — then routes every swap through that value hub in two algebraic steps:

$$
\text{quantity in } \Delta a
\;\xrightarrow{\ \text{step 1}\ }
\text{transferred value } \Delta V
\;\xrightarrow{\ \text{step 2}\ }
\text{quantity out } \Delta b
$$

Both steps are closed-form fractions — **no exponentiation, no Newton–Raphson iteration, no external calls** — so a swap costs $O(1)$ arithmetic regardless of pool count or trade size class.

## The supermarket checkout intuition

Traditional DEXs work like a shopping street: every tradable pair needs its own two-item specialty store (a Uniswap `pair`). With $N$ tokens you theoretically need $\tfrac{N(N-1)}{2}$ stores, each stocking both items independently — 100 tokens means 4,950 stores with fragmented inventory.

TTSWAP is the supermarket at the end of the street:

- every token gets exactly **one shelf** (one pool — *one-token-one-pool*),
- the whole market shares **one central checkout** (the Singleton `TTSwap_Market` contract),
- any shelf can be exchanged against any other shelf **directly**, in a single call.

When you hand the checkout $\Delta a$ units of token A, it first appraises them into internal purchasing power $\Delta V$ (step 1, against shelf A's state), then spends that purchasing power on shelf B (step 2) and hands you $\Delta b$ units of token B.

## Each token's state: V and Q

Every good (shelf) tracks two live quantities that the kernel reads:

| Symbol | Meaning | Code field |
|:--|:--|:--|
| $V$ | Total market value of the token inside the protocol (investment value) | `investState.amount1()` |
| $Q$ | Current quantity in the pool (incl. accumulated fees + virtual amount) | `currentState.amount1()` |

The instantaneous price of a token *in value units* is simply $P = V / Q$. Because every token is quoted against the same value unit, the cross rate between any A and B is $P_A / P_B$ — no pair-specific state needed.

## Why "constant value"

A swap **transfers value between shelves but never creates or destroys it**: the value you remove from shelf A ($\Delta V$) is exactly the value you deposit on shelf B. The invariant that the protocol conserves is *value*, not a per-pair product $x \cdot y = k$ — hence *Constant Value AMM*.

Three properties follow (proofs in [Model Properties](./Properties)):

1. **Value conservation** — input value ≡ output value across the hop, fee-free.
2. **Bounded slippage** — the marginal rate worsens monotonically with size; a whale cannot sweep a shelf at the spot price.
3. **Unified behavior** — with $V_A = V_B$ the kernel degenerates *exactly* to Uniswap's CPMM; with $V_A \neq V_B$ it reproduces Balancer's weighted spot price; with liquidity amplification (`power`) plus `safeLine` bounds it approximates Curve's StableSwap flatness — all from one formula pair ([Equivalence](./Equivalence)).

## What this buys the protocol

| Capability | Consequence of the CV-AMM design |
|:--|:--|
| **Any-to-any in O(1)** | Two steps through the value hub; no routing, no path-finding, no intermediate pair hops |
| **Liquidity aggregation** | LP depth on a shelf serves *every* counterparty token, not one pair |
| **Single-sided LP** | Appraisal is per-token, so `investGood` accepts one token at pool price — no paired capital required |
| **Instant listing** | A new shelf (`initGood`) is immediately tradable against all existing shelves |
| **Low gas** | ~93k gas for a full cross-token swap tx vs ~127k (Uniswap V3) / 130–180k (V4) — no router, no callbacks, no iterative solver |

## In this section

- [Core Formulas](./Core%20Formulas) — the two-step kernel, slice iteration, `safeLine`, and code mapping
- [Equivalence](./Equivalence) — mathematical equivalence with CPMM / Balancer / Curve
- [Model Properties](./Properties) — value conservation, path independence, and closure proofs

> Sources: Technical Whitepaper §3 & Appendices A–D, I–K; Supermarket narrative §3. Contract baseline: `TTSwap_Market` v2.0.0.
