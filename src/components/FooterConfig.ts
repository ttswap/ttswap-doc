import { Mail } from "lucide-react";
import Github from "/img/github.svg";
import X from "/img/x.svg";
import Telegram from "/img/tg.svg";
import Discord from "/img/discord.svg";

export const socialLinks = [
    { name: "X", icon: X, href: "https://x.com/ttswapfinance" },
    { name: "Telegram", icon: Telegram, href: "https://t.me/ttswapfinance" },
    { name: "Github", icon: Github, href: "http://github.com/ttswap-doc" },
    { name: "Discord", icon: Discord, href: "https://discord.gg/XygqnmQgX3" },
    { name: "Mail", icon: Mail, href: "mailto:bussiness@ttswap.io" },
];

export const navigationZh = {
    product: [
        { name: "交易", href: "https://app.ttswap.io/hoodiTestnet/ttswap/trade?zh" },
        // { name: "质押", href: "#stake" },
        // { name: "治理", href: "#governance" },
        // { name: "分析", href: "#analytics" },
    ],
    resources: [
        { href: '/zh/docs/knowledge/userdoc/userdoc', name: '用户文档' },
        { href: '/zh/docs/knowledge/tokeneconomic', name: '代币经济' },
        { href: '/zh/docs/knowledge/whitepaper/whitepaper', name: '白皮书' },
    ],
    community: [
        { href: '/zh/docs/community/recommander', name: '成为推荐人' },
        { href: '/zh/docs/community/tokenoperator', name: '成为代币操作员' },
        { href: '/zh/docs/community/gate', name: '成为服务提供商' },
        { href: '/zh/docs/community/builder', name: '成为建设者' },
        { href: '/zh/docs/community/liquidityprovider', name: '成为流动性提供者' },
        { href: '/zh/docs/community/investor', name: '成为投资者' },
    ],
    company: [
        { name: "关于", href: "#about" },
        { name: "招聘", href: "#careers" },
        { name: "隐私", href: "#privacy" },
        { name: "条款", href: "#terms" },
    ],
};

export const navigation = {
    product: [
        { name: "Trading", href: "https://app.ttswap.io/hoodiTestnet/ttswap/trade?en" },
        // { name: "Staking", href: "#stake" },
        // { name: "Governance", href: "#governance" },
        // { name: "Analytics", href: "#analytics" },
    ],
    resources: [
        { name: "User Doc", href: "/docs/knowledge/userdoc" },
        { name: "Token Economic", href: "/docs/knowledge/tokeneconomic" },
        { name: "WhitePaper", href: "/docs/knowledge/whitepaper" },
    ],
    community: [
        { href: "/docs/community/recommander", name: "Be Referral", },
        { href: "/docs/community/tokenoperator", name: "Be Token Operator", },
        { href: "/docs/community/gate", name: "Be Service Provider", },
        { href: "/docs/community/builder", name: "Be Builder", },
        { href: "/docs/community/liquidityprovider", name: "Be Liquidityprovider", },
        { href: "/docs/community/investor", name: "Be Investor", },
    ],
    company: [
        { name: "About", href: "#about" },
        { name: "Careers", href: "#careers" },
        { name: "Privacy", href: "#privacy" },
        { name: "Terms", href: "#terms" },
    ],
};