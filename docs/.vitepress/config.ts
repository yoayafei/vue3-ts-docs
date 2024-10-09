import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Vue 3 + TypeScript 学习文档",
  description: "详细学习 Vue 3 和 TypeScript 的指南",
  themeConfig: {
    siteTitle: "前端学习",
    logo: "assets/logo1.png",
    nav: [
      { text: "首页", link: "/" },
      { text: "指南", link: "/guide/" },
      { text: "组件", link: "/vue-ts-demo/" },
      { text: "API参考", link: "/api/" },
      { text: "常见问题", link: "/faq/" },
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/gl86831146/vue3-ts-docs/tree/main/docs",
      },
    ],
    sidebar: {
      "/guide/": [
        {
          text: "开始",
          collapsible: true,
          items: [
            { text: "介绍", link: "/guide/" },
            { text: "安装", link: "/guide/installation" },
            { text: "基本概念", link: "/guide/concepts" },
          ],
        },
      ],
      "/vue-ts-demo/": [
        {
          text: "常用组件",
          items: [
            { text: "介绍", link: "/vue-ts-demo/" },
            { text: "按钮 Button", link: "/vue-ts-demo/button" },
            { text: "表单 Form", link: "/vue-ts-demo/form" },
            { text: "表格 Table", link: "/vue-ts-demo/table" },
          ],
        },
      ],
    },
    footer: {
      message: "用心学习 Vue 3 和 TypeScript!",
      copyright: "Copyright 2024 gao",
    },
  },
});
