<template lang="pug">
  article.article
    img(alt='四文字予定' src='~/assets/favicon.svg')
    div 予定は・四文字・要を得て
    div 4文字しか書けない予定表。

</template>

<style lang="stylus" scoped>
.article
  width 1920px
  max-width 95%
  min-height calc(var(--static100vh) - 80px)
  display flex
  flex-direction column
  align-items center
  padding-top 40px
  img
    width 60px
    height 60px
  div
    margin 3px 0
</style>
