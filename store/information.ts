import { Module, VuexModule } from 'vuex-module-decorators'

export interface InformationData {
  id: number
  title: string
  createdAt: string
  author: string
  route: string
  type: 'modal'
}

@Module({ stateFactory: true, namespaced: true, name: 'information' })
export default class information extends VuexModule {
  list: InformationData[] = [
    {
      id: 3,
      title: '【YouthSignal 体験版】リリース',
      createdAt: '2019-12-17',
      author: 'Stail',
      route: 'info-2019-12-17',
      type: 'modal',
    },
    {
      id: 2,
      title: '【C96版 YouthSignal―プロローグ編―】頒布決定',
      createdAt: '2019-08-10',
      author: 'Stail',
      route: 'info-2019-08-10',
      type: 'modal',
    },
    {
      id: 1,
      title: 'YouthSignal ホームページへようこそ！',
      createdAt: '2019-08-09',
      author: 'Stail',
      route: 'info-2019-08-09',
      type: 'modal',
    },
  ]

  get modalList() {
    return this.list.filter((info) => info.type === 'modal')
  }

  /**
   * インフォ ID から、モーダルウィンドウスライダーにおける対象スライド番号を検索し、返す
   * @param id インフォメーションID
   */
  get getSlideNumber() {
    return (id: number) => {
      const modalList = this.list.filter((info) => info.type === 'modal')
      return modalList.findIndex((info) => info.id === id) + 1
    }
  }
}
