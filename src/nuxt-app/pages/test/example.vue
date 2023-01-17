<script setup>
const { $foo, $bar, $log } = useNuxtApp()
console.log(1)
console.log(useNuxtApp())
console.log($foo)
console.log($bar)
$log()
</script>
<template>
  <div>
    test example
    {{ $foo }}
  </div>
</template>