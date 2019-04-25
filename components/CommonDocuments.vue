<template lang="pug">
  article.common-documents
    div.common-documents__heading(:style='{"background-image": `url(${image})`}')
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
  margin 40px auto
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
    background-color #999
    background-repeat no-repeat
    background-position center center
    background-size cover
    display flex
    flex-direction column
    justify-content center
    align-items center
    h2
    p
      margin 0
      padding 0
</style>
