<template lang="pug">
  div
    common-documents(
      title='カレンダーアプリで考える日本語の性質'
      subTitle='英語との違いや四字熟語など'
      :image='favicon'
      :md='column1'
    )
      nuxt-link(to='../columns') 一覧にもどる
</template>

<script>
import CommonDocuments from '~/components/CommonDocuments'
import column1 from '~/assets/md/column1.md'
import favicon from '~/assets/favicon.svg'
export default {
  components:{
    CommonDocuments
  },
  head: () => 
    ({
      title: 'コラム-カレンダーアプリで考える日本語の性質',
    }),
  computed:{
    column1: () => column1,
    favicon: () => favicon
  }
}
</script>