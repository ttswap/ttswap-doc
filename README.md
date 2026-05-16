# TTSWAP Documentation

Official documentation site for [TTSWAP](https://ttswap.io) — a next-generation decentralized exchange built on EVM-compatible blockchains. This repository powers [docs.ttswap.io](https://docs.ttswap.io) using [Docusaurus](https://docusaurus.io/) with English and Chinese (`en` / `zh`) locales.

## About TTSWAP

**TTSWAP** (Token–Token Swap) is an Automated Market Maker (AMM) protocol that runs entirely on smart contracts—no centralized matching or custody. Its core innovation is a **Constant Value AMM**: trades preserve total market value while enabling price discovery through user-driven transfers. The model is algebraically equivalent to Uniswap-style CPMM when token weights are equal, and to Balancer-style weighted pools when they differ—without the gas cost of exponential math.

**Tagline:** *No intermediary · Low slippage · No impermanent loss · Role-based fees · Low gas*

### Key features

| Area | Highlights |
|------|------------|
| **Trading** | Direct token-to-token swaps; shared liquidity across pairs; liquidity amplification and concentrated depth (70%+ slippage reduction vs fragmented pools) |
| **LP protection** | Value-anchoring design to mitigate impermanent loss; withdraw principal plus earned fees |
| **Gas & UX** | Streamlined contract logic (50–90% gas savings); native ETH swap and invest without WETH wrapping |
| **Economics** | Six-role fee sharing (LPs, gateways, referrers, users, token operators, protocol); Proof of Investment with TTS liquidity mining |
| **Tokenomics** | TTS unlock tied to price milestones (double-to-unlock); community buyback and burn |
| **Payments** | Built-in [X402](https://docs.ttswap.io/docs/knowledge/whitepaper) support for signer/payer separation (PayFi) |

### Constant Value model (summary)

Value is conserved across each swap. For input \(\Delta a\) of Token A:

\[
\Delta V = \frac{2 V_A \Delta a}{2 Q_A + \Delta a}, \quad
\Delta b = \frac{2 Q_B \Delta V}{2 V_B + \Delta V}
\]

See the [technical whitepaper](https://docs.ttswap.io/docs/knowledge/whitepaper) and [home page formulas](https://docs.ttswap.io/) for full derivations and appendices.

## Repository layout

| Path | Description |
|------|-------------|
| `docs/` | English source docs (default locale) — whitepaper, token economics, community guides, articles |
| `i18n/zh/` | Simplified Chinese translations (`docusaurus-plugin-content-docs`, theme strings) |
| `i18n/en/` | English theme and plugin overrides |
| `src/` | React components, styles, and site customization |
| `static/` | Images, favicon, and other static assets |
| `docusaurus.config.ts` | Site URL, i18n, navbar, and preset configuration |

### Documentation sections

- **Knowledge** — [Whitepaper](docs/knowledge/whitepaper/whitepaper.md), [Token economics](docs/knowledge/tokeneconomic.md)
- **Community / Join DAO** — Role-based commission, ambassador, token operator, gateway, builder, liquidity provider, investor guides
- **Activity** — Public sale and related announcements

## Local development

**Requirements:** Node.js ≥ 18

```sh
# Install dependencies
npm i

# Start dev server (English default)
npm run start

# Build for production (English)
npm run build

# Build both English and Chinese
npm run build-all

# Serve production build locally
npm run serve
```

Chinese locale in dev: `npm run start -- --locale zh`

## Contributing

Documentation improvements and translations are welcome. See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

## Links

| | |
|---|---|
| **App** | [ttswap.io](https://ttswap.io) |
| **Docs** | [docs.ttswap.io](https://docs.ttswap.io) |
| **X (Twitter)** | [@ttswapfinance](https://x.com/ttswapfinance) |
| **Telegram** | [@ttswapfinance](https://t.me/ttswapfinance) |
| **Discord** | [TTSWAP](https://discord.gg/XygqnmQgX3) |
| **Email** | [bussiness@ttswap.io](mailto:bussiness@ttswap.io) |
| **GitHub** | [ttswap](https://github.com/ttswap) · [ttswap-doc](https://github.com/ttswap-doc) |

---

Copyright © TTSWAP. Documentation built with Docusaurus.
