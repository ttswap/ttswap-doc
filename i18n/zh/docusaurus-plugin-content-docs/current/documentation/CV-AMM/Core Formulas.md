---
lang: zh-CN
title: 核心公式
description: CV-AMM 两步内核 —— 输入侧价值映射、输出侧数量映射、1% 分片迭代、safeLine 边界，以及 L_Good 中的精确代码映射。
keywords: [TTSWAP, CV-AMM, buyGoodInput, buyGoodOutput, safeLine, 分片迭代, 调和平均]
displayed_sidebar: guideSidebar
sidebar_position: 2
createTime: 2026/08/06
---

# 核心公式

用 $\Delta a$ 件 Token A 兑换 Token B，经由价值中枢分两步完成。大额交易按池深度约 **1% 分片迭代**，每片套用同一代数核，循环结束时用 `safeLine` 校验库存。对偶系数在 `L_Good.buyGoodInput / buyGoodOutput`（以及 `payGoodInput / payGoodOutput` 逆路径）中 **硬编码为常量 2**。

## 第 1 步 —— 输入侧：数量 → 转移价值

每片（`buyGoodInput`）：

$$
\Delta V_i \;=\; \frac{2 \cdot V \cdot \Delta q_i}{2 \cdot Q \;+\; \Delta q_i}
$$

## 第 2 步 —— 输出侧：转移价值 → 数量

每片（`buyGoodOutput`）：

$$
\Delta q_i \;=\; \frac{2 \cdot Q \cdot \Delta V_i}{2 \cdot V \;+\; \Delta V_i}
$$

总 $\Delta V$（以及总输出 $\Delta b$）是各片之和。每步片长上限为 `current_quantity / 100`（输入侧）或 `current_value / 100`（输出侧）：

```solidity
// 输入侧：卖 Token A，累积转移价值 ΔV
value = (2 * _swapParam * current_value)
      / (2 * current_quantity + _swapParam);
swapTemp.get += value;
swapTemp.current_quantity += _swapParam;

// 输出侧：买 Token B，累积输出数量 Δq
quantity = (2 * _swapParam * current_quantity)
         / (2 * current_value + _swapParam);
swapTemp.get += quantity;
swapTemp.current_quantity -= quantity;
```

## 公式从哪来

货架 A 的现价在交易前是 $P = V_A / Q_A$，交易后是 $V_A / (Q_A + \Delta a)$。内核用这两种执行密度的 **调和平均** 给整笔成交定价，化简即闭式：

$$
\Delta V = \frac{2 \cdot V_A \cdot \Delta a}{2 \cdot Q_A + \Delta a}
$$

设计哲学：兑换是 **交易者愿意承担的数量失衡** 与 **协议强制的价值守恒** 之间的博弈。分片迭代加上 `safeLine`，在保持单步 $O(1)$ 算术的同时，抑制单笔大单对池深度的瞬时冲击。

## 参数与代码一一对应

| 符号 | 含义 | 代码字段 |
|:--|:--|:--|
| $V$ | 该代币在协议中的总价值（投资价值） | `investState.amount1()` |
| $Q$ | 池内当前数量（含累积手续费 + 虚拟量） | `currentState.amount1()` |
| $\Delta a$ | 扣除 `sellFee` 后的净输入 | `buyGoodInput` 的 `_swapParam` |
| $\Delta V$ | 本笔交易的转移价值（分片累加） | `buyGoodInput` 返回值 `amount1` |
| $\Delta b$ | Token B 毛输出（扣 `buyFee` 前） | `buyGoodOutput` 返回值 `amount1` |
| $2$ | 固定对偶系数 | 硬编码于 `L_Good` |

手续费夹在内核两侧：`sellFee` 在第 1 步 *之前* 从输入扣除；`buyFee` 在第 2 步 *之后* 从毛输出扣除（`buyGoodOutput` 末尾的 `getBuyFee`）。两侧费用都累积进池，单调抬升 LP 净值。

## safeLine：库存安全带

分片循环结束后，内核按基准库存 `I + virtual` 派生的上下界校验结果库存：

- **输入侧**（池吸收代币）：`current_quantity ≤ getSafeLineUpper(...)`，否则 `TTSwapError(55)`；
- **输出侧**（池释放代币）：`current_quantity ≥ getSafeLineLower(...)`，否则 `TTSwapError(56)`。

这正是挡住经典「狂砸垃圾长尾币、掏空 USDT 货架」攻击的机制：会把货架推过健康区间的卖压直接 revert，直到真实买盘（或撤货）腾出空间。

## 可调维度（按代币，而非按交易对）

| 旋钮 | 字段 | 作用 |
|:--|:--|:--|
| **M —— 流动性放大** | `getPower` / `getLimitPower` | 虚拟量加深池深度；大 M 把平衡区曲线压平（StableSwap 风格） |
| **safeLine 边界** | `getSafeLineUpper/Lower` | $Q$ 的可交易带；越界 → revert 55/56 |
| **费率** | buy / sell / invest / disinvest | 万分之一精度，每币独立配置 |

## 交易后的状态写回

`buyGood` 串联 `good1change = g1.buyGoodInput(amount0)` → `good2change = g2.buyGoodOutput(good1change.amount1())`，然后写回：

| 侧 | `currentState.amount0`（实际入池） | `currentState.amount1`（当前数量） | `investState` |
|:--|:--|:--|:--|
| Token A（输入） | +`sellFee` | +`swapParam`（净输入 + 费） | 不变 |
| Token B（输出） | +`buyFee` | −`outputGross` | 不变 |

`investState`（$V$、$S$）只在投资 / 撤资 / 福利注入时改动——**swap 只动数量，不动记账价值**，这正是 LP 侧零无常损失本金返还的代数前提。

## Run-block 防重放

每条改状态的路径都会刷新该商品的 **run-block 槽**（`block.number % 4095`，`goodConfig` 的 bits 196–185）。同一区块槽内对同一商品二次写入会 revert `TTSwapError(46)`：

| 入口 | 更新槽位的商品 | 集成注意 |
|:--|:--|:--|
| `investGood` | 所投商品 | 同区块不可对同一商品连续 invest |
| `buyGood` | **仅输出侧商品** | 同区块对同一输出币二次 buy 会失败 |
| `payGood` | **输出侧商品**，在 AMM 计算前写入 | 同上限制 |

聚合器与测试 harness 应在连续操作间递增 `block.number`，或把 `multicall` 编排成避开同一商品的重复槽。

## 完整算例

初始状态 —— Token A：$V=40000$，$Q=20000$（价 2.0）；Token B：$V=20000$，$Q=40000$（价 0.5）；两侧费率各 0.01%。用户送入 2,500 Token A：

1. `sellFee = getSellFee(2500)` → 净 $\Delta a = 2500 - \text{sellFee}$；
2. 第 1 步分片累加 $\Delta V$，每片 $\Delta V_i = \tfrac{2 V \Delta q_i}{2 Q + \Delta q_i}$；
3. 第 2 步分片累加输出，每片 $\Delta q_i = \tfrac{2 Q \Delta V_i}{2 V + \Delta V_i}$ → 毛输出 ≈ 8,420 B；
4. 从毛输出扣 `buyFee`，用户实收净输出；
5. 新价格：A ≈ $40000/22500 ≈ 1.78$（下跌），B ≈ $20000/31580 ≈ 0.63$（上涨）——两条货架都仅因数量变动而重新定价。
