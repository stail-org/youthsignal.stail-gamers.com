<template>
  <recruit-wrapper>
    <p><nuxt-link to="./">Recruit</nuxt-link> / {{ recruitData.title }}</p>
    <h1 class="text-center">{{ recruitData.title }}</h1>

    <head2 class="Recruit__Subtitle">業務概要</head2>
    <div class="Recruit__Item Recruit__Overview">
      <ul>
        <li v-for="(overview, i) in recruitData.overview" :key="i">
          {{ overview }}
        </li>
      </ul>
    </div>

    <head2 class="Recruit__Subtitle">作業内容</head2>
    <div class="Recruit__Item Recruit__Task">
      <ul>
        <li v-for="(task, i) in recruitData.task" :key="i">
          {{ task }}
        </li>
      </ul>
    </div>

    <head2 class="Recruit__Subtitle">募集条件</head2>
    <div class="Recruit__Item Recruit__Request">
      <ul>
        <li v-for="(request, i) in recruitData.request" :key="i">
          {{ request }}
        </li>
      </ul>
    </div>

    <head2 class="Recruit__Subtitle">必須スキル</head2>
    <div class="Recruit__Item Recruit__Required">
      <ul>
        <li v-for="(required, i) in recruitData.required" :key="i">
          {{ required }}
        </li>
      </ul>
    </div>

    <head2 class="Recruit__Subtitle">歓迎スキル</head2>
    <div class="Recruit__Item Recruit__Wanted">
      <ul>
        <li v-for="(wanted, i) in recruitData.wanted" :key="i">
          {{ wanted }}
        </li>
      </ul>
    </div>

    <template v-if="recruitData.reward.length > 0">
      <head2 class="Recruit__Subtitle">報酬</head2>
      <div class="Recruit__Item Recruit__Reward">
        <ul>
          <li v-for="(reward, i) in recruitData.reward" :key="i">
            {{ reward }}
          </li>
        </ul>
      </div>
    </template>

    <head2 class="Recruit__Subtitle">ディレクターからひと言</head2>
    <div class="Recruit__Item Recruit__Comment">
      <p v-for="(comment, i) in recruitData.comment" :key="i">
        {{ comment }}
      </p>
    </div>

    <head2 class="Recruit__Subtitle">応募フォーム</head2>
    <div class="Recruit__Item Recruit__Form">
      <recruit-form />
    </div>
  </recruit-wrapper>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import { recruitStore } from '../../store'
import RecruitWrapper from '~/components/recruit/parts/RecruitWrapper.vue'
import RecruitForm from '~/components/recruit/parts/RecruitForm.vue'
import Head2 from '~/components/common/parts/Head2.vue'

@Component({
  components: {
    RecruitWrapper,
    RecruitForm,
    Head2,
  },
})
export default class Recruit extends Vue {
  jobs: string = ''

  head() {
    return this.recruitData?.head
  }

  validate({ params }) {
    // recruit store に定義している ID に存在しないスラッグの場合は page not found
    const md = recruitStore.metadataList.find((md) => md.id === params.jobs)
    return !!md
  }

  asyncData({ params }) {
    return {
      jobs: params.jobs,
    }
  }

  get recruitData() {
    return recruitStore.getRecruitDataById(this.jobs)
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
