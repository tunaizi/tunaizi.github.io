import type { Config as ThemeConfig } from '../theme/src'
import _ from 'lodash'
import { nav as nav1 } from './nav'
import { sidebar as sidebar1 } from './sidebar'
import { copyNav, copySidebar } from './copy'

// export const nav = _.concat(nav1, copyNav) as ThemeConfig['nav']
// export const sidebar = _.assign(
//   sidebar1,
//   copySidebar
// ) as ThemeConfig['sidebar']

export const nav = nav1 as ThemeConfig['nav']
export const sidebar = sidebar1 as ThemeConfig['sidebar']
