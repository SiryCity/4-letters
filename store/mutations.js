import moment from 'moment'

export default {

  //メニューを開く
  openMenu(state){
    state.isOpenedMenu = true
  },
  //メニューを閉じる
  closeMenu(state){
    state.isOpenedMenu = false
  },

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
      $event.keyCode === 8
      || $event.keyCode === 32
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

  //画面1個分の高さをセットする
  setStatic100vh(_, isSP){
    document.documentElement.style.setProperty(
      '--static100vh',
      isSP ? window.outerHeight + 'px' : '100vh'
    )
  },


  //カレンダーのリサイズ
  resizeCalendar(_, isSP){

    const HEADER_HEIGHT = 80
    const AD_HEIGHT = 80

    document.documentElement.style.setProperty(
      '--calendar-length',
      Math.min(
        isSP
        ? window.outerHeight + HEADER_HEIGHT + AD_HEIGHT * 2
        : 1920,
        window.outerWidth * 0.95,
        600,
      ) + 'px'
    )

  }

}
