<template>
  <footer class="Footer w-100 py-3 text-center">
    <div class="Footer__Warning">
      このホームページに掲載されている一切の文書・図版・写真等を手段や形態を問わず無断で複製、転載することを禁じます。
    </div>
    <div>
      © 2019 STail
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Footer extends Vue {}
</script>

<style scoped lang="scss">
.Footer {
  background: black;

  &__Warning {
    margin: 0.1px 4%;
    font-size: xx-small;
  }
}
</style>
