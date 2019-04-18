<template lang="pug">
  article.article
    div.img-box
      img(src='~/assets/icon.svg')
      h2 MIZUTANI Ryuto
      p 名古屋発Webエンジニア
      img(src='~/assets/photo.svg')
      p
        a(href='https://rm-js.com') 公式サイト
        | で色々公開中:)
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
