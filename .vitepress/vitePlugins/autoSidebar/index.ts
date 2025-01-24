import glob from 'glob'
import path from 'path'
import { Plugin, UserConfig, ViteDevServer, normalizePath } from 'vite'
import _ from 'lodash'
export type * from './type'
import type {
  PluginOptions,
  SidebarConfig,
  NormalizedOptions,
  SidebarItem
} from './type'
import {
  joinToCwd,
  writeTo,
  titleCache,
  azReg,
  isArrayAndLen,
  matchTitle,
  desuffix,
  getRoute
} from './utils'
import { parseHeaders } from './header'
import { parseNav } from './nav'

function VitePluginAutoSidebar(options: PluginOptions = {}): Plugin {
  const opts = normalizeOptions(options)
  return {
    enforce: 'post',
    name: 'VitePluginAutoSidebar',
    async config(config: UserConfig) {
      await opts.mergeSidebar(getSidebarConfig(opts), config, opts)
      return config
    },
    configureServer({ watcher, restart }: ViteDevServer) {
      const fsWatcher = watcher.add('*.md')
      fsWatcher.on(
        'all',
        (
          event: 'add' | 'addDir' | 'change' | 'unlink' | 'unlinkDir',
          filePath: string
        ) => {
          function callback() {
            console.log('插件从新运行:', filePath)
            restart()
          }
          // if (
          //   opts.wrireToJson &&
          //   joinToCwd(opts.wrireToJson) === filePath
          // ) {
          //   console.log('插件从新运行。。。。')
          //   return
          // }

          if (event === 'addDir') return
          if (event === 'unlinkDir') return
          if (event === 'add') return
          if (event === 'unlink') {
            callback()
            return
          }
          if (event === 'change') {
            const title = matchTitle(filePath)
            const route = getRoute(opts.root, filePath)
            if (!route || !title) return
            if (title === titleCache[route]) return
            callback()
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
    ignore: opts.ignores.concat('**/_*.md', '_*.md', '**/.*.md', '.*.md')
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
    if (topLevel.endsWith('.md/')) return
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

function transTxtOrSort(
  sidebar: SidebarConfig,
  opts: NormalizedOptions
): SidebarConfig {
  function transTxt(item: SidebarItem, repAz = false) {
    if (opts.textmap) {
      if (_.isFunction(opts.textmap)) {
        _.assign(item, opts.textmap(item) || {})
      }
      if (_.isPlainObject(opts.textmap)) {
        let text = _.get(opts.textmap, item.link || item.text) || ''
        text && _.assign(item, { text })
      }
    }
    repAz && _.assign(item, { text: item.text.replace(azReg, '') })
    return item
  }
  function stortForTxt(items: SidebarItem[]) {
    function eqText(s1: string, s2: string) {
      const m1 = String(_.get(s1.match(azReg), 0, ''))
      const m2 = String(_.get(s2.match(azReg), 0, ''))
      return m1.charCodeAt(0) - m2.charCodeAt(0)
    }
    items.sort((a, b) => eqText(_.get(a, 'text'), _.get(b, 'text')))
    return items
  }
  _.forOwn(sidebar, (group, key) => {
    sidebar[key] = group = stortForTxt(group || [])
    _.forEach(group, (item) => {
      transTxt(item, true)
      if (isArrayAndLen(item.items)) {
        // item.items = stortForTxt(item.items || [])
        transTxt(item)
        _.forEach(item.items, (item2) => {
          transTxt(item2)
          if (isArrayAndLen(item2.items)) {
            _.forEach(item2.items, (item3) => transTxt(item3))
          }
        })
      }
    })
  })
  return sidebar
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
    docs: options.docs || root,
    ignores: (options.ignores ?? []).map(normalizePath),
    wrireToJson: normalizePath(options.wrireToJson || ''),
    sidebarResolved: options.sidebarResolved ?? function () {},
    textmap: options.textmap || {},
    mergeSidebar:
      options.mergeSidebar ??
      async function (
        _sidebar: SidebarConfig,
        config: UserConfig,
        opts: NormalizedOptions
      ) {
        _sidebar = transTxtOrSort(_sidebar, opts)
        const sidebar = await parseHeaders(_sidebar)
        const nav = await parseNav(sidebar)
        const themeConfig = {
          sidebar,
          nav
        }
        options.wrireToJson &&
          (await writeTo(themeConfig, options.wrireToJson as string))
        _.merge(config, { vitepress: { site: { themeConfig } } })
        return config
      }
  }
}

export { VitePluginAutoSidebar as default }
