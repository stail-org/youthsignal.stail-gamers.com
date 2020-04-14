<template>
  <main id="main">
    <ModalContainer />
    <article>
      <Foreground />
      <MainContents />
    </article>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import ModalContainer from '~/components/index/parts/ModalContainer.vue'
import Foreground from '~/components/index/sections/Foreground.vue'
import MainContents from '~/components/index/sections/MainContents.vue'

import { viewStore } from '~/store'

@Component({
  components: {
    ModalContainer,
    Foreground,
    MainContents,
  },
})
export default class Index extends Vue {
  created() {
    viewStore.setWindowSize({ width: innerWidth, height: innerHeight })
    window.addEventListener('resize', () => {
      const { innerWidth, innerHeight } = window
      viewStore.setWindowSize({ width: innerWidth, height: innerHeight })
    })
  }

  beforeDestroy() {
    window.removeEventListener('resize', () => {})
  }
}
</script>
