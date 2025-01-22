import { ref } from 'vue'
import { AugmentedHeader } from '../../headerMdPlugin'

export const inBrowser = typeof window !== 'undefined'
const get = (key: string, defaultValue = false): boolean =>
  inBrowser
    ? JSON.parse(localStorage.getItem(key) || String(defaultValue))
    : defaultValue

export const preferCompositionKey = 'vue-docs-prefer-composition'
export const preferComposition = ref(get(preferCompositionKey, true))

export const preferSFCKey = 'vue-docs-prefer-sfc'
export const preferSFC = ref(get(preferSFCKey, true))
const storageKey = 'vitepress-theme-appearance'
export function useAppearance() {
  if (typeof localStorage === 'undefined') {
    return {
      isDark: false,
      toggle: () => {}
    }
  }
  let userPreference = localStorage.getItem(storageKey) || 'auto'
  const query = window.matchMedia(`(prefers-color-scheme: dark)`)
  const classList = document.documentElement.classList
  const isDark = ref(
    userPreference === 'auto' ? query.matches : userPreference === 'dark'
  )
  const setClass = (dark: boolean) =>
    classList[dark ? 'add' : 'remove']('dark')
  query.onchange = (e) => {
    if (userPreference === 'auto') {
      setClass((isDark.value = e.matches))
    }
  }
  const toggle = () => {
    setClass((isDark.value = !isDark.value))
    localStorage.setItem(
      storageKey,
      (userPreference = isDark.value
        ? query.matches
          ? 'auto'
          : 'dark'
        : query.matches
        ? 'light'
        : 'auto')
    )
  }
  return {
    isDark,
    toggle
  }
}

export function filterHeadersByPreference(h: AugmentedHeader) {
  return preferComposition.value ? !h.optionsOnly : !h.compositionOnly
}
