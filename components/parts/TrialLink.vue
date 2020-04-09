<template>
  <div class="TrialLink position-fixed">
    <a
      class="white"
      href="https://youthsignal-trial.stail-gamers.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      {{ `体験版はこちら！ ` }}
      <fa class="fa" :icon="faExternalLinkAlt" />
    </a>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

@Component
export default class TrialLink extends Vue {
  get faExternalLinkAlt() {
    return faExternalLinkAlt
  }
}
</script>

<style scoped lang="scss">
.TrialLink {
  top: 80px;
  right: 20px;
  z-index: $--z-index-deep;
  padding: 16px;
  font-size: 0.8em;
  background: rgba($--color-dark-cyan, 0.7);
  border-radius: 8px;
  @media (max-width: $--md) {
    top: 52px;
    right: 0;
  }
  .fa {
    animation-name: bounce;
    animation-duration: 3s;
    animation-timing-function: cubic-bezier(0.77, 0, 0.175, 1);
    animation-iteration-count: infinite;
  }
}
</style>
