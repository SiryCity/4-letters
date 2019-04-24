<template lang="pug">
  article.article
    div.img-box
      img(alt='プライバシーポリシー' src='~/assets/favicon.svg')
      h2 プライバシーポリシー
      p 個人情報の扱いについて
    div(v-html='privacy')
</template>

<script>
import privacy from '~/assets/md/privacy.md'
export default {
  computed:{
    privacy: ()=> privacy
  }
}
</script>


<style lang="stylus" scoped>
.article
  width 95%
  max-width 540px
  min-height calc(var(--static100vh) - 80px)
  padding 40px 0
  text-align left
  >>> h3
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
