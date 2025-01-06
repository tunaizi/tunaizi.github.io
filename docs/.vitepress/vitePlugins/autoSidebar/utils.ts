import path from 'path'
import fs from 'fs'
import _ from 'lodash'
import { APIHeader } from './type'
export function joinToCwd(...str: string[]) {
  return path.posix.join(process.cwd(), 'src', ...str)
}
export async function writeTo(jsonString: {}, writeToPath: string) {
  try {
    try {
      const dirPath = path.posix.dirname(writeToPath)
      await fs.promises.access(dirPath)
    } catch (err) {
      await fs.promises.mkdir(writeToPath, { recursive: true })
    }
    await fs.promises.writeFile(
      writeToPath,
      JSON.stringify(jsonString, null, 2),
      'utf-8'
    )
  } catch (error) {
    console.error('Error writing to file:', error)
    throw error
  }
}

export const titleCache: { [key: string]: string } = {}
export const azReg = /^[A-Za-z]-/
export function isArrayAndLen(t: any) {
  return !!(_.isArray(t) && t.length)
}
export function matchTitle(p: string): string {
  const content = fs.readFileSync(p, 'utf-8')
  return ((content.match(/^#(.*)\n?/) || [])[1] || '').trim()
}

export function desuffix(path: string): string {
  return path.replace(/(\.md|\.md\/)$/, '')
}
export function getRoute(root: string, absPath: string): string {
  return desuffix('/' + path.posix.relative(root, absPath))
}
// 生成字符串的slug（用于锚点链接）的工具函数
export function slugify(text: string): string {
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
//
// 清理标题文本的辅助函数（例如，移除上标、代码格式化）
export function cleanHeaderText(h: string, anchorRE: RegExp): string {
  return h
    .slice(2) // 移除标题中的 "##" 部分
    .replace(/<sup class=.*/, '') // 移除上标（例如 <sup> 标签）
    .replace(/\\</g, '<') // 解码转义字符如 \<
    .replace(/`([^`]+)`/g, '$1') // 移除内联代码格式化（例如 `code`）
    .replace(anchorRE, '') // 移除锚点标签（例如 {#anchor}）
    .trim() // 去除前导和尾随的空白字符
}
// 缓存用于存储标题及其关联的时间戳，以避免重新读取文件
export const headersCache = new Map<
  string,
  {
    headers: APIHeader[]
    timestamp: number
  }
>()
