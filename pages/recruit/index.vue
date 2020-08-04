<template>
  <recruit-wrapper>
    <h1 class="text-center Recruit__Header">募集一覧</h1>
    <ul class="Recruit__LinkCardList">
      <li
        v-for="metadata in recruitMetadataList"
        :key="metadata.id"
        class="Recruit__LinkCardList__Item"
      >
        <recruit-link-card :id="metadata.id" :title="metadata.title" />
      </li>
    </ul>
  </recruit-wrapper>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import RecruitWrapper from '~/components/recruit/parts/RecruitWrapper.vue'
import RecruitLinkCard from '~/components/recruit/parts/RecruitLinkCard.vue'
import { recruitStore } from '~/store'

@Component({
  components: {
    RecruitWrapper,
    RecruitLinkCard,
  },
})
export default class Recruit extends Vue {
  get recruitMetadataList() {
    return recruitStore.metadataList
  }

  head() {
    return {
      title: 'Recruit - YouthSignal',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            '同人サークル STail では、共に最高のゲームを作るメンバーを募集しています。',
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: 'サークルメンバーを募集しています！【サークルSTail】',
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: 'https://youthsignal.stail-gamers.com/recruit/',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: '共に、最高のゲームを作りませんか。',
        },
        {
          hid: 'og:site_name',
          name: 'og:site_name',
          content: 'Recruit - YouthSignal',
        },
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
.Recruit {
  &__Header {
    margin-bottom: 3rem;
  }
  &__LinkCardList {
    &__Item {
      margin-bottom: 2rem;
    }
  }
}
</style>
