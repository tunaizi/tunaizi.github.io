import type { Config as ThemeConfig } from '@vue/theme'

export const sidebar: ThemeConfig['sidebar'] = {
  '/start-docs/': [
    {
      text: '所有博客',
      items: [
        {
          text: '快速上手vitePress',
          link: '/start-docs/employ'
        },
        {
          text: '如何利用vitePress创建github pages博客',
          link: '/start-docs/create-blog'
        }
      ]
    }
  ]
}
