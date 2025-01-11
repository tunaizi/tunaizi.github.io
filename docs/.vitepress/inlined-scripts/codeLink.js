;(() => {
  const inBrowser = typeof document !== 'undefined'
  if (inBrowser) {
    window.addEventListener('click', (e) => {
      const el = e.target
      if (el.matches('div[class*="language-"] > button.link')) {
        console.dir(el)
        const parent = el.parentElement
        const previousElementSibling = el.previousElementSibling
        if (!parent || !previousElementSibling) {
          return
        }
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
        console.log(text)
      }
    })
  }
})()
