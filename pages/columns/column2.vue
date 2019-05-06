<template lang="pug">
  div
    common-documents(
      title='Webアプリの情報はどう保存されるのか?'
      subTitle='主な3種の方法の特徴'
      :image='favicon'
      :md='column2'
    )
      nuxt-link(to='../columns') 一覧にもどる
</template>

<script>
import CommonDocuments from '~/components/CommonDocuments'
import column2 from '~/assets/md/column2.md'
import favicon from '~/assets/favicon.svg'
export default {
  components:{
    CommonDocuments
  },
  head: () => 
    ({
      title: 'コラム-Webアプリの情報はどう保存されるのか?',
    }),
  computed:{
    column2: () => column2,
    favicon: () => favicon
  }
}
</script>