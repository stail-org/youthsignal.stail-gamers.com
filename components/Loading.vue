<template>
  <transition name="fade">
    <div v-if="isLoading" class="loading">
      <img
        src="~assets/images/youthsignal-header.png"
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
.loading {
  position: absolute;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: black;
  img {
    animation-name: fade;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-direction: alternate-reverse;
  }
}

@keyframes fade {
  0% {
    opacity: 0.2;
  }
  100% {
    opacity: 1;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
