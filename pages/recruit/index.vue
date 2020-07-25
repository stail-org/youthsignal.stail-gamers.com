<template>
  <recruit-wrapper>
    <h1 class="text-center">募集一覧</h1>
    <p v-for="metadata in recruitMetadataList" :key="metadata.id">
      <nuxt-link :to="`${metadata.id}`">
        {{ metadata.title }}
      </nuxt-link>
    </p>
    <p><nuxt-link to="/recruit/scriptor">スクリプター</nuxt-link></p>
  </recruit-wrapper>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import RecruitWrapper from '~/components/recruit/parts/RecruitWrapper.vue'

@Component({
  components: {
    RecruitWrapper,
  },
})
export default class Recruit extends Vue {
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
