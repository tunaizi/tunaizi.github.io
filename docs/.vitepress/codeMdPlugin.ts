import MarkdownIt from 'markdown-it'
export const codeMdPlugin = async (md: MarkdownIt) => {
  const defaultFence = md.renderer.rules.fence

  if (defaultFence) {
    md.renderer.rules.fence = (...args) => {
      const randomButton = `<button class="link"></button>`
      let result = defaultFence(...args)
      let endsStr = '</div>'
      if (
        !result.endsWith(
          randomButton + endsStr,
          result.length - randomButton.length + endsStr.length
        )
      ) {
        if (result.endsWith(endsStr)) {
          result = `${result.substring(
            0,
            result.length - endsStr.length
          )}${randomButton}</div>`
        }
      }
      return result
    }
  }
}
