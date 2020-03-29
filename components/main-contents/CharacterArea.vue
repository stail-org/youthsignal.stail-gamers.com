<template>
  <section id="characterArea" class="character-area">
    <div class="container">
      <div class="button-prev">
        <img
          src="~assets/images/character-area/chara-prev-button.png"
          alt="YouthSignal Character Prev"
          @click="showPrev"
        />
      </div>
      <div class="title">
        <h2>
          <img
            v-if="width > 1200"
            src="~assets/images/character-area/chara-title.png"
            alt="YouthSignal Character"
          />
          <img
            v-else
            src="~assets/images/character-area/chara-title-sp.png"
            alt="YouthSignal Character"
          />
        </h2>
      </div>
      <div
        v-for="chara in characters"
        v-show="chara.showing"
        :key="chara.id"
        :class="`contents ${chara.id}`"
      >
        <div class="overview">
          <h3>
            <ruby>
              {{ chara.jaName.split(' ')[0] }}
              <rt>{{ chara.furigana.split(' ')[0] }} </rt>
            </ruby>
            <ruby>
              {{ chara.jaName.split(' ')[1] }}
              <rt>{{ chara.furigana.split(' ')[1] }} </rt>
            </ruby>
          </h3>
          <p class="cv">CV. {{ chara.overview.cv }}</p>
        </div>
        <div class="introduction">
          <h4>{{ chara.introduction.top }}</h4>
          <p v-for="(text, i) in chara.introduction.text" :key="i">
            {{ text }}
          </p>
          <p class="spacer"></p>
          <p>{{ chara.introduction.bot }}</p>
        </div>
        <div v-if="false" class="voice">
          <span class="title">VOICE SAMPLE</span>
          <span class="button" @click="playAudio(chara.id, 1)">①</span>
          <span class="button" @click="playAudio(chara.id, 2)">②</span>
          <span class="button" @click="playAudio(chara.id, 3)">③</span>
        </div>
      </div>
      <div class="button-next">
        <img
          src="~assets/images/character-area/chara-next-button.png"
          alt="YouthSignal Character Next"
          @click="showNext"
        />
      </div>
    </div>
    <div class="select-list">
      <img
        v-for="chara in characters"
        :key="chara.id"
        :src="
          require(`~/assets/images/character-area/youthsignal-chara-thumbnail-${chara.id}.png`)
        "
        :alt="`${chara.jaName} サムネイル`"
        @click="show(chara)"
      />
    </div>
  </section>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'CharacterArea',
  data() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    }
  },
  computed: {
    ...mapState('character', { characters: 'list' }),
  },
  mounted() {
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    ...mapMutations('character', ['show', 'showPrev', 'showNext', 'playVoice']),
    playAudio(id, num) {
      this.playVoice(`/voice/${id}-${num}.ogg`)
    },
    handleResize() {
      this.width = window.innerWidth
      this.height = window.innerHeight
    },
  },
}
</script>

<style scoped lang="scss">
.yoshito {
  background: url('~assets/images/character-area/youthsignal-chara-yoshito.png')
    no-repeat;
  h4 {
    color: #838383;
  }
}

.shizuno {
  background: url('~assets/images/character-area/youthsignal-chara-shizuno.png')
    no-repeat;
  h4 {
    color: #5951ff;
  }
}

.asahi {
  background: url('~assets/images/character-area/youthsignal-chara-asahi.png')
    no-repeat;
  h4 {
    color: #ff51f1;
  }
}

.riko {
  background: url('~assets/images/character-area/youthsignal-chara-riko.png')
    no-repeat;
  h4 {
    color: #ff5151;
  }
}

.shunpei {
  background: url('~assets/images/character-area/youthsignal-chara-shunpei.png')
    no-repeat;
  h4 {
    color: #51c8ff;
  }
}

.saya {
  background: url('~assets/images/character-area/youthsignal-chara-saya.png')
    no-repeat;
  h4 {
    color: #e4ff51;
  }
}

.mahiro {
  background: url('~assets/images/character-area/youthsignal-chara-mahiro.png')
    no-repeat;
  h4 {
    color: #97ff51;
  }
}

.suzu {
  background: url('~assets/images/character-area/youthsignal-chara-suzu.png')
    no-repeat;
  h4 {
    color: #ff9751;
  }
}

.yuto {
  background: url('~assets/images/character-area/youthsignal-chara-yuto.png')
    no-repeat;
  h4 {
    color: #51ffa3;
  }
}

.toshiyuki {
  background: url('~assets/images/character-area/youthsignal-chara-toshiyuki.png')
    no-repeat;
  h4 {
    color: #a16740;
  }
}
.character-area {
  text-align: center;
  .select-list {
    img {
      margin-right: 0.5rem;
      cursor: pointer;
    }
  }
  .container {
    display: flex;
    flex-flow: row nowrap;
    align-items: flex-start;
    justify-content: space-around;
    width: 100%;
    .title {
      margin-top: 7%;
      img {
        width: 71px;
        height: auto;
      }
    }
    .contents {
      padding: 10% 3% 10% 25rem;
      text-align: left;
      background-size: cover;
      .overview {
        display: inline-block;
        .role {
          margin-bottom: 0;
          font-family: 'MS P Gothic', sans-serif;
          font-size: 0.9rem;
        }
        h3 {
          font-size: 4vw;
          rt {
            font-size: 1vw;
          }
        }
        .cv {
          font-size: 1.2rem;
          text-align: right;
        }
      }
      .introduction {
        margin-top: 4rem;
        h4 {
          margin-bottom: 2rem;
          font-size: 1.8rem;
        }
        p {
          margin-bottom: 0.2rem;
          font-family: 'MS P Gothic', sans-serif;
          font-size: 1.2rem;
        }
        p.spacer {
          margin-bottom: 1.6rem;
        }
      }
      .voice {
        margin-top: 3rem;
        text-align: right;
        .title {
          margin-right: 1.5rem;
        }
        .button {
          margin-left: 1.5rem;
          font-size: 2.2rem;
          cursor: pointer;
        }
      }
    }
    .button-prev,
    .button-next {
      align-self: center;
      margin: 0 6%;
      cursor: pointer;
      img {
        width: 101px;
        height: auto;
      }
    }
  }
}
</style>

<style lang="scss" scoped>
// レスポンシブ対応
@media (max-width: 1536px) {
  .character-area {
    .container {
      .title {
        img {
          width: 50px;
          height: auto;
        }
      }
      .button-prev,
      .button-next {
        margin: 0 2%;
        img {
          width: 80px;
          height: auto;
        }
      }
    }
  }
}

@media (max-width: 1200px) {
  .character-area {
    .select-list {
      img {
        width: 9%;
        margin-right: 3px;
      }
    }
    .container {
      flex-flow: column nowrap;
      align-items: center;
      .title {
        margin: 0 5% 0 5%;
        img {
          width: 100%;
          height: auto;
        }
      }
      .button-prev,
      .button-next {
        display: none;
      }
    }
  }
}

// タブレット
@media (max-width: 768px) {
  .character-area {
    .container {
      width: 100%;
      .contents {
        padding: 80px 5% 50px 5%;
        background-size: auto 600px;
        .overview {
          margin-left: 160px;
          h3 {
            font-size: 2rem;
          }
          .cv {
            font-size: 1rem;
          }
        }
        .introduction {
          margin-top: 50px;
          h4 {
            margin-bottom: 100px;
            margin-left: 160px;
            font-size: 1.5rem;
          }
          p {
            font-size: 1rem;
          }
        }
        .voice {
          width: 100%;
          margin-top: 2rem;
          .button {
            font-size: 2rem;
          }
        }
      }
    }
    .select-list {
      padding: 0 5% 0 5%;
      img {
        width: 60px;
        margin-right: 3px;
        margin-bottom: 3px;
      }
    }
  }
}
</style>
