<template lang="pug">
  header#header
    nuxt-link#header__title(to="/")
      img#title__logo(alt='四文字予定' src='~/assets/favicon.svg')
      h1#title__h1 四文字予定   
    nav#header__menu--sp(v-if='isSP' @click='openMenu')
      img.menu__logo--sp(
        alt='メニュー'
        src='~/assets/menu.svg'
        :class='[isOpenedMenu ? "menu__logo--spopened": ""]'
      )
    nav#header__menu--pc(v-else)
      nuxt-link.menu__link--pc(to="/about") about
      nuxt-link.menu__link--pc(to="/") contact
      nuxt-link.menu__link--pc(to="/") contact
      nuxt-link.menu__link--pc(to="/") contact
</template>

<script>
import {mapState, mapGetters, mapMutations} from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'isSP',
    ]),
    ...mapState([
      'isOpenedMenu'
    ])
  },
  methods: {
    ...mapMutations([
      'openMenu'
    ])
  }
}
</script>

<style lang="stylus" scoped>

#header
  width 100%
  height 60px
  line-height 60px
  color #ddd
  background-color #333
  overflow hidden
  display flex
  justify-content space-between
  align-items center
#header__title
  width 160px
  height 48px
  margin 0 10px
  border-radius 2px
  transition-duration .2s
  text-decoration none
  display flex
  justify-content center
#title__logo
.menu__logo--sp
  width 30px
  height 30px
  padding 9px
  pointer-events none
  transition-duration .5s
  transition-property transform
  border-radius 2px
.menu__logo--spopened
  transform rotateZ(180deg)
#title__h1
  width 100px
  height 100%
  line-height 48px
  color #ddd
  padding 0
  margin 0
  font-size 20px

#header__menu--pc
  width calc(100% - 180px)
  height 48px
  display flex
  justify-content flex-end
  align-items center
  margin 0 10px
.menu__link--pc
  width 64px
  height 100%
  line-height 48px
  margin 0 6px
  border-radius 2px
  transition-duration .2s
  text-decoration none
  color #ddd

#header__menu--sp
  width 48px
  height 48px
  margin 0 5px
  cursor pointer


#header__title:hover
.menu__link--pc:hover
  background-color teal

</style>
