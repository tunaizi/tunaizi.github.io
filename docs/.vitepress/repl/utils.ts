import { update } from 'lodash'
import { onBeforeUnmount } from 'vue'
// const codeMap = new Map()
export type ExampleData = {
  [key: string]: string | Record<string, string>
} & {
  'import-map.json'?: string
  _hint?: ExampleData
}

function indent(str: string): string {
  return str
    .split('\n')
    .map((l) => (l.trim() ? `  ${l}` : l))
    .join('\n')
}

function deindent(str: string, tabsize = 2): string {
  return str
    .split('\n')
    .map((l) => l.replace(tabsize === 1 ? /^\s{2}/ : /^\s{4}/, ''))
    .join('\n')
}

function toKebabTags(str: string): string {
  return str
    .replace(/(<\/?)([A-Z]\w+)(\s|>)/g, (_, open, tagName, end) => {
      return (
        open + tagName.replace(/\B([A-Z])/g, '-$1').toLowerCase() + end
      )
    })
    .replace(/<([\w-]+)([^/]*?)\s?\/>/g, (_, tagName, attrs) => {
      return `<${tagName}${attrs}></${tagName}>`
    })
}

function toScriptSetup(src: string, template: string): string {
  const exportDefaultIndex = src.indexOf('export default')
  const lastReturnIndex = src.lastIndexOf('return {')

  let setupCode =
    lastReturnIndex > -1
      ? deindent(
          src
            .slice(exportDefaultIndex, lastReturnIndex)
            .replace(/export default[^]+?setup\([^)]*\)\s*{/, '')
            .trim()
        )
      : ''

  const propsStartIndex = src.indexOf(`\n  props:`)
  if (propsStartIndex > -1) {
    const propsEndIndex = src.indexOf(`\n  }`, propsStartIndex) + 4
    const propsVar =
      /\bprops\b/.test(template) || /\bprops\b/.test(src)
        ? `const props = `
        : ``
    const propsDef = deindent(
      src
        .slice(propsStartIndex, propsEndIndex)
        .trim()
        .replace(/,$/, '')
        .replace(/^props: /, `${propsVar}defineProps(`) + ')',
      1
    )
    setupCode = (propsDef + '\n\n' + setupCode).trim()
  }

  const emitsStartIndex = src.indexOf(`\n  emits:`)
  if (emitsStartIndex > -1) {
    const emitsEndIndex = src.indexOf(`]`, emitsStartIndex) + 1
    const emitsDef =
      src
        .slice(emitsStartIndex, emitsEndIndex)
        .trim()
        .replace(/,$/, '')
        .replace(/^emits: /, `const emit = defineEmits(`) + ')'
    setupCode = (emitsDef + '\n\n' + setupCode).trim()
  }

  const res = src.slice(0, exportDefaultIndex) + setupCode
  return (setupCode ? res : res.trim()) + '\n'
}

function forEachComponent(
  raw: ExampleData,
  files: Record<string, string>,
  cb: (filename: string, file: Record<string, string>) => void
) {
  for (const filename in raw) {
    const content = raw[filename]
    if (
      filename === 'description.txt' ||
      filename === 'description.md' ||
      filename === '_hint'
    ) {
      continue
    } else if (typeof content === 'string') {
      files[filename] = content
    } else {
      const {
        'template.html': template,
        'composition.js': composition,
        'options.js': options,
        'style.css': style
      } = content
      cb(filename, { template, composition, options, style })
    }
  }
}

function injectCreateApp(src: string): string {
  const importVueRE = /import {(.*?)} from 'vue'/
  if (importVueRE.test(src)) {
    src = src.replace(importVueRE, `import { createApp,$1} from 'vue'`)
  } else {
    const newline = src.startsWith(`import`) ? `\n` : `\n\n`
    src = `import { createApp } from 'vue'${newline}${src}`
  }
  return src.replace(
    /export default ({[^]*\n})/,
    "createApp($1).mount('#app')"
  )
}

export function resolveSFCExample(
  raw: ExampleData,
  preferComposition: boolean
) {
  const files: Record<string, string> = {}
  forEachComponent(
    raw,
    files,
    (filename, { template, composition, options, style }) => {
      const desc = raw['description.txt'] as string
      let sfcContent =
        desc && filename === 'App' ? `<!--\n${desc.trim()}\n-->\n\n` : ``
      if (preferComposition && composition) {
        sfcContent += `<script setup>\n${toScriptSetup(
          composition,
          template
        )}<\/script>\n\n`
      }
      if (!preferComposition && options) {
        sfcContent += `<script>\n${options}<\/script>\n\n`
      }
      sfcContent += `<template>\n${indent(template)}</template>`
      if (style) {
        sfcContent += `\n\n<style>\n${style}</style>`
      }
      files[filename + '.vue'] = sfcContent
    }
  )
  return files
}

export function resolveNoBuildExample(
  raw: ExampleData,
  preferComposition: boolean
) {
  const files: Record<string, string> = {}

  const desc = raw['description.txt'] as string
  let html = desc ? `<!--\n${desc.trim()}\n-->\n\n` : ``
  let css = ''

  // set it first for ordering
  files['index.html'] = html
  forEachComponent(
    raw,
    files,
    (filename, { template, composition, options, style }) => {
      let js = (preferComposition ? composition : options) || ''
      // rewrite imports to *.vue
      js = js.replace(
        /import (.*) from '(.*)\.vue'/g,
        "import $1 from '$2.js'"
      )

      const _template = indent(toKebabTags(template).trim())
      if (style) css += style

      if (filename === 'App') {
        if (js) {
          html += `<script type="module">\n${injectCreateApp(
            js
          )}<\/script>\n\n`
        }
        html += `<div id="app">\n${_template}\n</div>`
      } else {
        // html += `\n\n<template id="${filename}">\n${_template}</template>`
        if (js) {
          js = js.replace(
            /export default \{([^]*)\n\}/,
            `export default {$1,\n  template: \`\n${_template}\n  \`\n}`
          )
        } else {
          js = `export default {\n  template: \`\n${_template}\n  \`\n}`
        }
        files[filename + '.js'] = js
      }
    }
  )
  files['index.html'] = html
  if (css) {
    files['style.css'] = css
  }
  return files
}

export function onHashChange(cb: () => void) {
  window.addEventListener('hashchange', cb)
  onBeforeUnmount(() => {
    window.removeEventListener('hashchange', cb)
  })
}

export const welcomeSFCCode = `
<script setup>
import { ref, h } from 'vue'
import content from './run.js'
</script>
<template>
  <div v-html="content"></div>
</template>
`
const jsonSFCCode = `
<script setup>
import { ref, h } from 'vue'
import content from './run.json'
</script>
<template>
  {{content}}
</template>
`
const cssSFCCode = `
<script setup>
import { ref, h } from 'vue'
import  './run.css'
</script>
<template>
  <div>hellow world</div>
</template>
`
function getHash() {
  return location.hash.slice(1)
}
export function updateStoreCode(code: string) {
  localStorage.setItem(
    getHash(),
    encodeURIComponent(code.replace(/^export default `|`$/g, ''))
  )
}
export function removeStoreCode() {
  localStorage.removeItem(getHash())
}
export function convertToExampleData(): ExampleData {
  const hash = getHash()
  const code = localStorage.getItem(hash) || ''
  if (!code) return {}
  const lang = hash.split('-').pop() || ''
  const runForRawCode = () => decodeURIComponent(code)
  const runForExport = () => 'export default `' + runForRawCode() + '`'
  const fileTypeMap: Record<string, ExampleData> = {
    xml: {
      'src/index.vue': welcomeSFCCode,
      'src/run.js': runForExport()
    },
    get html() {
      return this.xml
    },
    get js() {
      return this.javascript
    },
    css: {
      'src/index.vue': cssSFCCode,
      'src/run.css': runForRawCode()
    },
    javascript: {
      'src/index.vue': `<script setup>


${runForRawCode()}


</script>`
    },
    vue: {
      'src/index.vue': runForRawCode()
    },
    json: {
      'src/index.vue': jsonSFCCode,
      'src/run.json': runForRawCode()
    }
  }
  if (!(lang in fileTypeMap)) return {}
  return fileTypeMap[lang]
}
