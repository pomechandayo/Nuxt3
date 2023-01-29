<script setup>
useHead({
  title: 'マイページ'
})
const { $foo, $bar, $log } = useNuxtApp()
console.log(1)
console.log(useNuxtApp())
console.log($foo)
console.log($bar)
$log()
// composablesTest.trumpMark = { id: 1, name: '太郎'}
console.log(composableTest())
console.log(composableTest.trumpMark)
</script>
<template>
  <div>
    test example
    {{ $foo }}
    <NuxtLink to="/test/example">To example</NuxtLink>
  </div>
</template>