<template>
  <transition name="fade">
    <b-row
      v-if="isLoading"
      class="Loading w-100 h-100 text-center position-absolute"
    >
      <b-col class="my-auto">
        <img
          class="Loading__Image"
          src="~/assets/images/youthsignal-header.png"
          alt="youthsignal loading ..."
        />
      </b-col>
    </b-row>
  </transition>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import imagesloaded from 'imagesloaded'

@Component
export default class Loading extends Vue {
  isLoading: boolean = true

  mounted() {
    const self = this

    // コンテンツのスクロールを無効化
    document.body.classList.add('modal-showing')

    // 画像読み込み待ち
    imagesloaded(
      document.getElementById('overviewArea'),
      { background: true },
      () => {
        // コンテンツのスクロールを有効化
        document.body.classList.remove('modal-showing')
        // ロード画面を削除
        self.isLoading = false
      }
    )
  }
}
</script>

<style scoped lang="scss">
.Loading {
  z-index: $--z-index-deepest;
  background: black;
  &__Image {
    animation-name: flicker;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-direction: alternate-reverse;
  }
}
</style>
