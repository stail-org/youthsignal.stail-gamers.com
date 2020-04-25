import { Module, VuexModule } from 'vuex-module-decorators'

export interface SpecData {
  id: number
  key: string
  value: string | string[][]
}

@Module({ stateFactory: true, namespaced: true, name: 'spec' })
export default class Spec extends VuexModule {
  list: SpecData[] = [
    {
      id: 1,
      key: 'タイトル',
      value: 'ユースシグナル',
    },
    {
      id: 2,
      key: '頒布日',
      value: '2020年12月（予定）',
    },
    {
      id: 3,
      key: 'ジャンル',
      value: '青春倒錯ADV',
    },
    {
      id: 4,
      key: '価格',
      value: '未定',
    },
    {
      id: 5,
      key: '年齢制限',
      value: '全年齢',
    },
    {
      id: 6,
      key: 'メディア',
      value: 'DVD-ROM',
    },
    {
      id: 7,
      key: '対応ＯＳ',
      value: [
        ['必須', 'WindowsXP以降（MacOS不可）'],
        ['推奨', 'Windwos 7, 8, 8.1, 10'],
      ],
    },
    {
      id: 8,
      key: 'CPU',
      value: [
        ['必須', 'Intel Pentium4 2.4GHz 以上'],
        ['推奨', 'Intel Core i3 第3世代 以降'],
      ],
    },
    {
      id: 9,
      key: 'メモリ',
      value: [
        ['必須', '2GB 以上'],
        ['推奨', '4GB 以上'],
      ],
    },
    {
      id: 10,
      key: 'DirectX',
      value: '9.0c 以降',
    },
  ]
}
