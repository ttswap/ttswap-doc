import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'TTSwap',
  tagline: 'Trade & Invest crypto freely',
  favicon: 'img/logo.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  // Set the production url of your site here
  url: 'https://ttswap.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  // trailingSlash: false,
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ttswap', // Usually your GitHub org/user name.
  projectName: 'ttswap-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en','zh'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          path: 'docs',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'TTSwap',
      logo: {
        alt: 'TTSwap Logo',
        src: 'img/logo.png',  // 记得把 logo 放到 /static/img/tt_logo.png
      },
       items: [
        // 中间菜单
        {to: '/', label: 'Home', position: 'left'},
        {label: 'Activity', position: 'left',items:[
          {to: '/docs/articles/publicsell', label: 'Public Sell', },
          {to: '/docs/articles/tokenairdrop', label: 'Token Airdrop', },
        ],},
        {label: 'Knowledge', position: 'left',items:[
          {to: '/docs/knowledge/userdoc', label: 'User Doc', },
          {to: '/docs/knowledge/tokeneconomic', label: 'Token Economic', },
          {to: '/docs/knowledge/whitepaper', label: 'WhitePaper', },
        ],},
        {label: 'Join DAO', position: 'left',items:[
          {to: '/docs/community/introduce', label: 'Allocate Commission By Role', },
          {to: '/docs/community/recommander', label: 'Be Referral', },
          {to: '/docs/community/tokenoperator', label: 'Be Token Operator', },
          {to: '/docs/community/gate', label: 'Be Service Provider', },
          {to: '/docs/community/builder', label: 'Be Builder', },
          {to: '/docs/community/liquidityprovider', label: 'Be Liquidityprovider', },
          {to: '/docs/community/investor', label: 'Be Investor', },
        ],},

        // 右侧社交图标
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
          "dropdownItemsAfter": []
        },
        // 最右边 Connect Wallet 按钮
        {
          href: 'https://app.ttswap.io',
          label: 'Launch App',
          position: 'right',
          className: 'navbar-wallet-button',
        },
      ],
    },
    // footer: {
    //   style: 'dark',
    //   links: [
    //     {
    //       title: 'Docs',
    //       items: [
    //         {
    //           label: 'Tutorial',
    //           to: '/docs/whitepaper',
    //         },
    //       ],
    //     },
    //     {
    //       title: 'Community',
    //       items: [
    //         {
    //           label: 'Stack Overflow',
    //           href: 'https://stackoverflow.com/questions/tagged/docusaurus',
    //         },
    //         {
    //           label: 'Discord',
    //           href: 'https://discordapp.com/invite/docusaurus',
    //         },
    //         {
    //           label: 'X',
    //           href: 'https://x.com/docusaurus',
    //         },
    //       ],
    //     },
    //     {
    //       title: 'More',
    //       items: [
    //         {
    //           label: 'Blog',
    //           to: '/blog',
    //         },
    //         {
    //           label: 'GitHub',
    //           href: 'https://github.com/facebook/docusaurus',
    //         },
    //       ],
    //     },
    //   ],
    //   copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    // },
    // prism: {
    //   theme: prismThemes.github,
    //   darkTheme: prismThemes.dracula,
    // },
  } satisfies Preset.ThemeConfig,
};

export default config;
