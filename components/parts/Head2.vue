@ -0,0 +1,100 @@
<template>
  <h2 class="Head2"><img class="Head2__Img" src="/icon.png" /> <slot /></h2>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Head2 extends Vue {}
</script>

<style lang="scss" scoped>
.Head2 {
  display: grid;
  grid-template-rows: 1fr 16px;
  grid-template-columns: 36px 1fr;
  align-items: center;
  &__Img {
    width: 24px;
    height: 24px;
  }
  &::after {
    grid-row: 2 / 3;
    grid-column: 1 / 3;
    height: 3px;
    content: '';
    background-color: $color-primary-dark;
    border-radius: 1.5px;
  }
}
</style>
