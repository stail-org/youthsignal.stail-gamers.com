<template>
  <div id="mainContents" class="pb-5">
    <OverviewArea />
    <IntroductionArea />
    <StoryArea />
    <CharacterArea />
    <ImagesArea />
    <StaffArea />
    <SpecArea />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import OverviewArea from '@/components/main-contents/OverviewArea.vue'
import IntroductionArea from '@/components/main-contents/IntroductionArea.vue'
import StoryArea from '@/components/main-contents/StoryArea.vue'
import CharacterArea from '@/components/main-contents/CharacterArea.vue'
import ImagesArea from '@/components/main-contents/ImagesArea.vue'
import StaffArea from '@/components/main-contents/StaffArea.vue'
import SpecArea from '@/components/main-contents/SpecArea.vue'

@Component({
  components: {
    OverviewArea,
    IntroductionArea,
    StoryArea,
    CharacterArea,
    ImagesArea,
    StaffArea,
    SpecArea,
  },
})
export default class MainContents extends Vue {}
</script>
