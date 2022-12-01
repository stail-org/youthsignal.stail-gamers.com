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
        </section-fixed-right-top>
        <section-overview :cien-info="cienInfoList" />
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

import SectionOverview, {
  CienInfo,
} from '~/components/index/sections/Overview.vue'
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

const Parser = require('rss-parser')
const parser = new Parser()

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
  data() {
    return {
      cienInfoList: [
        { id: 1, title: 'hello', url: 'hhh', createdAt: new Date() },
        { id: 1, title: 'hello', url: 'hhh', createdAt: new Date() },
        { id: 1, title: 'hello', url: 'hhh', createdAt: new Date() },
      ] as CienInfo[],
    }
  }

  mounted() {
    if (!viewStore.notInitializedWindowSize) return

    viewStore.setWindowSize({ width: innerWidth, height: innerHeight })
    window.addEventListener('resize', () => {
      viewStore.setWindowSize({ width: innerWidth, height: innerHeight })
    })
    // this.getRss().then((data) => {
    //   this.cienInfoList = data
    // })
  }

  async getRss() {
    // rss
    const feed = await parser.parseURL(
      'https://ci-en.net/creator/2349/article/xml/rss'
    )
    const infoList: {
      id: number
      title: string
      url: string
      createdAt: Date
    }[] = []
    feed.items.forEach((item, i) => {
      infoList.push({
        id: i,
        title: item.title,
        url: item.link,
        createdAt: new Date(item['dc:date']),
      })
    })
    return infoList
  }

  beforeDestroy() {
    window.removeEventListener('resize', () => {})
  }
}
</script>
