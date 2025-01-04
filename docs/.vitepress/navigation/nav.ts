import type { Config as ThemeConfig } from '../theme/src'

export const nav: ThemeConfig['nav'] = [
  // {
  // text: '文档',
  // activeMatch: `^/(guide|style-guide|cookbook|examples)/`,
  // items: [
  //   { text: '深度指南', link: '/guide/introduction' },
  //   { text: '互动教程', link: '/tutorial/' },
  //   { text: '示例', link: '/examples/' },
  //   { text: '快速上手', link: '/guide/quick-start' },
  //   { text: '风格指南', link: '/style-guide/' },
  //   { text: '术语表', link: '/glossary/' },
  //   { text: '错误码参照表', link: '/error-reference/' },
  //   {
  //     text: 'Vue 2 文档',
  //     link: 'https://v2.cn.vuejs.org'
  //   },
  //   {
  //     text: '从 Vue 2 迁移',
  //     link: 'https://v3-migration.vuejs.org/'
  //   }
  // ]
  // },
  // {
  //   text: 'API',
  //   activeMatch: `^/api/`,
  //   link: '/api/'
  // },
  {
    text: '所有文章',
    link: '/start-docs/',
    activeMatch: `^/start-docs/`
  }
]
