<template>
  <section id="imagesArea" class="images-area">
    <div class="title">
      <img
        src="~assets/images/images-area/images-title.png"
        alt="YouthSignal Images"
      />
    </div>
    <div class="container">
      <div class="image-large">
        <img
          :src="require(`~/assets/images/images-area/${largeImage.fileName}`)"
          :alt="largeImage.title"
          @click="$store.commit('modal/show', { mode: 'image', showTarget: 1 })"
        />
      </div>
      <div class="image-small">
        <div
          v-for="(img, index) in smallImages"
          :key="index"
          class="image-small-wrapper"
        >
          <img
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
.images-area {
  .title {
    text-align: center;
  }
  .container {
    display: flex;
    flex-flow: row nowrap;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    padding: 0;
    margin-top: 3rem;
    img {
      width: 100%;
      height: auto;
      cursor: -webkit-zoom-in;
    }
    .image-large {
      width: 50%;
    }
    .image-small {
      display: flex;
      flex-flow: row wrap;
      width: 50%;
      .image-small-wrapper {
        width: 50%;
        height: 50%;
      }
    }
  }
}

// スマホ＆タブレット
@media (max-width: 480px) {
  .images-area {
    .container {
      flex-flow: row wrap;
      width: 100%;
      .image-large {
        width: 100%;
      }
      .image-small {
        display: flex;
        flex-flow: row wrap;
        width: 100%;
        .image-small-wrapper {
          width: 50%;
          height: 50%;
        }
      }
    }
  }
}

// タイトル画像サイズ調整
@media (max-width: 930px) {
  .images-area {
    .title {
      img {
        width: 90%;
      }
    }
  }
}
</style>
