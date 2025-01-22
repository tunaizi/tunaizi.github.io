<template>
  <div class="svg-preview">
    <div class="preview-header">
      <div class="preview-controls">
        <span class="preview-title">SVG 预览</span>
      </div>
      <div class="size-controls" v-if="showSizeControls">
        <label>
          宽度:
          <input type="number" v-model="width" @input="updateSize" />
        </label>
        <label>
          高度:
          <input type="number" v-model="height" @input="updateSize" />
        </label>
      </div>
    </div>

    <div class="preview-content">
      <div
        class="svg-result"
        v-html="sanitizedSvgContent"
        :style="{
          width: `${width}px`,
          height: `${height}px`
        }"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const props = defineProps({
  code: {
    type: String,
    required: true
  },
  showSizeControls: {
    type: Boolean,
    default: true
  }
})

const copied = ref(false)
const isExpanded = ref(false)
const width = ref(200)
const height = ref(200)

// 从原始SVG代码中提取尺寸
const extractSvgSize = () => {
  const widthMatch = props.code.match(/width="(\d+)"/)
  const heightMatch = props.code.match(/height="(\d+)"/)

  if (widthMatch) width.value = parseInt(widthMatch[1])
  if (heightMatch) height.value = parseInt(heightMatch[1])
}

const sanitizedSvgContent = computed(() => {
  let code = props.code

  if (!code.includes('xmlns')) {
    code = code.replace('<svg', '<svg xmlns="http://www.w3.org/2000/svg"')
  }

  // 更新SVG尺寸
  code = code.replace(/width="(\d+)"/, `width="${width.value}"`)
  code = code.replace(/height="(\d+)"/, `height="${height.value}"`)

  return code
})

const updateSize = () => {
  // 可以添加尺寸限制
  width.value = Math.max(0, Math.min(1000, width.value))
  height.value = Math.max(0, Math.min(1000, height.value))
}

onMounted(() => {
  extractSvgSize()
})
</script>

<style scoped>
.svg-preview {
  margin: 16px 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  overflow: hidden;
  background-color: var(--vp-c-bg-soft);
}

.preview-header {
  display: flex;
  width: 100%;
  justify-content: space-between;
  background-color: var(--vp-c-bg-soft);
  border-bottom: 1px solid var(--vp-c-divider);
}

.preview-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.preview-actions {
  display: flex;
  gap: 8px;
}

.preview-title {
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-1);
}

.size-controls {
  display: flex;
  gap: 16px;
}

.size-controls label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
}

.size-controls input {
  width: 60px;
  padding: 2px 4px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
}

.preview-content {
  padding: 20px;
  background-color: var(--vp-c-bg);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
}

.svg-result {
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
}

/* 深色模式适配 */
:root.dark .svg-preview {
  background-color: var(--vp-c-bg-soft);
}

/* 响应式设计 */
@media (max-width: 640px) {
  .preview-header {
    padding: 8px 12px;
  }

  .preview-content {
    padding: 16px;
  }
  .size-controls {
    flex-direction: column;
    gap: 8px;
  }
}
</style>
