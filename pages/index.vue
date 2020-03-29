<template>
  <main id="main">
    <Loading />
    <ModalContainer />
    <article>
      <Foreground />
      <HeaderContents />
      <MainContents />
      <FooterContents />
    </article>
  </main>
</template>

<script>
import Loading from '@/components/Loading.vue'
import ModalContainer from '@/components/modal/ModalContainer.vue'
import Foreground from '@/components/Foreground.vue'
import HeaderContents from '@/components/HeaderContents.vue'
import MainContents from '@/components/MainContents.vue'
import FooterContents from '@/components/FooterContents.vue'

export default {
  components: {
    Loading,
    ModalContainer,
    Foreground,
    HeaderContents,
    MainContents,
    FooterContents,
  },
}
</script>

<style lang="scss">
@font-face {
  font-family: 'm plus';
  src: url('~assets/images/fonts/mplus-1c-regular.ttf') format('truetype');
}

body {
  width: 100%;
  height: 100%;
  margin: 0;
  font-family: 'm plus', 'MS P Gothic', sans-serif;
  color: #fff;
  cursor: default;
  background: url('~assets/images/background.png') no-repeat;
  background-attachment: fixed;
  background-size: cover;

  &.modal-showing {
    padding-right: 17px;
    overflow: hidden;
  }
}
main {
  max-width: 1920px;
  margin: auto;
}
section {
  width: 100%;
  margin-top: 10rem;
}
.container {
  width: 1050px;
  max-width: 1920px;
  padding: 0;
  margin: auto;
}

@media (max-width: 1200px) {
  body {
    font-family: 'MS P Gothic', sans-serif;
  }
  .container {
    width: 90%;
  }
}

@media (max-width: 768px) {
  html {
    font-size: 15px;
  }
  body {
    &.modal-showing {
      padding-right: 0;
      overflow: hidden;
    }
  }
  section {
    margin-top: 10rem;
  }
}

@media (max-width: 480px) {
  section {
    margin-top: 5rem;
  }
}
</style>
