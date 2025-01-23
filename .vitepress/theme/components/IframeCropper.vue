<template>
  <a class="get-started" @click="show = true" v-if="false">
    AI 智能对话
    <svg
      class="icon"
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="10"
      viewBox="0 0 24 24"
    >
      <path
        d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"
      />
    </svg>
  </a>
  <ElDialog
    title="doubaoAI"
    width="95%"
    body-class="ai-content"
    v-model="show"
    :modal="true"
    :appendToBody="true"
  >
    <div ref="iframe" style="width: 100%; height: 100%">
      <iframe
        src="https://www.doubao.com/chat/create-image"
        frameborder="0"
        style="width: 100%; height: calc(100% - 20px)"
      ></iframe>
      <!-- <img src="../../../src/public/images/italic-demo.png" alt="" /> -->
    </div>
    <template #footer v-if="false">
      <div class="dialog-footer">
        <el-button :loading="loading" type="primary" @click="captureIframe"
          >截图 Capture Iframe</el-button
        >
        <div class="image-container">
          <img
            v-if="imageSrc"
            ref="image"
            :src="imageSrc"
            alt="Captured Image"
          />
          <div ref="cropper"></div>
        </div>
      </div>
    </template>
  </ElDialog>
  <div></div>
</template>

<script setup lang="ts">
import { defineComponent, ref, onMounted, watchEffect } from 'vue'
import html2canvas from 'html2canvas'
import Cropper from 'cropperjs'
import 'cropperjs/dist/cropper.css'

const iframe = ref<HTMLIFrameElement | null>(null)
const show = ref(false)
const loading = ref(false)
const image = ref<HTMLImageElement | null>(null)
const cropper = ref<Cropper | null>(null)
const imageSrc = ref<string | null>(null)

const captureIframe = async () => {
  if (!iframe.value) return
  console.log(iframe.value)

  // const iframeDocument =
  //   iframe.value.contentDocument || iframe.value.contentWindow.document
  loading.value = true
  const canvas = await html2canvas(iframe.value)
  imageSrc.value = canvas.toDataURL('image/png')
  loading.value = !true
}

watchEffect(() => {
  if (image.value) {
    cropper.value = new Cropper(image.value, {
      // aspectRatio: 16 / 9,
      viewMode: 1,
      crop(event) {
        console.log(event.detail.x)
        console.log(event.detail.y)
        console.log(event.detail.width)
        console.log(event.detail.height)
        console.log(event.detail.rotate)
        console.log(event.detail.scaleX)
        console.log(event.detail.scaleY)
      }
    })
  }
})
</script>

<style scoped>
.image-container {
  position: absolute;
  left: 0;
  top: 0;
}
/* 你可以在这里添加一些样式 */
</style>
