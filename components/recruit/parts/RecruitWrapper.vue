<template>
  <main class="wrapper">
    <div class="RecruitWrapper container px-md-5 py-4">
      <slot></slot>
    </div>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class RecruitWrapper extends Vue {}
</script>

<style lang="scss" scoped>
.wrapper {
  background: rgba(black, 0.3);
  background-image: url('~assets/images/youthsignal-keyvisual.jpg');
  background-attachment: fixed;
  background-size: cover;
  background-blend-mode: darken;
}

.RecruitWrapper {
  max-width: $--md;
  color: $color-lighter;
  background: rgba($color-darker, 0.8);
  &__Subtitle {
    margin-top: 3rem;
  }
  &__Item {
    padding-top: 0.5rem;
  }
  &__Overview {
    &__Head {
      font-size: 1.5rem;
    }
  }
}
</style>
