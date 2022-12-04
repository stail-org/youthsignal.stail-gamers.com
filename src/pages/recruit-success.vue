@ -0,0 +1,100 @@
<template>
  <div class="RecruitSuccess">
    <b-card class="RecruitSuccess__Card">
      <template v-slot:header>
        <h2 class="mb-0">Thank you!</h2>
      </template>
      <b-card-text>後日担当者から、メールにてご返答いたします。</b-card-text>
      <b-card-text>遅くとも３日以内にはご連絡差し上げます。</b-card-text>
      <a class="RecruitSuccess__Card__BackLink" @click="cancelAutoNavigate">
        ← Top Page へ（ 10 秒後に自動で戻ります）
      </a>
    </b-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class RecruitSuccess extends Vue {
  timeoutId?: NodeJS.Timeout

  mounted() {
    this.timeoutId = setTimeout(() => {
      if (this.$route.name === 'recruit-success') this.$router.push('/')
    }, 10000)
  }

  cancelAutoNavigate() {
    if (this.timeoutId) clearTimeout(this.timeoutId)
    this.$router.push('/')
  }
}
</script>

<style lang="scss" scoped>
.RecruitSuccess {
  display: flex;
  justify-content: center;
  height: 100vh;
  &__Card {
    margin: auto;
    background-color: $color-dark;
    border-color: $color-primary-dark;
    .card-header {
      background-color: $color-primary-dark;
    }
    &__BackLink {
      color: $color-primary !important;
    }
  }
}
</style>
