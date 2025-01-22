import MarkdownIt from 'markdown-it'
import Renderer from 'markdown-it/lib/renderer'
import type Token from 'markdown-it/lib/token'

type FenceArgs = [
  tokens: Token[],
  idx: number,
  options: MarkdownIt.Options,
  env: any,
  self: Renderer
]

function extractLang(info: string) {
  return info
    .trim()
    .replace(/:(no-)?line-numbers({| |$).*/, '')
    .replace(/(-vue|{| ).*$/, '')
    .replace(/^vue-html$/, 'template')
}

const endsStr = '</div>'
const codeLinkButton = `<button class="link">将此代码在线运行</button>`
const endsStrLength = endsStr.length
const langs = ['xml', 'html', 'css', 'javascript', 'vue', 'json', 'js']
const extractLangReg = /(<div class="language-\w+?)">/
const codeAreaLinkClass = 'codearea-link'

export const codeMdPlugin = (md: MarkdownIt) => {
  let fence = md.renderer.rules.fence!
  md.renderer.rules.fence = function (...args: FenceArgs): string {
    const [tokens, idx] = args
    const token = tokens[idx]
    token.info = token.info.replace(/\[.*\]/, '')
    const lang = extractLang(token.info)
    let rawCode = fence(...args)
    if (
      langs.includes(lang) &&
      !rawCode.endsWith(
        codeLinkButton + endsStr,
        rawCode.length - codeLinkButton.length + endsStrLength
      ) &&
      rawCode.endsWith(endsStr)
    ) {
      let langId = Math.random().toString(36).substring(2, 15)
      rawCode = `${rawCode.substring(
        0,
        rawCode.length - endsStrLength
      )}${codeLinkButton}</div>`.replace(
        extractLangReg,
        `$1 ${codeAreaLinkClass}" id="${langId}">`
      )
    }
    return rawCode
  }
}
