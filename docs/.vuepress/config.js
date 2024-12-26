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
