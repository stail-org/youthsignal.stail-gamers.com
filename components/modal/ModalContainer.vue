<template>
  <transition name="fade">
    <div
      v-show="$store.state.modal.visible"
      id="modalOuter"
      class="modal-outer"
    >
      <div id="modalInner" class="modal show modal-inner" @click="closeModal">
        <div style="width: 100%;">
          <button
            id="btnModalClose"
            class="close"
            type="button"
            aria-label="Close"
            @keydown.esc="closeModal"
            @click="closeModal"
          >
            ×
          </button>
          <InfomationSlide v-show="$store.state.modal.mode === 'infomation'" />
          <ImageSlide v-show="$store.state.modal.mode === 'image'" />
        </div>
      </div>
      <div tabindex="0"></div>
      <div id="modalBackdrop" class="modal-backdrop show"></div>
    </div>
  </transition>
</template>

<script>
import InfomationSlide from '@/components/modal/contents/InfomationSlide.vue'
import ImageSlide from '@/components/modal/contents/ImageSlide.vue'

export default {
  components: { InfomationSlide, ImageSlide },
  methods: {
    closeModal() {
      this.$store.commit('modal/hide')
    },
  },
}
</script>

<style scoped lang="scss">
.modal-outer {
  position: absolute;
  z-index: 2000;
  .close {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 9999;
    margin-right: 10px;
    margin-bottom: 20px;
    font-size: 3.5rem;
    font-weight: 100;
    line-height: 2.5rem;
    color: #c2c2c2;
    text-shadow: none;
    cursor: pointer;
    opacity: 0.7;
    &:focus {
      outline: none;
    }
  }
  .modal-inner {
    display: flex;
    flex-flow: row;
    align-content: center;
    align-items: center;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

<style lang="scss">
.swiper-pagination-bullet {
  background: #d0d0d0;
  opacity: 0.6;
  &-active {
    background: rgb(78, 204, 253);
    opacity: 1;
  }
}
.swiper-button-prev {
  right: auto;
  left: 7%;
  width: 52px;
  height: 52px;
  background-image: url('~assets/images/others/swiper-arrow-prev.png');
  background-size: 52px 52px;
}
.swiper-button-next {
  right: 7%;
  left: auto;
  width: 52px;
  height: 52px;
  background-image: url('~assets/images/others/swiper-arrow-next.png');
  background-size: 52px 52px;
}

// スマホ＆タブレット
@media (max-width: 768px) {
  .swiper-button-prev {
    left: 1%;
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%2300f9ff'%2F%3E%3C%2Fsvg%3E");
  }
  .swiper-button-next {
    right: 1%;
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%2300f9ff'%2F%3E%3C%2Fsvg%3E");
  }
  .swiper-button-next:focus,
  .swiper-button-prev:focus,
  .swiper-pagination-bullet:focus {
    outline: none;
  }
}
</style>
