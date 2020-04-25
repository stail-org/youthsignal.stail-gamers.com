<template>
  <section id="specArea" class="SpecArea area-section">
    <div class="compact-container">
      <div class="SpecArea__Title">
        <img
          class="width-100 responsive"
          src="~/assets/images/spec-area/spec-title.png"
          alt="YouthSignal Spec"
        />
      </div>
      <b-row class="SpecArea__Contents mt-5" cols="2">
        <b-col
          v-for="spec in specs"
          :key="spec.id"
          class="SpecArea__Contents__Item"
        >
          <p class="SpecArea__Contents__Item__Key m-0 pb-2">{{ spec.key }}</p>
          <p class="SpecArea__Contents__Item__Value mt-1">
            <template v-if="Array.isArray(spec.value)">
              <span>{{ spec.value[0][0] }}</span>
              <span style="float: right;">{{ spec.value[0][1] }}</span>
              <br />
              <span>{{ spec.value[1][0] }}</span>
              <span style="float: right;">{{ spec.value[1][1] }}</span>
            </template>
            <template v-else>
              <span style="float: right;">{{ spec.value }}</span>
            </template>
          </p>
          <p
            v-if="[5, 6].includes(spec.id)"
            class="SpecArea__Contents__Item__Spacer"
          />
        </b-col>
      </b-row>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { specStore } from '~/store'

@Component
export default class SpecArea extends Vue {
  get specs() {
    return specStore.list
  }
}
</script>

<style scoped lang="scss">
.SpecArea {
  &__Contents {
    margin-top: 2rem;
    &__Item {
      width: 46%;
      &__Key {
        font-size: 0.8rem;
        background-image: linear-gradient(
          to right,
          white 10%,
          rgba(255, 255, 255, 0) 30%
        );
        background-repeat: repeat-x;
        background-position: bottom;
        background-size: 7px 2px;
      }
      &__Value {
        font-size: 1.4rem;
        @media (max-width: $--sm) {
          font-size: 1rem;
        }
      }
      &__Spacer {
        margin-bottom: 6rem;
        @media (max-width: $--sm) {
          margin-bottom: 4rem;
        }
      }
    }
  }
}
</style>
