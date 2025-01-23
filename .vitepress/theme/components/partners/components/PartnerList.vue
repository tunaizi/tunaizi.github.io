<script setup lang="ts">
import { ref, shallowRef, computed, onMounted } from 'vue'
import PartnerCard from './PartnerCard.vue'
import { Partner } from './type'
import { useConfig } from '../../../src/vitepress/composables/config'
const { config } = useConfig()
const filtered = computed(() =>
  config.value.nav.map((ite) => {
    return {
      ...ite,
      items: ite.items.map((e) => {
        return {
          name: e.text,
          logo: 'vehikl.svg',
          flipLogo: true,
          intro: e.text,
          description: '',
          proficiencies: '',
          region: [],
          location: '',
          website: {
            text: "",
            url: e.link
          },
          contact: ''
        }
      })
    }
  })
)

const props = defineProps<{
  filter?: (p: Partner) => boolean | undefined
  showLinkToAll?: boolean
}>()

const mounted = ref(false)

onMounted(() => {
  mounted.value = true
})
</script>

<template>
  <div class="PartnerPage">
    <div class="featured" v-for="p1 in filtered">
      <h2>{{ p1.text }}</h2>
      <div class="PartnerList" v-show="mounted">
        <ClientOnly>
          <PartnerCard v-for="p in p1.items" :key="p.name" :data="p" />
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
</style>
