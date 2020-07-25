import { Module, VuexModule } from 'vuex-module-decorators'

interface RecruitData extends RecruitMetadata {
  head: Object
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
}
