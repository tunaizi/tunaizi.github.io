import type { Config as ThemeConfig } from '@vue/theme'
import startDocsJson from './start-docs.json'
export const sidebar = Object.assign(startDocsJson, {
  '/start-docs/': [
    {
      text: '所有博客',
      items: [
        // {
        //   text: '快速上手vitePress',
        //   link: '/start-docs/employ'
        // },
        {
          text: '如何利用vitePress创建github pages博客',
          link: '/start-docs/create-blog'
        }
      ]
    }
  ]
}) as ThemeConfig['sidebar']
