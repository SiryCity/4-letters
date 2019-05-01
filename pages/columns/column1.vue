<template lang="pug">
  div
    common-documents(
      title='コラム1'
      subTitle='コラム'
      :image='favicon'
      :md='column1'
    )
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
      title: 'コラム1',
    }),
  computed:{
    column1: () => column1,
    favicon: () => favicon
  }
}
</script>