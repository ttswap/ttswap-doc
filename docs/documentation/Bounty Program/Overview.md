---
lang: en-US
title: Bug Bounty Overview · Hunt TTSWAP, Earn On-Chain
description: TTSWAP Bug Bounty — live funds inside the protocol, three reward tracks, responsible disclosure. Start with Phase 1 on Ethereum.
keywords: [TTSWAP, bug bounty, Web3 security, smart contract, whitehat, Immunefi-style, on-chain bounty, TTS airdrop]
image: /img/og-social-card.png
displayed_sidebar: guideSidebar
sidebar_position: 1
sidebar_class_name: hide-from-sidebar
createTime: 2026/08/10
---

# Bug Bounty Program

**Break it before mainnet does.** TTSWAP invites whitehats and security researchers to stress-test our Constant Value AMM — with **real capital sitting inside the protocol contracts**, not parked on a third-party bounty platform.

We designed this program the Web3 way: **prove impact on-chain**, then **document it cleanly**, then **get paid in cash-equivalent today and TTS after launch**.

## Why hunt with us

| Signal | What it means for you |
|:--|:--|
| **Funds live in TTSWAP** | Bounty capital is injected into the **protocol itself** as an attackable range — transparent on the explorer, not locked in a platform escrow |
| **Three clear tracks** | Instant range settlement (A) → launch airdrop for successful attackers who disclose (B) → severity airdrops for other valid reports (C) |
| **Staged bankroll** | Up to **~4,000 USDT** (or equivalent majors) across four tranches — so the range stays live over the public-test window |
| **Self-hosted + GitHub** | Submit via GitHub Issues; no mandatory deposit into HackerOne / Immunefi wallets |

> Full rules, severity table, Safe Harbor, and Issue template: **[Phase 1 Bug Bounty](./Phase%201)**.

## How rewards work (at a glance)

```text
Successful on-chain exploit
        │
        ├─ Track A ──► Settlement from the live protocol range (≤ balance then)
        │
        └─ + compliant GitHub Issue (PoC + wallet)
                 └─ Track B ──► ~1,000 USDT in TTS after TGE / airdrop rules

Valid report without Track A success
        └─ Track C ──► TTS airdrop by severity (Critical → Low)
```

**Track B is only for confirmed Track A winners** who also file a complete disclosure. Attack-only without an Issue → Track A only. Issue-only without an on-chain win → Track C.

## What is in scope

Public-test deployments of:

- `TTSwap_Market` / `TTSwap_Market_Proxy`
- `TTSwap_Token` / `TTSwap_Token_Proxy`
- Other contracts listed in the active Phase announcement

Source of truth: [ttswap-core `releases/v2.0.0`](https://github.com/ttswap/ttswap-core/tree/releases/v2.0.0) (or the tag named in the Phase post).

## Who should join

- Smart-contract auditors and competitive whitehats who want **economic proof**, not only PDF theory  
- Researchers comfortable with EVM PoCs, fork tests, and explorer evidence  
- Builders who can write a crisp Issue: impact, steps, hashes, wallet  

## Program phases

| Phase | Status | Focus |
|:--|:--|:--|
| **[Phase 1](./Phase%201)** | Active planning / public test | Ethereum deployment, ~4,000 USDT staged range, Tracks A / B / C |
| Phase 2+ | TBA | Expanded scope after Phase 1 learnings |

## Start here

1. Read **[Phase 1 Bug Bounty](./Phase%201)** end to end  
2. Review contracts on the explorer and the tagged source  
3. Hunt only the **authorized** addresses in that Phase  
4. If you land Track A: open a GitHub Issue with PoC + wallet to unlock Track B  

Website: [ttswap.io](https://ttswap.io) · Docs: [docs.ttswap.io](https://docs.ttswap.io) · Core: [github.com/ttswap/ttswap-core](https://github.com/ttswap/ttswap-core)

Ship the exploit. File the proof. Get rewarded — **inside the protocol, on the record.**
