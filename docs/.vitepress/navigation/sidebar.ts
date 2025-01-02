import type { Config as ThemeConfig } from '@vue/theme'
import startDocsJson from './start-docs.json'
export const sidebar = Object.assign(
  startDocsJson,
  {}
) as ThemeConfig['sidebar']
