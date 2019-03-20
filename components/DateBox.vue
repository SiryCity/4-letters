<template lang='pug'>
  div.cell(:class=`{
      "cell--next-month":
        day.get("date") <= (6 - dayOfEndOfMonth)
        && day.get("date") < today.get("date")
    }`)
    div.cell__background {{day.get('date')}}
    textarea.cell__textarea(
      maxlength='4'
      :class=`{
        "cell--today": day.get("date") === today.get("date")
      }`
      @input='updateText({$event, day})'
      @keydown='deleteText({$event, day})'
    )
    part-of-string(
      v-if='schedulesDict[day.format("l")]'
      v-for='(string, i) in schedulesDict[day.format("l")]'
      :key='"string" + day.format("l") + i'
      :string='string'
    )
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
import PartOfString from '~/components/PartOfString.vue'
export default {
  components: {
    PartOfString,
  },
  computed: {
    ...mapGetters([
      'dayOfWeek',
      'schedulesDict',
      'dayOfEndOfMonth',
    ])
  },
  methods: {
    ...mapMutations([
      'updateText',
      'deleteText',
    ])
  },
  props: {
    'day': Object,
    'today': Object,
  }
}
</script>

<style lang="stylus" scoped>

.cell
  width calc(100% / 7 - 4px)
  height calc(100% / 7 - 4px)
  margin 2px
  position relative
  display flex
  flex-wrap wrap
  justify-content flex-start
  align-items flex-start

.cell__textarea
  width 100%
  height 100%
  padding 0
  border none
  resize none
  color transparent
  outline none
  font-size 10%
  background-color #999
  border-radius 5%
  cursor pointer
  overflow hidden
  position absolute
  left 0
  top 0
  transition-duration .2s

.cell__textarea:focus
  background-color mediumaquamarine

.cell__background
  width 100%
  height 100%
  line-height calc(var(--calendar-length) / 8)
  font-size calc(var(--calendar-length) / 20)
  color #ddd
  font-weight bold
  margin auto
  position absolute
  top 0
  bottom 0
  z-index 1
  pointer-events none

.cell--today
  background-color teal

.cell--next-month
  margin calc((100% / 7 - 4px) / 3) 2px 2px
</style>
