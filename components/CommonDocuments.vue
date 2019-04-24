<template lang="pug">
  article.common-documents
    div.common-documents__heading
      img(:alt='title' :src='image')
      h2 {{title}}
      p {{subTitle}}
    div(v-html='md' v-if='md')
    slot
</template>

<script>
export default {
  props:['title', 'subTitle', 'image', 'md']
}
</script>


<style lang="stylus" scoped>
.common-documents
  width 95%
  max-width 540px
  min-height calc(var(--static100vh) - 80px)
  padding 40px 0
  text-align left
  display flex
  flex-direction column
  align-items center
  >>> h3
    margin 45px 0 3px 3px
    border-left 7px solid teal
    padding-left 7px
  p
    line-height 170%
  
  .common-documents__heading
    width 100vw
    height 120px
    position relative
    img
      width 100%
      height 120px
      object-fit cover
      background-color #999
      opacity .5
    h2
      position absolute
      top 8px
      right 0
      left 0
      text-align center
    p
      position absolute
      right 0
      left 0
      bottom 8px
      text-align center
</style>
