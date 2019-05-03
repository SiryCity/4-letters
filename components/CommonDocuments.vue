<template lang="pug">
  article.common-documents
    div.common-documents__heading(:style='{"background-image": `url(${image})`}')
      h2 {{title}}
      p {{subTitle}}
    div.common-documents__body(v-html='md' v-if='md')
    slot
</template>

<script>
export default {
  props:['title', 'subTitle', 'image', 'md']
}
</script>


<style lang="stylus" scoped>
.common-documents
  width 95vw
  max-width 580px
  min-height calc(var(--static100vh) - 80px)
  margin 40px auto
  text-align left
  display flex
  flex-direction column
  align-items flex-start
  >>> h3
    margin 45px 0 3px 3px
    border-left 7px solid teal
    padding-left 7px
  >>> p
    line-height 180%
  
  .common-documents__heading
    width 100%
    max-width 580px
    height 120px
    position relative
    color #ddd
    background-color #333
    background-repeat no-repeat
    background-position center center
    background-size cover
    display flex
    flex-direction column
    justify-content center
    align-items center
    border-radius 10px
    padding 0 5px
    h2
    p
      margin 0
      padding 0
  .common-documents__body
    width 100%
</style>
