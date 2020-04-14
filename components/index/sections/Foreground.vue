<template>
  <div class="Foreground position-fixed w-100 h-100">
    <div class="Foreground__LightWrapper position-absolute">
      <div
        id="lightFlicker"
        class="Foreground__LightWrapper__Item Foreground__LightWrapper__Item--Flicker"
      ></div>
      <div
        class="Foreground__LightWrapper__Item Foreground__LightWrapper__Item--Ray"
      ></div>
    </div>
    <div class="Foreground__ParticlesWrapper position-absolute w-100 h-100">
      <div
        id="particlesBlue"
        class="Foreground__ParticlesWrapper__Item Foreground__ParticlesWrapper__Item--Blue"
      ></div>
      <div
        id="particlesYellow"
        class="Foreground__ParticlesWrapper__Item Foreground__ParticlesWrapper__Item--Yellow"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Foreground extends Vue {
  flashFlag: boolean = true

  mounted() {
    const self = this

    // particle.js 実行
    ;(this as any).$executeParticles()

    // 光点滅
    setInterval(function () {
      self.lightFlicker()
    }, 100)
  }

  lightFlicker() {
    // ランダム発生
    if (Math.random() > 0.8) this.flashFlag = true
    else this.flashFlag = false

    // アニメーション（明滅）
    if (this.flashFlag === true) {
      const lightFlickerElement = document.getElementById('lightFlicker')
      if (!lightFlickerElement) return

      lightFlickerElement.style.opacity = '0.9'
      setTimeout(() => {
        lightFlickerElement.style.opacity = '1.0'
      }, 50)
    }
  }
}
</script>

<style scoped lang="scss">
.Foreground {
  top: 0;
  z-index: $--z-index-deeper;
  pointer-events: none;
  &__LightWrapper {
    width: 1920px;
    height: 1080px;
    opacity: 0.7;
    &__Item {
      position: absolute;
      width: 100%;
      height: 100%;
      &--Flicker {
        background: url('~assets/images/light-flicker.png') no-repeat;
        background-size: 1920px 1080px;
      }
      &--Ray {
        background: url('~assets/images/light-ray.png') no-repeat;
        background-size: 1920px 34560px;
        animation: splite 2.6s steps(31) infinite alternate-reverse;
      }
    }
  }
  &__ParticlesWrapper {
    &__Item {
      position: absolute;
      &--Blue {
        animation: blink 2.5s linear infinite alternate;
      }
      &--Yellow {
        animation: blink 3s linear infinite alternate;
      }
    }
  }
}

@keyframes splite {
  to {
    background-position-y: -33480px;
  }
}
@keyframes blink {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.8;
  }
}

// PC縮小版（大）
@media (max-width: 1700px) {
  .Foreground {
    &__LightWrapper {
      width: 1600px;
      height: 900px;
      &__Item {
        &--Flicker {
          background-size: 1600px 900px;
        }
        &--Ray {
          background-size: 1600px 28800px;
          animation: splite-1600 2.6s steps(31) infinite alternate-reverse;
        }
      }
    }
  }
}

@keyframes splite-1600 {
  to {
    background-position-y: -27900px;
  }
}

// タブレット～PC縮小版
@media (max-width: $--lg) {
  .Foreground {
    &__LightWrapper {
      width: 1200px;
      height: 675px;
      &__Item {
        &--Flicker {
          background-size: 1200px 675px;
        }
        &--Ray {
          background-size: 1200px 21600px;
          animation: splite-lg 2.6s steps(31) infinite alternate-reverse;
        }
      }
    }
  }
}

@keyframes splite-lg {
  to {
    background-position-y: -20925px;
  }
}

// タブレット～PC縮小版
@media (max-width: $--md) {
  .Foreground {
    &__LightWrapper {
      width: 960px;
      height: 540px;
      &__Item {
        &--Flicker {
          background-size: 960px 540px;
        }
        &--Ray {
          background-size: 960px 17280px;
          animation: splite-md 2.6s steps(31) infinite alternate-reverse;
        }
      }
    }
  }
}

@keyframes splite-md {
  to {
    background-position-y: -16740px;
  }
}

// タブレット～PC縮小版
@media (max-width: $--sm) {
  .Foreground {
    display: none;
  }
}
</style>
