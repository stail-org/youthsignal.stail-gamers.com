<template>
  <transition name="fade">
    <div
      v-show="$store.state.modal.visible"
      id="modalOuter"
      class="ModalContainer position-absolute"
    >
      <div
        id="modalInner"
        class="modal show ModalContainer__Inner"
        @click="closeModal"
      >
        <div class="w-100">
          <button
            id="btnModalClose"
            :class="[
              'close',
              'ModalContainer__Inner__CloseButton',
              'position-absolute',
              'mr-2',
              'mb-4',
            ]"
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
import InfomationSlide from '~/components/modal/contents/InfomationSlide.vue'
import ImageSlide from '~/components/modal/contents/ImageSlide.vue'

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
.ModalContainer {
  z-index: $--z-index-deepest;
  &__Inner {
    display: flex;
    flex-flow: row;
    align-content: center;
    align-items: center;
    &__CloseButton {
      top: 0;
      right: 0;
      z-index: $--z-index-deepest;
      font-size: 3rem;
      color: $--color-cyan;
      text-shadow: none;
      &:focus {
        outline: none;
      }
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
</style>
