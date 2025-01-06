import { defineConfigWithTheme } from 'vitepress'
import type { Config as ThemeConfig } from './theme/src'
import baseConfig from './theme/src/vitepress/config/baseConfig'
import { headerPlugin } from './headerMdPlugin'
import i18n from './i18n'
import algolia from './algolia'
// import { nav, sidebar } from './navigation'
import viteSettig from './viteSetting'
import { inlinedScripts } from './inlined-scripts'
// import { textAdPlugin } from './textAdMdPlugin'

export default defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig,
  sitemap: {
    hostname: 'https://cn.vuejs.org'
  },
  lang: 'zh-CN',
  title: 'BLOG',
  description: '',
  srcDir: 'src',
  srcExclude: ['tutorial/**/description.md'],
  head: [
    ['meta', { name: 'theme-color', content: '#f72424' }],
    ['meta', { property: 'og:url', content: 'https://vuejs.org/' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Vue.js' }],
    // [
    //   'meta',
    //   {
    //     property: 'og:description',
    //     content: 'dffd'
    //   }
    // ],
    // [
    //   'meta',
    //   {
    //     property: 'og:image',
    //     content: 'https://vuejs.org/images/logo.png'
    //   }
    // ],
    [
      'link',
      {
        rel: 'icon',
        href: '/images/logo.png'
      }
    ],
    // ['meta', { name: 'twitter:site', content: '@vuejs' }],
    // ['meta', { name: 'twitter:card', content: 'summary' }],
    ['meta', { name: 'algolia-site-verification', content: '00996CC216D33DF6' }],
    // [
    //   'link',
    //   {
    //     rel: 'preconnect',
    //     href: 'https://sponsors.vuejs.org'
    //   }
    // ],
    ...inlinedScripts
  ],

  themeConfig: {
    // nav,
    // sidebar,
    ...i18n,
    algolia,
    // carbonAds: {
    //   code: 'CEBDT27Y',
    //   placement: 'vuejsorg'
    // },

    socialLinks: [{ icon: 'github', link: 'https://github.com/tunaizi/' }],

    editLink: {
      text: '在 github 上编辑本页'
    },

    footer: {
      license: {
        text: '版权声明',
        link: 'Sdfsdfds'
      },
      copyright: '随便玩玩'
    }
  },

  markdown: {
    theme: 'github-dark',
    config(md) {
      //@ts-ignore
      md.use(headerPlugin)
      // .use(textAdPlugin)
    }
  },

  vite: viteSettig
})
