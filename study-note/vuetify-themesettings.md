# vuetify3のテーマの設定方法について
`plugins/vuetify.js`にテーマを追加して、全体に適用したり、各ファイルのみ適用したりする。


## plugins/vuetify.jsファイルの修正
下記のように設定する
```vuetify.js
export default defineNuxtPlugin((nuxtApp) => {
  const userTheme = {
    colors: {
      primary: '#2196F3',
      secondary: '#b0bec5',
      accent: '#8c9eff',
      error: '#b71c1c',
    }
  }
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: 'userTheme', // デフォルトのテーマを設定
      themes: {
        userTheme,
      },
    },
  })
  nuxtApp.vueApp.use(vuetify)
})
```
## 指定した箇所のみ適用したい場合
テーマの`prop`をサポートしているVuetifyコンポーネントの場合
```vue.js
<template>
  <v-app>
    <v-card theme="dark">
      <!-- button uses dark theme -->
      <v-btn>foo</v-btn>
    </v-card>
  </v-app>
</template>
```
`v-card`タグはテーマ`prop`に対応しているため、上記のように`theme="dark"`と記述するとその配下のテーマを設定することができます。

https://next.vuetifyjs.com/en/features/theme/#changing-theme

また、下記のように`v-theme-provider`を使用して設定することもできます。
```
<template>
  <v-app>
    <!-- uses the current default theme -->
    <v-card>...</v-card>

    <v-theme-provider theme="high-contrast">
      <!-- uses the high-contrast theme -->
      <v-card>...</v-card>
      <v-btn>...</v-btn>
    </v-theme-provider>
  </v-app>
</template>
```
