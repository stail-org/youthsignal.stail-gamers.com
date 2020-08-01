import { Module, VuexModule } from 'vuex-module-decorators'

export interface StaffData {
  id: number
  name: string
  role: string
  twitterId: string
}

@Module({ stateFactory: true, namespaced: true, name: 'staff' })
export default class Staff extends VuexModule {
  list: StaffData[] = [
    {
      id: 1,
      name: '瀞昧幹',
      role: 'ディレクション・シナリオ',
      twitterId: 'STail_Official',
    },
    {
      id: 2,
      name: 'りっちる',
      role: 'アシスタントディレクター',
      twitterId: 'tatsu5755tat',
    },
    {
      id: 3,
      name: 'TigRig',
      role: 'システム',
      twitterId: 'TigRig_TRNS',
    },
    {
      id: 4,
      name: 'カレイド',
      role: '原画',
      twitterId: 'kaleidstar',
    },
    {
      id: 5,
      name: '有村です',
      role: '制作進行・サウンド',
      twitterId: 'armr_mgmg_',
    },
    {
      id: 6,
      name: '望月しゅう',
      role: '背景線画',
      twitterId: 'knock1025',
    },
    {
      id: 7,
      name: 'ki-bo',
      role: 'サウンド',
      twitterId: 'k_i_1_b_o',
    },
    {
      id: 8,
      name: 'かごち',
      role: '背景彩色',
      twitterId: 'deisuiM',
    },
    {
      id: 9,
      name: 'yushin',
      role: 'サウンド',
      twitterId: '',
    },
    {
      id: 10,
      name: 'うるち',
      role: 'GUI',
      twitterId: 'uruchi11_1',
    },
  ]
}
