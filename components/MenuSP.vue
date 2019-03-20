<template lang="pug">
  transition-group(name='fade')
    div.menu__bg(
      key='bg'
      v-if='isOpenedMenu'
      @click='closeMenu'
    )
    div.menu__box(
      v-if='isOpenedMenu'
      key='box'
    )
      nuxt-link.menu__link(to="/about" @click.native='closeMenu') about
      nuxt-link.menu__link(to="/" @click.native='closeMenu') contact
      nuxt-link.menu__link(to="/" @click.native='closeMenu') 
      nuxt-link.menu__link(to="/" @click.native='closeMenu') 

</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
  computed: {
    ...mapState([
      'isOpenedMenu'
    ])
  },
  methods: {
    ...mapMutations([
      'closeMenu'
    ])
  }
}
</script>

<style lang="stylus" scoped>
.menu__bg
  width 100%
  height var(--static100vh) !important
  position absolute
  left 0
  top 0
  z-index 990

.menu__box
  width 100%
  height 160px
  background-color #333
  position absolute
  right 0
  top 60px
  z-index 999

.menu__link
  width 100%
  height 40px
  line-height 40px
  display block
  text-decoration none
  box-sizing border-box
  color #ddd
  border-top 2px #ddd solid


.fade-enter-active
.fade-leave-active
  trantition-property height
  transition-duration .4s

.fade-enter
.fade-leave-to
  height 0

</style>
