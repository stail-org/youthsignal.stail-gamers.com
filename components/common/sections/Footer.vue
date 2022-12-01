<template>
  <footer class="Footer w-100 py-3 text-center">
    このホームページに掲載されている一切の文書・図版・写真等を手段や形態を問わず複製、転載することを禁じます。<br />
    © 2019 Stail
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
}
</style>
