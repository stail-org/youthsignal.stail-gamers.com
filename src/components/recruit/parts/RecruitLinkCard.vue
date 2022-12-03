<template>
  <b-card
    class="RecruitLinkCard"
    no-body
    @click="$router.push(`/recruit/${id}`)"
  >
    <b-row no-gutters>
      <b-col class="RecruitLinkCard__ColumnImage" md="3">
        <img
          class="RecruitLinkCard__ColumnImage__Img"
          :src="require(`~/assets/images/recruit/link-card-images/${id}.png`)"
          :alt="`${title}募集画像`"
          width="256"
          height="256"
        />
      </b-col>
      <b-col class="RecruitLinkCard__ColumnText" md="9">
        <b-card-body :title="title">
          <b-card-text>
            {{ description }}
          </b-card-text>
        </b-card-body>
        <nuxt-link
          class="RecruitLinkCard__ColumnText__Link"
          :to="`/recruit/${id}`"
        >
          応募する
          <svg
            width="20"
            height="24"
            viewBox="0 2 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 9.76737V10.2326C19 11.0333 18.68 11.8007 18.1111 12.3641L12.5186 17.9033C11.6722 18.7417 10.3008 18.7163 9.48599 17.8472C8.72295 17.0333 8.72295 15.7667 9.48598 14.9528L12.1918 12.0667H3.06667C1.92528 12.0667 1 11.1414 1 10C1 8.85861 1.92528 7.93333 3.06667 7.93333H12.1918L9.48599 5.04717C8.72295 4.23326 8.72295 2.96674 9.48599 2.15283C10.3008 1.2837 11.6722 1.2583 12.5186 2.09668L18.1111 7.63593C18.68 8.19934 19 8.96675 19 9.76737Z"
              stroke="#60c5ff"
              stroke-width="2"
            />
          </svg>
        </nuxt-link>
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

  @Prop()
  description!: string
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
    display: flex;
    flex-direction: column;
    .card-title {
      padding-bottom: 0.75rem;
      border-bottom: 2px $color-primary-dark solid;
    }
    &__Link {
      margin-right: 1.25rem;
      margin-bottom: 1.25rem;
      color: lighten($color-primary-dark, 30%);
      text-align: right;
      &:hover {
        color: $color-primary-dark;
        text-decoration: none;
        path {
          stroke: $color-primary-dark;
        }
      }
    }
  }
}
</style>
