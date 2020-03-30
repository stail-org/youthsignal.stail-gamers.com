<template>
  <transition name="fade">
    <div v-if="isLoading" class="Loading">
      <img
        class="Loading__Image"
        src="~/assets/images/youthsignal-header.png"
        alt="youthsignal loading ..."
      />
    </div>
  </transition>
</template>

<script>
import imagesloaded from 'imagesloaded'

export default {
  name: 'Foreground',
  data() {
    return {
      isLoading: true,
    }
  },
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
  },
}
</script>

<style scoped lang="scss">
.Loading {
  position: absolute;
  z-index: $--z-index-deepest;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: black;
  &__Image {
    animation-name: fade;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-direction: alternate-reverse;
  }
}
</style>
