<script>
useHead({
  title: 'ログイン'
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
    <NuxtLink to="/test">To test</NuxtLink>
  </div>
</template>