<template>
  <!-- <div class="featured" v-for="p1 in data">
    <h2>{{ p1.text }}</h2>
    <WaterfallList
      :list="p1.items"
      :row-key="config.rowKey"
      :gutter="config.gutter"
      :has-around-gutter="config.hasAroundGutter"
      :width="config.width"
      :breakpoints="config.breakpoints"
      :img-selector="config.imgSelector"
      :animation-effect="config.animationEffect"
      :animation-duration="config.animationDuration"
      :animation-delay="config.animationDelay"
      :lazyload="config.lazyload"
      :load-props="config.loadProps"
      :cross-origin="config.crossOrigin"
      :delay="config.delay"
    >
      <template #item="{ item }">
        <Card :data="item"></Card>
      </template>
    </WaterfallList>
  </div> -->
  <div class="featured">
    <WaterfallList
      :list="data"
      :row-key="config.rowKey"
      :gutter="config.gutter"
      :has-around-gutter="config.hasAroundGutter"
      :width="config.width"
      :breakpoints="config.breakpoints"
      :img-selector="config.imgSelector"
      :animation-effect="config.animationEffect"
      :animation-duration="config.animationDuration"
      :animation-delay="config.animationDelay"
      :lazyload="config.lazyload"
      :load-props="config.loadProps"
      :cross-origin="config.crossOrigin"
      :delay="config.delay"
    >
      <template #item="{ item }">
        <Card :data="item"></Card>
      </template>
    </WaterfallList>
  </div>
</template>

<script lang="ts" setup>
// import imageData from '../imageData.json'
import { useConfig } from '@theme/src/vitepress/composables/config'
const vitepressConfig = useConfig()
const data = computed(() => {
  return (vitepressConfig?.config.value.nav || []).reduce(
    //@ts-ignore
    (p, e) => (p = p.concat(e.items)),
    [] as ViewCard[]
  )
})
import WaterfallList from './List.vue'
import Card from './Card.vue'

import loading from '../image/loading.png'
import error from '../image/error.png'
import { computed, ref, reactive } from 'vue'
import { ViewCard } from '../types/waterfall'

// import { ViewCard } from '../types/waterfall'
// const data = reactive<ViewCard[]>(
//   (imageData?.list ?? []) as unknown as ViewCard[]
// )

const props = withDefaults(
  defineProps<{
    data?: any
    config?: Record<string, any>
    // 是否开启懒加载
    crossOrigin?: Boolean
    // 延迟时间
    delay?: number
    // imgSelector
    imgSelector?: string
    // 加载配置
    loadProps?: {
      loading: string
      error: string
    }
    // 是否懒加载
    lazyload?: Boolean
    // 动画效果
    maxHeight?: string | number
    noMore?: boolean
  }>(),
  {
    config: () => ({}),
    maxHeight: 'calc(100vh - 140px)',
    noMore: false
  }
)
const config = computed(() => {
  return Object.assign(
    {
      // 唯一key值
      rowKey: 'id',
      // 卡片之间的间隙
      gutter: 10,
      // 是否有周围的gutter
      hasAroundGutter: true,
      // 卡片在PC上的宽度
      width: 300,
      // 自定义行显示个数，主要用于对移动端的适配
      breakpoints: {
        1920: {
          rowPerView: 5
        },
        1000: {
          // 当屏幕宽度小于等于1200
          rowPerView: 4
        },
        800: {
          // 当屏幕宽度小于等于800
          rowPerView: 3
        },
        500: {
          // 当屏幕宽度小于等于500
          rowPerView: 2
        }
      },
      // 动画效果
      animationEffect: 'animate__fadeInUp',
      // 动画时间
      animationDuration: 1000,
      // 动画延迟
      animationDelay: 0,
      // 布局刷新的防抖时间。！注意：此处设置为0将会出现视图更新问题
      delay: 50,
      // 背景色
      backgroundColor: '#fff',
      // imgSelector
      imgSelector: 'url',
      // 加载配置
      loadProps: {
        loading,
        error
      },
      // 是否懒加载
      lazyload: true
    },
    props.config
  )
})
</script>

<style scoped>
.featured {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 10vw;
  box-sizing: border-box;
  margin: 0 auto;
}
@media (max-width: 960px) {
  .featured {
    padding: 0;
  }
}

@media (max-width: 794px) {
  .featured {
    padding: 0;
  }
}

@media (max-width: 576px) {
  .featured {
    padding: 0;
  }
}

@media (max-width: 370px) {
  .featured {
    padding: 0;
  }
}

.featured > h2 {
  padding: 24px;
  background-color: var(--vt-c-gray-dark-4);
  font-size: 1.1em;
  font-weight: 600;
  margin-bottom: 1.5em;
  color: var(--vt-c-text-2);
  border-radius: 12px 100% 5px 5px;
  text-align: left;
  padding-left: 44px;
  width: 100%;
}
</style>
