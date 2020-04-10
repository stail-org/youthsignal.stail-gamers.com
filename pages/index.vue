<template>
  <main id="main">
    <Loading />
    <ModalContainer />
    <article>
      <Foreground />
      <MainContents />
    </article>
  </main>
</template>

<script>
import Loading from '@/components/Loading.vue'
import ModalContainer from '@/components/modal/ModalContainer.vue'
import Foreground from '@/components/Foreground.vue'
import MainContents from '@/components/MainContents.vue'

export default {
  components: {
    Loading,
    ModalContainer,
    Foreground,
    MainContents,
  },
}
</script>
