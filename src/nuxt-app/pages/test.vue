<script>
useHead({
  titleTemplate: (pageTitle) => {
    return pageTitle ? `管理画面 - ${pageTitle}` : '管理画面';
  }
})
</script>

<template>
  <div>
    test
    <NuxtPage />
  </div>
</template>