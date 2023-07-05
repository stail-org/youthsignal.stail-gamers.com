<template>
  <main class="Top">
    <part-modal-container />
    <article class="Top__Article">
      <div class="Top__Article__Contents pb-5">
        <section-fixed-right-top>
          <part-link-box
            title="Cien で毎月リリース中！"
            url="https://ci-en.net/creator/2349/article/412646"
          />
          <part-link-box
            class="mt-2"
            title="DLsite"
            url="https://www.dlsite.com/home/circle/profile/=/maker_id/RG52910.html"
          />
          <part-link-box
            class="mt-2"
            title="公式ツイッター"
            url="https://twitter.com/STail_Official"
          />
        </section-fixed-right-top>
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
import SectionFixedRightTop from '~/components/index/sections/FixedRightTop.vue'

import PartModalContainer from '~/components/index/parts/ModalContainer.vue'
import PartLinkBox from '~/components/index/parts/LinkBox.vue'

import { viewStore } from '~/store'

@Component({
  components: {
    PartModalContainer,
    PartLinkBox,
    SectionOverview,
    SectionIntroduction,
    SectionStory,
    SectionCharacter,
    SectionImages,
    SectionStaff,
    SectionSpec,
    SectionFixedRightTop,
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
