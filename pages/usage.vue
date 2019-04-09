<template lang="pug">
  article.article
    img(alt='四文字予定' src='~/assets/favicon.svg')
    div 予定は
</template>

<style lang="stylus" scoped>
.article
  width 1920px
  max-width 95%
  min-height calc(var(--static100vh) - 80px)
  display flex
  flex-direction column
  align-items center
  padding-top 20px
  img
    width 60px
    height 60px
</style>
