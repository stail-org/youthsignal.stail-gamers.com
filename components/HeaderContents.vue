<template>
  <header>
    <h1>
      <img
        class="youthsignal-header"
        src="~/assets/images/youthsignal-header.png"
        alt="YouthSignal"
      />
    </h1>
    <nav>
      <div class="nav-wrapper">
        <table>
          <tr>
            <td v-for="nav in navigations" :key="nav.id">
              <a
                v-if="nav.link"
                :href="nav.link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ nav.text }}
              </a>
              <nuxt-link v-else v-scroll-to="scrollOpt(nav.id)" to>
                {{ nav.text }}
              </nuxt-link>
            </td>
          </tr>
        </table>
      </div>
    </nav>
    <div class="nav-float-trial">
      <a
        href="https://youthsignal-trial.stail-gamers.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {{ `体験版はこちら！ ` }}
        <fa class="nav-float-trial-fa" :icon="faExternalLinkAlt" />
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
        {
          id: 'Trial',
          text: 'TRIAL',
          link: 'https://youthsignal-trial.stail-gamers.com/',
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
header {
  position: sticky;
  top: 0;
  width: 100%;
  height: 60px;
  font-family: 'MS P Gothic', sans-serif;
  font-size: 0.8em;
  background: black;
  h1 {
    position: absolute;
    right: 0;
    margin: 0;
    text-align: right;
  }
  .nav-float-trial {
    position: absolute;
    top: 80px;
    right: 20px;
    z-index: 9999;
    padding: 16px;
    overflow: hidden;
    background: rgba(#2f96b4, 0.7);
    border-radius: 8px;
    a {
      color: white;
    }
    &-fa {
      animation-name: bounce;
      animation-duration: 3s;
      animation-timing-function: cubic-bezier(0.77, 0, 0.175, 1);
      animation-iteration-count: infinite;
    }
  }
  nav {
    line-height: 60px;
    .nav-wrapper {
      table {
        margin: auto;
        table-layout: auto;
        td {
          padding: 0 10px;
          a {
            color: white;
            text-decoration: none;
          }
          a:hover {
            color: #00f9ff !important;
          }
          a:visited {
            color: white;
          }
        }
      }
    }
  }
}

// タブレット～PC縮小版
@media (max-width: 1200px) {
  .youthsignal-header {
    width: 65%;
    height: auto;
  }
}

// スマホ～タブレット
@media (max-width: 980px) {
  header {
    height: 40px;
    h1 {
      .youthsignal-header {
        display: none;
      }
    }
    nav {
      line-height: 40px;
    }
    .nav-stail-top {
      line-height: 40px;
    }
    .nav-float-trial {
      top: 52px;
      right: 0;
    }
  }
}

// スマホ
@media (max-width: 768px) {
  .nav-wrapper {
    overflow-x: auto;
    overflow-y: hidden;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .nav-stail-top {
    display: none;
  }
}

@keyframes bounce {
  0%,
  50% {
    transform: translateY(-2px);
  }
  60% {
    transform: translateY(-8px);
  }
  68% {
    transform: translateY(-2px);
  }
  76% {
    transform: translateY(-8px);
  }
  86%,
  100% {
    transform: translateY(-2px);
  }
}
</style>
