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
      tagline: 新一代去中心代交易所
      text: 无中转 低滑点 没有无常损失 按角色分佣 低GAS
      actions:
        -
          text: 去交易
          theme: brand
          link: https://app.ttswap.io
  -
    type: features
    features:
      -
        title: 所有代币共享流动性，交易更自由
        icon: 💧
        details: 你不再需要一个个建立币对，也不用担心"池子太小流动性不够"。TTSWAP 让所有币对中的同一个代币共用一个超级池子，交易更快、更顺畅。
      -
        title:  没有无常损失，LP更安心
        icon: 🌐
        details: 在其他平台，当你提供流动性时容易因为价格波动而亏钱，这叫"无常损失"。TTSWAP 的机制可以有效避免这个问题，你的投入不会减少。
      -
        title:  降低超50%的交易滑点，使用强化和集中投资
        icon: 🌱
        details: 协议中通过强化流动性让一份投资提供多倍流动性，和取消币对，让分布在各币对的流动集中在一个池子中，提升整体流动性，最终降低超70%交易滑点。
      -
        title: Gas费节省 50%-90%
        icon: ⛽️
        details: 智能合约结构精简，计算逻辑优化，让你每一笔交易都比在传统平台省钱——Gas 省得看得见。
      -
        title: 支持NativeETH — 无须打包，直接省超20000gwei费用
        icon: 🔁
        details: 交易支持NativeETH，无须打包，直接更方便，同时省超20000gwei费用。
      -
        title: 手续费自动按角色分红
        icon: 📊
        details: 你是用户、推荐者、门户、流动性提供者、代币运营者？都能获得一定比例的手续费分润，人人可参与。
      -
        title:  每笔投资都可能挖矿（TTS）
        icon: 💰
        details: 当你投入代币，系统会按你投入的价值自动计算并开始「二次挖矿」，赚取额外 TTS 奖励。
      -
        title:  防MEV攻击，保障交易安全
        icon: 🪖
        details: 用户可启用防MEV攻击，保证用户的交易安全。
      -
        title: 社区驱动，用户主导未来
        icon: 👥
        details: TTSWAP 不属于某个公司，它属于社区。项目发展方向和奖励机制，由社区共识推动决定。

  -
    type: custom
---

## 恒定价值交易协议介绍

$$
交易前(V_a+V_b+....+V_z)=交易后(V_a+V_b+....+V_z)
$$

### 🔹 步骤 1： 定义介绍

设：

* $V_a$：代币 A 当前的总价值（单位：例如 USD）
* $Q_a$：代币 A 当前的总数量
* $V_b$、$Q_b$：代币 B 的总价值和数量
* $\Delta a$：用户欲投入的 A 数量
* $\Delta V$：本次交易所转移的价值（从 A 转移给 B）
* $\Delta b$：根据价值转移，从池中换出的 B 数量

---

### 🔹 步骤 2：计算Δa 所代表的价值ΔV 

$$
\Delta V = \frac{V_a}{Q_a + \Delta a} \cdot \Delta a
$$

---

### 🔹 步骤 3：根据价值 ΔV，计算可兑换的 B 数量

$$
\Delta b = \frac{Q_b}{V_b + \Delta V} \cdot \Delta V
$$

---

### 🔹 步骤 4：交易后更新代币A和B的价值与数量

|    | Token A          | Token B          |
| -- | ---------------- | ---------------- |
| 价值 | $V_a - \Delta V$ | $V_b + \Delta V$ |
| 数量 | $Q_a + \Delta a$ | $Q_b - \Delta b$ |

---

### 🔹 步骤 5：交易后形成新的兑换比例

* 交易完成后，新的边际价值：

$$
P_a^{\text{new}} = \frac{V_a - \Delta V}{Q_a + \Delta a}
\quad , \quad
P_b^{\text{new}} = \frac{V_b + \Delta V}{Q_b - \Delta b}
$$

* 新的兑换比例：

$$
R_{a \to b} = \frac{P_a^{\text{new}}}{P_b^{\text{new}}}
$$

这说明：**本模型是动态根据资金价值变化，实时调整价格的 AMM 曲线**。

## 联系方式

Twitter:[@ttswapfinance](https://x.com/ttswapfinance)  
Telegram:[@ttswapfinance](https://t.me/ttswapfinance)  
Email:[bussiness@ttswap.io](mailto:bussiness@ttswap.io)  
Discord:[ttswap](https://discord.gg/XygqnmQgX3)  
Github:[ttswap](http://github.com/ttswap)  
Website:[ttswap.io](https://ttswap.io)


欢迎各界人士加入我们社区