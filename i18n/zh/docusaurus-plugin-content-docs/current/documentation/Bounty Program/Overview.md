---
lang: zh-CN
title: 漏洞赏金概览 · 猎杀 TTSWAP，奖励在链上
description: TTSWAP 漏洞赏金计划 — 资金在协议合约内、三轨奖励、负责任披露。从以太坊第一期开始。
keywords: [TTSWAP, 漏洞赏金, Bug Bounty, Web3 安全, 智能合约, 白帽, 链上靶场, TTS 空投]
image: /img/og-social-card.png
displayed_sidebar: guideSidebar
sidebar_position: 1
sidebar_class_name: hide-from-sidebar
createTime: 2026/08/10
---

# 漏洞赏金计划

**在主网上线前，先把它打穿。** TTSWAP 邀请白帽与安全研究者压测恒定价值 AMM —— **真实资金放在协议合约里**，而不是锁在第三方赏金平台托管账户。

我们按 Web3 习惯设计：**先在链上证明影响**，再**把披露写清楚**，然后**当期拿靶场结算、上线后再拿 TTS**。

## 为什么来猎杀

| 信号 | 对你意味着什么 |
|:--|:--|
| **资金在 TTSWAP 协议内** | 赏金本金注入**协议本身**成为可攻击靶场 — 浏览器可核验，不进平台 escrow |
| **三轨清晰** | 即时靶场结算（A）→ 攻击成功且披露者上线空投（B）→ 其它有效报告按等级空投（C） |
| **分批注资** | 计划合计约 **4,000 USDT**（或等值主流币），四批注入，公测窗口内靶场可持续 |
| **自托管 + GitHub** | 用 GitHub Issue 提交；无需强制把奖金充进 HackerOne / Immunefi |

> 完整规则、等级表、Safe Harbor 与 Issue 模板见：**[第一期漏洞赏金](./Phase%201)**。

## 奖励怎么算（一眼看懂）

```text
链上攻击成功
        │
        ├─ 轨 A ──► 从当时协议靶场剩余结算（≤ 当时余额）
        │
        └─ + 合规 GitHub Issue（PoC + 钱包）
                 └─ 轨 B ──► TGE / 空投规则公布后，约 1,000 USDT 等值 TTS

未达成轨 A，但报告有效
        └─ 轨 C ──► 按严重级别发放 TTS 空投（Critical → Low）
```

**轨 B 仅奖励已获确认的轨 A 成功者**，且须完整披露。只攻击不开 Issue → 只有轨 A。只开 Issue 没打成 → 走轨 C。

## 范围概要

公测部署的：

- `TTSwap_Market` / `TTSwap_Market_Proxy`
- `TTSwap_Token` / `TTSwap_Token_Proxy`
- 当期一期公告中列出的其它合约

源码以 [ttswap-core `releases/v2.0.0`](https://github.com/ttswap/ttswap-core/tree/releases/v2.0.0)（或当期公告指定 tag）为准。

## 适合谁来

- 想要**经济证明**、不满足于纯理论 PDF 的合约审计与竞赛白帽  
- 熟悉 EVM PoC、fork 测试与浏览器取证的研究者  
- 能写清 Impact、步骤、交易哈希与钱包的披露者  

## 计划分期

| 期次 | 状态 | 重点 |
|:--|:--|:--|
| **[第一期](./Phase%201)** | 筹备 / 公测 | 以太坊部署、约 4,000 USDT 分批靶场、轨 A / B / C |
| 第二期及以后 | 待定 | 在第一期经验上扩大范围 |

## 从这里开始

1. 通读 **[第一期漏洞赏金](./Phase%201)**  
2. 在浏览器与指定 tag 核对合约  
3. **只打**该期授权地址  
4. 若打成轨 A：开 GitHub Issue（PoC + 钱包）解锁轨 B  

官网：[ttswap.io](https://ttswap.io) · 文档：[docs.ttswap.io](https://docs.ttswap.io) · 核心库：[github.com/ttswap/ttswap-core](https://github.com/ttswap/ttswap-core)

把洞打穿。把证据留下。拿奖励 —— **在协议里，有据可查。**
