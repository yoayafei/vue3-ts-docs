export default defineConfig({
    themeConfig:{
        sidebar:{
            "/guide/":[
                collapsible: true,
                items:[
                    { text: "介绍", link: "/guide/" },
                    { text: "安装", link: "/guide/installation" },
                    { text: "基本概念", link: "/guide/concepts" },
                ],
            ],
        }
    }
})