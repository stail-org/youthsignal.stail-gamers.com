<template>
  <section id="imagesArea" class="ImagesArea area-section">
    <div class="ImagesArea__Title">
      <img
        class="ImagesArea__Title__Img"
        src="~/assets/images/images-area/images-title.png"
        alt="YouthSignal Images"
      />
    </div>
    <div class="ImagesArea__Container compact-container">
      <div class="ImagesArea__Container--Large">
        <img
          class="ImagesArea__Container__Img width-100"
          :src="require(`~/assets/images/images-area/${largeImage.fileName}`)"
          :alt="largeImage.title"
          @click="$store.commit('modal/show', { mode: 'image', showTarget: 1 })"
        />
      </div>
      <div class="ImagesArea__Container--Small">
        <div
          v-for="(img, index) in smallImages"
          :key="index"
          class="ImagesArea__Container--Small__Wrapper"
        >
          <img
            class="ImagesArea__Container__Img width-100"
            :src="require(`~/assets/images/images-area/${img.fileName}`)"
            :alt="img.title"
            @click="
              $store.commit('modal/show', {
                mode: 'image',
                showTarget: index + 2,
              })
            "
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ImagesArea',
  computed: {
    ...mapState('image', ['largeImage', 'smallImages']),
  },
}
</script>

<style scoped lang="scss">
.ImagesArea {
  &__Title {
    text-align: center;
  }
  &__Container {
    display: flex;
    flex-wrap: nowrap;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    padding: 0;
    margin-top: 3rem;
    &--Large {
      width: 50%;
    }
    &--Small {
      display: flex;
      flex-flow: row wrap;
      width: 50%;
      &__Wrapper {
        width: 50%;
        height: 50%;
      }
    }
    &__Img {
      cursor: zoom-in;
    }
  }
}

// タイトル画像サイズ調整
@media (max-width: 930px) {
  .ImagesArea {
    &__Title {
      &__Img {
        width: 90%;
      }
    }
  }
}

// スマホ＆タブレット
@media (max-width: 480px) {
  .ImagesArea {
    &__Container {
      flex-wrap: wrap;
      &--Large {
        width: 100%;
      }
      &--Small {
        width: 100%;
      }
    }
  }
}
</style>
