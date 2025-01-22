<script setup lang="ts">
// import partnersRaw from '../partners.json'
import { ref, shallowRef, computed, onMounted } from 'vue'
import PartnerCard from './PartnerCard.vue'
import { Partner } from './type'
import { useConfig } from '../../../src/vitepress/composables/config'

const { config } = useConfig()
const partnersRaw = computed(() =>
  config.value.nav.map((e) => {
    console.log(e, '===')
    return {
      name: e.text,
      logo: 'vehikl.svg',
      flipLogo: true,
      intro: e.items.map((e) => e.text),
      description: '',
      proficiencies: '',
      region: [],
      location: '',
      website: {
        text: '',
        url: ''
      },
      contact: ''
    }
  })
)
console.log(partnersRaw)

const props = defineProps<{
  filter?: (p: Partner) => boolean | undefined
  showLinkToAll?: boolean
}>()

const mounted = ref(false)
const partners = shallowRef(partnersRaw as Partner[])

const filtered = computed(() =>
  props.filter ? partners.value.filter(props.filter) : partners.value
)

onMounted(() => {
  mounted.value = true
  const platinum = partners.value.filter((p) => p.platinum)
  shuffle(platinum)
  const normal = partners.value.filter((p) => !p.platinum)
  shuffle(normal)
  partners.value = [...platinum, ...normal]
})

function shuffle(array: Array<any>) {
  let currentIndex = array.length
  let temporaryValue
  let randomIndex

  // while there remain elements to shuffle...
  while (currentIndex !== 0) {
    // pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1
    // and swap it with the current element.
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }
  return array
}
</script>

<template>
  <div class="PartnerPage">
    <div class="featured">
      <h2>快速访问/分类</h2>
      <div class="PartnerList" v-show="mounted">
        <ClientOnly>
          <PartnerCard v-for="p in filtered" :key="p.name" :data="p" />
        </ClientOnly>
      </div>
    </div>
  </div>
</template>

<style scoped>
.PartnerList {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.PartnerPage {
  max-width: 960px;
  margin: 0px auto;
  padding-bottom: 16px;
}
h2 {
  padding: 24px;
  background-color: var(--vt-c-gray-dark-4);
  font-size: 1.1em;
  font-weight: 600;
  margin-bottom: 1.5em;
  color: var(--vt-c-text-2);
  border-radius: 12px 100% 5px 5px;
  text-align: left;
  padding-left: 44px;
}

@media (max-width: 768px) {
  .spotlight-inner,
  .featured {
    padding: 36px 28px;
  }
}

@media (max-width: 768px) {
  .browse-all {
    display: none;
  }
}
</style>
