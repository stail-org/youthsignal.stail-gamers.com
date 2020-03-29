export const state = () => ({
  visible: false,
  mode: 'none',
})

export const mutations = {
  /**
   * モーダルウィンドウの表示処理
   * @param {Object} state $store.state
   * @param {String} payload.mode 表示するモーダルウィンドウの種類（infomation / image）
   * @param {String} payload.showingNumber 表示するスライド番号
   */
  show(state, { mode, showTarget }) {
    // 対象のスライドを表示状態にする
    state.mode = mode
    const swiper = document.querySelector(`.swiper-container-${mode}`).swiper
    swiper.slideTo(showTarget || 1, 0, false)
    // 表示準備が整ったら、モーダルを可視にする
    state.visible = true
    // コンテンツのスクロールを無効化
    document.body.classList.add('modal-showing')
    // 表示後、Close ボタンをフォーカスする（setTimeout が無いと反応しない）
    setTimeout(() => {
      document.getElementById('btnModalClose').focus()
      // swiper の更新処理をかけることで、swiper bullets が自動調整される
      swiper.update()
    }, 50)
  },
  hide(state) {
    state.visible = false
    // コンテンツのスクロールを有効化
    // （遅延時間は、ModalContainer.vue の .fade-leave-active transition duration と調整）
    setTimeout(() => {
      document.body.classList.remove('modal-showing')
    }, 200)
  },
}
