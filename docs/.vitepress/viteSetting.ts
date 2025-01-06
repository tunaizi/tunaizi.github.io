import { UserConfig } from 'vitepress'
import AutoSidebar from './vitePlugins/autoSidebar'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
export default {
  define: {
    __VUE_OPTIONS_API__: false
  },
  optimizeDeps: {
    include: ['gsap', 'dynamics.js'],
    exclude: ['@vue/repl']
  },
  // @ts-ignore
  ssr: {
    external: ['@vue/repl'],
    noExternal: ['element-plus']
  },
  server: {
    host: true,
    fs: {
      // for when developing with locally linked theme
      // 用于在本地链接主题时进行开发
      allow: ['../..']
    }
  },

  build: {
    chunkSizeWarningLimit: Infinity
  },
  json: {
    stringify: true
  },
  plugins: [
    // {
    //   name: 'vite-plugin-vitepress-start',
    //   config(config, env) {
    //     const isDev = env.mode === 'development'
    //     config.base = isDev ? '/' : '/blog/'
    //     return config
    //   }
    // },
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    }),
    AutoSidebar({
      wrireToJson: '.vitepress/.log.json',
      textmap: {
        '/start-docs/all-docs/aaa': '推荐页导航',
        'all-docs': '所有文档',
        '/start-docs/index': '全部文档',
        '/start-docs/create-blog': 'vitepress md语法速查'
      }
    })
  ]
} as UserConfig['vite']
