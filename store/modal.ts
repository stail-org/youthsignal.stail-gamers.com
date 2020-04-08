import { Module, VuexModule, Mutation } from 'vuex-module-decorators'

@Module({ stateFactory: true, namespaced: true, name: 'modal' })
export default class Modal extends VuexModule {
  visible: boolean = false
  mode: 'infomation' | 'image' | 'none' = 'none'

  /**
   * モーダルウィンドウの表示処理
   * @param payload.mode 表示するモーダルウィンドウの種類（infomation / image）
   * @param payload.showTarget 表示するスライド番号
   */
  @Mutation
  show(payload: { mode: 'infomation' | 'image'; showTarget: number }) {
    const { mode, showTarget } = payload
    this.mode = mode
    const modeCastToCamelCase = mode[0].toUpperCase() + mode.slice(1)

    // 対象のスライドを表示状態にする
    const targetElement: any = document.getElementById(
      `swiper${modeCastToCamelCase}`
    )
    const swiper = targetElement.swiper
    swiper.slideTo(showTarget || 1, 0, false)

    // 表示準備が整ったら、モーダルを可視にする
    this.visible = true

    // コンテンツのスクロールを無効化
    document.body.classList.add('modal-showing')

    // 表示後、Close ボタンをフォーカスする（setTimeout が無いと反応しない）
    setTimeout(() => {
      const btnModalClose = document.getElementById('btnModalClose')
      if (!btnModalClose) return

      btnModalClose.focus()

      // swiper の更新処理をかけることで、swiper bullets が自動調整される
      swiper.update()
    }, 50)
  }

  @Mutation
  hide() {
    this.visible = false
    // コンテンツのスクロールを有効化
    // （遅延時間は、ModalContainer.vue の .fade-leave-active transition duration と調整）
    setTimeout(() => {
      document.body.classList.remove('modal-showing')
    }, 200)
  }
}
