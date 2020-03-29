<template>
  <section id="storyArea">
    <div class="story-container">
      <h2 class="title">
        <img
          v-if="width > 768"
          src="~assets/images/story-area/story-title.png"
          alt="YouthSignal Thema and Story"
        />
        <img
          v-else
          src="~assets/images/story-area/story-title-sp.png"
          alt="YouthSignal Thema and Story"
        />
      </h2>
      <div class="contents">
        <h3 class="overview">
          SERIOUS x REALITY x LOVE
        </h3>
        <p>本作のテーマは『シリアス』『リアリティ』『純愛』。</p>
        <p>
          舞台は登場人物たちが住む東京都「梁ノ宮区」。<br />主人公の入学した代から、梁ノ宮高校の風紀はありえないほど悪化する。
        </p>
        <p>
          加えてそれらは、単純な暴力のような目立ったものでない分、<br />
          “より陰湿” かつ “規模を考えない”
          卑劣で悍ましいものへと進化していった。
        </p>
        <p>
          これに対抗すべく立ち上がったのが、神崎俊之教員が顧問する『生徒会』。<br />生徒たちは、それぞれの気持ちを旨に率先して風紀改善に取り組み、事件の数だけ実績を挙げてきた。
        </p>
        <p>
          しかし、一つ一つの案件を解決しても、それが抑止力になるどころか手の回らないほどに事件が続出しだす始末。<br />卒業式の日には、三年生は各々の学生生活を振り返りつつ、<br />自らの黄金時代を汚された悔しさを噛み締めながら、校舎を発っていった。<br />
        </p>
        <p>
          そんな先輩の背中を見ながら二年生へと進級した「本作の登場人物たち」は、<br />どのような気持ちで春を迎え、夏を越えて本作の舞台となる『プロローグ』に立ったのか。
        </p>
        <p>
          彼らのそれぞれの『想い』を、主人公を基本にした多視点で繰り広げる、<br />『人生で最高に楽しかったあの頃』を取り戻す物語。
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'StoryArea',
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
.story-container {
  text-align: center;
  .title {
    margin-top: 12rem;
    margin-bottom: 4rem;
  }
  .contents {
    padding: 0 2rem;
    background: url('~assets/images/story-area/story-background.png') no-repeat;
    .overview {
      margin-bottom: 4rem;
      font-size: 3.5rem;
    }
    p {
      margin-bottom: 2rem;
      font-size: 1.3rem;
      line-height: 2rem;
    }
  }
}

// スマホ＆タブレット
@media (max-width: 768px) {
  .story-container {
    .title {
      img {
        width: 90%;
      }
    }
    .contents {
      .overview {
        font-size: 2.5rem;
      }
      p {
        font-size: 1rem;
      }
    }
  }
}
</style>
