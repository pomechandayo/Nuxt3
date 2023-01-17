export default defineNuxtPlugin(nuxtApp => {
  return {
    provide: {
      foo: 'foo',
      bar: 'bar',
      log: () => console.log('log')
    }
  }
})