@ -0,0 +1,100 @@
<template>
  <main class="wrapper">
    <div class="Recruit container px-md-5 py-4">
      <h1 class="text-center">Recruit</h1>

      <head2 class="Recruit__Subtitle">募集要項</head2>
      <div class="Recruit__Item Recruit__Role">
        <ul>
          <li>アシスタントディレクター</li>
        </ul>
      </div>

      <head2 class="Recruit__Subtitle">業務概要</head2>
      <div class="Recruit__Item Recruit__Overview">
        <p class="Recruit__Overview__Head">
          ディレクターの作業を補佐
        </p>
        <p>膨大にあるディレクターの作業を一部フォローしてもらいます。</p>
        <p>
          最初は雑務メインになりますが、いずれは重要な仕事やディレクターとして
          サークルのメンバーを引っ張って作品を手掛けてもらう可能性も？！
        </p>
      </div>

      <head2 class="Recruit__Subtitle">募集条件</head2>
      <div class="Recruit__Item Recruit__Request">
        <ul>
          <li>１８歳以上であること</li>
          <li>定期的にディスコードにてやりとりを行えること</li>
          <li>必要最低限のネットマナーをわきまえていること</li>
          <li>一年以上共に歩める人</li>
        </ul>
      </div>

      <head2 class="Recruit__Subtitle">ディレクターからひと言</head2>
      <div class="Recruit__Item Recruit__Comment">
        <p>
          ゲーム業界を目指したい方や私のサークルの作品を盛り上げたい方を募集しています。
        </p>
        <p>
          ノベルゲームの作業の流れや過程を見ることができるため、貴重な経験ができると思います。
        </p>
        <p>
          共に「ユースシグナル」を盛り上げていきましょう！
        </p>
      </div>

      <head2 class="Recruit__Subtitle">応募フォーム</head2>
      <div class="Recruit__Item Recruit__Form">
        <recruit-form />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import RecruitForm from '~/components/recruit/parts/RecruitForm.vue'
import Head2 from '~/components/common/parts/Head2.vue'

@Component({
  components: {
    RecruitForm,
    Head2,
  },
})
export default class Recruit extends Vue {
  head() {
    return {
      title: 'Recruit - YouthSignal',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            '同人サークル STail では、共に最高のゲームを作るメンバーを募集しています。',
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: 'サークルメンバーを募集しています！【サークルSTail】',
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: 'https://youthsignal.stail-gamers.com/recruit/',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: '共に、最高のゲームを作りませんか。',
        },
        {
          hid: 'og:site_name',
          name: 'og:site_name',
          content: 'Recruit - YouthSignal',
        },
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  padding-left: 1.5rem;
  list-style: circle;
}

.wrapper {
  background: rgba(black, 0.3);
  background-image: url('~assets/images/youthsignal-keyvisual.jpg');
  background-attachment: fixed;
  background-size: cover;
  background-blend-mode: darken;
}

.Recruit {
  max-width: $--md;
  color: $color-lighter;
  background: rgba($color-darker, 0.8);
  &__Subtitle {
    margin-top: 3rem;
  }
  &__Item {
    padding-top: 0.5rem;
  }
  &__Overview {
    &__Head {
      font-size: 1.5rem;
    }
  }
}
</style>
