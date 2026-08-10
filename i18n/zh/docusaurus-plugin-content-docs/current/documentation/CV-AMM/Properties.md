---
lang: zh-CN
title: 模型性质
description: CV-AMM 的形式化性质 —— 价值守恒、往返与三角闭环、拆单误差上界，以及价值中枢为何不存在无风险套利环。
keywords: [TTSWAP, CV-AMM, 路径无关, 价值守恒, 闭环, 套利, 滑点, AMM 性质]
image: /img/og-social-card.png
displayed_sidebar: guideSidebar
sidebar_position: 4
createTime: 2026/08/06
---

# 模型性质

CV-AMM 内核满足一组代数闭环性质（以下均为无手续费陈述；手续费只会把结果推向有利于协议的一侧）。完整推导见技术白皮书附录 I–K。

## 1. 价值守恒

任意 hop $A \to B$ 上，从 A 货架拿走的价值等于存入 B 货架的价值：

$$
\Delta V_{\text{out of } A} \;\equiv\; \Delta V_{\text{into } B}
$$

Swap 在货架之间移动的是 **数量**；各货架的记账价值 $V$ 只在投资、撤资或福利注入时改变。价值中枢因此像一座严格的清算所——交易本身既不铸造也不销毁价值。

## 2. 往返闭环

把 $\Delta a$ 的 A 换成 $\Delta b$ 的 B，再把这笔 $\Delta b$ 原路换回：

1. 正向：$\Delta V = \dfrac{2 V_A \Delta a}{2 Q_A + \Delta a}$，$\;\Delta b = \dfrac{2 Q_B \Delta V}{2 V_B + \Delta V}$；
2. 对交易后的 B 货架做反向输入：

$$
\Delta V' = \frac{2 V_B \Delta b}{2(Q_B - \Delta b) + \Delta b} = \frac{2 V_B \Delta b}{2 Q_B - \Delta b}
$$

3. 把正向 $\Delta b$ 公式变形，得到同一表达式，故 $\Delta V' = \Delta V$；
4. 反向输出为 $\Delta a_{\text{out}} = \dfrac{2 (Q_A + \Delta a) \Delta V}{2 V_A + \Delta V}$，代入 $\Delta V (2 Q_A + \Delta a) = 2 V_A \Delta a$ 得：

$$
\Delta a_{\text{out}} = \Delta a
$$

你拿回的恰好是送进去的量，两条货架都回到初始状态。**不存在无手续费的往返套利。**

## 3. 三角闭环

对三跳回路 $A \to B \to C \to A$，$\Delta b$ 公式的可逆性迫使每一跳承载相同的转移价值：

$$
\Delta V_{AB} = \Delta V_{BC} = \Delta V_{CA} = \Delta V
$$

货架 B 先入后出 $\Delta b$；货架 C 先出后入 $\Delta c$；最后一腿用与往返证明相同的代换回到 $\Delta a_{\text{final}} = \Delta a$。三条货架全部还原——**中枢内部不存在无风险三角套利**。（相对 *外部* 场所的套利仍然存在，也正是它让中枢价格与市场对齐。）

## 4. 拆单误差

把一笔订单拆成两笔是否更赚？比较一次性成交 $\Delta a$ 与两次成交 $x_1 + x_2 = \Delta a$：

$$
\text{Diff} = \frac{C_1 (x_1 + x_2)(V_A^2 - V_B^2)\, x_1 x_2}
{(C_2 + N(x_1+x_2))(C_2 + N x_1)(C_2 + 2 V_B x_1 + N x_2)}
$$

其中 $C_1 = 2 Q_B V_A$，$C_2 = 2 V_B Q_A$，$N = V_A + V_B$。

| 情形 | 结果 |
|:--|:--|
| $V_A = V_B$ | Diff = 0 —— 严格路径无关（CPMM 体制） |
| $V_A > V_B$ | Diff > 0 —— 一次性略优 |
| $V_A < V_B$ | Diff < 0 —— 拆单略优 |

相对量级上界为：

$$
\frac{\text{Diff}}{\Delta b} \;\approx\; \left(\frac{\Delta a}{Q_A}\right)^{2} \cdot \frac{V_A^2 - V_B^2}{V_B^2}
$$

在典型交易规模 $\Delta a / Q_A \approx 10^{-3}$ 时，相对误差约 $10^{-6}$——工程上可忽略，实践中也被手续费淹没。

## 5. 滑点有界

两个内核映射对其输入都严格凹：边际价格随规模单调变差，输出渐近逼近（但永不触及）目标货架的 $2Q_B$。再叠加 1% 深度分片迭代与 `safeLine` 边界，单笔订单既无法按现价扫空货架，也无法把库存推出健康区间。

## 6. 常数成本执行

上述所有性质都靠 **闭式有理算术** 实现：无 `exp`/`ln`、无 Newton–Raphson 不变式求解、无跨合约路由。这正是完整跨币 swap 稳定在约 93k gas/笔、且成本与市场上架代币数量无关的原因。

## 这些性质为什么重要

- **对交易者**：报价输出精确可复现；没有可被利用的隐藏路径依赖，中枢内部环路带来的 MEV 面结构上为零。
- **对 LP**：swap 从不触碰 `investState`，记账本金不受价格波动影响——这是零无常损失撤货保证的代数前提。
- **对集成方**：任意两币定价只需两条货架的 $(V, Q)$ 对；router / quoter / solver 用同一公式即可覆盖所有路径，无需池拓扑图。
