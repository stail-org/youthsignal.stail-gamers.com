<template>
  <swiper class="swiper-container-image" :options="swiperOption">
    <swiper-slide v-for="(img, index) in images" :key="index">
      <img
        class="image-slide"
        :src="require(`~/assets/images/images-area/${img.fileName}`)"
        :alt="img.title"
        @click.stop
      />
    </swiper-slide>
    <div slot="button-prev" class="swiper-button-prev" @click.stop></div>
    <div slot="button-next" class="swiper-button-next" @click.stop></div>
    <div slot="pagination" class="swiper-pagination" @click.stop></div>
  </swiper>
</template>

<script>
import { mapState } from 'vuex'

import 'swiper/css/swiper.css'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    }
  },
  computed: {
    images() {
      const images = Object.assign([], this.smallImages)
      images.unshift(Object.assign({}, this.largeImage))
      return images
    },
    ...mapState('image', ['largeImage', 'smallImages']),
  },
}
</script>

<style scoped lang="scss">
.swiper-container-image {
  width: 100%;
  height: 47vw;
  text-align: center;
  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    .image-slide {
      width: 73%;
      height: auto;
    }
  }
}

// PC縮小版
@media (max-width: 1200px) {
  .swiper-container-image {
    height: 52vw;
  }
}

// スマホ＆タブレット
@media (max-width: 768px) {
  .swiper-container-image {
    height: 58vw;
    .swiper-slide {
      .image-slide {
        width: 85%;
      }
    }
  }
}

// スマホ＆タブレット
@media (max-width: 480px) {
  .swiper-container-image {
    height: 68vw;
    .swiper-slide {
      .image-slide {
        width: 95%;
      }
    }
  }
}
</style>
