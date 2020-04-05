<template>
  <section id="characterArea" class="CharacterArea area-section text-center">
    <div class="CharacterArea__Container compact-container w-100">
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
        :class="`CharacterArea__Chara`"
        :style="{
          'background-image':
            'url(' +
            require(`~/assets/images/character-area/youthsignal-chara-${chara.id}.png`) +
            ')',
        }"
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
          <h4
            class="CharacterArea__Chara__Introduction__Top"
            :style="{
              color: charaColors[chara.id],
            }"
          >
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
      <div class="CharacterArea__SlideButton CharacterArea__SlideButton--Prev">
        <img
          class="CharacterArea__SlideButton__Img"
          src="~/assets/images/character-area/chara-prev-button.png"
          alt="YouthSignal Character Prev"
          @click="showPrev"
        />
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
      charaColors: {
        yoshito: '#838383',
        shizuno: '#5951ff',
        asahi: '#ff51f1',
        riko: '#ff5151',
        shunpei: '#51c8ff',
        saya: '#e4ff51',
        mahiro: '#97ff51',
        suzu: '#ff9751',
        yuto: '#51ffa3',
        toshiyuki: '#a16740',
      },
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
.CharacterArea {
  &__Container {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 15% auto auto 15%;
    @media (max-width: $--lg) {
      grid-template-rows: 2fr;
      grid-template-columns: 1fr;
    }
  }
  &__Title {
    margin-top: 5rem;
    &__Img {
      @media (max-width: $--lg) {
        width: 90%;
      }
    }
  }
  &__Chara {
    padding: 18% 5rem 18% 25rem;
    text-align: left;
    background-repeat: no-repeat;
    background-size: cover;
    @media (max-width: $--sm) {
      padding: 80px 5% 50px 5%;
      background-size: auto 600px;
    }
    &__Overview {
      @media (max-width: $--sm) {
        margin-left: 160px;
      }
      &__Name {
        font-size: 4vw;
        @media (max-width: $--sm) {
          font-size: 2rem;
        }
        rt {
          font-size: 1vw;
        }
      }
      &__CV {
        font-size: 1.2rem;
        text-align: right;
        @media (max-width: $--sm) {
          font-size: 1rem;
        }
      }
    }
    &__Introduction {
      margin-top: 4rem;
      @media (max-width: $--sm) {
        margin-top: 50px;
      }
      &__Top {
        margin-bottom: 2rem;
        font-size: 1.8rem;
        @media (max-width: $--sm) {
          margin-bottom: 100px;
          margin-left: 160px;
          font-size: 1.5rem;
        }
      }
      &__Text {
        margin-bottom: 0.2rem;
        font-size: 1.2rem;
        @media (max-width: $--sm) {
          font-size: 1rem;
        }
      }
      &__Spacer {
        margin-bottom: 1.6rem;
      }
    }
    &__Voice {
      margin-top: 3rem;
      text-align: right;
      @media (max-width: $--sm) {
        width: 100%;
        margin-top: 2rem;
      }
      &__Title {
        margin-right: 1.5rem;
      }
      &__Button {
        margin-left: 1.5rem;
        font-size: 2.2rem;
        cursor: pointer;
        @media (max-width: $--sm) {
          font-size: 2rem;
        }
      }
    }
  }
  &__SlideButton {
    align-self: center;
    cursor: pointer;
    @media (max-width: $--lg) {
      display: none;
    }
    &--Prev {
      grid-row: 1;
    }
  }
  &__SelectList {
    @media (max-width: $--sm) {
      padding: 0 5%;
    }
    &__Img {
      margin-right: 0.5rem;
      cursor: pointer;
      @media (max-width: $--lg) {
        width: 9%;
        margin-right: 3px;
      }
      @media (max-width: $--sm) {
        width: 60px;
        margin-right: 3px;
        margin-bottom: 3px;
      }
    }
  }
}
</style>
