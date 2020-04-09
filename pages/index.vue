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
