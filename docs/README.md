---
pageLayout: 'home'
title: Home
config:
  -
    type: hero
    # banner: https://api.pengzhanbo.cn/wallpaper/bing
    # background: tint-plate
    bannerMask:
      light: 0.1
      dark: 0.3
    hero:
      name: TTSWAP
      tagline: New Generation Dex
      text: Directly trade,  Lower slippage,  No impermanent loss, Commission allocation by role, Lower gas
      actions:
        -
          text: Trade Crypto
          link: https://app.ttswap.io
          theme: brand  
  -
    type: features
    features:
      -
        title: Shared Liquidity Across All Tokens, Freer Trading
        icon: 💧
        details: No need to create individual trading pairs or worry about “low liquidity.” TTSWAP enables all pairs to share a unified super pool for the same token, resulting in faster and smoother trades.
      -
        title: No Impermanent Loss — LPs Can Rest Easy
        icon: 🛡️
        details: On other platforms, providing liquidity often means risking losses due to price fluctuations — known as impermanent loss. TTSWAP’s mechanism effectively avoids this, so your assets stay safe.
     -
        title:  Reduce trading slippage by over 50% through enhanced and concentrated investment
        icon: 🌱
        details: The protocol reduces trading slippage by over 70% through enhanced liquidity that allows one investment to provide multiple times the liquidity, and by canceling token pairs to concentrate liquidity distributed across various pairs into a single pool, thereby improving overall liquidity.
      -
        title: Save 50%–90% on Gas Fees
        icon: ⛽
        details: Thanks to streamlined smart contract design and optimized logic, every transaction on TTSWAP saves you real money on gas — significantly more efficient than traditional platforms.
      -
        title: Native ETH Support — No Wrapping Needed
        icon: 🔁
        details: Trade directly with ETH — no need to wrap it into WETH first. It’s faster and more convenient & save 20000 gwei.
      -
        title: Fee Sharing Based on Roles 
        icon: 📊
        details: Whether you’re a user, referral, gate, LP, or token operator — you get a share of the trading fees. Everyone benefits and can participate.
      -
        title: Every Investment Can Trigger TTS Mining
        icon: 💰
        details: When you provide tokens, the system automatically calculates your contribution’s value and initiates secondary mining — earning you extra TTS rewards.
      -
        title:  Anti-MEV attack protection, ensuring trading security
        icon: 🪖
        details: Users can enable anti-MEV attack protection to ensure their trading security.
      -
        title: Community-Driven, User-Governed Future
        icon: 👥
        details: TTSWAP doesn’t belong to any single company — it belongs to the community. Its direction and reward mechanisms are guided by community consensus.
  
  -
    type: custom
---

## Constant Value Trading Protocol Introduction

$$
\text{Before trading }(V_a+V_b+....+V_z)=\text{After trading }(V_a+V_b+....+V_z)
$$

### �� Step 1: Definition Introduction

Let:

* $V_a$: Current total value of token A (unit: e.g., USD)
* $Q_a$: Current total quantity of token A
* $V_b$, $Q_b$: Total value and quantity of token B
* $\Delta a$: Amount of A that the user wants to invest
* $\Delta V$: Value transferred in this trade (from A to B)
* $\Delta b$: Amount of B exchanged from the pool based on value transfer

---

### 🔹 Step 2: Calculate the value ΔV represented by Δa

$$
\Delta V = \frac{V_a}{Q_a + \Delta a} \cdot \Delta a
$$

---

### 🔹 Step 3: Calculate the exchangeable amount of B based on value ΔV

$$
\Delta b = \frac{Q_b}{V_b + \Delta V} \cdot \Delta V
$$

---

### 🔹 Step 4: Update the value and quantity of tokens A and B after trading

|    | Token A          | Token B          |
| -- | ---------------- | ---------------- |
| Value | $V_a - \Delta V$ | $V_b + \Delta V$ |
| Quantity | $Q_a + \Delta a$ | $Q_b - \Delta b$ |

---

### 🔹 Step 5: Form new exchange ratio after trading

* After trading completion, new marginal values:

$$
P_a^{\text{new}} = \frac{V_a - \Delta V}{Q_a + \Delta a}
\quad , \quad
P_b^{\text{new}} = \frac{V_b + \Delta V}{Q_b - \Delta b}
$$

* New exchange ratio:

$$
R_{a \to b} = \frac{P_a^{\text{new}}}{P_b^{\text{new}}}
$$
```


## Contracts
Twitter:[@ttswapfinance](https://x.com/ttswapFinance)  
Telegram:[@ttswapfinance](https://t.me/ttswapfinance)  
Email:[bussiness@ttswap.io](mailto:bussiness@ttswap.io)  
Discord:[ttswap](https://discord.gg/XygqnmQgX3)  
Website:[ttswap.io](http://www.ttswap.io)  
Github:[ttswap](http://github.com/ttswap)

Welcome talents from all regions to join the community.