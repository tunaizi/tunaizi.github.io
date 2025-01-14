import { Router } from 'vitepress'
let codeLinkStart = 0
export default function codeLink(router: Router) {
  const inBrowser = typeof document !== 'undefined'
  if (inBrowser && !codeLinkStart) {
    window.addEventListener('click', (e: MouseEvent) => {
      const el = e.target as HTMLElement
      if (el.matches('div[class*="language-"] > button.link')) {
        const parent = el.parentElement as HTMLElement
        const previousElementSibling = el.previousElementSibling
        const lang =
          el.previousElementSibling?.previousElementSibling?.textContent
        if (!parent || !previousElementSibling) return
        const isShell = /language-(shellscript|shell|bash|sh|zsh)/.test(
          parent.className
        )
        let text = ''
        previousElementSibling
          .querySelectorAll('span.line:not(.diff.remove)')
          .forEach((node) => (text += (node.textContent || '') + '\n'))
        text = text.slice(0, -1)
        if (isShell) {
          text = text.replace(/^ *(\$|>) /gm, '').trim()
        }
        const key = `code-link-${parent.id}-${lang}`
        // if (!codeMap.has(key)) {
        //   codeMap.set(key, text)
        // }
        sessionStorage.setItem(key, encodeURIComponent(text))
        const newUrl = '/repl#' + key
        router.go(newUrl)
      }
    })
    codeLinkStart = 1
  }
}
