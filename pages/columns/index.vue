<template lang="pug">
  div
    common-documents(
      title='コラム'
      subTitle='開発秘話など'
      :image='favicon'
    )
      p comming soon...
    //-
      nuxt-link.columns__box(to='./columns/column01')
        p 2019-01-01
        h4 test
</template>

<script>
import CommonDocuments from '~/components/CommonDocuments'
import favicon from '~/assets/favicon.svg'
export default {
  components:{
    CommonDocuments
  },
  computed:{
    favicon: () => favicon
  },
}
</script>

<style lang="stylus" scoped>

.columns__box
  width 100%
  margin-top 40px
  color #333
  text-decoration none
  border-left 7px solid teal
  padding-left 7px
  h4
    font-size 18px
    margin 0 0 3px
  p
    margin 3px 0 8px
</style>
