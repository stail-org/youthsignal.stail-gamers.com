<template>
  <section id="introductionArea" class="introduction-area">
    <div class="container">
      <h2 class="title">
        <img
          v-if="width > 768"
          src="~assets/images/introduction-area/introduction-title.png"
          alt="YouthSignal Movies"
        />
        <img
          v-else
          src="~assets/images/introduction-area/introduction-title-sp.png"
          alt="YouthSignal Movies"
        />
      </h2>
      <div class="text">
        <p class="introduction-overview">
          <img
            src="~assets/images/introduction-area/introduction-text.png"
            alt="YouthSignal 概要"
          />
          <span>
            主人公達が通う<br />私立<span data-ruby="ハシノミヤ">梁ノ宮</span
            >高校には、<br />問題が山積みである</span
          >
        </p>
        <p>
          耐えない落書き、イタズラ、陰湿ないじめ、影の暴力、匙を投げた教員……。<br />そして風紀の乱れを律するべく動く本校生徒会、所属する生徒達。
        </p>
        <p>
          同時に、本来なら部活や勉強、もっと普通の学生生活を送っていたであろうはずの生徒会員生徒は、<br />各々が思春期独特の言い様のない不安感や焦燥感、日常を費やす欠落感に苛まれながら過ごしていた。
        </p>
        <p>
          バラバラの目的と背中合わせの手探り。<br />つぎはぎの様に集まった彼らが、それでも素直な頃を思い出しながら不器用なりに友愛を深めていく。
        </p>
        <p>果たして、乱れた学校の風紀は？ 費やされた彼らの青春の行方は？</p>
        <p>
          こうして彼らの、『本当になりたい自分』を取り戻す追憶の青春が、今、始まる――
        </p>
      </div>
    </div>
    <div class="image-container">
      <div class="image-contents">
        <p>
          <img
            src="~assets/images/introduction-area/youthsignal-introduction01.png"
            alt="YouthSignal紹介1"
          />
        </p>
        <p class="description1">
          梁ノ宮高校では今もなお不可解な事件が続いている。事件解決に向けて行動するのは教員、そして生徒会。<br />いったい誰が事件を起こしているのか。そしてその目的とは……？
        </p>
      </div>
      <div class="image-contents">
        <p>
          <img
            src="~assets/images/introduction-area/youthsignal-introduction02.png"
            alt="YouthSignal紹介2"
          />
        </p>
        <p class="description2">
          主人公、宮道嘉人が進む道は一つだけではない。<br />ヒロイン達の心や行動。その果てに嘉人が求めたものとは――――――
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'IntroductionArea',
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
      this.width = window.innerWidth
      this.height = window.innerHeight
    },
  },
}
</script>

<style scoped lang="scss">
.image-container {
  width: 100%;
  margin-top: 10%;
  font-size: 1.3rem;
  .image-contents {
    margin-bottom: 5%;
    img {
      width: 100%;
      height: auto;
    }
    .description1 {
      padding-right: 10%;
      padding-left: 36%;
    }
    .description2 {
      padding-left: 15%;
    }
  }
}
.container {
  width: 55%;
  margin: 0 auto;
  .title {
    margin-top: 15%;
  }
  .text {
    margin-top: 3rem;
    .introduction-overview {
      margin-top: 3rem;
      margin-bottom: 3rem;
      img {
        width: 100%;
        max-width: 846px;
        height: auto;
      }
      span {
        display: none;
      }
    }
    p {
      margin-bottom: 2rem;
      font-size: 1.3rem;
    }
  }
}

// PC縮小版
@media (max-width: 1200px) {
  .container {
    width: 80%;
  }
  .image-container {
    .image-contents {
      .description1 {
        padding-right: 10%;
        padding-left: 10%;
      }
      .description2 {
        padding-right: 10%;
        padding-left: 10%;
      }
    }
  }
}

// タブレット
@media (max-width: 768px) {
  .container {
    width: 90%;
    .title {
      img {
        width: 100%;
        height: auto;
      }
    }
    .text {
      p {
        font-size: 1.2rem;
      }
    }
  }
  .image-container {
    font-size: 1.2rem;
    .image-contents {
      .description1 {
        padding-right: 5%;
        padding-left: 5%;
      }
      .description2 {
        padding-right: 5%;
        padding-left: 5%;
      }
    }
  }
}
// スマホ
@media (max-width: 480px) {
  .container {
    .text {
      .introduction-overview {
        img {
          display: none;
        }
        span {
          display: inline;
          font-size: 2.2rem;
          line-height: 3rem;
          letter-spacing: 0.4rem;
          [data-ruby] {
            position: relative;
          }
          [data-ruby]::before {
            position: absolute;
            top: -1.5rem;
            right: 0;
            left: 2rem;
            font-size: 0.5rem;
            content: attr(data-ruby);
          }
        }
      }
      p {
        font-size: 1rem;
      }
    }
  }
  .image-container {
    font-size: 1rem;
    .image-contents {
      p:first-of-type {
        overflow-x: scroll;
        img {
          width: 200%;
        }
      }
    }
  }
}

::-webkit-scrollbar {
  height: 10px;
}
::-webkit-scrollbar-track {
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
}

// エリアタイトルの画像サイズ
@media (max-width: 588px) {
  .container {
    .title {
      img {
        width: 90%;
      }
    }
  }
}
</style>
