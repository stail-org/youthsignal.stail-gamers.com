<template>
  <div class="Sample">{{ sample.text }} <fa :icon="faHandPeace" /></div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

import { faHandPeace } from '@fortawesome/free-solid-svg-icons'
import { Sample } from '~/models/Sample'

@Component
export default class PartSample extends Vue {
  @Prop()
  sample!: Sample

  get faHandPeace() {
    return faHandPeace
  }
}
</script>

<style lang="scss" scoped>
.Sample {
  font-size: 1.5rem;
  color: #aef;
}
</style>
