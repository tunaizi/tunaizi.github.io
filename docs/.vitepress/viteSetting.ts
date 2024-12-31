import { UserConfig } from 'vitepress'
import AutoSidebar from './autoSideBar'
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
    external: ['@vue/repl']
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
    {
      name: 'vite-plugin-vitepress-start',
      config(config, env) {
        const isDev = env.mode === 'development'
        config.base = isDev ? '/' : '/blog'
        return config
      }
    },
    AutoSidebar({
      root: '/src/',
      docs: '/src/start-docs/',
      wrireToJson: '.vitepress/navigation/start-docs.json'
    })
  ]
} as UserConfig['vite']
