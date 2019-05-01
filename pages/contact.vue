<template lang="pug">
  div.contact
    iframe(
      :src='apiKey',
      width='100%',
      height='100%',
      frameborder='0',
      marginheight='0',
      marginwidth='0'
    )
    div.loading loading now ...
</template>

<script>
export default {
  head: () => 
    ({
      title: 'お問い合わせ',
    }),
  asyncData: context =>
    ({
      apiKey:`https://docs.google.com/forms/d/e/${context.env.FORMS_API}/viewform?embedded=true`
    }),
}
</script>

<style lang="stylus" scoped>
.contact
  width 100%
  height calc(var(--static100vh) - 80px)
  display flex
  justify-content center
  align-items center
  position relative
  .loading
    position absolute
    left 0
    right 0
    top calc((var(--static100vh) - 80px) / 2)
    font-size 22px
    font-weight bold
  iframe
    position relative
    z-index 1

</style>
