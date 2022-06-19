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
      id: 9,
      title: 'C100の頒布物の情報を公開しました！',
      createdAt: '2022-6-18',
      author: 'STail',
      route: 'info-2022-6-18',
      url: 'https://ci-en.net/creator/2349/article/657293',
      type: 'link',
    },
    {
      id: 8,
      title: 'Unity進捗記事第4回を公開しました！',
      createdAt: '2022-6-11',
      author: 'STail',
      route: 'info-2022-6-11',
      url: 'https://ci-en.net/creator/2349/article/630727',
      type: 'link',
    },
    {
      id: 7,
      title: 'C100への参加が決定しました！',
      createdAt: '2022-6-10',
      author: 'STail',
      route: 'info-2022-6-10',
      url:
        'https://twitter.com/STail_Official/status/1535251435960811521?s=20&t=uUdey2shl_AfwNFf91PKkQ',
      type: 'link',
    },
    {
      id: 6,
      title: 'Unity化進捗記事第3回を公開しました',
      createdAt: '2022-5-24',
      author: 'STail',
      route: 'info-2022-5-24',
      url: 'https://ci-en.net/creator/2349/article/622130',
      type: 'link',
    },
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
