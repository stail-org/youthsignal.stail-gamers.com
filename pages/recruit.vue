@ -0,0 +1,100 @@
<template>
  <main class="wrapper">
    <div class="Recruit container px-md-5 py-4">
      <h1 class="text-center">Recruit</h1>

      <head2 class="Recruit__Subtitle">募集要項</head2>
      <div class="Recruit__Item Recruit__Role">
        <ul>
          <li>スクリプター</li>
        </ul>
      </div>

      <head2 class="Recruit__Subtitle">業務概要</head2>
      <div class="Recruit__Item Recruit__Overview">
        <p class="Recruit__Overview__Head"></p>
        ノベルゲーム作品「YouthSignal」のスクリプトを担当
      </div>

      <head2 class="Recruit__Subtitle">募集条件</head2>
      <div class="Recruit__Item Recruit__Request">
        <ul>
          <li>１８歳以上であること</li>
          <li>定期的にディスコードにてやりとりを行えること</li>
          <li>まじめであること</li>
          <li>１年以上共に作品に携われる方</li>
          <li>ノベルゲームが好き。YouthSignal が好き。</li>
        </ul>
      </div>

      <head2 class="Recruit__Subtitle">必須スキル</head2>
      <div class="Recruit__Item Recruit__Required">
        <ul>
          <li>ノベルゲーム、およびスクリプトへの基礎知識（実務経験不問）</li>
          <li>必要最低限のパソコンスキル</li>
        </ul>
      </div>

      <head2 class="Recruit__Subtitle">歓迎スキル</head2>
      <div class="Recruit__Item Recruit__Required">
        <ul>
          <li>TyranoScript 等のスクリプト制作経験</li>
          <li>プログラミング経験</li>
          <ul>
            <li>Unity (C#)</li>
            <li>HTML, CSS, JavaScript</li>
            <li>Nuxt.js</li>
          </ul>
        </ul>
        いずれかのスキルや経験があると、様々なことへの挑戦の機会もあります。
      </div>

      <head2 class="Recruit__Subtitle">ディレクターからひと言</head2>
      <div class="Recruit__Item Recruit__Comment">
        <p>
          商業作品に負けないボリュームのノベルゲームのスクリプター募集になります。
        </p>
        <p>
          キャラクターの表情やセリフの他、様々なエフェクトで魅力的な物語を一層引き立て、
        </p>
        <p>
          ユーザーに“面白い”を共に伝えてくれる方を募集しています。
        </p>
        <p>
          共にノベルゲームの面白さを世界に伝えてみませんか？
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
  li {
    margin-bottom: 0.5rem;
  }
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
