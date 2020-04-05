<template>
  <header class="Header position-sticky w-100 overflow-hidden">
    <h1 class="Header__Title position-absolute m-0">
      <img
        class="Header__Title__Img"
        src="~/assets/images/youthsignal-header.png"
        alt="YouthSignal"
      />
    </h1>
    <nav class="Header__Nav">
      <b-row class="Header__Nav__Wrapper flex-nowrap mx-auto">
        <b-col
          v-for="nav in navigations"
          :key="nav.id"
          class="Header__Nav__Item text-center"
        >
          <nuxt-link
            v-scroll-to="scrollOpt(nav.id)"
            class="white without-underline"
            to
          >
            {{ nav.text }}
          </nuxt-link>
        </b-col>
      </b-row>
    </nav>
    <div class="Header__Float position-absolute">
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
  top: 0;
  z-index: $--z-index-deep;
  height: 60px;
  font-size: 0.8em;
  background: black;
  @media (max-width: $--md) {
    height: 40px;
  }
  &__Title {
    right: 0;
    @media (max-width: $--lg) {
      display: none;
    }
    &__Img {
      width: 300px;
    }
  }
  &__Nav {
    line-height: 60px;
    @media (max-width: $--md) {
      line-height: 40px;
    }
    &__Wrapper {
      width: 640px;
      overflow-x: auto;
      @media (max-width: $--sm) {
        width: 100%;
      }
    }
  }
  &__Float {
    top: 80px;
    right: 20px;
    z-index: $--z-index-deep;
    padding: 16px;
    background: rgba($--color-dark-cyan, 0.7);
    border-radius: 8px;
    @media (max-width: $--md) {
      top: 52px;
      right: 0;
    }
    .fa {
      animation-name: bounce;
      animation-duration: 3s;
      animation-timing-function: cubic-bezier(0.77, 0, 0.175, 1);
      animation-iteration-count: infinite;
    }
  }
}
</style>
