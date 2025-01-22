---
layout: page
# page: true
navbar: false
sidebar: false
aside: false
footer: false
isRepl: true
editLink: false
returnToTop: false
---

<script>
import { defineAsyncComponent } from 'vue'
import ReplLoading from '../.vitepress/theme/components/ReplLoading.vue'
export default {
  components: {
    ExampleRepl: defineAsyncComponent({
      loader: () =>import('../.vitepress/repl/ExampleRepl.vue'),
      loadingComponent: ReplLoading
    })
  }
}
</script>

<ClientOnly>
  <ExampleRepl />
</ClientOnly>
