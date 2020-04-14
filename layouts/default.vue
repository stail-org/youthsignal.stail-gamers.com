<template>
  <div id="App">
    <header-content v-if="visibleHeader" />
    <nuxt />
    <footer-content v-if="visibleHeader" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import FooterContent from '~/components/common/sections/Footer.vue'
import HeaderContent from '~/components/common/sections/Header.vue'

@Component({
  components: {
    HeaderContent,
    FooterContent,
  },
})
export default class App extends Vue {
  routeOfUnnecessaryHeader = ['recruit-success']

  get visibleHeader() {
    return !this.routeOfUnnecessaryHeader.includes(this.$route.name || '')
  }
}
</script>
