<template lang="pug">
  div
    common-documents(
      title='プライバシーポリシー'
      subTitle='個人情報の扱いについて'
      :image='favicon'
      :md='privacy'
    )
</template>

<script>
import CommonDocuments from '~/components/CommonDocuments'
import privacy from '~/assets/md/privacy.md'
import favicon from '~/assets/favicon.svg'
export default {
  head: () => 
    ({
      title: 'プライバシーポリシー',
    }),
  components:{
    CommonDocuments
  },
  computed:{
    privacy: () => privacy,
    favicon: () => favicon
  }
}
</script>