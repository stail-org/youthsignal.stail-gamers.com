<template>
  <swiper id="swiperInfomation" class="InfomationSlide" :options="swiperOption">
    <swiper-slide
      v-for="info in $store.getters['infomation/modalList']"
      :key="info.id"
    >
      <img
        class="InfomationSlide__Content"
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
.InfomationSlide {
  width: 100%;
  height: 95vh;
  padding-bottom: 40px;
  text-align: center;
  &__Content {
    width: auto;
    height: 100%;
  }
}
@media (max-width: 950px) {
  .InfomationSlide {
    height: 90vw;
  }
}
@media (max-width: 768px) {
  .InfomationSlide {
    height: 96vw;
  }
}
</style>
