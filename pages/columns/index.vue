<template lang="pug">
  div
    common-documents(
      title='ミニコラム'
      subTitle='開発秘話など'
      :image='favicon'
    )
      nuxt-link.columns__box(to='./columns/column1')
        p 2019-05-03
        h4 カレンダーアプリで考える日本語の性質
      nuxt-link.columns__box(to='./columns/column2')
        p 2019-05-07
        h4 Webアプリの情報はどう保存されるのか?
      nuxt-link.columns__box(to='./columns/column3')
        p 2019-05-12
        h4 紙に書くのか、スマホに書くのか?
</template>

<script>
import CommonDocuments from '~/components/CommonDocuments'
import favicon from '~/assets/favicon.svg'
export default {
  head: () => 
    ({
      title: 'コラム',
    }),
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
  transition-duration .2s
  transition-property background-color
  h4
    font-size 18px
    margin 0 0 3px
  p
    margin 3px 0 8px
  &:hover
    background-color #8ecc9b
</style>
