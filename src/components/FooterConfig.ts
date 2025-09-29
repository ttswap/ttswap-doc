import { Mail } from "lucide-react";
import Github from "/img/github.svg";
import X from "/img/x.svg";
import Telegram from "/img/tg.svg";
import Discord from "/img/discord.svg";
import { translate } from '@docusaurus/Translate';

export const socialLinks = [
    { 
      name: translate({
        id: 'footer.social.x',
        message: 'X',
        description: 'X (Twitter) social link name'
      }), 
      icon: X, 
      href: "https://x.com/ttswapfinance" 
    },
    { 
      name: translate({
        id: 'footer.social.telegram',
        message: 'Telegram',
        description: 'Telegram social link name'
      }), 
      icon: Telegram, 
      href: "https://t.me/ttswapfinance" 
    },
    { 
      name: translate({
        id: 'footer.social.github',
        message: 'Github',
        description: 'GitHub social link name'
      }), 
      icon: Github, 
      href: "http://github.com/ttswap-doc" 
    },
    { 
      name: translate({
        id: 'footer.social.discord',
        message: 'Discord',
        description: 'Discord social link name'
      }), 
      icon: Discord, 
      href: "https://discord.gg/XygqnmQgX3" 
    },
    { 
      name: translate({
        id: 'footer.social.mail',
        message: 'Mail',
        description: 'Email contact link name'
      }), 
      icon: Mail, 
      href: "mailto:bussiness@ttswap.io" 
    },
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
        { 
          name: translate({
            id: 'footer.navigation.product.trading',
            message: 'Trading',
            description: 'Trading link in product navigation'
          }), 
          href: "https://app.ttswap.io/hoodiTestnet/ttswap/trade?en" 
        },
        // { name: "Staking", href: "#stake" },
        // { name: "Governance", href: "#governance" },
        // { name: "Analytics", href: "#analytics" },
    ],
    resources: [
        { 
          name: translate({
            id: 'footer.navigation.resources.userDoc',
            message: 'User Doc',
            description: 'User documentation link in resources navigation'
          }), 
          href: "/docs/knowledge/userdoc" 
        },
        { 
          name: translate({
            id: 'footer.navigation.resources.tokenEconomic',
            message: 'Token Economic',
            description: 'Token economics link in resources navigation'
          }), 
          href: "/docs/knowledge/tokeneconomic" 
        },
        { 
          name: translate({
            id: 'footer.navigation.resources.whitePaper',
            message: 'WhitePaper',
            description: 'Whitepaper link in resources navigation'
          }), 
          href: "/docs/knowledge/whitepaper" 
        },
    ],
    community: [
        { 
          href: "/docs/community/recommander", 
          name: translate({
            id: 'footer.navigation.community.beReferral',
            message: 'Be Referral',
            description: 'Be referral link in community navigation'
          }) 
        },
        { 
          href: "/docs/community/tokenoperator", 
          name: translate({
            id: 'footer.navigation.community.beTokenOperator',
            message: 'Be Token Operator',
            description: 'Be token operator link in community navigation'
          }) 
        },
        { 
          href: "/docs/community/gate", 
          name: translate({
            id: 'footer.navigation.community.beServiceProvider',
            message: 'Be Service Provider',
            description: 'Be service provider link in community navigation'
          }) 
        },
        { 
          href: "/docs/community/builder", 
          name: translate({
            id: 'footer.navigation.community.beBuilder',
            message: 'Be Builder',
            description: 'Be builder link in community navigation'
          }) 
        },
        { 
          href: "/docs/community/liquidityprovider", 
          name: translate({
            id: 'footer.navigation.community.beLiquidityProvider',
            message: 'Be Liquidityprovider',
            description: 'Be liquidity provider link in community navigation'
          }) 
        },
        { 
          href: "/docs/community/investor", 
          name: translate({
            id: 'footer.navigation.community.beInvestor',
            message: 'Be Investor',
            description: 'Be investor link in community navigation'
          }) 
        },
    ],
    company: [
        { 
          name: translate({
            id: 'footer.navigation.company.about',
            message: 'About',
            description: 'About link in company navigation'
          }), 
          href: "#about" 
        },
        { 
          name: translate({
            id: 'footer.navigation.company.careers',
            message: 'Careers',
            description: 'Careers link in company navigation'
          }), 
          href: "#careers" 
        },
        { 
          name: translate({
            id: 'footer.navigation.company.privacy',
            message: 'Privacy',
            description: 'Privacy policy link in company navigation'
          }), 
          href: "#privacy" 
        },
        { 
          name: translate({
            id: 'footer.navigation.company.terms',
            message: 'Terms',
            description: 'Terms of service link in company navigation'
          }), 
          href: "#terms" 
        },
    ],
};