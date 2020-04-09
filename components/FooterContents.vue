<template>
  <footer class="Footer w-100 mt-5 py-3 text-center">
    © 2019 Stail
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class FooterContents extends Vue {}
</script>

<style scoped lang="scss">
.Footer {
  background: black;
}
</style>
