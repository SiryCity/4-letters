<template lang="pug">
  div
    common-documents(
      title='四文字予定'
      subTitle='予定は・四文字・要を得て'
      :image='favicon'
      :md='usage'
    )
</template>

<script>
import CommonDocuments from '~/components/CommonDocuments'
import usage from '~/assets/md/usage.md'
import favicon from '~/assets/favicon.svg'
export default {
  components:{
    CommonDocuments
  },
  computed:{
    usage: () => usage,
    favicon: () => favicon
  }
}
</script>