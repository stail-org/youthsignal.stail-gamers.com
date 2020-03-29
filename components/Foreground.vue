<template>
  <div class="foreground-wrapper">
    <div class="light-wrapper">
      <div id="lightFlicker" class="light-flicker"></div>
      <div class="light-ray"></div>
    </div>
    <div class="particles-wrapper">
      <div id="particlesBlue" class="particles-blue"></div>
      <div id="particlesYellow" class="particles-yellow"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Foreground',
  data() {
    return {
      flashFlag: true,
    }
  },
  mounted() {
    const self = this

    // particle.js 実行
    this.$executeParticles()

    // 光点滅
    setInterval(function () {
      self.lightFlicker()
    }, 100)
  },
  methods: {
    lightFlicker() {
      // ランダム発生
      if (Math.random() > 0.8) this.flashFlag = true
      else this.flashFlag = false

      // アニメーション（明滅）
      if (this.flashFlag === true) {
        document.getElementById('lightFlicker').style.opacity = 0.9
        setTimeout(() => {
          document.getElementById('lightFlicker').style.opacity = 1.0
        }, 50)
      }
    },
  },
}
</script>

<style scoped lang="scss">
.foreground-wrapper {
  position: fixed;
  top: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  pointer-events: none;
  .light-wrapper {
    position: absolute;
    width: 1920px;
    height: 1080px;
    opacity: 0.7;
    div {
      position: absolute;
      width: 100%;
      height: 100%;
    }
    .light-flicker {
      background: url('../assets/images/light-flicker.png') no-repeat;
      background-size: 1920px 1080px;
    }
    .light-ray {
      background: url('../assets/images/light-ray.png') no-repeat;
      background-size: 1920px 34560px;
      animation: splite 2.6s steps(31) infinite alternate-reverse;
    }
  }
  .particles-wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    div {
      position: absolute;
      width: 100%;
      height: 100%;
    }
    .particles-blue {
      animation: blink 2.5s linear infinite alternate;
    }
    .particles-yellow {
      animation: blink 3s linear infinite alternate;
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
  .foreground-wrapper {
    .light-wrapper {
      width: 1600px;
      height: 900px;
      div {
        position: absolute;
        width: 100%;
        height: 100%;
      }
      .light-flicker {
        background-size: 1600px 900px;
      }
      .light-ray {
        background-size: 1600px 28800px;
        animation: splite-1600 2.6s steps(31) infinite alternate-reverse;
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
@media (max-width: 1300px) {
  .foreground-wrapper {
    .light-wrapper {
      width: 1200px;
      height: 675px;
      div {
        position: absolute;
        width: 100%;
        height: 100%;
      }
      .light-flicker {
        background-size: 1200px 675px;
      }
      .light-ray {
        background-size: 1200px 21600px;
        animation: splite-1200 2.6s steps(31) infinite alternate-reverse;
      }
    }
  }
}

@keyframes splite-1200 {
  to {
    background-position-y: -20925px;
  }
}

// タブレット～PC縮小版
@media (max-width: 980px) {
  .foreground-wrapper {
    .light-wrapper {
      width: 960px;
      height: 540px;
      div {
        position: absolute;
        width: 100%;
        height: 100%;
      }
      .light-flicker {
        background-size: 960px 540px;
      }
      .light-ray {
        background-size: 960px 17280px;
        animation: splite-960 2.6s steps(31) infinite alternate-reverse;
      }
    }
  }
}

@keyframes splite-960 {
  to {
    background-position-y: -16740px;
  }
}

// タブレット～PC縮小版
@media (max-width: 768px) {
  .foreground-wrapper {
    display: none;
  }
}

@media (max-width: 480px) {
  .foreground-wrapper {
    display: none;
  }
}
</style>
