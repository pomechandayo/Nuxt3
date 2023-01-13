<script setup>
  const fetch = async () => {
    const {data, error} = await useFetch('http://localhost/api/test')
    console.log(data, error)
  }
  fetch()
</script>

<template>
  
</template>