import glob from 'glob'
import fs from 'fs'
import path from 'path'
import { Plugin, UserConfig, ViteDevServer, normalizePath } from 'vite'

interface SidebarItem {
  text: string
  link?: string
  items?: SidebarItem[]
  collapsed?: boolean
}

interface SidebarConfig {
  [key: string]: SidebarItem[]
}

interface PluginOptions {
  root?: string
  docs?: string
  ignores?: string[]
  sidebarResolved?: (sidebar: SidebarConfig) => void
  mergeSidebar?: (sidebar: SidebarConfig, config: UserConfig) => UserConfig
  wrireToJson?: string
}

type NormalizedOptions = Required<PluginOptions>

function writeTo(jsonString: string, writeToPath?: string) {
  writeToPath &&
    fs.writeFile(joinToCwd(writeToPath), jsonString, 'utf8', (err) => {
      if (err) throw new Error(JSON.stringify(err))
    })
}

function joinToCwd(...str: string[]) {
  return path.posix.join(process.cwd(), ...str)
}

const titleCache: { [key: string]: string } = {}

function VitePluginAutoSidebar(options: PluginOptions = {}): Plugin {
  const opts = normalizeOptions(options)
  return {
    enforce: 'post',
    name: 'VitePluginAutoSidebar',
    config(config: UserConfig) {
      opts.mergeSidebar(getSidebarConfig(opts), config)
      if (opts.wrireToJson) {
        console.log(config.server)
        const cfg = {
          server: {
            watch: { ignore: [] }
          }
        }
        //@ts-ignore
        if (!Array.isArray(config.server?.watch?.ignore)) {
          //@ts-ignore
          Object.assign(config, cfg)
        }
        //@ts-ignore
        config.server.watch.ignore.push(joinToCwd(opts.wrireToJson))
      }
      return config
    },
    configureServer({ watcher, restart }: ViteDevServer) {
      // console.log(joinToCwd(opts.docs, '**/*.md'))

      const fsWatcher = watcher.add('*.md')
      fsWatcher.on(
        'all',
        (
          event: 'add' | 'addDir' | 'change' | 'unlink' | 'unlinkDir',
          filePath: string
        ) => {
          if (
            opts.wrireToJson &&
            joinToCwd(opts.wrireToJson) === filePath
          ) {
            console.log('插件从新运行。。。。')
            return
          }
          if (event === 'addDir') return
          if (event === 'unlinkDir') return
          if (event === 'add') return
          if (event === 'unlink') {
            restart()
            return
          }
          if (event === 'change') {
            const title = matchTitle(filePath)
            const route = getRoute(opts.root, filePath)
            if (!route || !title) return
            if (title === titleCache[route]) return
            restart()
            return
          }
        }
      )
    }
  }
}

function getSidebarConfig(opts: NormalizedOptions): SidebarConfig {
  const docsPath = opts.docs
  const paths = glob.sync('**/*.md', {
    cwd: docsPath,
    ignore: opts.ignores
  })
  const basePath = path.relative(opts.root, docsPath)
  const sidebar: SidebarConfig = {}

  paths.forEach((fullPath) => {
    const segments = fullPath.split('/')
    const absolutePath = path.resolve(docsPath, fullPath)
    if (segments.length === 0) return
    const topLevel = basePath
      ? `/${basePath}/${segments.shift()}/`
      : `/${segments.shift()}/`
    if (topLevel.endsWith('.md')) return
    if (!sidebar[topLevel]) {
      sidebar[topLevel] = []
    }
    let currentLevel = sidebar[topLevel]
    segments.forEach((segment) => {
      let curConfig = currentLevel.find((item) => item.text === segment)
      if (!curConfig) {
        const itemConfig: SidebarItem = {
          text: '',
          items: []
        }
        if (segment.endsWith('.md')) {
          const route = getRoute(opts.root, absolutePath)
          itemConfig.text = matchTitle(absolutePath)
          itemConfig.link = route
          titleCache[route] = itemConfig.text
        } else {
          itemConfig.text = segment
          itemConfig.collapsed = false
          itemConfig.items = []
        }
        currentLevel.push(itemConfig)
        curConfig = itemConfig
      }
      currentLevel = curConfig.items || []
    })
  })
  if (opts.sidebarResolved) {
    opts.sidebarResolved(sidebar)
  }
  return sidebar
}
// function getSidebarConfig1(opts: NormalizedOptions): SidebarConfig {
//   const docsPath = opts.docs
//   const paths = glob.sync('**/*.md', {
//     cwd: docsPath,
//     ignore: opts.ignores
//   })
//   const basePath = `/${path.posix.relative(opts.root, docsPath)}/`
//   let baseItem: SidebarItem = {
//     items: [],
//     text: basePath,
//     link: basePath
//   }
//   const sidebar: SidebarConfig = {}

//   paths.forEach((fullPath) => {
//     const segments = fullPath.split('/')
//     const absolutePath = path.posix.resolve(docsPath, fullPath)
//     if (segments.length === 0) return
//     let topLevel = basePath
//       ? `${basePath}${segments.shift()}/`
//       : `/${segments.shift()}`

//     if (topLevel.endsWith('.md/')) {
//       topLevel = topLevel.replace(/\/$/, '')
//       if (topLevel.endsWith('index.md/')) {
//         baseItem.link = desuffix(topLevel)
//         topLevel = basePath
//       }
//       if (basePath !== topLevel && topLevel.startsWith(basePath)) {
//         if (!(basePath in sidebar)) sidebar[basePath] = [baseItem]
//         baseItem.items = baseItem.items || []
//         baseItem.items.push({
//           text: topLevel.replace(/(\.md|index\.md)$/, ''),
//           link: desuffix(topLevel),
//           items: []
//         })
//         topLevel = topLevel.replace(/(\.md|index\.md)$/, '')
//       } else {
//         sidebar[basePath] = [baseItem]
//       }
//     }
//     baseItem.items = baseItem.items || []
//     if (!sidebar[topLevel]) {
//       sidebar[topLevel] = []
//     }
//     let currentLevel: SidebarItem[] = sidebar[topLevel]
//     segments.forEach((segment) => {
//       let curConfig = currentLevel.find((item) => item.text === segment)
//       if (!curConfig) {
//         const itemConfig: SidebarItem = {
//           text: '',
//           items: []
//         }
//         if (segment.endsWith('.md')) {
//           const route = getRoute(opts.root, absolutePath)
//           itemConfig.text = matchTitle(absolutePath)
//           itemConfig.link = route
//           titleCache[route] = itemConfig.text
//         } else {
//           itemConfig.text = segment
//           itemConfig.collapsed = false
//           itemConfig.items = []
//         }
//         currentLevel.push(itemConfig)
//         curConfig = itemConfig
//       }
//       currentLevel = curConfig.items || []
//     })
//   })
//   if (opts.sidebarResolved) {
//     opts.sidebarResolved(sidebar)
//   }

//   for (const key in sidebar) {
//     if (!Object.prototype.hasOwnProperty(key)) {
//       let item = sidebar[key]
//       if (key !== basePath) {
//         baseItem.items = baseItem.items?.concat(item)
//         delete sidebar[key]
//       }
//     }
//   }
//   return sidebar
// }

function matchTitle(p: string): string {
  const content = fs.readFileSync(p, 'utf-8')
  return ((content.match(/^#(.*)\n?/) || [])[1] || '').trim()
}

function desuffix(path: string): string {
  return path.replace(/(\.md|\.md\/)$/, '')
}
function getRoute(root: string, absPath: string): string {
  return desuffix('/' + path.posix.relative(root, absPath))
}

function normalizeOptions(options: PluginOptions): NormalizedOptions {
  let root = joinToCwd(options.root || '')
  if (!root) {
    const files = glob.sync('**/.vitepress/config.*', {
      cwd: process.cwd(),
      dot: true,
      ignore: ['node_modules/**/*']
    })
    if (files.length !== 1) {
      console.error('[WARNING] 找到多个 .vitepress/config 配置文件', files)
    }
    root = path.posix.resolve(files[0], '../..')
  }
  return {
    root,
    docs: joinToCwd(options.docs || root),
    ignores: (options.ignores ?? []).map(normalizePath),
    wrireToJson: normalizePath(options.wrireToJson || ''),
    sidebarResolved: options.sidebarResolved ?? function () {},
    mergeSidebar:
      options.mergeSidebar ??
      function (sidebar: SidebarConfig, config: UserConfig) {
        const sidebarDefault =
          // @ts-ignore
          config.vitepress.site.themeConfig.sidebar || {}
        if (typeof sidebarDefault === 'object') {
          writeTo(JSON.stringify(sidebar, null, 2), options.wrireToJson)
          // @ts-ignore
          config.vitepress.site.themeConfig.sidebar = Object.assign(
            sidebarDefault,
            sidebar
          )
        }
        return config
      }
  }
}

export { VitePluginAutoSidebar as default }
