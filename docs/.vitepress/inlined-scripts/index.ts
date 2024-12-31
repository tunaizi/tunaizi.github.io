import fs from 'fs'
import path from 'path'
import { HeadConfig } from 'vitepress'
export const inlinedScripts: HeadConfig[] = [
  [
    'script',
    {},
    fs.readFileSync(
      path.resolve(__dirname, './restorePreference.js'),
      'utf-8'
    )
  ],
  [
    'script',
    {},
    fs.readFileSync(path.resolve(__dirname, './uwu.js'), 'utf-8')
  ]

  // [
  //   'script',
  //   { // 添加广告 万维广告联盟
  //     async: 'true',
  //     src: 'https://cdn.wwads.cn/js/makemoney.js'
  //   },
  // ]

  // [
  //   'script',
  //   {
  //     src: 'https://cdn.usefathom.com/script.js',
  //     'data-site': 'ZPMMDSYA',
  //     'data-spa': 'auto',
  //     defer: ''
  //   }
  // ],
  // [
  //   'script',
  //   {
  //     src: 'https://vueschool.io/banner.js?affiliate=vuejs&type=top',
  //     async: 'true'
  //   }
  // ]
]
