<template>
  <ul id="main" ref="mainDom">
    <li v-for="(item, index) in list" :key="index" :class="{ active: 1 }">
      <div>
        <span>{{ item.text }}</span>
      </div>
    </li>
  </ul>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
const props = defineProps({
  list: {
    type: Array,
    default: () => []
  }
})
const mainDom = ref(null)
const circleDom = ref([])
const circleArr = ref([])
const maxW = ref(0)
const maxH = ref(0)
const timer = ref(null)
const timerArr = ref([])

onMounted(() => props.list.length && nextTick(initBubble))

onUnmounted(() => {
  timerArr.value.forEach((item) => {
    clearInterval(item)
  })
  clearInterval(timer.value)
})

function randomRgbColor() {
  // 随机生成RGB颜色
  var r = Math.floor(Math.random() * 256)
  var g = Math.floor(Math.random() * 256)
  var b = Math.floor(Math.random() * 256)
  return `rgb(${r},${g},${b})`
}
const initBubble = () => {
  const main = mainDom.value
  const divDom = main.getElementsByClassName('active') // 获取新增加的 dom
  if (!divDom.length) return

  // 清理每个球的定时器
  timerArr.value.forEach((item) => {
    clearInterval(item)
  })
  timerArr.value = []
  for (let i = 0; i < divDom.length; i++) {
    divDom[i].style.boxShadow = `0 0 20px ${randomRgbColor()} inset`
    divDom[i].style.width = '100px'
    divDom[i].style.height = '100px'
    divDom[i].style.fontSize = '12px'
    divDom[i].style.lineHeight = '16px'
    circleDom.value.push(divDom[i])
  }
  // 根据浏览器窗口的大小自动调节小球的运动空间
  window.onresize = () => {
    maxW.value = main.clientWidth - divDom[0].clientWidth // 为了让小球不卡在浏览器边缘
    maxH.value = main.clientHeight - divDom[0].clientHeight // 所以要减去自身的宽高
  }
  window.onresize()

  // 数组对象的初始化
  for (let i = 0; i < circleDom.value.length; i++) {
    let obj = {}
    obj.x = Math.floor(Math.random() * (maxW.value + 1)) // 初始 x 坐标
    obj.y = Math.floor(Math.random() * (maxH.value + 1)) // 初始 y 坐标
    obj.cx = obj.x + circleDom.value[0].offsetWidth / 2 // 圆心 x 坐标
    obj.cy = obj.y + circleDom.value[0].offsetHeight / 2 // 圆心 y 坐标
    obj.movex = Math.floor(Math.random() * 2) // x 轴移动方向
    obj.movey = Math.floor(Math.random() * 2) // y 轴移动方向
    obj.speed = 0.2 // 随机速度
    obj.timer = null // 计时器
    obj.index = i // 索引值
    circleArr.value.push(obj)
    // 小球位置初始化
    circleDom.value[i].style.left = obj.x + 'px'
    circleDom.value[i].style.top = obj.y + 'px'
    move(obj)
  }
}

// 移动函数
const move = (balls) => {
  // 每个小球单独有定时器
  balls.timer = setInterval(() => {
    if (balls.movex === 1) {
      // 如果往右跑，则一直加速度，碰到边界，改为反方向运动
      balls.x += balls.speed
      if (balls.x + balls.speed >= maxW.value) {
        // 防止小球出界
        balls.x = maxW.value
        balls.movex = 0 // 小球运动方向发生改变
      }
    } else {
      balls.x -= balls.speed // 1 和 0 表示正反方向
      if (balls.x - balls.speed <= 0) {
        balls.x = 0
        balls.movex = 1
      }
    }
    if (balls.movey === 1) {
      balls.y += balls.speed
      if (balls.y + balls.speed >= maxH.value) {
        balls.y = maxH.value
        balls.movey = 0
      }
    } else {
      balls.y -= balls.speed
      if (balls.y - balls.speed <= 0) {
        balls.y = 0
        balls.movey = 1
      }
    }
    if (circleDom.value[balls.index]) {
      balls.cx = balls.x + circleDom.value[0].offsetWidth / 2 // 小球圆心等于：运动中 x 的值加上自身的半径
      balls.cy = balls.y + circleDom.value[0].offsetHeight / 2
      circleDom.value[balls.index].style.left = balls.x + 'px' // 小球相对于屏幕的位置
      circleDom.value[balls.index].style.top = balls.y + 'px'
      crash(balls.index) // 每个小球进行碰撞检测
    }
  }, 25)
  timerArr.value.push(balls.timer)
}

// 碰撞函数
const crash = (a) => {
  const container = [...circleArr.value]
  const ball1x = container[a].cx // 在数组中任意球的圆心坐标
  const ball1y = container[a].cy // 思路：先随便拿一个球，然后遍历所有球，拿这个球和所有球的圆心距离比较
  for (let i = 0; i < container.length; i++) {
    if (i !== a) {
      // 判断取出来的球不是本身，才能和其他球进行距离判断
      const ball2x = container[i].cx // 将其他球的圆心坐标赋值给球 2
      const ball2y = container[i].cy
      // 圆心距 求两个点之间的距离, 开平方
      const distence = Math.sqrt(
        (ball1x - ball2x) * (ball1x - ball2x) +
          (ball1y - ball2y) * (ball1y - ball2y)
      )
      if (distence <= circleDom.value[0].offsetWidth) {
        // 球心距离和求直径比较
        if (ball1x > ball2x) {
          // 当前位于未知求的右方
          if (ball1y > ball2y) {
            // 预设未知球撞当前球，然后当前球改变运动
            container[a].movex = 1 // 1 表示为正值，对应的右和下
            container[a].movey = 1 // 0 表示为负值，对应的左和上
          } else if (ball1y < ball2y) {
            container[a].movex = 1
            container[a].movey = 0
          } else {
            container[a].movex = 1
          }
        } else if (ball1x < ball2x) {
          if (ball1y > ball2y) {
            container[a].movex = 0
            container[a].movey = 0
          } else if (ball1y < ball2y) {
            container[a].movex = 0
            container[a].movey = 1
          } else {
            container[a].movex = 0
          }
        } else {
          if (ball1y > ball2y) {
            container[a].movey = 1
          } else if (ball1y < ball2y) {
            container[a].movey = 0
          }
        }
      }
    }
  }
}
</script>

<style scoped>
#main {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 0;
}
#main > li {
  position: absolute;
  overflow: hidden;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
#main > li div {
  span {
    text-overflow: ellipsis;
    overflow: hidden;
    display: block;
    width: 100%;
    color: #fff;
    text-align: center;
  }
}
#main > li.active {
  animation: scaleBox 1s 1;
}
@keyframes scaleBox {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>
