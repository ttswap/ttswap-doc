---
lang: zh-CN
title: 恒定价值 AMM 概览
description: 什么是恒定价值 AMM —— 两步价值中枢交易模型，用 O(1) 代数公式统一覆盖 CPMM、加权池与 StableSwap，无指数、无迭代。
keywords: [TTSWAP, CV-AMM, 恒定价值 AMM, 价值中枢, Singleton, 一币一池]
displayed_sidebar: guideSidebar
sidebar_position: 1
sidebar_class_name: hide-from-sidebar
createTime: 2026/08/06
---

# 恒定价值 AMM（CV-AMM）

**恒定价值 AMM（Constant Value AMM, CV-AMM）** 是 TTSWAP 的交易引擎。它不为每个交易对单独建一条不变式曲线，而是把每种代币单独相对同一套内部价值单位定价，再把每一次兑换都经由价值中枢用两步代数完成：

$$
\text{输入数量 } \Delta a
\;\xrightarrow{\ \text{第 1 步}\ }
\text{转移价值 } \Delta V
\;\xrightarrow{\ \text{第 2 步}\ }
\text{输出数量 } \Delta b
$$

两步都是闭式分数——**无指数运算、无 Newton–Raphson 迭代、无外部调用**——因此无论池子数量或交易规模如何，单笔 swap 都是 $O(1)$ 算术。

## 商场收银台直觉

传统 DEX 像一条商业街：每个可交易对都要开一家「只卖两件商品的专营小店」（Uniswap 的 `pair`）。有 $N$ 种代币，理论上需要 $\tfrac{N(N-1)}{2}$ 家小店，各自独立备货——100 种代币就是 4,950 家店，库存被切得稀碎。

TTSWAP 是街尽头那间大型商场：

- 每种代币只有 **一条货架**（一个池——*一币一池*）；
- 全场共用 **一个中央收银台**（Singleton 合约 `TTSwap_Market`）；
- 任意两条货架之间可以 **直接换货**，一次调用搞定。

你把 $\Delta a$ 件商品 A 递给收银台，它先按 A 货架状态把这批货估成内部购买力 $\Delta V$（第 1 步），再用这笔购买力去 B 货架换出 $\Delta b$ 件商品 B（第 2 步）。

## 每种代币的状态：V 与 Q

每条货架（商品）维护内核要读的两个实时量：

| 符号 | 含义 | 代码字段 |
|:--|:--|:--|
| $V$ | 该代币在协议内的总市场价值（投资价值） | `investState.amount1()` |
| $Q$ | 池内当前数量（含累积手续费 + 虚拟量） | `currentState.amount1()` |

代币相对价值单位的瞬时价格就是 $P = V / Q$。因为所有代币都对着同一价值单位报价，任意 A、B 的交叉汇率就是 $P_A / P_B$——不需要任何交易对专属状态。

## 为什么叫「恒定价值」

一笔 swap **在货架之间转移价值，但从不创造或销毁价值**：从 A 货架拿走的价值 $\Delta V$，恰好等于存入 B 货架的价值。协议守恒的不变式是 *价值*，而不是每个交易对上的乘积 $x \cdot y = k$——因此叫 *恒定价值 AMM*。

由此推出三条性质（证明见 [模型性质](./Properties)）：

1. **价值守恒** —— 无手续费时，跨 hop 的输入价值 ≡ 输出价值。
2. **滑点有界** —— 边际汇率随交易量单调变差；巨鲸无法按现价扫空货架。
3. **行为统一** —— $V_A = V_B$ 时内核 *严格* 退化为 Uniswap 的 CPMM；$V_A \neq V_B$ 时复现 Balancer 加权池现价；流动性放大（`power`）加上 `safeLine` 边界则逼近 Curve StableSwap 的平坦区——全部来自同一对公式（见 [等价性](./Equivalence)）。

## 这给协议带来什么

| 能力 | CV-AMM 设计的直接后果 |
|:--|:--|
| **任意两币 O(1) 直达** | 经价值中枢两步走完；无需路由、寻路或中间 pair 跳转 |
| **流动性自然聚合** | 一条货架上的 LP 深度服务 *所有* 对手币，而不是某一个 pair |
| **单币补货** | 按币种单独估价，故 `investGood` 按池价收一种代币即可——不必准备配对资金 |
| **即挂即交易** | 新货架（`initGood`）一上架，立刻可与所有已有货架兑换 |
| **低 Gas** | 完整跨币 swap 约 93k gas，对比 Uniswap V3 ~127k / V4 130–180k——无 router、无 callback、无迭代求解 |

## 本章导航

- [核心公式](./Core%20Formulas) —— 两步内核、分片迭代、`safeLine` 与代码映射
- [等价性](./Equivalence) —— 与 CPMM / Balancer / Curve 的数学等价
- [模型性质](./Properties) —— 价值守恒、路径无关与闭环证明

> 来源：技术白皮书 §3 与附录 A–D、I–K；商场叙事版 §3。合约基线：`TTSwap_Market` v2.0.0。
