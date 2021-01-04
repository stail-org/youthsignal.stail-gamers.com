import { Module, VuexModule } from 'vuex-module-decorators'

export interface InformationData {
  id: number
  title: string
  createdAt: string
  author: string
  route: string
  url?: string
  type: 'modal' | 'link'
}

@Module({ stateFactory: true, namespaced: true, name: 'information' })
export default class information extends VuexModule {
  list: InformationData[] = [
    {
      id: 5,
      title: 'YouthSignal Vol.01 公開',
      createdAt: '2020-12-30',
      author: 'STail',
      route: 'info-2020-12-30',
      type: 'modal',
    },
    {
      id: 4,
      title: 'YouthSignal Web 体験版はこちら',
      createdAt: '2019-12-17',
      author: 'Stail',
      route: 'info-2019-12-17',
      url: 'https://youthsignal-trial.stail-gamers.com/',
      type: 'link',
    },
    {
      id: 3,
      title: 'Ci-en 開設',
      createdAt: '2019-09-24',
      author: 'STail',
      route: 'info-2019-09-24',
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
