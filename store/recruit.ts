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
      id: 'voice-actor',
      title: '女性声優 兼 広報アシスタント',
      overview: [
        'ノベルゲーム「YouthSignal」の広報アシスタント',
        '宣伝ラジオやナレーション、次回作への声優参加など声優の作業',
      ],
      task: [
        'Ci-enやツイッターなどの広報運用と企画立案の補佐',
        'ラジオのMC/ナレーションなどの声優としての参加',
      ],
      request: [
        '１８歳以上の女性であること',
        '今後声優としてステップアップしたい/出来ることを増やしたい',
        '定期的にディスコードにてやりとりを行えること',
        '１年以上共に作品に携われる方',
        'ノベルゲームが好き',
      ],
      required: [
        'やる気に溢れている',
        '宅録ができる',
        '声優以外にも武器を作りたい',
      ],
      wanted: [
        'ブログなどのサイト運営',
        '美少女ゲームが好き',
        'ジャンルにとらわれず何事にも挑戦できる。',
      ],
      reward: ['応相談'],
      comment: [
        '同人ゲームサークル「STail」での声優兼広報アシスタントの募集になります',
        '現役のコンシューマーゲーム制作会社で仕事をしているメンバーと共に、声優として、広報アシスタントとして、サークルと一緒に成長できる方を募集しています。',
        '声優のスキルのみを磨くことが志望の方にとっては、また違った方向性の募集でありますが、Ci-en での企画やグッズの制作ノウハウなどを身に着けながら、声優として色々なことを一緒にやっていける方を募集しています。    ',
        '私たちと共に成長していく中で、次回作への出演やラジオのパーソナリティなどもお任せできるかもしれません。また、自分でやりたい企画などを挙げていただれば、サークルの企画としてしっかり話し合い、全力で応援します。',
        '声優としてだけではなく、様々なノウハウを得られるチャンスだと思います。この機会にいかがですか？',
      ],
      head: {
        title: '女性声優 兼 広報アシスタント - Recruit - YouthSignal',
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
            content:
              '女性声優 兼 広報アシスタントを募集しています！【サークルSTail】',
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
            content: '女性声優 兼 広報アシスタント - Recruit - YouthSignal',
          },
        ],
      },
    },
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
