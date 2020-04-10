@ -0,0 +1,100 @@
<template>
  <b-form name="contact" class="RecruitForm" netlify method="POST">
    <input type="hidden" name="form-name" value="contact" />

    <b-form-group id="input-group-name" label="お名前：" label-for="input-name">
      <b-form-input
        id="input-name"
        v-model="form.name"
        name="name"
        required
        placeholder="名前（ハンドルネーム可）"
      ></b-form-input>
    </b-form-group>

    <b-form-group
      id="input-group-email"
      label="メールアドレス："
      label-for="input-email"
      description="ご入力いただいたメールアドレスは、STail から応募者様への連絡用途のみに使用します。"
    >
      <b-form-input
        id="input-email"
        v-model="form.email"
        name="email"
        type="email"
        required
        placeholder="メールアドレス"
      ></b-form-input>
    </b-form-group>

    <b-form-group
      id="input-group-answer-reason"
      label="応募理由："
      label-for="input-answer-reason"
    >
      <b-form-textarea
        id="input-answer-reason"
        v-model="form.answer.reason"
        name="answer-reason"
        rows="8"
        required
      ></b-form-textarea>
    </b-form-group>

    <b-form-group
      id="input-group-answer-ambition"
      label="出来ること、やってみたいこと："
      label-for="input-answer-ambition"
    >
      <b-form-textarea
        id="input-answer-ambition"
        v-model="form.answer.ambition"
        name="answer-ambition"
        rows="12"
        required
      ></b-form-textarea>
    </b-form-group>

    <b-button class="RecruitForm__Submit" type="submit" variant="primary">
      送信
    </b-button>
  </b-form>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class RecruitForm extends Vue {
  form = {
    email: '',
    name: '',
    answer: {
      reason: '',
      ambition: '',
    },
  }
}
</script>

<style lang="scss" scoped>
input,
textarea {
  background-color: $color-lighter;
}

.RecruitForm {
  &__Submit {
    display: block;
    width: 100%;
    font-size: 0.9rem;
    background: $color-primary;
  }
}
</style>
