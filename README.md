# dream-novel
夢小説向け名前変換

## 使用準備

1.Vue.jsの設定  

[Vue.js 3系](https://ja.vuejs.org/guide/quick-start.html#using-vue-from-cdn)をCDN等から取得する  

HTMLのheaderに例えば以下を記載する  

```html
<!-- Vue.js -->
<script src="https://unpkg.com/vue@3/dist/vue.global.prod.js"></script>
```

2.dream-novel.jsの設定  

`dream-novel.js`をサーバーに配置し、HTMLのbodyの最下部に以下を記載する  

```html
<script src="dream-novel.js"></script>
```

## 設定変更

1.デフォルト値の変更  
`dream-novel.js`の以下を修正する。

```js
const defaultMyojiKanji = '名字';
const defaultNamaeKanji = '名前';
const defaultMyojiHiragana = 'みょうじ';
const defaultNamaeHiragana = 'なまえ';
```

## 文字列置換設定

文字列置換のためには必ず `<div id="app">` の配下である必要がある。  
その配下であれば以下の文字列テンプレートが置換される。

+ 名字(漢字) `{{myojiKanji}}`
+ 名前(漢字) `{{namaeKanji}}`
+ 名字(ひらがな) `{{myojiHiragana}}`
+ 名前(ひらがな) `{{namaeHiragana}}`
+ 名字(カタカナ) `{{myojiKatakana}}`
+ 名前(カタカナ) `{{namaeKatakana}}`

また、上記テンプレートにはJavaScriptの関数が利用できる。(substringなど)

https://ja.vuejs.org/guide/essentials/template-syntax.html#using-javascript-expressions  

設定例は以下のようになる。

```html
<body>
  <div id="app">
■名前呼びテスト
「こんにちは、{{myojiKanji}}{{namaeKanji}}」
「こんにちは、{{myojiHiragana}}{{namaeHiragana}}」
「こんにちは、{{myojiKatakana}}{{namaeKatakana}}」
■どもりテスト
「{{myojiHiragana.substring(0,1)}}、{{myojiKanji}}」
「{{namaeHiragana.substring(0,1)}}、{{namaeKanji}}」
「{{myojiHiragana.substring(0,1)}}、{{myojiHiragana}}」
「{{namaeHiragana.substring(0,1)}}、{{namaeHiragana}}」
「{{myojiKatakana.substring(0,1)}}、{{myojiKatakana}}」
「{{namaeKatakana.substring(0,1)}}、{{namaeKatakana}}」
  </div>
  <script src="dream-novel.js"></script>
</body>
```

## 名前設定フォームの例

設定用のフォームは必ず `<div id="app">` の配下である必要がある。  
設定用のフォームのinputには以下をつけること  

+ 名字(漢字) `v-model="myojiKanji"`
+ 名前(漢字) `v-model="namaeKanji"`
+ 名字(ひらがな) `v-model="myojiHiragana"`
+ 名前(ひらがな) `v-model="namaeHiragana"`

設定保存用のボタンには以下をつけること  

+ 保存 `@click="saveConfig"`
+ リセット `@click="resetConfig"`

設定例  
+ https://github.com/tar-bin/dream-novel/blob/main/docs/index.html