import type { Config as ThemeConfig } from '../theme/src'
import startDocsJson from './start-docs.json'
export const sidebar = Object.assign(
  startDocsJson,
  {}
) as ThemeConfig['sidebar']
