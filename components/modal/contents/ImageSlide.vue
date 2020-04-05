<template>
  <swiper
    id="swiperImage"
    class="ImageSlide w-100 text-center"
    :options="swiperOption"
  >
    <swiper-slide
      v-for="(img, index) in images"
      :key="index"
      class="ImageSlide__Wrapper"
    >
      <img
        class="ImageSlide__Content h-auto"
        :src="require(`~/assets/images/images-area/${img.fileName}`)"
        :alt="img.title"
        @click.stop
      />
    </swiper-slide>
    <div
      slot="button-prev"
      class="swiper-button swiper-button-prev"
      @click.stop
    ></div>
    <div
      slot="button-next"
      class="swiper-button swiper-button-next"
      @click.stop
    ></div>
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
.ImageSlide {
  height: 47vw;
  @media (max-width: $--lg) {
    height: 50vw;
  }
  @media (max-width: $--sm) {
    height: 58vw;
  }
  @media (max-width: $--xs) {
    height: 68vw;
  }
  &__Wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__Content {
    width: 73%;
    @media (max-width: $--sm) {
      width: 85%;
    }
    @media (max-width: $--xs) {
      width: 95%;
    }
  }
}
</style>
