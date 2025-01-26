<template>
  <div class="canvas-bubble-wrap" ref="container">
    <canvas ref="canvas" width="100%" height="100%"></canvas>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick, watchEffect } from 'vue'
import { Circle, type Item, maxW, maxH, circleArr } from './Circle'
import { useResizeObserver } from '@vueuse/core'
import { navList as data } from './navList'
import { listener } from './events'
import _ from 'lodash'
import { useRouter } from 'vitepress'

const container = ref<HTMLDivElement | null>(null)
const canvas = ref<HTMLCanvasElement | null>(null)

let ctx: CanvasRenderingContext2D | null = null

const maxCount = ref(40)

let animationFrameId: number = -1
let lastBubbleTime = 0

function clearRect() {
  ctx && ctx?.clearRect(0, 0, maxW.value, maxH.value)
}

function resizeCanvas() {
  if (canvas.value && container.value) {
    maxW.value = container.value.clientWidth
    maxH.value = container.value.clientHeight
    canvas.value.width = maxW.value
    canvas.value.height = maxH.value
    clearRect()
  }
}

onMounted(() => {
  if (container.value && canvas.value) {
    ctx = canvas.value.getContext('2d')
    resizeCanvas()
    const resize = _.debounce(() => {
      if (typeof document !== 'undefined') {
        const cw = document.body.clientWidth
        if (cw < 960) {
          maxCount.value = 38
        }
        if (cw < 794) {
          maxCount.value = 36
        }
        if (cw < 576) {
          maxCount.value = 20
        }
        if (cw < 370) {
          maxCount.value = 12
        }
      }

      resizeCanvas()
      initBubbles()
    }, 150)
    const clearup = listener(canvas.value, useRouter())
    useResizeObserver(container.value, resize)
    onUnmounted(() => {
      cancelAnimationFrame(animationFrameId)
      clearup()
    })
  }
})

watchEffect(() => data.value.length && nextTick(initBubbles))

function initBubbles() {
  circleArr.length = 0
  for (let i = 0; i < maxCount.value; i++) {
    addNewBubble()
  }
  lastBubbleTime = performance.now()
  animate(lastBubbleTime)
}

function addNewBubble() {
  if (ctx) {
    const list = data.value
    if (circleArr.length >= maxCount.value) {
      const indexToRemove = _.random(circleArr.length)
      circleArr[indexToRemove].explode()
    } else {
      let nextIndex = _.random(0, list.length - 1)
      let textContext = list[nextIndex]
      while (
        circleArr.find((e) => e.textContext.name === textContext.name)
      ) {
        nextIndex = _.random(0, list.length - 1)
        textContext = list[nextIndex]
      }
      circleArr.push(new Circle<Item>({ textContext, ctx }))
    }
  }
}

const animate = (timestamp: number) => {
  if (typeof requestAnimationFrame !== 'undefined') {
    clearRect()
    for (let i = 0; i < circleArr.length; i++) {
      const circle = circleArr[i]
      circle.update()
      const isExploded = circle.draw()
      if (isExploded) {
        circleArr.splice(i, 1) // 爆炸结束后移除圆形
        i--
      }
      for (let j = i + 1; j < circleArr.length; j++) {
        circle.checkCollision(circleArr[j])
      }
    }
    if (timestamp - lastBubbleTime >= 2000) {
      addNewBubble()
      lastBubbleTime = timestamp
    }
    animationFrameId = requestAnimationFrame(animate)
  }
}
</script>

<style scoped>
.canvas-bubble-wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 !important;
  box-sizing: border-box;
  margin: 0 auto !important;
  width: 80vw;
  height: 120vh;
}
.canvas-bubble-wrap canvas {
  width: 100%;
  height: 100%;
  display: block;
  padding: 0;
  margin: 0;
}

@media (max-width: 960px) {
  .canvas-bubble-wrap {
    padding: 0;
    /* background-color: #fff; */
    width: 100vw;
    height: 150vh;
  }
}

@media (max-width: 794px) {
  .canvas-bubble-wrap {
    /* background-color: #aa3535; */
    padding: 0;
    width: 100vw;
    height: 170vh;
  }
}

@media (max-width: 576px) {
  .canvas-bubble-wrap {
    padding: 0;
    height: 200vh;
    width: 100vw;
    /* background-color: #f19898; */
  }
}

@media (max-width: 370px) {
  .canvas-bubble-wrap {
    padding: 0;
    /* background-color: #8e1111; */
    width: 100vw;
    height: 220vh;
  }
}
</style>
