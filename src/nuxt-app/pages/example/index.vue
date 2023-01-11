<script setup>
import { ref } from 'vue'
  const name = ref('太郎') // data
  const num1 = ref(1)
  const num2 = ref(1)
  const num = computed(() =>  num1.value + num2.value)
  const increment = () => num1.value++ // methods
  const consoleLog = () => console.log(12345)
  const consoleLog1 = (async() => {
    console.log("not async")
    await console.log("async")
    console.log("not async")
  })
  consoleLog1()
  consoleLog()
  watch(num1, (cr, prev) => {
    console.log(cr, prev)
  })
</script>

<template>
  <div>
    Hello World
    <div>{{ name }}</div>
    <div>{{ num }}</div>
    <v-btn @click="increment">足す</v-btn>
  </div>
</template>