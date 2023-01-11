<template>
  <div>Example Component</div>
</template>

<script setup>
const props = defineProps({
  foo: {
    type: String
  }
});

console.log(11111)
console.log(props.foo)
</script>