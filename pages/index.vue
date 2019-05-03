<template lang='pug'>
  main#main
    s-n-s-box
    section#calendar__wrapper
      div#calendar
        empty-date-box(
          v-if='$store.getters["main/dayOfWeek"]'
          v-for='(_, i) in Array($store.getters["main/dayOfWeek"])'
          :key='`empty-date-${i}`'
        )
        date-box(
          v-for='(day, i) in $store.getters["main/days"]'
          :key='`date-${i}`'
          :day='day'
          :today='$store.getters["main/days"][0]'
        )
    div.ad
</template>

<script>
import DateBox from '~/components/DateBox.vue'
import EmptyDateBox from '~/components/EmptyDateBox.vue'
import SNSBox from '~/components/SNSBox.vue'

export default {
  head: () => 
    ({
      titleTemplate: null,
      title: '四文字予定',
    }),
  components: {
    DateBox,
    EmptyDateBox,
    SNSBox,
  },
}
</script>

<style lang='stylus' scoped>

#main //ヘッダーとフッター以外の全て
  width 95%
  max-width 580px
  display flex
  flex-direction column
  align-items center

  #calendar__wrapper //カレンダーの部分のラッパー
    width 100%
    height calc(var(--static100vh) - 60px - 40px - 80px - 20px) //1画面分からヘッダーと広告を抜く
    min-height var(--calendar-length)
    display flex
    flex-direction column
    align-items center
    justify-content flex-end

    #calendar //カレンダーの部分
      width var(--calendar-length)
      height var(--calendar-length)
      display flex
      flex-wrap wrap
      justify-content flex-start
      align-content center

.ad
  width 320px
  height 80px
  //background-color yellow


</style>

