<template>
  <header
    class="Header position-sticky w-100 overflow-hidden"
    :class="{ 'Header--NotTop': !isTopPage }"
  >
    <h1 class="Header__Title position-absolute m-0" @click="navigateToTopPage">
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
export default class HeaderContents extends Vue {
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
  // Top Page 以外
  &--NotTop {
    display: flex;
    align-items: center;
    justify-content: center;
    .Header {
      &__Title {
        right: auto;
        cursor: pointer;
        @media (max-width: $--lg) {
          display: inline;
        }
      }
      &__Nav {
        display: none;
      }
    }
  }
}
</style>
