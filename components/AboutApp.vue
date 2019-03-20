<template lang="pug">
  
  div#about
    div#box
      h2 予定は 四文字 要を得て
      img#box__logo(alt='' src='~/assets/favicon.svg')
      h2 四文字予定
    section.description
      p
        img.description__item(alt='' src='~/assets/check.svg')
        | 四文字で四週間の予定を残せます。
      p
        img.description__item(alt='' src='~/assets/check.svg')
        | インストール、ログインは必要ありません。
      p
        img.description__item(alt='' src='~/assets/cross.svg')
        |  過去の予定、未来の予定、長い予定は残せません。
      p
        img.description__item(alt='' src='~/assets/cross.svg')
        |  通知できません。
        a.links(href='https://calendar.google.com/calendar') google calendar
        | がおすすめです。
      p
        img.description__item(alt='' src='~/assets/cross.svg')
        |  共有できません。
        a.links(href='https://timetreeapp.com/') timetree
        | がおすすめです。

</template>

<style lang="stylus" scoped>
  
#about
  width 100vw
  color #333
  background-color #ddd
  display flex
  flex-direction column
  justify-content center
  align-items center

#box
  width 100%
  height 300px
  display flex
  flex-direction column
  justify-content center
  align-items center

#box__logo
  width 30%
  height auto

.description
  max-width 1920px
  width 90vmin
  min-width calc(100vmin - 50px - 60px)
  text-align left

.description__item
  width auto
  height 20px
  margin 0 2px -4px 0

.links
  color #333

</style>