<template>
  <section id="characterArea" class="CharacterArea area-section">
    <div class="CharacterArea__Container compact-container">
      <div class="CharacterArea__SlideButton CharacterArea__SlideButton--Prev">
        <img
          class="CharacterArea__SlideButton__Img"
          src="~/assets/images/character-area/chara-prev-button.png"
          alt="YouthSignal Character Prev"
          @click="showPrev"
        />
      </div>
      <h2 class="CharacterArea__Title">
        <img
          v-if="width > 1200"
          class="CharacterArea__Title__Img"
          src="~/assets/images/character-area/chara-title.png"
          alt="YouthSignal Character"
        />
        <img
          v-else
          class="CharacterArea__Title__Img"
          src="~/assets/images/character-area/chara-title-sp.png"
          alt="YouthSignal Character"
        />
      </h2>
      <div
        v-for="chara in characters"
        v-show="chara.showing"
        :key="chara.id"
        :class="`CharacterArea__Chara ${chara.id}`"
      >
        <div class="CharacterArea__Chara__Overview">
          <h3 class="CharacterArea__Chara__Overview__Name">
            <ruby>
              {{ chara.jaName.split(' ')[0] }}
              <rt>{{ chara.furigana.split(' ')[0] }} </rt>
            </ruby>
            <ruby>
              {{ chara.jaName.split(' ')[1] }}
              <rt>{{ chara.furigana.split(' ')[1] }} </rt>
            </ruby>
          </h3>
          <p class="CharacterArea__Chara__Overview__CV">
            CV. {{ chara.overview.cv }}
          </p>
        </div>
        <div class="CharacterArea__Chara__Introduction">
          <h4 class="CharacterArea__Chara__Introduction__Top">
            {{ chara.introduction.top }}
          </h4>
          <p
            v-for="(text, i) in chara.introduction.text"
            :key="i"
            class="CharacterArea__Chara__Introduction__Text"
          >
            {{ text }}
          </p>
          <p class="CharacterArea__Chara__Introduction__Text"></p>
          <p class="CharacterArea__Chara__Introduction__Text">
            {{ chara.introduction.bot }}
          </p>
        </div>
        <div v-if="false" class="CharacterArea__Chara__Voice">
          <span class="CharacterArea__Chara__Voice__Title">VOICE SAMPLE</span>
          <span
            class="CharacterArea__Chara__Voice__Button"
            @click="playAudio(chara.id, 1)"
            >①</span
          >
          <span
            class="CharacterArea__Chara__Voice__Button"
            @click="playAudio(chara.id, 2)"
            >②</span
          >
          <span
            class="CharacterArea__Chara__Voice__Button"
            @click="playAudio(chara.id, 3)"
            >③</span
          >
        </div>
      </div>
      <div class="CharacterArea__SlideButton CharacterArea__SlideButton--Next">
        <img
          class="CharacterArea__SlideButton__Img"
          src="~/assets/images/character-area/chara-next-button.png"
          alt="YouthSignal Character Next"
          @click="showNext"
        />
      </div>
    </div>
    <div class="CharacterArea__SelectList">
      <img
        v-for="chara in characters"
        :key="chara.id"
        class="CharacterArea__SelectList__Img"
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
.CharacterArea {
  text-align: center;
  &__Container {
    display: flex;
    flex-flow: row nowrap;
    align-items: flex-start;
    justify-content: space-around;
    width: 100%;
  }
  &__Title {
    margin-top: 7%;
    &__Img {
      width: 71px;
      height: auto;
    }
  }
  &__SlideButton {
    align-self: center;
    margin: 0 6%;
    cursor: pointer;
    &__Img {
      width: 101px;
      height: auto;
    }
  }
  &__Chara {
    padding: 10% 3% 10% 25rem;
    text-align: left;
    background-size: cover;
    &__Overview {
      display: inline-block;
      &__Name {
        font-size: 4vw;
        rt {
          font-size: 1vw;
        }
      }
      &__CV {
        font-size: 1.2rem;
        text-align: right;
      }
    }
    &__Introduction {
      margin-top: 4rem;
      &__Top {
        margin-bottom: 2rem;
        font-size: 1.8rem;
      }
      &__Text {
        margin-bottom: 0.2rem;
        font-size: 1.2rem;
      }
      &__Spacer {
        margin-bottom: 1.6rem;
      }
    }
    &__Voice {
      margin-top: 3rem;
      text-align: right;
      &__Title {
        margin-right: 1.5rem;
      }
      &__Button {
        margin-left: 1.5rem;
        font-size: 2.2rem;
        cursor: pointer;
      }
    }
  }
  &__SelectList {
    &__Img {
      margin-right: 0.5rem;
      cursor: pointer;
    }
  }
}
// レスポンシブ対応
@media (max-width: 1536px) {
  .CharacterArea {
    &__Title {
      &__Img {
        width: 50px;
      }
    }
    &__SlideButton {
      margin: 0 2%;
      &__Img {
        width: 80px;
        height: auto;
      }
    }
  }
}

@media (max-width: 1200px) {
  .CharacterArea {
    &__SelectList {
      &__Img {
        width: 9%;
        margin-right: 3px;
      }
    }
    &__Container {
      flex-flow: column nowrap;
      align-items: center;
    }
    &__Title {
      margin: 0 5% 0 5%;
      &__Img {
        width: 100%;
      }
    }
    &__SlideButton {
      display: none;
    }
  }
}

// タブレット
@media (max-width: 768px) {
  .CharacterArea {
    &__Container {
      width: 100%;
    }
    &__Chara {
      padding: 80px 5% 50px 5%;
      background-size: auto 600px;
      &__Overview {
        margin-left: 160px;
        &__Name {
          font-size: 2rem;
        }
        .cv {
          font-size: 1rem;
        }
      }
      &__Introduction {
        margin-top: 50px;
        &__Top {
          margin-bottom: 100px;
          margin-left: 160px;
          font-size: 1.5rem;
        }
        &__Text {
          font-size: 1rem;
        }
      }
      &__Voice {
        width: 100%;
        margin-top: 2rem;
        &__Button {
          font-size: 2rem;
        }
      }
    }
    &__SelectList {
      padding: 0 5% 0 5%;
      &__Img {
        width: 60px;
        margin-right: 3px;
        margin-bottom: 3px;
      }
    }
  }
}
</style>
