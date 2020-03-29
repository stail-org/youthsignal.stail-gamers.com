<template>
  <section id="specArea" class="spec-area">
    <div class="container">
      <div class="title">
        <img
          src="~assets/images/spec-area/spec-title.png"
          alt="YouthSignal Spec"
        />
      </div>
      <div class="values-container">
        <div v-for="spec in specs" :key="spec.id" class="values">
          <p class="key">{{ spec.key }}</p>
          <p class="value">
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
          <p v-if="[5, 6].includes(spec.id)" class="spacer" />
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
.spec-area {
  .container {
    img {
      width: 100%;
      height: auto;
    }
  }
  .values-container {
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    justify-content: space-between;
    margin-top: 2rem;
    .values {
      width: 46%;
      .key {
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
      .value {
        font-size: 1.4rem;
      }
      .spacer {
        margin-bottom: 6rem;
      }
    }
  }
}

// スマホ＆タブレット
@media (max-width: 768px) {
  .spec-area {
    .values-container {
      .values {
        .value {
          font-size: 1rem;
        }
        .spacer {
          margin-bottom: 4rem;
        }
      }
    }
  }
}
</style>
