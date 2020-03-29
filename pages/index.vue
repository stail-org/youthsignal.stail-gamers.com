<template>
  <div class="Block">
    <section-sample />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import sectionSample from '~/components/sections/Samples.vue'

@Component({
  components: {
    sectionSample
  }
})
export default class Index extends Vue {}
</script>
