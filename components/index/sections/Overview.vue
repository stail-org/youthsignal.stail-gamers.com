<template>
  <section id="overviewArea" class="OverviewArea area-section m-0">
    <div class="OverviewArea__Wrapper compact-container w-100 py-3">
      <div class="OverviewArea__Info">
        <h2 class="OverviewArea__Info__Title">
          <img
            class="width-100 responsive"
            src="~/assets/images/overview-area/overview-info-title.png"
            alt="YouthSignal Informations"
          />
        </h2>
        <p>aaaa{{ cienInfoList }}</p>
        <div class="OverviewArea__Info__List text-left">
          <div
            v-for="info in cienInfoList"
            :key="info.id"
            class="OverviewArea__Info__List__Item Info"
          >
            <p class="Info__Text">{{ info.createdAt }}</p>
            <p class="Info__Text ml-3">
              <!-- モーダルウィンドウでインフォ表示 -->
              <!-- モーダルウィンドウでインフォ表示 -->
              <a
                class="red always-underline"
                :href="info.url"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ info.title }}
                <fa class="fa" :icon="faExternalLinkAlt" />
              </a>
            </p>
          </div>
          <div
            v-for="info in informationList"
            :key="info.id"
            class="OverviewArea__Info__List__Item Info"
          >
            <p class="Info__Text">{{ info.createdAt }}</p>
            <p class="Info__Text ml-3">
              <!-- モーダルウィンドウでインフォ表示 -->
              <a
                v-if="info.type === 'modal'"
                class="red always-underline"
                @click="showModal('information', getSlideNumber(info.id))"
              >
                {{ info.title }}
              </a>
              <!-- モーダルウィンドウでインフォ表示 -->
              <a
                v-else-if="info.type === 'link'"
                class="red always-underline"
                :href="info.url"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ info.title }}
                <fa class="fa" :icon="faExternalLinkAlt" />
              </a>
            </p>
          </div>
        </div>
        <nuxt-link to="/recruit" class="RecruitBanner">
          <img
            class="RecruitBanner__Img"
            src="~/assets/images/overview-area/informations/recruit-banner.jpg"
            alt="リクルートページはこちら"
          />
        </nuxt-link>
      </div>
      <div class="OverviewArea__Movie">
        <h2 class="OverviewArea__Movie__Title">
          <img
            class="width-100 responsive"
            :src="titleImgSrc"
            alt="YouthSignal Movies"
          />
        </h2>
        <youtube ref="youtube" class="w-100" video-id="poJz8Wq36dI"></youtube>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { informationStore, modalStore, viewStore } from '~/store'

const Parser = require('rss-parser')
const parser = new Parser()

export interface CienInfo {
  id: number
  title: string
  url: string
  createdAt: Date
}

@Component
export default class OverviewArea extends Vue {
  public infos: {
    id: number
    title: string
    url: string
    createdAt: Date
  }[] = []

  @Prop({ type: Array, required: true }) readonly cienInfo!: CienInfo[]

  get cienInfoList(): CienInfo[] {
    return this.cienInfo
  }

  get informationList() {
    this.cienInfoListPromise().then((data) => {
      console.log(data)
      this.infos = data
    })
    return informationStore.list
  }

  async cienInfoListPromise() {
    const feed = await parser.parseURL(
      'https://ci-en.net/creator/2349/article/xml/rss'
    )
    const infoList: {
      id: number
      title: string
      url: string
      createdAt: Date
    }[] = []
    feed.items.forEach((item, i) => {
      infoList.push({
        id: i,
        title: item.title,
        url: item.link,
        createdAt: new Date(item['dc:date']),
      })
    })
    return infoList
  }

  get getSlideNumber() {
    return (id: number) => {
      return informationStore.getSlideNumber(id)
    }
  }

  get titleImgSrc() {
    const fileName =
      viewStore.windowSize.width > 992
        ? 'overview-movie-title'
        : 'overview-movie-title-sp'
    return require(`~/assets/images/overview-area/${fileName}.png`)
  }

  get faExternalLinkAlt() {
    return faExternalLinkAlt
  }

  showModal(mode: 'information' | 'image', showTarget: number) {
    modalStore.show({ mode, showTarget })
  }
}
</script>

<style scoped lang="scss">
// スクロールバーが約 16 px
$grid-breakpoint: ($--md - 16px) / 2;

.OverviewArea {
  padding-top: 65%;
  background: url('~assets/images/youthsignal-keyvisual.jpg') no-repeat;
  background-size: 100%;
  &__Wrapper {
    display: grid;
    // iPhone 5s の横幅まで対応
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    justify-items: center;
    background: rgba(black, 0.7);
    @media (max-width: $--md) {
      gap: 2rem;
    }
  }

  &__Info {
    width: 95%;
    &__Title {
      margin-bottom: 1rem;
    }
    &__List {
      max-height: 282px;
      padding-right: 3%;
      padding-left: 3%;
      overflow-y: scroll;
      &__Item {
        margin-bottom: 5px;
        font-size: 0.85rem;
        border-bottom: 2px solid #585858;
        .Info {
          &__Text {
            margin: 0;
            &--Title {
              margin-left: 10px;
            }
          }
        }
      }
    }
    .RecruitBanner {
      &__Img {
        width: 100%;
        padding-left: 3%;
        margin-top: 2rem;
      }
    }
  }

  &__Movie {
    width: 95%;
    text-align: center;
    &__Title {
      margin-bottom: 1rem;
    }
  }
}
</style>
