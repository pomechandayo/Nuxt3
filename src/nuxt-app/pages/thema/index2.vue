<script setup>
definePageMeta({ layout: false })
</script>

<template>
  <v-app>
    <v-container>
      <v-card theme="userTheme">
        <div class="bg-primary">
          userTheme primary
        </div>
      </v-card>
      <v-theme-provider theme="userTheme">
        <div class="bg-secondary">
          userTheme secondary
        </div>
      </v-theme-provider>
      <v-card theme="adminTheme">
        <div class="bg-primary">
          adminTheme primary
        </div>
      </v-card>
      <v-theme-provider theme="adminTheme">
        <v-card class="bg-secondary">
          adminTheme secondary
        </v-card>
      </v-theme-provider>
    </v-container>
  </v-app>
</template>
