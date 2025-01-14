<script setup>
import { ref, h } from 'vue'
import txt from './ht.js'
const msg = ref('Hello World!')
import test from './test.svg'
console.log(test);

</script>
<template>
  <div>
    <img
      :src="test"
      style="width: 500px; height: 400px; background-color: red"
    />
  </div>
</template>
