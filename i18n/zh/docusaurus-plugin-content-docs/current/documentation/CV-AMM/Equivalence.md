---
lang: zh-CN
title: CV-AMM 与 Uniswap / Balancer / Curve 的等价性
description: 一对 CV-AMM 公式如何严格复现 Uniswap 的 CPMM、对齐 Balancer 加权池现价，并逼近 Curve StableSwap 的平坦区——全程无指数、无迭代。
keywords: [TTSWAP, CV-AMM, CPMM, Uniswap, Balancer, Curve, StableSwap, 等价性证明, AMM 对比]
image: /img/og-social-card.png
displayed_sidebar: guideSidebar
sidebar_position: 3
createTime: 2026/08/06
---

# 与主流 AMM 的等价性

一对公式覆盖三种做市体制。本文给出证明纲要；完整推导见技术白皮书附录 B–D。

$$
\Delta V = \frac{2 V_A \Delta a}{2 Q_A + \Delta a}, \qquad
\Delta b = \frac{2 Q_B \Delta V}{2 V_B + \Delta V}
$$

## 1. CPMM —— $V_A = V_B$ 时严格退化

令 $V_A = V_B = V$，把第 1 步代入第 2 步。分子分母同除以 $2V$ 后，复合式塌缩为：

$$
\Delta b = \frac{Q_B \cdot \Delta a}{Q_A + \Delta a}
$$

这 **恰好** 是 Uniswap V2 的标准输出公式 $\Delta y = \tfrac{y\,\Delta x}{x + \Delta x}$，亦即 $x \cdot y = k$。因此只要两条货架记账价值相等，TTSWAP 就提供与 CPMM pair 相同的深度与定价行为——却不需要任何 pair 合约。

## 2. Balancer 加权池 —— $V_A \neq V_B$ 时现价完全一致

Balancer 的加权不变式 $(Q_A)^{W_A}(Q_B)^{W_B} = k$ 给出现价：

$$
SP_{\text{Balancer}} = \frac{Q_A \cdot W_B}{Q_B \cdot W_A}
$$

对 CV-AMM 内核取 $\Delta a \to 0$ 的极限：

$$
dV = \frac{V_A}{Q_A}\,da, \qquad db = \frac{Q_B}{V_B}\,dV
\;\;\Longrightarrow\;\;
SP_{\text{TTSWAP}} = \frac{da}{db} = \frac{Q_A \cdot V_B}{Q_B \cdot V_A}
$$

映射 $V \leftrightarrow W$，两者现价 **完全一致**。有限交易量下，调和平均曲线在凸性、渐近线与滑点方向上与 Balancer 的幂曲线高度拟合——但 **无需任何指数运算**，因此无论「权重」如何，Gas 始终是 $O(1)$。

## 3. Curve StableSwap —— 用 M + safeLine 实现平坦区

Curve 用放大不变式把稳定币对滑点压到亚 bp 级：

$$
A n^n \sum x_i + D = A D n^n + \frac{D^{n+1}}{n^n \prod x_i}
$$

但求解 $D$ 需要链上 Newton–Raphson 迭代。TTSWAP 用两个正交的、按代币配置的旋钮达到同一行为画像：

- **平衡区平坦 —— M（流动性放大，`getPower`）**：虚拟量加深池深度。当 $V_A = V_B$、$Q_A = Q_B = Q$ 且 M 较大（虚拟量主导）时：

$$
\Delta V \approx \frac{V_A \Delta a}{Q_A}, \qquad
\Delta b \approx \frac{Q_B \Delta V}{V_B} = \Delta a
$$

  即近乎 1:1 成交——平衡区的恒定和行为。

- **偏离回归 —— `safeLine`**：交易把 $Q$ 推离基准库存 `I + virtual` 时，调和曲线自身的滑点非线性放大，触到边界带则直接 revert（`TTSwapError(55/56)`）。「偏离即提摩擦、到界即阻断」在功能上等价于 Curve 在余额分叉时从恒定和软切换到恒定乘积。

### 工程对照

| 维度 | Curve | TTSWAP |
|:--|:--|:--|
| 计算 | 迭代求 $D$ + 高次幂 | 加减乘除，$O(1)$ |
| Gas | 较高 | 稳态 swap 约 93k |
| 适用范围 | 稳定币对 | 任意代币；M、`safeLine`、费率按币配置 |
| 参数敏捷度 | $A$ 靠缓慢缓慢调整 | 品牌方 / 管理员按币配置 |
| 脱锚行为 | $A$ 固定，曲线向乘积漂移 | 自然滑点 + 硬边界 revert 把 $Q$ 拉回 |

## 小结

| 体制 | 条件 | CV-AMM 复现什么 |
|:--|:--|:--|
| CPMM（Uniswap V2） | $V_A = V_B$ | 严格的 $x \cdot y = k$ 输出公式 |
| 加权池（Balancer） | $V_A \neq V_B$ | $V \leftrightarrow W$ 下现价完全一致 |
| StableSwap（Curve） | 大 M + `safeLine` | 平衡区 1:1 成交 + 边界回归 |

实践含义：**上架一种代币不需要选择曲线类型**。池子的记账价值、放大倍数与安全带，把它定位在 CPMM–加权–稳定谱系的任意位置，而全部运行在同一套常量 2 代数之上。
