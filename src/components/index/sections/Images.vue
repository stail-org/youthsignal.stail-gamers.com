<template>
  <section id="imagesArea" class="ImagesArea area-section">
    <div class="ImagesArea__Title text-center">
      <img
        class="ImagesArea__Title__Img"
        src="~/assets/images/images-area/images-title.png"
        alt="YouthSignal Images"
      />
    </div>
    <div class="ImagesArea__Container compact-container w-100 p-0 mt-5">
      <div class="ImagesArea__Container__Item">
        <img
          class="ImagesArea__Container__Item__Img"
          :src="require(`~/assets/images/images-area/${largeImage.fileName}`)"
          :alt="largeImage.title"
          @click="showModal('image', 1)"
        />
      </div>
      <div
        v-for="(img, index) in smallImages"
        :key="index"
        class="ImagesArea__Container__Item"
      >
        <img
          class="ImagesArea__Container__Item__Img"
          :src="require(`~/assets/images/images-area/${img.fileName}`)"
          :alt="img.title"
          @click="showModal('image', index + 2)"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { imageStore, modalStore } from '~/store'

@Component
export default class ImagesArea extends Vue {
  get largeImage() {
    return imageStore.largeImage
  }

  get smallImages() {
    return imageStore.smallImages
  }

  showModal(mode: 'information' | 'image', showTarget: number) {
    modalStore.show({ mode, showTarget })
  }
}
</script>

<style scoped lang="scss">
.ImagesArea {
  &__Title {
    &__Img {
      @media (max-width: $--md) {
        width: 90%;
      }
    }
  }
  &__Container {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(4, 1fr);
    @media (max-width: $--sm) {
      grid-template-rows: repeat(4, 1fr);
      grid-template-columns: repeat(2, 1fr);
    }
    &__Item {
      &:first-child {
        grid-row: span 2;
        grid-column: span 2;
      }
      &__Img {
        width: 100%;
        cursor: zoom-in;
      }
    }
  }
}
</style>
