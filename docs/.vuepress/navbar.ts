import { defineNavbarConfig } from "vuepress-theme-plume";

export const enNavbar = defineNavbarConfig([
        { text: "Home", link: "/" },
        {
                text: "activity",
                items: [
                        {
                                text: "activity1",
                                link: "/activity/activity1.md",
                        },
                        { text: "activity2", link: "/activity/activity2.md" },
                        {
                                text: "activity3",
                                link: "/activity/activity3.md",
                        },
                ],
        },
        { text: "docs", link: "/user/" },
        { text: "whitepaper", link: "/whitepaper/" },
]);

export const zhNavbar = defineNavbarConfig([
        { text: "首页", link: "/zh/" },
        {
                text: "活动",
                items: [
                        {
                                text: "快东向前1",
                                link: "/zh/activity/activity1.md",
                        },
                        { text: "快东向2", link: "/zh/activity/activity2.md" },
                        { text: "快东向3", link: "/zh/activity/activity3.md" },
                ],
        },
        { text: "文档", link: "/zh/user/" },
        { text: "白皮书", link: "/zh/whitepaper/" },
]);
