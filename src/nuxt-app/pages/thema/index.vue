<template>
  <div>
    <v-card theme="userTheme">
      <div class="bg-primary">
        userTheme
      </div>
    </v-card>
    <v-theme-provider theme="userTheme">
      <v-card class="bg-primary">
        adminTheme
      </v-card>
    </v-theme-provider>
    <v-card theme="adminTheme">
      <div class="bg-primary">
        adminTheme
      </div>
    </v-card>
    <v-theme-provider theme="adminTheme">
      <v-card class="bg-primary">
        adminTheme
      </v-card>
    </v-theme-provider>
  </div>
</template>
