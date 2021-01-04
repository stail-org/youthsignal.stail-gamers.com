<template>
  <div class="LinkBox">
    <a class="white" :href="url" target="_blank" rel="noopener noreferrer">
      {{ title }}
      <fa class="fa" :icon="faExternalLinkAlt" />
    </a>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

@Component
export default class LinkBox extends Vue {
  @Prop()
  title!: string

  @Prop()
  url!: string

  get faExternalLinkAlt() {
    return faExternalLinkAlt
  }
}
</script>

<style scoped lang="scss">
.LinkBox {
  padding: 16px;
  font-size: 0.8em;
  background: rgba($--color-dark-cyan, 0.7);
  border-radius: 8px;
}
</style>
