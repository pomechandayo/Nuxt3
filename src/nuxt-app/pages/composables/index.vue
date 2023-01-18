<script setup>
const { state, updatingLoginState } = userStore()
updatingLoginState(false)
</script>

<template>
  <div>
    <div>{{ state.isLoggedIn }}</div>
    <v-btn></v-btn>

  </div>
</template>