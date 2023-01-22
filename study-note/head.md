# headタグの管理について
管理方法は以下の3つ
* nuxt.config.tsから設定
* useHeadを使用して設定
* Headタグを使用して設定

## nuxt.config.tsから設定
下記のようにappオブジェクトの中でheadタグを管理できる
```
export default defineNuxtConfig({
  app: {
    head: {
      title: 'foo'
    }
  }, 
```

## useHeadを使用して設定
ページファイルの`script`の中で下記のように記述する
```
useHead({
  title: `Titleです。 - ${route.meta.title}`,
  meta: [
    { name: 'description', description: 'descriptionです' }
  ]
})
```

## Headタグを使用して設定
ページファイルの`template`タグの中で下記のように記述します。
```
<template>
  <div>
    <Head>
      <Title>Titleです。</Title>
      <Meta name="description" content="descriptionです"/>
    </Head>
    parent
    <NuxtPage />
  </div>
</template>
```
