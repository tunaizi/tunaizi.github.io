import { useConfig } from '../../theme/src/vitepress/composables/config'
import { NavItemWithLink } from '../../theme/src/vitepress/config'
import { APIHeader } from '../../theme/src/core'
import { computed } from 'vue'
import { randomText } from './tools'
import _ from 'lodash'
import { type Item } from './Circle'
const isArrAndLength = (arr: any[]) => _.isArray(arr) && arr.length > 0
export const randomData = Array.from({ length: 30 }, (_1, s) => ({
  name: randomText(_.random(80)) + '_' + s,
  value: s,
  link: `https://example.com/${s}`
}))

export const navList = computed(() => {
  const vitepressConfig = useConfig()
  function loop(items: NavItemWithLink[] | APIHeader[], level: number) {
    const res: Item[] = []
    level = level + 1
    items.forEach((ele: NavItemWithLink | APIHeader) => {
      if ('items' in ele && isArrAndLength(ele.items || [])) {
        res.push(...loop(ele.items as NavItemWithLink[], level))
      }
      // if ('headers' in ele && isArrAndLength(ele.headers || [])) {
      //   res.push(...loop(ele.headers as APIHeader[], level))
      // }
      ele.text &&
        level > 1 &&
        res.push({
          name: ele.text,
          link:
            ('link' in ele
              ? ele.link
              : 'anchor' in ele
              ? ele.anchor
              : '') + ''
        })
    })
    return res
  }
  // console.log(vitepressConfig?.config.value.nav)

  const r = loop(
    (vitepressConfig?.config.value.nav || []) as NavItemWithLink[],
    0
  )
  console.log(r)
  return r
})
