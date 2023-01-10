<template>
  <div>
    Hello World
    <div>{{ name }}</div>
    <div>{{ num }}</div>
    <v-btn @click="increment">足す</v-btn>
  </div>
</template>

<script setup>
import { ref } from 'vue'
  const name = ref('太郎')
  const num1 = ref(1)
  const num2 = ref(1)
  const num = computed(() =>  num1.value + num2.value)
  const increment = () => num1.value++;
</script>