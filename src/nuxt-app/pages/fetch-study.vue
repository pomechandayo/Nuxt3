<script setup>
  const fetch = async () => {
    const {data, error} = await useFetch('http://localhost:80/api/test')
    console.log(data, error)
  }
  fetch()
</script>

<template>
  <div>
    <v-app>
      <v-btn @click="fetch">test</v-btn>
    </v-app>
  </div>
</template>

<!-- <script>
export default {
  created() {
    this.fetch()
  },
  methods: {
    async fetch() {
      const {data, error} = await useFetch('http://localhost/api/test')
      console.log(1)
      console.log(data, error)
    }
  }
}
</script> -->
