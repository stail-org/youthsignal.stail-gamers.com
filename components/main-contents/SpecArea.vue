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
      <div class="SpecArea__Contents">
        <div
          v-for="spec in specs"
          :key="spec.id"
          class="SpecArea__Contents__Item"
        >
          <p class="SpecArea__Contents__Item__Key">{{ spec.key }}</p>
          <p class="SpecArea__Contents__Item__Value">
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
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'SpecArea',
  computed: {
    ...mapState('spec', {
      specs: 'list',
    }),
  },
}
</script>

<style scoped lang="scss">
.SpecArea {
  &__Contents {
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    justify-content: space-between;
    margin-top: 2rem;
    &__Item {
      width: 46%;
      &__Key {
        padding-bottom: 0.3rem;
        margin-bottom: 0.1rem;
        font-family: 'MS P Gothic', sans-serif;
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
      }
      &__Spacer {
        margin-bottom: 6rem;
      }
    }
  }
}

// スマホ＆タブレット
@media (max-width: 768px) {
  .SpecArea {
    &__Contents {
      &__Item {
        &__Value {
          font-size: 1rem;
        }
        &__Spacer {
          margin-bottom: 4rem;
        }
      }
    }
  }
}
</style>
