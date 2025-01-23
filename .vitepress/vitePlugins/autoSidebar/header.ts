import fs from 'fs'
import _ from 'lodash'
import { joinToCwd, slugify, cleanHeaderText, headersCache } from './utils'
import { SidebarConfig, SidebarItem } from './type'
import { APIHeader } from '@theme/src'

async function parsePageHeaders(link: string): Promise<APIHeader[]> {
  const errBack: APIHeader[] = []
  if (!link) return errBack
  try {
    const fullPath = `${joinToCwd(link)}.md` // 解析完整文件路径
    const timestamp = (await fs.promises.stat(fullPath)).mtimeMs // 获取文件的最后修改时间戳
    // 检查文件是否被缓存且时间戳匹配
    const cached = headersCache.get(fullPath)
    if (cached && timestamp === cached.timestamp) {
      return cached.headers // 如果缓存的标题是最新的，则返回缓存的标题
    }
    const src = await fs.promises.readFile(fullPath, 'utf-8') // 读取markdown文件
    const headers = extractHeadersFromMarkdown(src) // 从文件内容中提取标题
    // 将提取的标题及其文件的时间戳存储在缓存中
    headersCache.set(fullPath, {
      timestamp,
      headers
    })
    return headers
  } catch (error) {
    // console.log(error)
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
  return headers
}

// 从标题中提取锚点链接的辅助函数（如果缺失则生成一个）
function extractAnchor(h: string, anchorRE: RegExp, text: string): string {
  const anchorMatch = h.match(anchorRE) // 匹配锚点（如果存在）
  return anchorMatch?.[1] ?? slugify(text) // 如果没有锚点，则使用slugify生成一个
}

async function addHeaders(
  targetList: SidebarItem[]
): Promise<SidebarItem[]> {
  if (!_.isArray(targetList) || !targetList.length) return []
  const results = await Promise.all(
    targetList.map(async (group: SidebarItem): Promise<SidebarItem> => {
      let items = _.get(group, 'items', []) as SidebarItem['items']
      let link = group.link || ''
      const retItem = {
        link,
        headers: await parsePageHeaders(link),
        text: group.text, // 组的文本（例如 'API'）
        anchor: slugify(group.text), // 生成组标题的锚点
        items: await addHeaders(items || [])
      }
      if (!link && retItem.items.length) {
        retItem.link = String(retItem.items[0].link)
      }
      return retItem
    })
  )
  return results
}

export async function parseHeaders(
  sidebar: SidebarConfig
): Promise<SidebarItem[]> {
  const targetList = _.get(sidebar, '/start-docs/', [])
  return await addHeaders(targetList)
}
