import { Circle, Item } from './Circle'

export function randomRgbColor() {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)
  return `rgb(${r},${g},${b})`
}

export function rgbToHsl([r, g, b]: [r: number, g: number, b: number]): [
  number,
  number,
  number
] {
  r /= 255
  g /= 255
  b /= 255

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  let h = 0
  let s = 0
  const l = (max + min) / 2

  if (max !== min) {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0)
        break
      case g:
        h = (b - r) / d + 2
        break
      case b:
        h = (r - g) / d + 4
        break
    }

    h /= 6
  }

  return [h, s, l]
}

function hslToRgb(
  h: number,
  s: number,
  l: number
): [number, number, number] {
  let r: number, g: number, b: number
  if (s === 0) {
    r = g = b = l // achromatic
  } else {
    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1
      if (t > 1) t -= 1
      if (t < 1 / 6) return p + (q - p) * 6 * t
      if (t < 1 / 2) return q
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
      return p
    }

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s
    const p = 2 * l - q

    r = hue2rgb(p, q, h + 1 / 3)
    g = hue2rgb(p, q, h)
    b = hue2rgb(p, q, h - 1 / 3)
  }

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)]
}

export function generateShades(
  rgbColor: string,
  numShades: number = 5
): string[] {
  // 将 RGB 转换为 HSL
  const [h, s, l] = rgbToHsl(extractRgbList(rgbColor))
  // 生成从深到浅的颜色
  const shades: string[] = []
  for (let i = 0; i < numShades; i++) {
    const newL = l * (1 - i / (numShades - 1))
    const [newR, newG, newB] = hslToRgb(h, s, newL)
    shades.push(`rgb(${newR}, ${newG}, ${newB})`)
  }
  return shades
}

export function getOffsetColor(color: string, offset: number): string {
  const rgb = color.slice(4, -1).split(',').map(Number)
  const offsetRgb = rgb.map((c) => Math.min(255, Math.max(0, c + offset)))
  return `rgb(${offsetRgb.join(',')})`
}

export function extractRgbStr(color: string): string {
  return color.slice(4, -1)
}

export function extractRgbList(color: string): [number, number, number] {
  return extractRgbStr(color)
    .split(',')
    .map((e) => Number(e)) as [number, number, number]
}

export function toAgba(color: string, opacity: number): string {
  return `rgba(${extractRgbStr(color)}, ${opacity})`
}

export function randomText(length: number): string {
  const chineseStart = 0x4e00 // 中文字符的起始Unicode码点
  const chineseEnd = 0x9fa5 // 中文字符的结束Unicode码点
  const englishStart = 0x41 // 英文大写字母的起始Unicode码点
  const englishEnd = 0x5a // 英文大写字母的结束Unicode码点
  const englishLowerStart = 0x61 // 英文小写字母的起始Unicode码点
  const englishLowerEnd = 0x7a // 英文小写字母的结束Unicode码点
  const numberStart = 0x30 // 数字的起始Unicode码点
  const numberEnd = 0x39 // 数字的结束Unicode码点

  let result = ''
  const chineseCount = Math.floor(length * 0.3)
  const englishCount = Math.floor(length * 0.3)
  const otherCount = length - chineseCount - englishCount

  // 生成中文字符
  for (let i = 0; i < chineseCount; i++) {
    const randomChar = String.fromCharCode(
      Math.floor(Math.random() * (chineseEnd - chineseStart + 1)) +
        chineseStart
    )
    result += randomChar
  }

  // 生成英文字符
  for (let i = 0; i < englishCount; i++) {
    const isUpperCase = Math.random() > 0.5
    const randomChar = isUpperCase
      ? String.fromCharCode(
          Math.floor(Math.random() * (englishEnd - englishStart + 1)) +
            englishStart
        )
      : String.fromCharCode(
          Math.floor(
            Math.random() * (englishLowerEnd - englishLowerStart + 1)
          ) + englishLowerStart
        )
    result += randomChar
  }

  // 生成其他字符
  for (let i = 0; i < otherCount; i++) {
    const randomCategory = Math.floor(Math.random() * 3)

    let randomChar
    switch (randomCategory) {
      case 0: // 英文大写字母
        randomChar = String.fromCharCode(
          Math.floor(Math.random() * (englishEnd - englishStart + 1)) +
            englishStart
        )
        break
      case 1: // 英文小写字母
        randomChar = String.fromCharCode(
          Math.floor(
            Math.random() * (englishLowerEnd - englishLowerStart + 1)
          ) + englishLowerStart
        )
        break
      case 2: // 数字
        randomChar = String.fromCharCode(
          Math.floor(Math.random() * (numberEnd - numberStart + 1)) +
            numberStart
        )
        break
    }

    result += randomChar
  }

  // 打乱结果字符串
  result = result
    .split('')
    .sort(() => 0.5 - Math.random())
    .join('')

  return result
}

export function getDistance(
  canvas: HTMLCanvasElement,
  event: MouseEvent,
  circle: { x: number; y: number }
) {
  const rect = canvas.getBoundingClientRect()
  const mouseX = event.clientX - rect.left
  const mouseY = event.clientY - rect.top
  const dx = mouseX - circle.x
  const dy = mouseY - circle.y
  return Math.sqrt(dx * dx + dy * dy)
}
