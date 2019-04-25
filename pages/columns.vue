<template lang="pug">
  div
    common-documents(
      title='コラム'
      subTitle='開発秘話など'
      :image='favicon'
    )
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
  }
}
</script>