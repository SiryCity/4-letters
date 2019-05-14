<template lang="pug">
  div
    common-documents(
      title='紙に書くのか、スマホに書くのか?'
      subTitle='あるいは何も書かないのか?'
      :image='favicon'
      :md='column3'
    )
      nuxt-link(to='../columns') 一覧にもどる
</template>

<script>
import CommonDocuments from '~/components/CommonDocuments'
import column3 from '~/assets/md/column3.md'
import favicon from '~/assets/favicon.svg'
export default {
  components:{
    CommonDocuments
  },
  head: () => 
    ({
      title: '手帳に書くのか、スマホに書くのか?',
    }),
  computed:{
    column3: () => column3,
    favicon: () => favicon
  }
}
</script>