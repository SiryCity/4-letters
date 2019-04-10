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
</template>

<script>
export default {
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
</style>
