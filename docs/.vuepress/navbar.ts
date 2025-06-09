import { defineNavbarConfig } from "vuepress-theme-plume";

export const enNavbar = defineNavbarConfig([
        { text: "🏛️Home", link: "/" },
        { text: "📒Blog", link: "/blog/" },
        {
                text: "🏆Activities",
                items: [
                        {
                                text: "💵Public Sell",
                                link: "/activity_en/publicSell.md",
                        },
                        { text: "🪂Token Airdrop", link: "/activity_en/tokenAirdrop.md" },
                ],
        },
        {
                text: "🏠Knowlege Base",
                items: [{
                        text: "🧐Normal Doc",
                        link: "/document_en/userDoc/README.md"
                }, {
                        text: "💰Token Economic",
                        link: "/document_en/token/Token.md"
                }, 
                { text: "📖Whitepaper",
                         link: "/document_en/whitepaper/whitepaper.md" }
                ]
        },{
                text: "🏘️Join DAO",
                items: [{
                        text: "Commission allocation by role",
                        link: "/document_en/community/introduce.md"
                }, {
                        text: "👥Be Refer",
                        link: "/document_en/community/recommander.md"
                }, {
                        text: "👤Be TokenKeeper",
                        link: "/document_en/community/tokenkeeper.md"
                }, {
                        text: "🔆Be Gate",
                        link: "/document_en/community/gate.md"
                }, {
                        text: "🧑‍💻Be Builder",
                        link: "/document_en/community/builder.md"
                }, {
                        text: "🤝Be Investor",
                        link: "/document_en/community/investor.md"
                },]
        },
]);

export const zhNavbar = defineNavbarConfig([
        { text: "🏛️首页", link: "/zh/" },

        { text: "📒最新文章", link: "/zh/blog/" },
        {
                text: "🏆活动",
                items: [
                        {
                                text: "💵项目公售",
                                link: "/zh/activity/publicSell_zh.md",
                        },
                        { text: "🪂代币空投", link: "/zh/activity/tokenAirdrop_zh.md" },
                ],
        },
        {
                text: "🏠知识中心",
                items: [{
                        text: "🧐用户通用文档",
                        link: "/zh/document/userDoc/README.md"
                }, {
                        text: "💰代币方案",
                        link: "/zh/document/token/Token.md"
                }, 
                { text: "📖技术白皮书",
                         link: "/zh/whitepaper/whitepaper.md" }
                ]
        },
        {
                text: "🏘️加入社区",
                items: [{
                        text: "按角色分佣介绍",
                        link: "/zh/document/community/introduce.md"
                }, {
                        text: "👥成为推荐者",
                        link: "/zh/document/community/recommander.md"
                }, {
                        text: "👤成为代币运营者",
                        link: "/zh/document/community/tokenkeeper.md"
                }, {
                        text: "🔆成为门户",
                        link: "/zh/document/community/gate.md"
                }, {
                        text: "🧑‍💻成为建设者",
                        link: "/zh/document/community/builder.md"
                }, {
                        text: "🤝成为投资方",
                        link: "/zh/document/community/investor.md"
                },]
        },

]);
