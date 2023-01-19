# middlewareについて
## ミドルウェアの種類
### インラインミドルウェア  
ページに直接定義する。  
### ルートミドルウェア
`middleware/`に定義する  
適用したページが読み込まれると実行される。
### グローバルミドルウェア
`middleware/`に`.global`の接尾辞をつけたファイルに定義する。  
ルートが変更されるたびに実行される

## ミドルウェアの使い方
### 定義方法
まずルートディレクトリに`middlware`ディレクトリを作成する。  
作成したディレクトリ配下にファイルを作成し、下記のように記述
```vue.js
export default defineNuxtRouteMiddleware((to, from) => {
  if (to.params.id === '1') {
    return abortNavigation()
  }
  return navigateTo('/')
})
```
引数の`from`に現在のルート、`to`に次のルートが入っている。

### 適用方法
適用したいページファイルに下記のように記述する
```
<script setup>
definePageMeta({
  middleware: ["auth"]
  // or middleware: 'auth'
})
</script>
```
上記の例だと`/middleware/auth`が適用される
また、ファイル名がキャメルケースの場合は適用時にはケバブケースで記述する
例）/middlware/fooBar → middleware: ["foo-bar"]