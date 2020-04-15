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
        <div class="OverviewArea__Info__List text-left">
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
            </p>
          </div>
          <nuxt-link to="/recruit" class="RecruitBanner">
            <img
              class="RecruitBanner__Img"
              src="~/assets/images/overview-area/informations/recruit-banner.jpg"
              alt="リクルートページはこちら"
            />
          </nuxt-link>
        </div>
      </div>
      <div class="OverviewArea__Movie">
        <h2 class="OverviewArea__Movie__Title">
          <img
            class="width-100 responsive"
            :src="titleImgSrc"
            alt="YouthSignal Movies"
          />
        </h2>
        <video
          class="OverviewArea__Movie__Item"
          src="~/assets/images/overview-area/movies/c96-promotion-video.mp4"
          controls
        ></video>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { informationStore, modalStore, viewStore } from '~/store'

@Component
export default class OverviewArea extends Vue {
  get informationList() {
    return informationStore.list
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
    grid-template-columns: repeat(auto-fit, minmax($grid-breakpoint, 1fr));
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
      .RecruitBanner {
        &__Img {
          width: 100%;
          margin-top: 2rem;
        }
      }
    }
  }

  &__Movie {
    width: 95%;
    text-align: center;
    &__Title {
      margin-bottom: 1rem;
    }
    &__Item {
      width: 95%;
      margin: auto;
    }
  }
}
</style>
