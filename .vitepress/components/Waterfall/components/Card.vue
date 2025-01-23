<script setup lang="ts">
import { ViewCard } from '../types/waterfall'
import LazyImg from './LazyImg.vue'
import { withBase } from 'vitepress'

const props = defineProps<{
  data: ViewCard
  hero?: boolean
  page?: boolean
}>()

const { text, link, anchor, activeMatch, items, headers, collapsed } =
  props.data
console.log(props.data, '=========')
</script>

<template>
  <component
    :is="page ? 'div' : 'a'"
    class="partner-card"
    :class="{ hero, page }"
    :href="link"
  >
    <div class="info">
      <h4>{{ text }}</h4>
      <p v-if="headers?.length">
        <span class="proficiency" v-for="p in headers">
          <a :href="link + '#' + p.anchor">{{ p.text }}</a>
        </span>
      </p>
    </div>
    <!-- <LazyImg :url="url" class="img" /> -->
  </component>
</template>

<style scoped>
.partner-card {
  background-color: var(--vt-c-bg);
  padding: 12px 4px 4px 8px;
  border-radius: 12px;
  box-shadow: 0 12px 12px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  width: 99%;
  font-size: 15px;
  transition: background-color 0.5s, box-shadow 0.25s ease,
    border-color 0.25s ease;
  border: 3px solid var(--vt-c-divider-light);
}

h3 {
  font-size: 1.3em;
  font-weight: 700;
  letter-spacing: -0.1px;
  margin-bottom: 1em;
}

.partner-card:hover {
  box-shadow: 0 12px 12px rgba(0, 0, 0, 0.1);
}

.dark .partner-card:not(.hero):hover {
  border-color: #555;
}
.partner-card p {
  margin-bottom: 1.6em;
}

h4 {
  font-size: 1.2em;
  font-weight: 600;
  /* margin-bottom: 0.6em; */
}

.proficiency {
  display: inline-block;
  color: var(--vt-c-text-code);
  font-weight: 600;
  font-size: 0.85em;
  margin: 2px;
  background-color: var(--vt-c-bg-mute);
  padding: 4px 10px;
  border-radius: 6px;
}
</style>
