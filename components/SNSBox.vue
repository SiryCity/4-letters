<template lang="pug">
div.sns-box__wrapper
  a.fb-btn(:href='`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`') Facebook
  a.twi-btn(:href='`http://twitter.com/share?url=${currentUrl}`') Twitter
  a.line-btn(:href='`http://line.me/R/msg/text/?${currentUrl}`') LINE
</template>

<script>
export default {
  data: () =>
    ({
      currentUrl: null
    }),
  mounted(){
    this.currentUrl = location.href
  }
}
</script>

<style lang="stylus" scoped>
.sns-box__wrapper
  width 100%
  height 40px
  display flex
  justify-content flex-end
  align-items center
  .twi-btn
  .fb-btn
  .line-btn
    width 72px
    height 24px
    line-height 24px
    display inline-block
    border-radius 3px
    margin-left 13px
    color white
    text-decoration none
    text-align center
    font-size 14px
    font-weight bold
  .twi-btn
    background-color #1B95E0
  .fb-btn
    background-color #4266B2
  .line-btn
    background-color #00B833
</style>
