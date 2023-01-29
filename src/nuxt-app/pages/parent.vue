<script setup>
const route = useRoute()
useHead({
  title: `管理画面 - ${route.meta.title}`,
  meta: [
    { name: 'description', description: 'descriptionです' }
  ]
})
</script>

<template>
  <div>
    <Head>
      <Title>タイトルです。</Title>
      <Meta name="description" content="説明です"/>
    </Head>
    <NuxtPage />
  </div>
</template>
