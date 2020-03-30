<template>
  <section id="overviewArea" class="OverviewArea area-section">
    <div class="OverviewArea__Wrapper compact-container">
      <div class="OverviewArea__Contents OverviewArea__Info">
        <h2 class="OverviewArea__Contents__Title">
          <img
            class="width-100 responsive"
            src="~/assets/images/overview-area/overview-info-title.png"
            alt="YouthSignal Infomations"
          />
        </h2>
        <div class="OverviewArea__Info__List">
          <div
            v-for="info in $store.state.infomation.list"
            :key="info.id"
            class="OverviewArea__Info__List__Item Info"
          >
            <p class="Info__Text">{{ info.createdAt }}</p>
            <p class="Info__Text Info__Text--Title">
              <!-- モーダルウィンドウでインフォ表示 -->
              <a
                v-if="info.type === 'modal'"
                class="red always-underline"
                @click="
                  $store.commit('modal/show', {
                    mode: 'infomation',
                    showTarget: $store.getters['infomation/getSlideNumber'](
                      info.id
                    ),
                  })
                "
                >{{ info.title }}</a
              >
            </p>
          </div>
        </div>
      </div>
      <div class="OverviewArea__Contents OverviewArea__Movie">
        <h2 class="OverviewArea__Contents__Title">
          <img
            v-if="width > 768"
            class="width-100 responsive"
            src="~assets/images/overview-area/overview-movie-title.png"
            alt="YouthSignal Movies"
          />
          <img
            v-else
            class="width-100 responsive"
            src="~assets/images/overview-area/overview-movie-title-sp.png"
            alt="YouthSignal Movies"
          />
        </h2>
        <div class="OverviewArea__Movie__Content">
          <video
            class="OverviewArea__Movie__Content__Item"
            src="~/assets/images/overview-area/movies/c96-promotion-video.mp4"
            controls
          ></video>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'OverviewArea',
  data() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      // resizeのたびにこいつが発火するので、ここでやりたいことをやる
      this.width = window.innerWidth
      this.height = window.innerHeight
    },
  },
}
</script>

<style scoped lang="scss">
.OverviewArea {
  padding-top: 65%;
  margin: 0;
  background: url('~assets/images/youthsignal-keyvisual.jpg') no-repeat;
  background-size: 100%;
  &__Wrapper {
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    padding: 10px 0;
    background: rgba(0, 0, 0, 0.7);
  }

  &__Contents {
    width: 50%;
    text-align: center;
    &__Title {
      padding: 0 10%;
      margin-bottom: 1rem;
    }
  }

  &__Info {
    &__List {
      height: 22vw;
      padding: 0 10% 0 13%;
      overflow-y: scroll;
      text-align: left;
      &__Item {
        margin-bottom: 5px;
        font-size: 0.85rem;
        border-bottom: 2px solid #585858;
      }
    }
  }

  &__Movie {
    &__Content {
      &__Item {
        width: 80%;
        height: auto;
      }
    }
  }
}
.Info {
  &__Text {
    margin: 0;
    &--Title {
      margin-left: 10px;
    }
  }
}

// タブレット～PC縮小版（INFO, MOVIE の体裁崩れ）
@media (max-width: 1200px) {
  .OverviewArea {
    padding-top: 65%;
  }
}

// スマホ & タブレット
@media (max-width: 768px) {
  .OverviewArea {
    &__Contents {
      width: 100%;
      &__Title {
        padding: 0 10px;
      }
    }

    &__Info {
      &__List {
        height: 190px;
        padding: 0 10px 0 40px;
      }
    }

    &__Movie {
      margin-top: 2rem;
      &__Content {
        margin-top: 1rem;
        &__Item {
          width: 95%;
        }
      }
    }
  }
}
</style>
