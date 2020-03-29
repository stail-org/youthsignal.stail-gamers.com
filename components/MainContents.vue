<template>
  <div id="mainContents">
    <OverviewArea />
    <IntroductionArea />
    <StoryArea />
    <CharacterArea />
    <ImagesArea />
    <StaffArea />
    <SpecArea />
  </div>
</template>

<script>
import OverviewArea from '@/components/main-contents/OverviewArea.vue'
import IntroductionArea from '@/components/main-contents/IntroductionArea.vue'
import StoryArea from '@/components/main-contents/StoryArea.vue'
import CharacterArea from '@/components/main-contents/CharacterArea.vue'
import ImagesArea from '@/components/main-contents/ImagesArea.vue'
import StaffArea from '@/components/main-contents/StaffArea.vue'
import SpecArea from '@/components/main-contents/SpecArea.vue'

export default {
  name: 'MainContents',
  components: {
    OverviewArea,
    IntroductionArea,
    StoryArea,
    CharacterArea,
    ImagesArea,
    StaffArea,
    SpecArea,
  },
}
</script>
