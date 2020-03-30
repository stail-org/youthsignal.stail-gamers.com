<template>
  <header class="Header">
    <h1 class="Header__Title">
      <img
        class="Heater__Title__Image"
        src="~/assets/images/youthsignal-header.png"
        alt="YouthSignal"
      />
    </h1>
    <nav class="Header__Nav">
      <div class="Header__Nav__Wrapper">
        <span
          v-for="nav in navigations"
          :key="nav.id"
          class="Header__Nav__Item"
        >
          <nuxt-link
            v-scroll-to="scrollOpt(nav.id)"
            class="white without-underline"
            to
          >
            {{ nav.text }}
          </nuxt-link>
        </span>
      </div>
    </nav>
    <div class="Header__Float">
      <a
        class="white"
        href="https://youthsignal-trial.stail-gamers.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {{ `体験版はこちら！ ` }}
        <fa class="fa" :icon="faExternalLinkAlt" />
      </a>
    </div>
  </header>
</template>

<script>
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

export default {
  name: 'HeaderContents',
  data() {
    return {
      scrollClickCount: 0,
      navigations: [
        {
          id: 'overviewArea',
          text: 'TOP',
        },
        {
          id: 'introductionArea',
          text: 'INTRODUCTION',
        },
        {
          id: 'storyArea',
          text: 'THEMA&STORY',
        },
        {
          id: 'characterArea',
          text: 'CHARACTER',
        },
        {
          id: 'imagesArea',
          text: 'IMAGES',
        },
        {
          id: 'staffArea',
          text: 'STAFF&SPEC',
        },
      ],
    }
  },
  computed: {
    faExternalLinkAlt() {
      return faExternalLinkAlt
    },
  },
  methods: {
    scrollOpt(id) {
      return {
        el: `#${id}`,
        duration: 700,
        easing: [0, 0, 0.1, 1],
        offset: -100,
        force: true,
        cancelable: false,
        onStart: () => {
          this.scrollClickCount++
          if (this.scrollClickCount > 1)
            alert('どこの組織の者だ？\n……君、デバッガーの素質あるね？')
        },
        onDone: () => {
          this.scrollClickCount--
        },
      }
    },
  },
}
</script>

<style scoped lang="scss">
.Header {
  position: sticky;
  top: 0;
  z-index: $--z-index-deep;
  width: 100%;
  height: 60px;
  font-size: 0.8em;
  background: black;
  &__Title {
    position: absolute;
    right: 0;
    margin: 0;
    text-align: right;
  }
  &__Float {
    position: absolute;
    top: 80px;
    right: 20px;
    z-index: 9999;
    padding: 16px;
    overflow: hidden;
    background: rgba(#2f96b4, 0.7);
    border-radius: 8px;
    .fa {
      animation-name: bounce;
      animation-duration: 3s;
      animation-timing-function: cubic-bezier(0.77, 0, 0.175, 1);
      animation-iteration-count: infinite;
    }
  }
  &__Nav {
    line-height: 60px;
    &__Wrapper {
      display: flex;
      justify-content: center;
    }
    &__Item {
      padding: 0 10px;
    }
  }
}

// タブレット～PC縮小版
@media (max-width: 1200px) {
  .Header {
    &__Title {
      display: none;
    }
  }
}

// スマホ～タブレット
@media (max-width: 980px) {
  .Header {
    height: 40px;
    &__Nav {
      line-height: 40px;
    }
    &__Float {
      top: 52px;
      right: 0;
    }
  }
}

// スマホ
@media (max-width: 768px) {
  .Header {
    &__Nav {
      &__Wrapper {
        overflow-x: auto;
        overflow-y: hidden;
        &::-webkit-scrollbar {
          display: none;
        }
      }
    }
  }
}
</style>
