<template>
  <div id="mainContents" class="pb-5">
    <part-trial-link />
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

import PartTrialLink from '~/components/index/parts/TrialLink.vue'
import OverviewArea from '~/components/index/sections/OverviewArea.vue'
import IntroductionArea from '~/components/index/sections/IntroductionArea.vue'
import StoryArea from '~/components/index/sections/StoryArea.vue'
import CharacterArea from '~/components/index/sections/CharacterArea.vue'
import ImagesArea from '~/components/index/sections/ImagesArea.vue'
import StaffArea from '~/components/index/sections/StaffArea.vue'
import SpecArea from '~/components/index/sections/SpecArea.vue'

@Component({
  components: {
    PartTrialLink,
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
