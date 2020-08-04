<template>
  <b-card class="RecruitLinkCard" no-body>
    <b-row no-gutters>
      <b-col class="RecruitLinkCard__ColumnImage" md="3">
        <img
          class="RecruitLinkCard__ColumnImage__Img"
          src="~/assets/images/recruit/link-card-images/scriptor.png"
          :alt="`${title}募集画像`"
          width="256"
          height="256"
        />
      </b-col>
      <b-col class="RecruitLinkCard__ColumnText" md="9">
        <b-card-body :title="title">
          <b-card-text>
            ティラノスクリプトを用いたノベルゲーム向けスクリプトの開発をして頂きます。
            経験不問ですので、未経験の方でもノベルゲーム制作に興味がある方は、ぜひご応募ください。
          </b-card-text>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
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

<style lang="scss" scoped>
.RecruitLinkCard {
  background-color: $color-dark;
  box-shadow: 4px 4px 8px 0 $color-darker;
  &__ColumnImage {
    padding: 1.25rem;
    text-align: center;
    &__Img {
      width: 256px;
      height: auto;
      @media (min-width: $--sm) {
        width: 100%;
      }
    }
  }
  &__ColumnText {
    .card-title {
      padding-bottom: 0.75rem;
      border-bottom: 2px $color-primary-dark solid;
    }
  }
}
</style>
