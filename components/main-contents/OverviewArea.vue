<template>
  <section id="overviewArea" class="overview-area">
    <div class="container">
      <div class="sub-container info-container">
        <h2>
          <img
            src="~assets/images/overview-area/overview-info-title.png"
            alt="YouthSignal Infomations"
          />
        </h2>
        <div class="info-list">
          <div
            v-for="info in $store.state.infomation.list"
            :key="info.id"
            class="info-box"
          >
            <p class="info-created-at">{{ info.createdAt }}</p>
            <p class="info-title">
              <!-- リンクタイプの場合は、別タブで開く -->
              <a
                v-if="info.type === 'link'"
                href="https://youthsignal-trial.stail-gamers.com"
                target="_blank"
                rel="noopener noreferrer"
                >{{ info.title }}</a
              >
              <!-- 通常は、モーダルウィンドウでインフォ表示 -->
              <a
                v-else
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
      <div class="sub-container movie-container">
        <h2>
          <img
            v-if="width > 768"
            src="~assets/images/overview-area/overview-movie-title.png"
            alt="YouthSignal Movies"
          />
          <img
            v-else
            src="~assets/images/overview-area/overview-movie-title-sp.png"
            alt="YouthSignal Movies"
          />
        </h2>
        <div class="movies">
          <video
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
.overview-area {
  padding-top: 65%;
  margin: 0;
  background: url('~assets/images/youthsignal-keyvisual.jpg') no-repeat;
  background-size: 100%;
  .container {
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    padding: 10px 0;
    background: rgba(0, 0, 0, 0.7);

    .sub-container {
      width: 50%;
      text-align: center;
      h2 {
        padding: 0 10%;
        margin-bottom: 1rem;
        img {
          width: 100%;
          height: auto;
        }
      }
    }

    .info-container {
      .info-list {
        height: 22vw;
        padding: 0 10% 0 13%;
        overflow-y: scroll;
        text-align: left;
        .info-box {
          margin-bottom: 5px;
          font-size: 0.85rem;
          border-bottom: 2px solid #585858;
          & p {
            margin: 0;
          }
          .info-title {
            margin-left: 10px;
            & a {
              font-family: 'MS P Gothic', sans-serif;
              color: #df4600;
              text-decoration: underline;
              cursor: pointer;
            }
          }
        }
      }
    }

    .movie-container {
      .movies {
        video {
          width: 80%;
          height: auto;
        }
      }
    }
  }
}

// タブレット～PC縮小版（INFO, MOVIE の体裁崩れ）
@media (max-width: 1200px) {
  .overview-area {
    padding-top: 65%;
  }
}

// スマホ & タブレット
@media (max-width: 768px) {
  .overview-area {
    .container {
      display: flex;
      flex-flow: column wrap;
      align-items: flex-start;
      background: rgba(0, 0, 0, 0.7);

      .sub-container {
        width: 100%;
        h2 {
          padding: 0 10px;
        }
      }

      .info-container {
        .info-list {
          height: 190px;
          padding: 0 10px 0 40px;
        }
      }

      .movie-container {
        margin-top: 2rem;
        .movies {
          margin-top: 1rem;
          video {
            width: 95%;
          }
        }
      }
    }
  }
}
</style>
