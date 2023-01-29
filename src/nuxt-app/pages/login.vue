<script setup>
definePageMeta({
  title: 'ログイン'
})
const show = ref(true)
const toggle = computed(() => {
  const icon = show.value ? 'mdi-eye' : 'mdi-eye-off'
  const type = show.value ? 'text' : 'password'
  return { icon, type }
})
const fetch = async () => {
  console.log(1)
  const { header } = await useFetch('http://localhost/api/sanctum/csrf-cookie', { method: 'GET' })
  const csrfToken = useCookie('XSRF-TOKEN')
  // console.log(await useFetch('http://localhost/sanctum/csrf-cookie', { method: 'GET' }))
  console.log(2)
  console.log(header)
  console.log(csrfToken)
  const { data, error } = await useFetch('http://localhost/api/login', {
    method: 'POST',
    headers: { 'X-XSRF-TOKEN': csrfToken },
    body: {
      email: 'cronin.cortez@example.com',
      password: 'password'
    }
  })
  console.log(data, error)
}
const userFetch = async () => {
  const { data } = await useFetch('http://localhost/api/users/authorization').data
  console.log(data)
}
</script>

<template>
  <v-container class="d-flex justify-center mt-15">
    <v-btn @click="fetch">ログイン</v-btn>
    <v-btn @click="userFetch">ユーザーフェッチ</v-btn>
    <v-card style="height: 390px" class="w-75">
      <v-toolbar>
        <h2 class="ml-10">ログイン</h2>
      </v-toolbar>
      <v-form class="pa-10 mt-3">
        <v-text-field type="email" label="メールアドレス" variant="outlined" />
        <v-text-field
          class="mt-2"
          label="パスワード"
          variant="outlined"
          :type="toggle.type"
          :append-inner-icon="toggle.icon"
          @click:append-inner="show = !show"
        />
        <div class="d-flex justify-space-between mt-2">
          <v-btn style="height: 40px" class="text-white w-25" color="primary">ログイン</v-btn>
          <NuxtLink to="/">
            <v-btn class="text-blue" variant="plain">パスワードをお忘れの方はこちら</v-btn>
          </NuxtLink>
        </div>
      </v-form>
    </v-card>
  </v-container>
</template>
