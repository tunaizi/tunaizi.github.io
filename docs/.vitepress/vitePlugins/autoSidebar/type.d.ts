import { UserConfig } from 'vitepress'

export interface APIHeader {
  anchor: string
  text: string
}

export interface SidebarItem {
  text: string
  link?: string
  anchor?: string
  activeMatch?: string
  items?: SidebarItem[]
  headers?: APIHeader[]
  collapsed?: boolean
}

export interface SidebarConfig {
  [key: string]: SidebarItem[]
}

export interface PluginOptions {
  root?: string
  docs?: string
  ignores?: string[]
  sidebarResolved?: (sidebar: SidebarConfig) => void
  mergeSidebar?: (
    sidebar: SidebarConfig,
    config: UserConfig,
    opts: NormalizedOptions
  ) => UserConfig | Promise<UserConfig>
  wrireToJson?: string
  textmap?:
    | Record<string, string>
    | ((s: SidebarItem) => SidebarItem | void)
}

export type NormalizedOptions = Required<PluginOptions>
