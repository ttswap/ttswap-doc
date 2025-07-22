import { defineThemeConfig } from "vuepress-theme-plume";
import { enNavbar, zhNavbar } from "./navbar";
import { enNotes, zhNotes } from "./notes";

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
        logo: "logo.png",

        appearance: true, // 配置 深色模式

        social: [{ icon: "github", link: "https://github.com/ttswap" }, {
                icon: "twitter", link: "https://github.com/ttswap"
        }, {
                icon: "discord", link: "https://discord.gg/XygqnmQgX3"
        }, {
                icon: { svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Email</title><path d="M24 4.5v15c0 .85-.65 1.5-1.5 1.5H1.5C.65 21 0 20.35 0 19.5v-15c0-.85.65-1.5 1.5-1.5h21c.85 0 1.5.65 1.5 1.5zM12 12L1.5 6v1.5L12 13.5l10.5-6V6L12 12z"/></svg>' }, link: "mailto:bussiness@ttswap.io"
        }, {
                icon: {
                        svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Telegram</title><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>'
                },
                link: 'https://t.me/ttswapfinance'
        },
        ],

        navbarSocialInclude: ["github", "twitter", "discord"], // 允许显示在导航栏的 social 社交链接
        aside: true, // 页内侧边栏， 默认显示在右侧
        outline: [2, 4], // 页内大纲， 默认显示 h2, h4

        /**
         * 文章版权信息
         * @see https://theme-plume.vuejs.press/guide/features/copyright/
         */
        copyright: {
                license: {
                        name: "BUSL",
                        url: "https://ttswap.io",
                },
                creation: "original", // 创作方式
        },

        // prevPage: true,   // 是否启用上一页链接
        // nextPage: true,   // 是否启用下一页链接
        // createTime: true, // 是否显示文章创建时间

        /* 站点页脚 */
        footer: {
                message: "Power by TTSWAP",
                copyright: "",
        },
        /* 过渡动画 @see https://theme-plume.vuejs.press/config/basic/#transition */
        // transition: {
        //   page: true,        // 启用 页面间跳转过渡动画
        //   postList: true,    // 启用 博客文章列表过渡动画
        //   appearance: 'fade',  // 启用 深色模式切换过渡动画, 或配置过渡动画类型
        // },

        locales: {
                "/": {
                        /**
                         * @see https://theme-plume.vuejs.press/config/basic/#profile
                         */
                        profile: {
                                avatar: "logo.png",
                                name: "TTSWAP",
                                description: "Trade &amp; Invest crypto freely",
                                circle: true,
                                location: 'everywhere',
                                organization: 'ttswap community',
                        },

                        navbar: enNavbar,
                        notes: enNotes,

                        /**
                         * 公告板
                         * @see https://theme-plume.vuejs.press/guide/features/bulletin/
                         */
                        // bulletin: {
                        //   layout: 'top-right',
                        //   contentType: 'markdown',
                        //   title: '',
                        //   content: '',
                        // },

                        blog: {
                        postList: true, // 是否启用文章列表页
                        tags: true, // 是否启用标签页
                        // archives: true, // 是否启用归档页
                        // categories: true, // 是否启用分类页
                        postCover: 'right', // 文章封面位置
                        pagination: 15, // 每页显示文章数量
                        include: ['*/blog/*.md','blog/*.md','*/document/community/*.md','document_en/community/*.md'],
                        title: {
                            '/': 'Articles',
                            '/zh/': '文章'
                        }
                        },
                },
                "/zh/": {
                        /**
                         * @see https://theme-plume.vuejs.press/config/basic/#profile
                         */
                        profile: {
                                avatar: "logo.png",
                                name: "TTSWAP",
                                description: "Trade &amp; Invest crypto freely",
                                circle: true,
                                location: 'everywhere',
                                organization: 'ttswap community',
                        },

                        navbar: zhNavbar,
                        notes: zhNotes,

                        /**
                         * 公告板
                         * @see https://theme-plume.vuejs.press/guide/features/bulletin/
                         */
                        // bulletin: {
                        //   layout: 'top-right',
                        //   contentType: 'markdown',
                        //   title: '',
                        //   content: '',
                        // },
                },
        },
});
