---
lang: en-US
title: Phase 1 Bug Bounty · ~4,000 USDT On-Protocol Range
description: TTSWAP Phase 1 smart-contract bug bounty — staged ~4,000 USDT in-protocol range (Track A), ~1,000 USDT TTS airdrop for successful attackers who disclose (Track B), severity airdrops for others (Track C).
keywords: [TTSWAP, Phase 1, bug bounty, 4000 USDT, Track A, Track B, Track C, Ethereum, whitehat, responsible disclosure]
image: /img/og-social-card.png
displayed_sidebar: guideSidebar
sidebar_position: 2
createTime: 2026/08/10
---

# Phase 1 Bug Bounty

**Phase 1** is TTSWAP’s first public-test bounty season: real capital inside the protocol, three reward tracks, and GitHub-based responsible disclosure — **without parking bounty funds on a third-party platform**.

> Placeholders such as contract addresses and calendar dates are marked `{{...}}` until the official launch notice. Always trust the latest announcement if it conflicts with this page.

## 1. Goals

1. Surface fund-draining and critical logic bugs under a **capped, staged** exposure (~**4,000 USDT** planned across four tranches).  
2. Enforce **prove on-chain first (Track A), then archive a clean disclosure (Track B)**.  
3. Reward successful attackers with **immediate range economics** plus **post-launch TTS**; reward other valid reporters via **severity airdrops (Track C)**.

Inspired by Immunefi-style disclosure norms; executed as a **self-hosted in-protocol range + GitHub Issues** program.

## 2. Environment

| Item | Detail |
|:--|:--|
| Network | Ethereum mainnet (public-test deployment as announced) |
| Explorer | [etherscan.io](https://etherscan.io) |
| App | [ttswap.io](https://ttswap.io) |
| Source | [ttswap-core `releases/v2.0.0`](https://github.com/ttswap/ttswap-core/tree/releases/v2.0.0) |
| Docs | [docs.ttswap.io](https://docs.ttswap.io) |
| Window | `{{START_DATE}}` → `{{END_DATE}}` |

### 2.1 In-scope contracts

| Component | Address | Notes |
|:--|:--|:--|
| `TTSwap_Market_Proxy` | `{{MARKET_PROXY}}` | Swaps, invest/divest, fee paths |
| `TTSwap_Market` | `{{MARKET}}` | Logic implementation |
| `TTSwap_Token_Proxy` | `{{TOKEN_PROXY}}` | TTS mint / unlock / mining |
| `TTSwap_Token` | `{{TOKEN}}` | Logic implementation |

Bytecode and source follow the announced tag/commit. After proxy upgrades, the **currently effective** implementation in the Phase notice wins.

### 2.2 Range capital (~4,000 USDT staged)

After deployment, TTSWAP seeds an **attackable range** inside the protocol (USDT and/or **equivalent majors** such as ETH / WBTC — pricing per the Phase notice). Purpose: show whether unauthorized extract / mint / diversion is possible.

#### Funding schedule

| Tranche | Timing | Amount | Cumulative plan |
|:--|:--|:--|:--|
| 1 | After public-test deploy | **1,000 USDT** (or eq.) | 1,000 |
| 2 | ~**+3 weeks** after tranche 1 | **1,000 USDT** (or eq.) | 2,000 |
| 3 | ~**+3 weeks** after tranche 2 | **1,000 USDT** (or eq.) | 3,000 |
| 4 | ~**+3 weeks** after tranche 3 | **1,000 USDT** (or eq.) | **4,000** |

- **Planned total range principal: 4,000 USDT (or equivalent).** Live balance = injected − Track A settlements / extractions.  
- If the range is drained or a hotfix requires redeploy, remaining planned budget (or announced top-ups) may **redeploy** and continue later tranches (dates may slip).  
- **Track A** pays only from the **on-chain remainder at confirmation time** — future undrawn tranches are **not** pre-claimable.  
- Injection txs and balances should be verifiable on Etherscan; official updates will list injected / remaining / next tranche ETA.

## 3. Three reward tracks

**One line:** Track B is an **add-on for Track A winners**. Attack without disclosure → Track A only. Valid Issue without Track A → Track C.

```text
Track A success ──► range settlement (≤ live remainder; plan total 4,000U)
       │
       └─ + compliant GitHub Issue (PoC + wallet) ──► Track B: ~1,000U in TTS post-launch

No Track A, but valid Issue ──► Track C: TTS by severity
```

### 3.1 Track A — On-chain success (immediate / range settlement)

| Requirement | Reward |
|:--|:--|
| Verifiable unauthorized extract, mint, or irrecoverable range loss on the Phase deployment | Quantified loss / extracted amount, **capped by remaining range** |
| Tx hashes + path; cooperate with confirmation | Paid after official confirmation; self-dealing / spam invalid |

Track A draws from the staged **~4,000 USDT** range. If the pool is empty pending the next tranche, Track A pauses until top-up / redeploy. To unlock Track B, complete §3.2 and §6.

### 3.2 Track B — Disclosure bonus for Track A winners (~1,000 USDT in TTS)

**Prerequisite:** official **Track A** confirmation. Then:

1. Open an Issue on the program repo (template below) with Track A tx hashes;  
2. Full repro / PoC so staff or third parties can independently reproduce;  
3. EVM wallet for the airdrop (prefer the attack address or a mapped address we accept);  
4. No public weaponization before authorized disclosure (§7).

**Payout:** after mainnet launch and TGE / airdrop rules, **~1,000 USDT worth of TTS** at the announced conversion rate.

| Situation | Track B |
|:--|:--|
| Track A only, no / incomplete Issue | **No** Track B |
| Track A + compliant Issue | **Yes** ~1,000U in TTS |
| Issue only, no Track A | Track **C**, not B |
| Multiple Track A winners, same root cause | First confirmed + disclosed attacker gets Track B |

Tracks A and B **stack**: range settlement now, TTS airdrop after launch.

### 3.3 Track C — Other valid reports (severity TTS airdrops)

For reporters **without** Track A (or not claiming A), plus verified helpers. Suggested USDT-equivalent TTS bands (**final notice wins**):

| Severity | Suggested eq. (USDT) | Typical impact |
|:--|:--|:--|
| **Critical** | 500 | Drain drain, infinite mint, permanent freeze of user funds |
| **High** | 200 | Large theft, privilege grab with fund risk, severe economic abuse |
| **Medium** | 100 | Limited loss, exploitable accounting, fund-path DoS |
| **Low** | 30 | Harsh preconditions, local bugs, limited config abuse |
| **Informational** | 0–token optional | Best practices, docs, no direct exploit |

- No double-dip: Track B winners do **not** also take Track C Critical for the **same** root cause.  
- Helpers (independent repro, verification) may get a smaller same-tier or −1 tier award if credited on the Issue.

## 4. Severity & validity

| Severity | Definition |
|:--|:--|
| **Critical** | Direct theft / irreversible major fund loss; infinite TTS mint; forged proof shares; etc. |
| **High** | Major fund loss or critical privilege (admin-key leaks out of scope unless the contract itself leaks keys) |
| **Medium** | Moderate economic impact or fund-path functional break |
| **Low** | Limited impact, hard preconditions |
| **Informational** | No direct exploit path |

**First valid report** (by official confirmation) wins for a root cause. Known issues, theory-only without PoC, and non–Track A claims for Track B are rejected or downgraded. Disputes: TTSWAP security contact; optional third-party review.

## 5. Scope

### In scope

- Bytecode and matching open source for §2.1 contracts  
- Economic attacks on range funds (price manipulation, liquidity drain, fee-path theft) with a public-test demo  
- X402 / Relayer / signature paths if enabled and listed in the Phase notice  

### Out of scope

- Unauthorized mainnet or non-listed deployments  
- Phishing, fake sites, social engineering  
- Infra DDoS / RPC abuse  
- Generic dependency CVEs with no path in our code  
- Leaked test keys / example secrets  
- Pure UI / copy / gas nits without security impact  
- “Exploits” that only work with already-stolen admin keys (unless the contract exports them)

## 6. Submission (GitHub Issue)

Title pattern:

```text
[BugBounty][<Severity>] <one-line impact>
```

### Template

```markdown
## Summary
<!-- 1–2 sentences -->

## Severity
Critical / High / Medium / Low / Informational

## Assets & contracts
- Network:
- Addresses:
- Functions:

## Reproduction steps
1.
2.
3.

## PoC
<!-- gist / branch / tx list -->

## On-chain evidence (required for Track A / B)
- Tx hash(es):
- Amount extracted / lost:
- Track A confirmed by staff? (yes / pending)

## Fix suggestion (optional)

## Reward wallet (EVM)
0x...

## Contact (optional)
Telegram / Email:
```

### Target SLA

| Stage | Target |
|:--|:--|
| Ack received | 2 business days |
| Initial severity | 5 business days |
| Valid / reject note | 10 business days (complex cases may extend with notice) |

## 7. Rules & Safe Harbor (draft)

1. Only authorized Phase addresses.  
2. No infra wrecking or attacks on unrelated users.  
3. Prefer GitHub (or named private channel); no full public exploit dump before authorization.  
4. Track A demos should prove exploitability; keep an audit trail; return funds to a named address if the Phase notice requires it before settlement.  
5. No extortion; no impersonating TTSWAP.

**Safe Harbor (draft):** for good-faith research **within** this program and applicable law, TTSWAP will **not** pursue civil claims solely for that research. Out of harbor: unauthorized targets, third-party harm outside the range, extortion, illegal acts.

> Not legal advice; the lawyer-reviewed public notice controls.

## 8. Timeline & contacts

| Item | Detail |
|:--|:--|
| Phase start | `{{START_DATE}}` |
| Tranches 1–4 | §2.2; ~every **3 weeks**; dates may slip |
| Phase end / range close | `{{END_DATE}}` (Track A stops; open Issues still reviewed) |
| Track B / C airdrop | After mainnet — see TGE / airdrop notice |
| Issues | [ttswap/ttswap-core](https://github.com/ttswap/ttswap-core) (or the branch named in the notice) |
| Social | Discord `{{DISCORD}}` · Telegram `{{TELEGRAM}}` · X `{{TWITTER}}` |
| Security email | `{{SECURITY_EMAIL}}` |

## 9. FAQ

**Do I need an Issue after draining the range?**  
Yes — if you want **Track B**. Track B is **only** for Track A winners with a complete Issue.

**Issue only, no exploit — can I get the 1,000U Track B?**  
No. Use **Track C**.

**Can I claim against the full 4,000U before later tranches land?**  
No. Track A uses **live on-chain remainder** at confirmation.

**Range empty mid-phase?**  
Track A pauses until the next ~1,000U tranche or redeploy. Confirmed Track A + Issue still qualifies for Track B at launch. Planned ceiling remains **4,000U**.

**Anonymous OK?**  
Yes, but you must provide a reachable reward address.

---

**Back to:** [Bug Bounty Overview](./Overview)

**TTSWAP Team** · Phase 1 · Public-test bounty  
Replace all `{{...}}` and complete legal/security review before treating this as the final public notice.
