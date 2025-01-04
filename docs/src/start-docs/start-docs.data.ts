import fs from 'fs'
import path from 'path'
import type {
  MultiSidebarConfig,
  SidebarGroup
} from '../../.vitepress/theme/src/vitepress/config.ts'
import { sidebar } from '../../.vitepress/navigation'
import _ from 'lodash'
import { MenuItemWithLink } from '../../.vitepress/theme/src'

// 定义单个标题的结构接口
interface APIHeader {
  anchor: string
  text: string
}

// 定义API组的结构接口，包含文本、锚点和项目
export interface APIGroup {
  link: string
  text: string
  anchor: string
  headers: APIHeader[]
  items: APIGroup[]
}

// 声明API组的解析数据类型
export declare const data: APIGroup[]

// 生成字符串的slug（用于锚点链接）的工具函数
function slugify(text: string): string {
  return (
    text
      // 将特殊字符和空格替换为连字符
      .replace(/[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'<>,.?/]+/g, '-')
      // 移除连续的分隔符
      .replace(/-{2,}/g, '-')
      // 移除前导和尾随的连字符
      .replace(/^-+|-+$/g, '')
      // 确保它不以数字开头（例如 #121）
      .replace(/^(\d)/, '_$1')
      // 转换为小写
      .toLowerCase()
  )
}
function joinToCwd(...str: string[]) {
  return path.posix.join(process.cwd(), '/src/', ...str)
}
// 从给定链接的markdown文件解析标题的工具函数
function parsePageHeaders(link: string): APIHeader[] {
  const errBack: APIHeader[] = []
  if (!link) return errBack
  try {
    const fullPath = `${joinToCwd(link)}.md` // 解析完整文件路径

    const timestamp = fs.statSync(fullPath).mtimeMs // 获取文件的最后修改时间戳

    // 检查文件是否被缓存且时间戳匹配
    const cached = headersCache.get(fullPath)
    if (cached && timestamp === cached.timestamp) {
      return cached.headers // 如果缓存的标题是最新的，则返回缓存的标题
    }

    const src = fs.readFileSync(fullPath, 'utf-8') // 读取markdown文件
    const headers = extractHeadersFromMarkdown(src) // 从文件内容中提取标题

    // 将提取的标题及其文件的时间戳存储在缓存中
    headersCache.set(fullPath, {
      timestamp,
      headers
    })

    return headers
  } catch (error) {
    console.log(error)
    return errBack
  }
}

// 从markdown内容中提取所有标题（h2）的辅助函数
function extractHeadersFromMarkdown(src: string): APIHeader[] {
  const h2s = src.match(/^## [^\n]+/gm) // 匹配所有h2标题（## 标题）
  const anchorRE = /\{#([^}]+)\}/ // 正则表达式匹配标题中的锚点链接（例如 {#some-anchor}）
  let headers: APIHeader[] = []

  if (h2s) {
    // 处理每个h2标题并提取文本和锚点
    headers = h2s.map((h) => {
      const text = cleanHeaderText(h, anchorRE) // 清理标题文本
      const anchor = extractAnchor(h, anchorRE, text) // 提取或生成锚点
      return { text, anchor }
    })
  }
  // console.log(headers, 'headers----------\n')

  return headers
}

// 清理标题文本的辅助函数（例如，移除上标、代码格式化）
function cleanHeaderText(h: string, anchorRE: RegExp): string {
  return h
    .slice(2) // 移除标题中的 "##" 部分
    .replace(/<sup class=.*/, '') // 移除上标（例如 <sup> 标签）
    .replace(/\\</g, '<') // 解码转义字符如 \<
    .replace(/`([^`]+)`/g, '$1') // 移除内联代码格式化（例如 `code`）
    .replace(anchorRE, '') // 移除锚点标签（例如 {#anchor}）
    .trim() // 去除前导和尾随的空白字符
}

// 从标题中提取锚点链接的辅助函数（如果缺失则生成一个）
function extractAnchor(h: string, anchorRE: RegExp, text: string): string {
  const anchorMatch = h.match(anchorRE) // 匹配锚点（如果存在）
  return anchorMatch?.[1] ?? slugify(text) // 如果没有锚点，则使用slugify生成一个
}

// 缓存用于存储标题及其关联的时间戳，以避免重新读取文件
const headersCache = new Map<
  string,
  {
    headers: APIHeader[]
    timestamp: number
  }
>()

type ExtendsSidebarGroup = SidebarGroup & { link?: string }
function addHeaders(
  targetList: (ExtendsSidebarGroup | MenuItemWithLink)[]
): APIGroup[] {
  if (!_.isArray(targetList) || !targetList.length) return []
  return targetList.map(
    (group: ExtendsSidebarGroup | MenuItemWithLink): APIGroup => {
      let items = _.get(group, 'items', []) as ExtendsSidebarGroup['items']
      let link = group.link || ''
      const retItem = {
        link,
        headers: parsePageHeaders(link), // 从项目的markdown链接解析标题
        text: group.text, // 组的文本（例如 'API'）
        anchor: slugify(group.text), // 生成组标题的锚点
        items: addHeaders(items)
      }
      if (!link && retItem.items.length) {
        retItem.link = retItem.items[0].link
      }
      return retItem
    }
  )
}

export default {
  // 声明应触发热模块替换（HMR）的文件
  watch: './**/**.md',
  // 加载API数据并处理侧边栏项目
  load(_watchedFiles: string[]): APIGroup[] {
    const targetList = _.get(sidebar as MultiSidebarConfig, '/start-docs/')
    return addHeaders(targetList)
  }
}
