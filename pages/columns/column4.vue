<template lang="pug">
  div
    common-documents(
      title='予定は「何日」の「何時」にあるのか'
      subTitle='「When」の粒度について'
      :image='favicon'
      :md='column4'
    )
      nuxt-link(to='../columns') 一覧にもどる
</template>

<script>
import CommonDocuments from '~/components/CommonDocuments'
import column4 from '~/assets/md/column4.md'
import favicon from '~/assets/favicon.svg'
export default {
  components:{
    CommonDocuments
  },
  head: () => 
    ({
      title: '予定は「何日」の「何時」にあるのか',
    }),
  computed:{
    column4: () => column4,
    favicon: () => favicon
  }
}
</script>