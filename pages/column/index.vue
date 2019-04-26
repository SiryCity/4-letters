<template lang="pug">
  div
    common-documents(
      title='コラム01'
      subTitle='コラム'
      :image='favicon'
      :md='column01'
    )
</template>

<script>
import CommonDocuments from '~/components/CommonDocuments'
import column01 from '~/assets/md/column01.md'
import favicon from '~/assets/favicon.svg'
export default {
  components:{
    CommonDocuments
  },
  computed:{
    column01: () => column01,
    favicon: () => favicon
  }
}
</script>