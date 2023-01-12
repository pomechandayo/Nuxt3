import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '~/assets/sass/main.scss'

export default defineNuxtPlugin((nuxtApp) => {
  const adminTheme = {
    colors: {
      primary: '#ff9800',
      secondary: '#b0bec5',
      btn_text_primary: '#fff',
      btn_text_secondary: '#fff',
      accent: '#8c9eff',
      error: '#b71c1c',
    }
  }

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
      defaultTheme: 'userTheme',
      themes: {
        userTheme,
        adminTheme
      },
    },
  })
  nuxtApp.vueApp.use(vuetify)
})