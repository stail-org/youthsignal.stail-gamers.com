import { Module, VuexModule } from 'vuex-module-decorators'

interface RecruitData extends RecruitMetadata {
  head: Object
  overview: String[]
  task: String[]
  request: String[]
  required: String[]
  wanted: String[]
  reward: String[]
  comment: String[]
}

interface RecruitMetadata {
  id: string
  title: string
}

@Module({ stateFactory: true, namespaced: true, name: 'recruit' })
export default class Recruit extends VuexModule {
  list: RecruitData[] = [
    {
      id: 'scriptor',
      title: 'スクリプター',
      overview: ['ノベルゲーム「YouthSignal」のスクリプト制作'],
      task: [
        'ティラノスクリプトベースのスクリプト制作作業',
        '（ディレクター 瀞昧幹 と連携を取りつつ、ノベルゲームの演出を実装）',
      ],
      request: [
        '定期的に Discord にてやりとりを行えること',
        '新しい技術の学習に抵抗がないこと',
        'ゲーム制作が好き、あるいは興味をお持ちであること（未経験の方も歓迎致します）',
      ],
      required: ['最低限のパソコン操作スキル（実務経験等不問）'],
      wanted: [
        'ノベルゲームスクリプト制作経験',
        'プログラミング経験（HTML, CSS, JavaScript など）',
        '※基本的に経験不問でございます',
      ],
      reward: [],
      comment: [
        '商業作品に負けないボリュームのノベルゲームのスクリプター募集になります。',
        'キャラクターの表情やセリフの他、様々なエフェクトで魅力的な物語を一層引き立て、ユーザーに“面白い”を共に伝えてくれる方を募集しています。',
        'スクリプト作業に全く触れたことがない方でも大丈夫なように、プログラマーの TigRig からのレクチャーがあり、必要な資料を用意しています。',
        'サークル STail のメンバーも、ほとんどが 0 からの手探りで企画を始めて、ここまで成長できたサークルです。全くの素人でも、ゲーム制作に関わってみたい、実績にしたい、完成させてみたいという目標や想いがあれば、全体でバックアップをしつつ楽しく制作できると思います。',
        '共に、ノベルゲームの面白さを世界に伝えてみませんか？',
      ],
      head: {
        title: 'スクリプター - Recruit - YouthSignal',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content:
              '同人サークル STail では、共に最高のゲームを作るメンバーを募集しています。',
          },
          {
            hid: 'og:title',
            name: 'og:title',
            content: 'スクリプターを募集しています！【サークルSTail】',
          },
          {
            hid: 'og:url',
            name: 'og:url',
            content: 'https://youthsignal.stail-gamers.com/recruit/',
          },
          {
            hid: 'og:description',
            name: 'og:description',
            content: '共に、最高のゲームを作りませんか。',
          },
          {
            hid: 'og:site_name',
            name: 'og:site_name',
            content: 'スクリプター - Recruit - YouthSignal',
          },
        ],
      },
    },
  ]

  get metadataList() {
    const metadataList: RecruitMetadata[] = []
    for (const recruitData of this.list) {
      metadataList.push({
        id: recruitData.id,
        title: recruitData.title,
      })
    }

    return metadataList
  }

  get getRecruitDataById() {
    return (id: string) => {
      return this.list.find((rd) => rd.id === id)
    }
  }
}
