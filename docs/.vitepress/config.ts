import { defineConfigWithTheme } from 'vitepress'
import type { Config as ThemeConfig } from '@vue/theme'
import baseConfig from '@vue/theme/config'
import { headerPlugin } from './headerMdPlugin'
import i18n from './i18n'
import algolia from './algolia'
import { nav, sidebar } from './navigation'
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
    ['meta', { name: 'twitter:site', content: '@vuejs' }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
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
    nav,
    sidebar,
    ...i18n,
    algolia,
    // carbonAds: {
    //   code: 'CEBDT27Y',
    //   placement: 'vuejsorg'
    // },

    socialLinks: [{ icon: 'github', link: 'https://github.com/tunaizi/' }],

    editLink: {
      repo: 'localeLinksdffgdgdf',
      text: '在 93534875934758934758437587'
    },

    footer: {
      license: {
        text: '版权声明',
        link: 'Sdfsdfds'
      },
      copyright:
        // '本中文文档采用 知识共享署名-非商业性使用-相同方式共享 4.0 国际许可协议  (CC BY-NC-SA 4.0) 进行许可。'
        'dfgdfg----sdfgsf'
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
