@ -0,0 +1,100 @@
<template>
  <main class="container">
    <recruit-form />
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import RecruitForm from '~/components/parts/RecruitForm.vue'

@Component({
  components: {
    RecruitForm,
  },
})
export default class Recruit extends Vue {}
</script>
