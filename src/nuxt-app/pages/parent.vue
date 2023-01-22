<script setup>
const route = useRoute()
// useHead({
//   title: `Titleです。 - ${route.meta.title}`,
//   meta: [
//     { name: 'description', description: 'descriptionです' }
//   ]
// })
</script>

<template>
  <div style="background-color: grey; text-align: center;">
    <Head>
      <Title>Titleです。</Title>
      <Meta name="description" content="descriptionです"/>
    </Head>
    parent
    <NuxtPage />
  </div>
</template>
