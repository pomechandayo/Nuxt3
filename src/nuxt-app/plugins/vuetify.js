import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'

export default defineNuxtPlugin((nuxtApp) => {
  // テーマを追加
  const customTheme = {
    colors: {
      primary: '#2196F3',
      secondary: '#b0bec5'
    }
  }
  const vuetify = createVuetify({
    components,
    // テーマを設定
    theme: {
      defaultTheme: 'customTheme',
      themes: {
        customTheme
      },
    }
  })
  nuxtApp.vueApp.use(vuetify)
})
