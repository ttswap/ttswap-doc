import { type Props as NavbarItemConfig } from '@theme/NavbarItem';

// English navbar items structure
export const englishNavbarItems: NavbarItemConfig[] = [
  { to: '/', label: 'Home', position: 'left' },
  {
    label: 'Activity', position: 'left', items: [
      { to: '/docs/articles/publicsell', label: 'Public Sell', },
      { to: '/docs/articles/tokenairdrop', label: 'Token Airdrop', },
    ],
  },
  {
    label: 'Knowledge', position: 'left', items: [
      { to: '/docs/knowledge/userdoc', label: 'User Doc', },
      { to: '/docs/knowledge/tokeneconomic', label: 'Token Economic', },
      { to: '/docs/knowledge/whitepaper', label: 'WhitePaper', },
    ],
  },
  {
    label: 'Join DAO', position: 'left', items: [
      { to: '/docs/community/introduce', label: 'Allocate Commission By Role', },
      { to: '/docs/community/recommander', label: 'Be Referral', },
      { to: '/docs/community/tokenoperator', label: 'Be Token Operator', },
      { to: '/docs/community/gate', label: 'Be Service Provider', },
      { to: '/docs/community/builder', label: 'Be Builder', },
      { to: '/docs/community/liquidityprovider', label: 'Be Liquidityprovider', },
      { to: '/docs/community/investor', label: 'Be Investor', },
    ],
  },
  // Right side items
  {
    href: 'https://discord.gg/xxxx',
    position: 'right',
    className: 'header-discord-link',
    'aria-label': 'Discord',
  },
  {
    href: 'https://t.me/xxxx',
    position: 'right',
    className: 'header-telegram-link',
    'aria-label': 'Telegram',
  },
  {
    href: 'https://twitter.com/xxxx',
    position: 'right',
    className: 'header-twitter-link',
    'aria-label': 'Twitter',
  },
  {
    href: 'https://github.com/xxxx',
    position: 'right',
    className: 'header-github-link',
    'aria-label': 'GitHub',
  },
  {
    type: 'localeDropdown',
    position: 'right',
    "dropdownItemsBefore": [],
    "dropdownItemsAfter": [],
    items: [],
  },
  {
    href: 'https://app.ttswap.io',
    label: 'Launch App',
    position: 'right',
    className: 'navbar-wallet-button',
  },
];
// Chinese navbar items structure (example of a completely different structure)
export const chineseNavbarItems: NavbarItemConfig[] = [
  { to: '/zh/', label: '首页', position: 'left' },
  {
    label: '活动',
    position: 'left',
    items: [
      { to: '/zh/docs/articles/publicsell', label: '公开发售' },
      { to: '/zh/docs/articles/tokenairdrop', label: '代币空投' },
    ],
  },
  {
    label: '知识',
    position: 'left',
    items: [
      { to: '/zh/docs/knowledge/userdoc/userdoc', label: '用户文档' },
      { to: '/zh/docs/knowledge/tokeneconomic', label: '代币经济' },
      { to: '/zh/docs/knowledge/whitepaper/whitepaper', label: '白皮书' },
    ],
  },
  {
    label: '加入DAO',
    position: 'left',
    items: [
      { to: '/zh/docs/community/introduce', label: '按角色分配佣金' },
      { to: '/zh/docs/community/recommander', label: '成为推荐人' },
      { to: '/zh/docs/community/tokenoperator', label: '成为代币操作员' },
      { to: '/zh/docs/community/gate', label: '成为服务提供商' },
      { to: '/zh/docs/community/builder', label: '成为建设者' },
      { to: '/zh/docs/community/liquidityprovider', label: '成为流动性提供者' },
      { to: '/zh/docs/community/investor', label: '成为投资者' },
    ],
  },
  // Right side items for Chinese version
  {
    href: 'https://discord.gg/xxxx',
    position: 'right',
    className: 'header-discord-link',
    'aria-label': 'Discord',
  },
  {
    href: 'https://t.me/xxxx',
    position: 'right',
    className: 'header-telegram-link',
    'aria-label': 'Telegram',
  },
  {
    href: 'https://twitter.com/xxxx',
    position: 'right',
    className: 'header-twitter-link',
    'aria-label': 'Twitter',
  },
  {
    href: 'https://github.com/xxxx',
    position: 'right',
    className: 'header-github-link',
    'aria-label': 'GitHub',
  },
  {
    type: 'localeDropdown',
    position: 'right',
    "dropdownItemsBefore": [],
    "dropdownItemsAfter": [],
    items: [],
  },
  {
    href: 'https://app.ttswap.io',
    label: '启动应用',
    position: 'right',
    className: 'navbar-wallet-button',
  },
];