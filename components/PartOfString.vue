<template lang="pug">
  transition(name='fade'): div.string: div {{string}}
</template>

<script>
export default {
  props: {
    'string': String,
  }
}
</script>

<style lang="stylus" scoped>
.string
  width 50%
  height 50%
  font-size calc(var(--calendar-length) / 15)
  font-weight bold

  display flex
  justify-content center
  align-items center
  color #333
  position relative
  z-index 2
  pointer-events none
  transform rotate(-10deg)

.fade-enter-active
  transition opacity .2s

.fade-leave-active 
  transition opacity .1s

.fade-enter
.fade-leave-to
  opacity 0
</style>
