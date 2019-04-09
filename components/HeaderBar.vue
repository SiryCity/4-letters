<template lang="pug">
  header#header__wrapper
    div#header
      nuxt-link#header__title(to="/")
        h1#title__h1 四文字予定　
        
      nav#header__nav
        nuxt-link(to="/usage") 使いかた
        nuxt-link(to="/privacy") 個人情報
        nuxt-link(to="/contact") 問い合せ


</template>


<style lang="stylus" scoped>

#header__wrapper
  width 100%
  height 60px
  color #ddd
  background-color #333
  display flex
  justify-content center
  #header
    width 100%
    max-width 600px
    display flex
    justify-content space-between
    #header__title
      height 60px
      display flex

      justify-content flex-start
      align-items center
      margin-left 20px
      color white
      text-decoration none
      #title__h1
        width 72px
        height 46px
        font-size 23px
        line-height 100%
        transition-duration .2s
        transition-property color
        &:hover
          color teal
    #header__nav
      height 60px
      display flex
      justify-content center
      align-items center
      a
        width 42px
        height 42px
        margin-top 8px
        color white
        font-size 20px
        line-height 100%
        text-decoration none
        margin-right 16px
        transition-duration .2s
        transition-property color
        &:hover
          color teal
</style>
