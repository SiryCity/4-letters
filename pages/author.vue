<template lang="pug">
  div
    common-documents(
      title='制作者'
      subTitle='アプリを作っている人'
      :image='favicon'
      :md='author'
    )
</template>

<script>
import CommonDocuments from '~/components/CommonDocuments'
import author from '~/assets/md/author.md'
import favicon from '~/assets/favicon.svg'
export default {
  components:{
    CommonDocuments
  },
  computed:{
    author: () => author,
    favicon: () => favicon
  }
}
</script>