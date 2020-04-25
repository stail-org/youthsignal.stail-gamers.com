<template>
  <header
    class="Header position-sticky w-100 overflow-hidden"
    :class="{ 'Header--NotTop': !isTopPage }"
  >
    <nuxt-link
      v-if="!isTopPage"
      class="Header__BackToTop position-absolute"
      to="/"
    >
      <svg
        class="Header__BackToTop__Icon"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 11.8721V12.1279C3 12.9621 3.34735 13.7586 3.95865 14.3262L9.55669 19.5244C10.3767 20.2858 11.652 20.2622 12.4432 19.471C13.2556 18.6586 13.2556 17.3414 12.4432 16.529L9.91421 14H19C20.1046 14 21 13.1046 21 12C21 10.8954 20.1046 10 19 10H9.91421L12.4432 7.47099C13.2556 6.65858 13.2556 5.34141 12.4432 4.52901C11.652 3.73779 10.3767 3.71418 9.55669 4.47557L3.95865 9.67376C3.34735 10.2414 3 11.0379 3 11.8721Z"
          stroke="white"
          stroke-width="2"
        />
      </svg>

      <span class="Header__BackToTop__Text">Back to Home</span>
    </nuxt-link>
    <h1 class="Header__Title position-absolute m-0" @click="navigateToTopPage">
      <img
        class="Header__Title__Img"
        src="youthsignal-header.png"
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
            v-if="nav.type === 'scroll'"
            v-scroll-to="scrollOpt(nav.id)"
            class="white without-underline"
            to
          >
            {{ nav.title }}
          </nuxt-link>
          <nuxt-link
            v-else-if="nav.type === 'router-link'"
            class="white without-underline"
            :to="nav.id"
          >
            {{ nav.title }}
          </nuxt-link>
        </b-col>
      </b-row>
    </nav>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

interface NavigationItem {
  id: string
  title: string
  type: 'scroll' | 'router-link' | 'link'
}

@Component
export default class Header extends Vue {
  scrollClickCount: number = 0
  navigations = [
    {
      id: 'overviewArea',
      title: 'TOP',
      type: 'scroll',
    },
    {
      id: 'introductionArea',
      title: 'INTRODUCTION',
      type: 'scroll',
    },
    {
      id: 'storyArea',
      title: 'THEMA&STORY',
      type: 'scroll',
    },
    {
      id: 'characterArea',
      title: 'CHARACTER',
      type: 'scroll',
    },
    {
      id: 'imagesArea',
      title: 'IMAGES',
      type: 'scroll',
    },
    {
      id: 'staffArea',
      title: 'STAFF&SPEC',
      type: 'scroll',
    },
    {
      id: 'recruit',
      title: 'RECRUIT',
      type: 'router-link',
    },
  ]

  get isTopPage() {
    return this.$route.name === 'index'
  }

  scrollOpt(id) {
    return {
      el: `#${id}`,
      duration: 700,
      easing: [0, 0, 0.1, 1],
      offset: -100,
      force: true,
      cancelable: false,
    }
  }

  navigateToTopPage() {
    if (!this.isTopPage) this.$router.push('/')
  }
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
  // Top Page 以外
  &--NotTop {
    display: flex;
    align-items: center;
    justify-content: center;
    .Header {
      &__BackToTop {
        left: 0;
        margin-left: 2rem;
        text-decoration: none;
        @media (max-width: $--xs) {
          margin-left: 0.5rem;
        }
        &__Text {
          margin-left: 0.3rem;
          font-size: 1rem;
          color: $--color-white;
          vertical-align: middle;
          @media (max-width: $--md) {
            display: none;
          }
        }
        &:hover {
          .Header__BackToTop__Icon > path {
            stroke: $--color-cyan;
          }
          .Header__BackToTop__Text {
            color: $--color-cyan;
          }
        }
      }
      &__Title {
        right: auto;
        cursor: pointer;
        @media (max-width: $--lg) {
          display: inline;
        }
        @media (max-width: $--xs) {
          text-align: right;
        }
        &__Img {
          position: relative;
          top: -4px;
          @media (max-width: $--xs) {
            width: 80%;
            height: 40px;
          }
        }
      }
      &__Nav {
        display: none;
      }
    }
  }
}
</style>
