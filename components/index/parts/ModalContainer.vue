<template>
  <transition name="fade">
    <div
      v-show="visible"
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
          <InformationSlide v-show="mode === 'information'" />
          <ImageSlide v-show="mode === 'image'" />
        </div>
      </div>
      <div tabindex="0"></div>
      <div id="modalBackdrop" class="modal-backdrop show"></div>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { modalStore } from '~/store'

import InformationSlide from '~/components/index/parts/ModalInformationSlide.vue'
import ImageSlide from '~/components/index/parts/ModalImageSlide.vue'

@Component({
  components: {
    InformationSlide,
    ImageSlide,
  },
})
export default class ModalContainer extends Vue {
  get visible() {
    return modalStore.visible
  }

  get mode() {
    return modalStore.mode
  }

  closeModal() {
    modalStore.hide()
  }
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
