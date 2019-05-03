<template lang="pug">
  header#header__wrapper
    div#header
      nuxt-link.header__title(to="/")
        h1.title__h1(:class='{"title__h1--not-chosen": $nuxt.$route.path !== "/"}' @click='$store.commit("main/test")') 四文字予定　
        
      nav.header__nav
        nuxt-link.header__nav__btn(:class='{"header__nav__btn--not-chosen": $nuxt.$route.path !== "/usage"}' to="/usage") 使いかた
        nuxt-link.header__nav__btn(:class='{"header__nav__btn--not-chosen": $nuxt.$route.path !== "/author"}' to="/author") 制作者　
        nuxt-link.header__nav__btn(:class='{"header__nav__btn--not-chosen": $nuxt.$route.path.slice(0, 8) !== "/columns"}' to="/columns") コラム　
        nuxt-link.header__nav__btn(:class='{"header__nav__btn--not-chosen": $nuxt.$route.path !== "/privacy"}' to="/privacy") 個人情報
        nuxt-link.header__nav__btn(:class='{"header__nav__btn--not-chosen": $nuxt.$route.path !== "/contact"}' to="/contact") 問い合せ

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
    .header__title
      height 60px
      display flex
      justify-content flex-start
      align-items center
      margin-left 20px
      text-decoration none
      .title__h1
        width 72px
        height 46px
        font-size 23px
        line-height 100%
        transition-duration .2s
        transition-property color
        color teal
      .title__h1--not-chosen
        color white
        &:hover
          color teal
    .header__nav
      height 60px
      display flex
      justify-content center
      align-items center
      .header__nav__btn
        width 34px
        height 34px
        margin 26px 8px 0 0
        color teal
        font-size 14px
        line-height 100%
        text-decoration none
        transition-duration .2s
        transition-property color
        
      .header__nav__btn--not-chosen
        color white
        &:hover
          color teal
</style>
