<template>
  <main class="wrapper">
    <div class="Recruit container px-md-5 py-4">
      <h1 class="text-center">Recruit</h1>

      <head2 class="Recruit__Subtitle">募集要項</head2>
      <div class="Recruit__Item Recruit__Role">
        <ul>
          <li>女性声優兼広報アシスタント</li>
        </ul>
      </div>

      <head2 class="Recruit__Subtitle">業務概要</head2>
      <div class="Recruit__Item Recruit__Overview">
        <ul>
          <li>ノベルゲーム「YouthSignal」の広報アシスタント</li>
          <li>宣伝ラジオやナレーション、次回作への声優参加など声優の作業</li>
        </ul>
      </div>

      <head2 class="Recruit__Subtitle">作業内容</head2>
      <div class="Recruit__Item Recruit__Task">
        <ul>
          <li>Ci-enやツイッターなどの広報運用と企画立案の補佐</li>
          <li>ラジオのMC/ナレーションなどの声優としての参加</li>
        </ul>
      </div>

      <head2 class="Recruit__Subtitle">募集条件</head2>
      <div class="Recruit__Item Recruit__Request">
        <ul>
          <li>１８歳以上の女性であること</li>
          <li>今後声優としてステップアップしたい/出来ることを増やしたい</li>
          <li>定期的にディスコードにてやりとりを行えること</li>
          <li>１年以上共に作品に携われる方</li>
          <li>ノベルゲームが好き</li>
        </ul>
      </div>

      <head2 class="Recruit__Subtitle">必須スキル</head2>
      <div class="Recruit__Item Recruit__Required">
        <ul>
          <li>やる気に溢れている</li>
          <li>宅録ができる</li>
          <li>声優以外にも武器を作りたい</li>
        </ul>
      </div>

      <head2 class="Recruit__Subtitle">歓迎スキル</head2>
      <div class="Recruit__Item Recruit__Wanted">
        <ul>
          <li>ブログなどのサイト運営</li>
          <li>美少女ゲームが好き</li>
          <li>ジャンルにとらわれず何事にも挑戦できる。</li>
        </ul>
      </div>

      <head2 class="Recruit__Subtitle">報酬</head2>
      <div class="Recruit__Item Recruit__Reward">
        <ul>
          <li>応相談</li>
        </ul>
        （できることや作業量によって変わります）
      </div>

      <head2 class="Recruit__Subtitle">ディレクターからひと言</head2>
      <div class="Recruit__Item Recruit__Comment">
        <p>
          同人ゲームサークル「STail」での声優兼広報アシスタントの募集になります。
        </p>

        <p>
          現役のコンシューマーゲーム制作会社で仕事をしているメンバーと共に、<br />
          声優として、広報アシスタントとして、サークルと一緒に成長できる方を募集しています。
        </p>

        <p>
          声優のスキルのみを磨くことが志望の方にとっては、また違った方向性の募集でありますが、<br />
          Ci-en での企画やグッズの制作ノウハウなどを身に着けながら、<br />
          声優として色々なことを一緒にやっていける方を募集しています。
        </p>

        <p>
          私たちと共に成長していく中で、次回作への出演やラジオのパーソナリティなどもお任せできるかもしれません。<br />
          また、自分でやりたい企画などを挙げていただれば、サークルの企画としてしっかり話し合い、全力で応援します。
        </p>

        <p>
          声優としてだけではなく、様々なノウハウを得られるチャンスだと思います。この機会にいかがですか？
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
