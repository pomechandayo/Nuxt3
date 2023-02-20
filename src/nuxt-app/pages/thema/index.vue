<script setup>
definePageMeta({ layout: false })
</script>

<template>
  <v-app>
    <v-container>
      <v-card theme="customTheme">
        <div class="bg-primary">
          customTheme primary
        </div>
      </v-card>
      <v-theme-provider theme="customTheme">
        <div class="bg-secondary">
          customTheme secondary
        </div>
      </v-theme-provider>
    </v-container>
  </v-app>
</template>
