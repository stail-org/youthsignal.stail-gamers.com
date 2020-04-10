<template>
  <div id="App">
    <HeaderContents />
    <nuxt />
    <FooterContents />
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
export default class App extends Vue {}
</script>
