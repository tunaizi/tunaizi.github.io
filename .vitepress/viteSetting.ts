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
  ssr: {
    external: ['@vue/repl'],
    noExternal: ['element-plus']
  },
  server: {
    host: true,
    fs: {
      allow: ['../..']
    }
  },
  build: {
    chunkSizeWarningLimit: Infinity,
    minify: false, // 取消代码压缩
    terserOptions: {
      compress: false, // 取消代码混淆
      mangle: false // 取消变量名混淆
    }
  },
  json: {
    stringify: true
  },
  plugins: [
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    }),
    AutoSidebar({
      ignores: ['repl.md'],
      wrireToJson: '.vitepress/.log.json',
      textmap: {
        '/start-docs/quickEntry': '快速访问',
        '/start-docs/index': '全部文档',
        '/start-docs/create-blog': 'vitepress md语法速查'
      }
    })
  ]
} as UserConfig['vite']
