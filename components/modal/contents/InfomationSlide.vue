<template>
  <swiper class="swiper-container-infomation" :options="swiperOption">
    <swiper-slide
      v-for="info in $store.getters['infomation/modalList']"
      :key="info.id"
    >
      <img
        class="infomation-slide"
        :src="
          require(`~/assets/images/overview-area/infomations/${info.createdAt.replace(
            /-/g,
            ''
          )}.png`)
        "
        :alt="`YouthSignal Infomation ${info.title}`"
        @click.stop
      />
    </swiper-slide>
    <div slot="button-prev" class="swiper-button-prev" @click.stop></div>
    <div slot="button-next" class="swiper-button-next" @click.stop></div>
    <div slot="pagination" class="swiper-pagination" @click.stop></div>
  </swiper>
</template>

<script>
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
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    }
  },
}
</script>

<style scoped lang="scss">
.swiper-container-infomation {
  width: 100%;
  height: 95vh;
  padding-bottom: 40px;
  text-align: center;
  .infomation-slide {
    width: auto;
    height: 100%;
  }
}
@media (max-width: 950px) {
  .swiper-container-infomation {
    height: 90vw;
  }
}
@media (max-width: 768px) {
  .swiper-container-infomation {
    height: 96vw;
  }
}
</style>
