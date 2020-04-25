<template>
  <main class="Top">
    <part-modal-container />
    <article class="Top__Article">
      <div class="Top__Article__Contents pb-5">
        <part-trial-link />
        <section-overview />
        <section-introduction />
        <section-story />
        <section-character />
        <section-images />
        <section-staff />
        <section-spec />
      </div>
    </article>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import SectionOverview from '~/components/index/sections/Overview.vue'
import SectionIntroduction from '~/components/index/sections/Introduction.vue'
import SectionStory from '~/components/index/sections/Story.vue'
import SectionCharacter from '~/components/index/sections/Character.vue'
import SectionImages from '~/components/index/sections/Images.vue'
import SectionStaff from '~/components/index/sections/Staff.vue'
import SectionSpec from '~/components/index/sections/Spec.vue'

import PartModalContainer from '~/components/index/parts/ModalContainer.vue'
import PartTrialLink from '~/components/index/parts/TrialLink.vue'

import { viewStore } from '~/store'

@Component({
  components: {
    PartModalContainer,
    PartTrialLink,
    SectionOverview,
    SectionIntroduction,
    SectionStory,
    SectionCharacter,
    SectionImages,
    SectionStaff,
    SectionSpec,
  },
})
export default class Index extends Vue {
  mounted() {
    if (!viewStore.notInitializedWindowSize) return

    viewStore.setWindowSize({ width: innerWidth, height: innerHeight })
    window.addEventListener('resize', () => {
      viewStore.setWindowSize({ width: innerWidth, height: innerHeight })
    })
  }

  beforeDestroy() {
    window.removeEventListener('resize', () => {})
  }
}
</script>
