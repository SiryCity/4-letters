<template lang="pug">
  div
    common-documents(
      title='コラム'
      subTitle='開発秘話など'
      :image='favicon'
      :md='columns'
    )
</template>

<script>
import CommonDocuments from '~/components/CommonDocuments'
import columns from '~/assets/md/columns.md'
import favicon from '~/assets/favicon.svg'
export default {
  components:{
    CommonDocuments
  },
  computed:{
    columns: () => columns,
    favicon: () => favicon
  }
}
</script>