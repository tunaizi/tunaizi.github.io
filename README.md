# blog.github.io

This is tunaizi's personal technology blog
---
home: true
heroImage: /assets/logo.png
actionText: action
actionLink: /category/
features:
  - title: HTML
    details: 查看全部HTML相关的内容
  - title: CSS
    details: 查看CSS相关的内容
  - title: JavaScript
    details: 查看JavaScript相关的内容
footer: MIT Licensed | Copyright © 2020 Feng Left-Handed
---
module.exports = {
  theme: "",
  title: "tunaiz blog",
  description: "This is tunaizi's personal technology blog",
  base: "/",
  head: [["link", { rel: "icon", href: "/assets/logo.png" }]],
  markdown: {
    lineNumbers: false,
  },
  themeConfig: {
    smoothScroll: true,
    nav: require("./config/nav"),
    sidebar: require("./config/sidebar"),
    lastUpdated: "Last Updated",
    repo: "https://github.com/tunaizi/blog.github.io",
    editLinks: false,
  },
};


//所有的表情 markdown-it-emoji lib/data/full.mjs
