<script setup lang="ts">
import { Repl, useStore } from '@vue/repl'
import '@vue/repl/style.css'
import {
  inject,
  watchEffect,
  version,
  Ref,
  onMounted,
  ref,
  unref,
  onUnmounted,
  computed,
  nextTick
} from 'vue'
import {
  resolveSFCExample,
  onHashChange,
  convertToExampleData
} from './utils'
import CodemirrorEditor from '@vue/repl/codemirror-editor'
import { useWindowSize } from '@vueuse/core'
const viewSize = useWindowSize()
const viewHeight = computed(() => unref(viewSize.height) + 'px')

const store = useStore({
  builtinImportMap: ref({
    mainFile: 'index.vue',
    imports: {
      vue: '/js/vue.esm-browser.js',
      '@vue/runtime-dom': '/js/runtime-dom.esm-browser.js',
      '@vue/compiler-sfc': '/js/compiler-sfc.esm-browser.js',
      '@vue/shared': '/js/shared.esm-browser.js',
      '@vue/reactivity': '/js/reactivity.esm-browser.js'
    }
  })
})

watchEffect(updateExample)
onHashChange(updateExample)

function updateExample() {
  let hash = location.hash.slice(1) || 'hello-world'
  const files = resolveSFCExample(convertToExampleData(hash), false)
  store.setFiles(files, 'index.vue')
  const keys = Object.keys(files)
  if (keys.length > 1) {
    const changeAct = keys.find((key) => key.startsWith('src/run'))
    changeAct && setTimeout(() => store.setActive(changeAct), 0)
  }
}
</script>

<template>
  <div ref="heightProvider" :style="{ '--vh': viewHeight }">
    <Repl
      :store="store"
      :showImportMap="true"
      :showCompileOutput="false"
      :clearConsole="true"
      :editor="CodemirrorEditor"
    />
  </div>
</template>

<style>
.vue-repl {
  height: calc(
    var(--vh, 0px) - var(--vt-nav-height) - var(--vt-banner-height, 0px) -
      32px
  );
  max-width: 100% !important;
  border: none !important;
}
@media (max-width: 960px) {
  .vue-repl {
    border: none;
  }
}

.VPContentDoc.VPContentDocRepl {
  padding: 0 !important;
}
.VPContent .VPContentDoc.VPContentDocRepl:not(.has-aside) {
  max-width: 100% !important;
  padding: 0 24px 0 24px !important;
  box-sizing: border-box;
}
.VPContent .VPContentDoc.VPContentDocRepl:not(.has-aside) .container {
  max-width: 100% !important;
  margin: 0 !important;
  padding: 0 !important;
}
.VPContent
  .VPContentDoc.VPContentDocRepl:not(.has-aside)
  .container
  .content {
  max-width: 100% !important;
  margin: 0 !important;
  padding: 0 !important;
}

@media (min-width: 768px) {
  .VPContent .VPContentDoc.VPContentDocRepl:not(.has-aside) {
    padding: 0px 32px 0px !important;
  }
}
@media (min-width: 960px) {
  .VPContent .VPContentDoc.VPContentDocRepl:not(.has-aside) {
    padding: 0px 32px 0px !important;
  }
}

.VPContentDoc.VPContentDocRepl:not(.has-aside) .content {
  min-width: 100% !important;
}

.repl-page .VPDoc {
  padding: 0 !important;
}

.vt-doc {
  margin: 0 !important;
}
/* 移除所有边距和内边距 */
.vue-repl-container {
  padding: 0 !important;
  margin: 0 !important;
}
</style>
