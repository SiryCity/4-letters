<template lang="pug">
  article.privacy-policy
    h2 プライバシーポリシー
    h3.privacy-policy__heading 予定表の情報について
      p
        | 四文字予定では、予定表の情報管理にローカルストレージを利用しています。
      p
        | ローカルストレージのデータはあなたのスマートフォン、タブレット、もしくはパソコンの中に保管されます。
        | アプリ開発者への送信は一切行われませんので、ご安心ください。
      p
        | ローカルストレージに関して、詳しくは
        a(href='https://www.w3schools.com/html/html5_webstorage.asp') こちら
        | をご覧ください。
    h3.privacy-policy__heading アクセス解析ツールについて
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
.privacy-policy
  width 1920px
  max-width 95%
  min-height calc(var(--static100vh) - 80px)
  display flex
  flex-direction column
  align-items center
  padding-top 20px
  .privacy-policy__heading
    font-size 18px
    margin-bottom 4px
    p
      font-weight normal
      text-align justify
      text-justify inter-ideograph
</style>
