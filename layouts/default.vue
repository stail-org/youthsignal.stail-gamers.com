<template>
  <div id="App">
    <HeaderContents v-if="visibleHeader" />
    <nuxt />
    <FooterContents v-if="visibleHeader" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import HeaderContents from '@/components/HeaderContents.vue'
import FooterContents from '@/components/FooterContents.vue'

@Component({
  components: {
    HeaderContents,
    FooterContents,
  },
})
export default class App extends Vue {
  routeOfUnnecessaryHeader = ['recruit-success']

  get visibleHeader() {
    return !this.routeOfUnnecessaryHeader.includes(this.$route.name || '')
  }
}
</script>
