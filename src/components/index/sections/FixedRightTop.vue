<template>
  <div class="FixedRightTop position-fixed">
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class FixedRightTop extends Vue {}
</script>

<style scoped lang="scss">
.FixedRightTop {
  top: 80px;
  right: 20px;
  z-index: $--z-index-deep;
  display: grid;
  justify-items: flex-end;
  @media (max-width: $--md) {
    top: 52px;
    right: 0;
  }
}
</style>
