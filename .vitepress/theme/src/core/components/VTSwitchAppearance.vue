<script lang="ts" setup>
import { inject, Ref, ref } from 'vue'
import VTSwitch from './VTSwitch.vue'
import VTIconSun from './icons/VTIconSun.vue'
import VTIconMoon from './icons/VTIconMoon.vue'
import { useConfig } from '../../vitepress/composables/config'
const { config } = useConfig()
const { isDark, toggle } = inject<{
  isDark: Ref<Boolean>
  toggle: () => void
}>('appearance')!
</script>

<template>
  <VTSwitch
    class="vt-switch-appearance"
    :aria-label="config.i18n?.ariaDarkMode ?? 'Toggle dark mode'"
    :aria-checked="isDark"
    @click="toggle"
  >
    <VTIconSun class="vt-switch-appearance-sun" />
    <VTIconMoon class="vt-switch-appearance-moon" />
  </VTSwitch>
</template>
