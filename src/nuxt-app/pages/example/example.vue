<template>
  <div>
    example page
    <example-component :foo="foo" />
  </div>
</template>

<script setup>
import ExampleComponent from '~~/components/ExampleComponent';
definePageMeta({ layout: 'example-app' })
const ary = ref([1,2,3])
console.log(ary.value[1])
const obj = ref({foo: 'foo', bar: 'bar'})
const { foo, bar } = obj.value
console.log(obj.value.foo)
console.log(foo, bar)
</script>