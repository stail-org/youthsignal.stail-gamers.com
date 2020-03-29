<template>
  <div class="Samples">
    <ul class="Samples__List">
      <li
        v-for="sample in samples"
        :key="sample.id"
        class="Samples__List__Item"
      >
        <part-sample :sample="sample" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import { Sample } from '~/models/Sample'
import { samplesStore } from '~/store'

import partSample from '~/components/parts/Sample.vue'

@Component({
  components: {
    partSample
  }
})
export default class SectionSamples extends Vue {
  get samples(): Array<Sample> {
    return samplesStore.list
  }
}
</script>
