<template lang="pug">
  article.article
    div.img-box
      img(alt='四文字予定' src='~/assets/favicon.svg')
      h2 四文字予定
      p 予定は・四文字・要を得て

    h3 使い方
    p
      | タップして文字を打つだけ。ごく普通の予定表です。
    h3 四つぶん
    p
      | 予定は四文字、四週間分しか書けません。
      | 忙しすぎないあなた向け。
    h3 シンプル
    p
      | 機能を絞りシンプルに。
      | シェアも通知機能もログインもありません。
      | 自分の予定ってあんまりシェアしたくないですよね...?
    h3 PWA
    p
      | 四文字予定はPWA(プログレッシブ ウェブ アプリ)です。
      | PWAはWebサイトとアプリのいいとこ取りをする技術。
      | Webサイトのようにインストールやアップデートは不要、
      | アプリのようにアイコンから起動できます。
      | PWAについては、
      a(href='https://developers.google.com/web/progressive-web-apps/') こちら
      | をご覧ください。
    h3 軽い
    p
      | 1秒で起動。
      | サクサク動きます。
    h3 安全
    p
      | データはスマホやPCの中に保存。
      | どこにも送信されません。
      | したがってスマホとPCで同期はできません。
      | また、データの引き継ぎもできません。仕方ない。
    h3 四文字あれば
    p
      | 予定って十分思い出せない?
      | スケジュール帳にあんまり長文書かなくない?
      | ...と思って作ったアプリです。
    h3 作者
    a(href='https://rm-js.com') MIZUTANI Ryuto
    p 名古屋のWebエンジニア。
</template>

<style lang="stylus" scoped>
.article
  width 95%
  max-width 540px
  min-height calc(var(--static100vh) - 80px)
  padding 40px 0
  text-align left
  h3
    margin 45px 0 0 3px
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
