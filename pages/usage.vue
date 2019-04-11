<template lang="pug">
  article.article
    h2 四文字予定
    img(alt='四文字予定' src='~/assets/favicon.svg')
    div 予定は・四文字・要を得て
    div 四文字しか書けない予定表。
    div.left
      h3 使い方
      div タップして文字を打つだけ。ごく普通の予定表です。
      h3 四
      div 予定は四文字、四週間分しか書けません。
      div 忙しすぎないあなた向け。
      h3 シンプル
      div 機能を絞りシンプルに。
      div シェアも通知機能もありません。
      h3 Webアプリ
      div Webアプリです。
      div インストール、ログイン不要。
      h3 軽い
      div サクサク動きます。
      h3 安全
      div データはスマホやPCの中に保存。
      div どこにも送信されません。
      h3 四文字あれば
      div 予定って十分思い出せない?
      div ...と思って作ったアプリです。
      h3 作者
      a(href='https://rm-js.com') MIZUTANI Ryuto
      div 名古屋のWebエンジニア。
</template>

<style lang="stylus" scoped>
.article
  width 1920px
  max-width 95%
  min-height calc(var(--static100vh) - 80px)
  display flex
  flex-direction column
  align-items center
  padding 40px 0
  img
    width 80px
    height 80px
    margin-bottom 15px
  div
    margin 3px 0

.left
  text-align left
  h3
    margin 40px 0 5px
</style>
