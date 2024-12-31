import type { Config as ThemeConfig } from '@vue/theme'
const i18n: ThemeConfig['i18n'] = {
  search: '搜索',
  menu: '菜单',
  toc: '本页目录',
  returnToTop: '返回顶部',
  appearance: '外观',
  previous: '前一篇',
  next: '下一篇',
  pageNotFound: '页面未找到',
  deadLink: {
    before: '你打开了一个不存在的链接：',
    after: '。'
  },
  deadLinkReport: {
    before: '不介意的话请提交到',
    link: '这里',
    after: '，我们会跟进修复。'
  },
  footerLicense: {
    before: '',
    after: ''
  },
  ariaAnnouncer: {
    before: '',
    after: '已经加载完毕'
  },
  ariaDarkMode: '切换深色模式',
  ariaSkipToContent: '直接跳到内容',
  ariaToC: '当前页面的目录',
  ariaMainNav: '主导航',
  ariaMobileNav: '移动版导航',
  ariaSidebarNav: '侧边栏导航'
}

export const localeLinks: ThemeConfig['localeLinks'] = [
  {
    link: 'https://vuejs.org',
    text: 'English',
    repo: 'https://github.com/vuejs/docs'
  },
  {
    link: 'https://ja.vuejs.org',
    text: '日本語',
    repo: 'https://github.com/vuejs-translations/docs-ja'
  },
  {
    link: 'https://ua.vuejs.org',
    text: 'Українська',
    repo: 'https://github.com/vuejs-translations/docs-uk'
  },
  {
    link: 'https://fr.vuejs.org',
    text: 'Français',
    repo: 'https://github.com/vuejs-translations/docs-fr'
  },
  {
    link: 'https://ko.vuejs.org',
    text: '한국어',
    repo: 'https://github.com/vuejs-translations/docs-ko'
  },
  {
    link: 'https://pt.vuejs.org',
    text: 'Português',
    repo: 'https://github.com/vuejs-translations/docs-pt'
  },
  {
    link: 'https://bn.vuejs.org',
    text: 'বাংলা',
    repo: 'https://github.com/vuejs-translations/docs-bn'
  },
  {
    link: 'https://it.vuejs.org',
    text: 'Italiano',
    repo: 'https://github.com/vuejs-translations/docs-it'
  },
  {
    link: 'https://fa.vuejs.org',
    text: 'فارسی',
    repo: 'https://github.com/vuejs-translations/docs-fa'
  },
  {
    link: 'https://ru.vuejs.org',
    text: 'Русский',
    repo: 'https://github.com/translation-gang/docs-ru'
  },
  {
    link: 'https://cs.vuejs.org',
    text: 'Čeština',
    repo: 'https://github.com/vuejs-translations/docs-cs'
  },
  {
    link: 'https://zh-hk.vuejs.org',
    text: '繁體中文',
    repo: 'https://github.com/vuejs-translations/docs-zh-hk'
  },
  {
    link: '/translations/',
    text: '帮助我们翻译！',
    isTranslationsDesc: true
  }
]

export default {
  i18n,
  localeLinks
}
