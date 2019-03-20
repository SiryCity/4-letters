import moment from 'moment'

export default {

  //スマートフォンか
  isSP: ()=>
    [
      'iPhone',
      'iPod',
      'iPad',
      'Android',
    ].some(sp =>
      navigator.userAgent.includes(sp)
    ),

  //カレンダーのセルの数ぶんの配列
  days: () =>
    Array(28).fill().map((_, i) =>
      moment().add(i, 'days')
    ),

  //今日の曜日
  dayOfWeek: () => moment().day(),

  //スケジュールの読み込み
  schedulesDict: state =>
    state.schedules.reduce((pre, cur) =>
      ({
        ... pre || [],
        [cur.day]: cur.text.split('')
      })
    ,{}),

  //月末が何曜日か
  dayOfEndOfMonth: () =>
    moment().endOf('month').get('day')
    
}