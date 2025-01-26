export type MenuItem = MenuItemWithLink | MenuItemWithChildren

export interface APIHeader {
  anchor: string
  text: string
  level?: number
}

export interface MenuItemWithLink {
  text: string
  link?: string
  anchor?: string
  activeMatch?: string
  headers?: APIHeader[]
  collapsed?: boolean
  items?: MenuItemWithLink[]
}

export interface MenuItemWithChildren {
  text?: string
  items: MenuItemChild[]
}

export type MenuItemChild = MenuItemWithLink | MenuItemChildWithChildren

export interface MenuItemChildWithChildren {
  text?: string
  items: MenuItemWithLink[]
}

export type LocaleLinkItem = MenuItemWithLink & {
  repo?: string
  isTranslationsDesc?: boolean
}
