<template>
  <swiper
    id="swiperInformation"
    class="InformationSlide w-100 text-center"
    :options="swiperOption"
  >
    <swiper-slide v-for="info in infoModalList" :key="info.id">
      <img
        class="InformationSlide__Content w-auto h-100"
        :src="
          require(`~/assets/images/overview-area/informations/${info.createdAt.replace(
            /-/g,
            ''
          )}.png`)
        "
        :alt="`YouthSignal Information ${info.title}`"
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

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import { informationStore } from '~/store'

import 'swiper/css/swiper.css'

@Component({
  components: {
    Swiper,
    SwiperSlide,
  },
})
export default class InformationSlide extends Vue {
  swiperOption = {
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
  }

  get infoModalList() {
    return informationStore.modalList
  }
}
</script>

<style scoped lang="scss">
.InformationSlide {
  height: 95vh;
  padding-bottom: 40px;
  @media (max-width: $--md) {
    height: 90vw;
  }
  @media (max-width: $--sm) {
    height: 96vw;
  }
}
</style>
