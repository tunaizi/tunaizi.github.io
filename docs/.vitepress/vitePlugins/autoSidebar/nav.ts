import { SidebarItem, SidebarConfig } from './type'
import _ from 'lodash'
export async function parseNav(sidebar: SidebarItem[] | SidebarConfig) {
  sidebar = _.isArray(sidebar) ? sidebar : Object.values(sidebar).flat()
  return sidebar
    .filter((e) => e.items?.length)
    .map((e) => {
      e.activeMatch = `^${e.link}`
      e.items?.map((e) => ({ link: e.link, text: e.text }))
      delete e.link
      delete e.headers
      return e
    })
}
