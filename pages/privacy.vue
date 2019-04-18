<template lang="pug">
  article.article
    div.img-box
      img(alt='プライバシーポリシー' src='~/assets/favicon.svg')
      h2 プライバシーポリシー
      p 個人情報の扱いについて
    h3 予定表の情報について
    p
      | 四文字予定では、予定表の情報管理にローカルストレージを利用しています。
    p
      | ローカルストレージのデータはあなたのスマートフォン、タブレット、もしくはパソコンの中に保管されます。
      | アプリ開発者への送信は一切行われませんので、ご安心ください。
    p
      | ローカルストレージに関して、詳しくは
      a(href='https://www.w3schools.com/html/html5_webstorage.asp') こちら
      | をご覧ください。
    h3 アクセス解析ツールについて
    p
      | 四文字予定では、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。
      | このGoogleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。
    p
      | このトラフィックデータは匿名で収集されており、個人を特定するものではありません。
      | この機能はCookieを無効にすることで収集を拒否することができますので、お使いのブラウザの設定をご確認ください。
    p
      | この規約に関して、詳しくは
      a(href='https://www.google.com/analytics/terms/jp.html') こちら
      | 、または
      a(href='https://policies.google.com/technologies/partner-sites?hl=ja') こちら
      | をご覧ください。
</template>

<style lang="stylus" scoped>
.article
  width 95%
  max-width 540px
  min-height calc(var(--static100vh) - 80px)
  padding 40px 0
  text-align left
  h3
    margin 45px 0 3px 3px
    border-left 7px solid teal
    padding-left 7px
  p
    line-height 170%
  
  .img-box
    width 100%
    height 200px
    display flex
    flex-direction column
    justify-content flex-start
    align-items center
    padding-top 40px
    img
      width 72px
      height 72px
    h2
      margin 16px 0 2px
      padding 0
</style>
