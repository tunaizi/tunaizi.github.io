import { defineConfigWithTheme } from 'vitepress'
import type { Config as ThemeConfig } from './theme/src'
import baseConfig from './theme/src/vitepress/config/baseConfig'
import { headerPlugin } from './headerMdPlugin'
import i18n from './i18n'
import algolia from './algolia'
// import { nav, sidebar } from './navigation'
import viteSettig from './viteSetting'
import { inlinedScripts } from './inlined-scripts'
import { textAdPlugin } from './textAdMdPlugin'
import { codeMdPlugin } from './codeMdPlugin'

export default defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig,
  // sitemap: {
  // hostname: 'https://cn.vuejs.org'
  // },
  lang: 'zh-CN',
  title: 'BLOG',
  description: '',
  srcDir: 'src',
  srcExclude: [],
  head: [
    // ['meta', { name: 'theme-color', content: '' }],
    // ['meta', { property: 'og:url', content: 'https://vuejs.org/' }],
    // ['meta', { property: 'og:type', content: 'website' }],
    // ['meta', { property: 'og:title', content: 'Vue.js' }],
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
    [
      'meta',
      { name: 'algolia-site-verification', content: '00996CC216D33DF6' }
    ],
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

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/tunaizi/tunaizi.github.io'
      }
    ],

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
    theme: 'monokai',
    config(md) {
      // console.log(md);

      //@ts-ignore
      md.use(headerPlugin).use(codeMdPlugin)
      // .use(textAdPlugin)
    }
  },

  vite: viteSettig
})

/*
css-variables
monokai //vscode
dark-plus
nord
dracula-soft
one-dark-pro
dracula
poimandres
github-dark-dimmed
rose-pine-dawn
github-dark
rose-pine-moon
github-light
rose-pine
light-plus
slack-dark
material-theme-darker
slack-ochin
material-theme-lighter
solarized-dark
material-theme-ocean
solarized-light
material-theme-palenight
vitesse-black
material-theme
vitesse-dark
min-dark
vitesse-light
min-light
*/
