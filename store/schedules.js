export const state = () =>
  ({
    schedules: [],
  })

export const getters = {

  //スケジュールの読み込み
  schedulesDict: state =>
    state.schedules.reduce((pre, cur) =>
      ({
        ... pre || [],
        [cur.day]: cur.text.split('')
      })
    ,{}),
}

export const mutations = {

  //テキストに入力があったら書き換える
  updateText(state, {$event, day}){

  state.schedules =
  state.schedules.filter(data =>
    data.day !== day.format('l')
  )

  state.schedules = [
    ... state.schedules,
    {
      day: day.format('l'),
      text: $event.currentTarget.value.substr(0, 4)
    }
  ]

  },

  //特殊なキーを押されたら何かする
  deleteText(state, {$event, day}){

    if(
      $event.keyCode === 32
      || $event.keyCode === 46
    ){
      $event.currentTarget.value = ''
      
      state.schedules =
      state.schedules.filter(data =>
      data.day !== day.format('l')
      )
    }

    if(
      $event.keyCode === 13
    ){
      $event.target.blur()
    }

  },

  //起動時に不要なスケジュールを削除する
  refreshSchedulesInitially(state){
    state.schedules =
    state.schedules.filter(data =>
      Array(28).fill().map((_, i) =>
      moment().add(i, 'days').format('l').includes(data)
      )
  )
  },

}