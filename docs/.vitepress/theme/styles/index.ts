import DefaultTheme from "vitepress/theme";

import "vitepress-theme-demoblock/dist/styles/index.css";

import "./styles/var.css";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {},
};
