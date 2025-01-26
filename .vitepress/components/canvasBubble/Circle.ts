import { ref } from 'vue'
import {
  randomRgbColor,
  toAgba,
  rgbToHsl,
  generateShades,
  getOffsetColor,
  extractRgbList
} from './tools'
import _ from 'lodash'
export const maxW = ref(0)
export const maxH = ref(0)
export const circleArr: Circle<Item>[] = []

export type CircleContentCtx = { name: string; link?: string }

export type CircleOptions<T extends CircleContentCtx = CircleContentCtx> =
  Partial<Pick<Circle<T>, 'color' | 'movex' | 'movey' | 'speed'>> & {
    textContext: T
    ctx: CanvasRenderingContext2D
  }

export type Item = CircleContentCtx & {
  name: string
  link: string // 添加 link 属性
}

export class Circle<T extends CircleContentCtx = CircleContentCtx> {
  static maxLines: number = 4 // 添加 maxLines 属性
  ctx: CanvasRenderingContext2D
  x: number = 0
  y: number = 0
  color: string = ''
  movex: number = 0
  movey: number = 0
  speed: number = 0
  scale: number = 1 // 添加 scale 属性
  fontSize: number = 12
  isExploding: boolean = false // 添加 isExploding 属性
  explosionFrames: number = 0 // 添加 explosionFrames 属性
  isHighlighted: boolean = false // 添加 isHighlighted 属性
  currentRadius: number = 0 // 添加 currentRadius 属性
  lines: string[] = []
  textContext: T
  gradientSteps: string[] = []

  constructor(opt: CircleOptions<T>) {
    const lines = Circle.getLines(opt.ctx, opt.textContext.name, 100)
    const currentRadius = Circle.calculateRadius(opt.ctx, lines)
    this.ctx = opt.ctx
    const color = randomRgbColor()
    const gradientSteps = generateShades(color, 5)
    this.textContext = opt.textContext
    Object.assign(
      this,
      Object.assign(
        opt,
        {
          fontSize: _.random(14, 22),
          color,
          lines,
          movex: Math.random() * 0.5 - 0.25,
          movey: Math.random() * 0.5 - 0.25,
          speed: 0.16,
          isExploding: false, // 初始化 isExploding 为 false
          explosionFrames: 0, // 初始化 explosionFrames 为 0
          isHighlighted: false, // 初始化 isHighlighted 为 false
          currentRadius,
          gradientSteps
        },
        Circle.generateNonOverlappingCircle(currentRadius)
      )
    )
  }
  static randomInternalPosition(radius: number): { x: number; y: number }
  static randomInternalPosition(
    radius: number,
    isArr?: true
  ): [number, number]
  static randomInternalPosition(
    radius: number,
    isArr?: true
  ): [number, number] | { x: number; y: number } {
    const rx = _.random(radius, maxW.value - 2 * radius)
    const ry = _.random(radius, maxH.value - 2 * radius)
    return isArr ? [rx, ry] : { x: rx, y: ry }
  }

  static calculateRadius(
    ctx: CanvasRenderingContext2D,
    lines: string[]
  ): number {
    ctx.font = '16px Arial'
    const lineHeight = 14
    const totalHeight = lines.length * lineHeight
    const textWidth = lines.reduce((maxWidth, line) => {
      const metrics = ctx.measureText(line)
      return Math.max(maxWidth, metrics.width)
    }, 0)
    const maxDimension = Math.max(textWidth, totalHeight)
    return Math.ceil(Math.max(30, maxDimension * 0.5 + 20))
  }

  static generateNonOverlappingCircle(radius: number) {
    let validPosition = false
    const maxAttempts = 1000 // 设置最大尝试次数
    let attempts = 0
    let x: number = 0,
      y: number = 0
    while (!validPosition && attempts < maxAttempts) {
      ;[x, y] = Circle.randomInternalPosition(radius, true)
      validPosition = true
      for (const existingCircle of circleArr) {
        const dx = x - existingCircle.x
        const dy = y - existingCircle.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        if (distance < radius + existingCircle.currentRadius) {
          validPosition = false
          break
        }
      }
      attempts++
    }
    if (!validPosition) {
      console.error('如果超过最大尝试次数，随机选择一个位置')
      return Circle.randomInternalPosition(radius)
    }
    return { x, y }
  }

  static getLines(
    ctx: CanvasRenderingContext2D,
    text: string | undefined,
    maxWidth: number
  ): string[] {
    const safeText = text || ''
    let line = ''
    let lines: string[] = []
    for (let i = 0; i < safeText.length; i++) {
      const char = safeText[i]
      const testLine = line + char
      const metrics = ctx.measureText(testLine)
      const testWidth = metrics.width

      if (testWidth > maxWidth && line.length > 0) {
        lines.push(line.trim())
        line = char
      } else {
        line = testLine
      }
    }
    lines.push(line.trim())
    if (lines.length > this.maxLines) {
      lines = lines.slice(0, this.maxLines - 1)
      let lastLine = lines[lines.length - 1]
      const metrics = ctx.measureText(lastLine + '...')
      while (metrics.width > maxWidth && lastLine.length > 0) {
        lastLine = lastLine.slice(0, -1)
        const newMetrics = ctx.measureText(lastLine + '...')
        if (newMetrics.width <= maxWidth) {
          lastLine += '...'
          break
        }
      }
      lines[lines.length - 1] = lastLine
    }
    return lines
  }

  draw() {
    const ctx = this.ctx
    ctx.beginPath()
    if (this.isExploding) {
      // 绘制爆炸效果
      const explosionRadius =
        this.currentRadius * (1 + this.explosionFrames * 0.05) // 使用 currentRadius
      ctx.arc(this.x, this.y, explosionRadius, 0, Math.PI * 2)
      ctx.fillStyle = toAgba(this.color, 1 - this.explosionFrames * 0.025) // 逐渐变透明
      ctx.fill()
      this.explosionFrames++
      if (this.explosionFrames > 20) {
        this.isExploding = false
        this.scale = 0
        return true // 返回 true 表示爆炸结束
      }
    } else {
      ctx.arc(this.x, this.y, this.currentRadius, 0, Math.PI * 2)
      // 使用稍微偏移的颜色作为阴影颜色
      ctx.shadowColor = getOffsetColor(this.color, 100) // 偏移10
      ctx.shadowBlur = 20
      ctx.shadowOffsetX = 0
      ctx.shadowOffsetY = 0
      // 创建渐变填充
      if (!this.isHighlighted) {
        const gradient = ctx.createRadialGradient(
          this.x,
          this.y,
          0,
          this.x,
          this.y,
          this.currentRadius
        )
        const [c1, c2, c3, c4, c5] = this.gradientSteps
        gradient.addColorStop(1, toAgba(c1, 1))
        gradient.addColorStop(0.8, toAgba(c2, 1))
        gradient.addColorStop(0.7, toAgba(c3, 1))
        gradient.addColorStop(0.5, toAgba(c4, 1))
        gradient.addColorStop(0.3, toAgba(c5, 0.5))
        gradient.addColorStop(0, toAgba(c5, 0))

        ctx.fillStyle = gradient
      }
      ctx.fill()
      this.scale += 0.05
      if (this.scale > 1) {
        this.scale = 1
      }
      if (this.isHighlighted) {
        ctx.strokeStyle = getOffsetColor(this.gradientSteps[3], 50)
        ctx.lineWidth = 5
        ctx.stroke()
        const gradient = ctx.createRadialGradient(
          this.x,
          this.y,
          0,
          this.x,
          this.y,
          this.currentRadius
        )
        const [c1, c2, c3, c4, c5] = this.gradientSteps
        gradient.addColorStop(1, toAgba(c5, 1))
        gradient.addColorStop(0, toAgba(c1, 0))
        ctx.fillStyle = gradient
      }
      this.drawText()
    }
    return false
  }

  drawText() {
    const ctx = this.ctx
    // 计算背景颜色的亮度
    const brightness = rgbToHsl(extractRgbList(this.color))[2]
    ctx.fillStyle =
      brightness > 0.5 ? 'rgb(0, 0, 0)' : 'rgb(219, 219, 219)'
    // 根据亮度选择文字颜色
    ctx.font = `${this.fontSize}px Arial`
    if (this.isHighlighted) {
      // ctx.fillStyle = brightness > 0.5 ? '#000000' : '#ffFFff'
      ctx.fillStyle = '#e3643a'
      ctx.font = '18px Arial'
    }
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    const lineHeight = 20
    const totalHeight = this.lines.length * lineHeight
    const startY = this.y - totalHeight / 3.3 // 调整起始绘制位置

    this.lines.forEach((line, index) => {
      ctx.fillText(line, this.x, startY + index * lineHeight)
    })
  }

  update() {
    if (!this.isExploding) {
      const maxWval = maxW.value
      const maxHval = maxH.value
      this.x += this.movex * this.speed
      this.y += this.movey * this.speed
      if (
        this.x + this.currentRadius * this.scale >= maxWval ||
        this.x - this.currentRadius * this.scale <= 0
      ) {
        this.movex *= -1
        this.x =
          this.x + this.currentRadius * this.scale >= maxWval
            ? maxWval - this.currentRadius * this.scale
            : this.currentRadius * this.scale
      }
      if (
        this.y + this.currentRadius * this.scale >= maxHval ||
        this.y - this.currentRadius * this.scale <= 0
      ) {
        this.movey *= -1
        this.y =
          this.y + this.currentRadius * this.scale >= maxHval
            ? maxHval - this.currentRadius * this.scale
            : this.currentRadius * this.scale
      }
    }
  }

  checkCollision(other: Circle<T>) {
    if (!this.isExploding && !other.isExploding) {
      const dx = this.x - other.x
      const dy = this.y - other.y
      const distance = Math.sqrt(dx * dx + dy * dy)
      if (distance < this.currentRadius + other.currentRadius) {
        ;[this.movex, this.movey, other.movex, other.movey] = [
          other.movex,
          other.movey,
          this.movex,
          this.movey
        ]
      }
    }
  }

  explode() {
    this.isExploding = true
  }
  setHighlighted(highlighted: boolean) {
    this.isHighlighted = highlighted
  }
}
