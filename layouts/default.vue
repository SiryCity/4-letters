<template lang='pug'>
  div#root
    header-bar
    nuxt
    footer-bar
</template>

<script>
import HeaderBar from '~/components/HeaderBar.vue'
import FooterBar from '~/components/FooterBar.vue'
export default {
  components: {
    HeaderBar,
    FooterBar
  },
  mounted(){
    this.$store.commit('main/setStatic100vh')
    this.$store.commit('main/resizeCalendar')
    this.$store.commit('schedules/refreshSchedulesInitially')
  }
}
</script>

<style lang='stylus'>

html
  font-family "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
  font-size 16px
  word-spacing 1px
  -ms-text-size-adjust 100%
  -webkit-text-size-adjust 100%
  -moz-osx-font-smoothing grayscale
  -webkit-font-smoothing antialiased
  box-sizing border-box
  font-weight bold
  background-color #333
*
*before
*after
  box-sizing border-box
  margin 0

body
  margin 0

:root
  --static100vh 100vh
  --calendar-length 100%

#root
  width 100%
  overflow hidden
  color #333
  background-color #ddd
  text-align center
  display flex
  flex-direction column
  align-items center
  position relative

</style>

