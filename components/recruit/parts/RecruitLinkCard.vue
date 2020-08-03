<template>
  <p>
    <nuxt-link :to="`/recruit/${id}`">
      {{ title }}
    </nuxt-link>
  </p>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class RecruitLinkCard extends Vue {
  @Prop()
  id!: string

  @Prop()
  title!: string
}
</script>
