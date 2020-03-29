import Vue from 'vue'
import 'particles.js'

Vue.prototype.$executeParticles = () => {
  window.particlesJS('particlesBlue', {
    // ==========================
    // パーティクルの設定
    // ==========================
    particles: {
      // 数
      number: {
        value: 30,
        // 密集度
        density: {
          enable: true,
          value_area: 800,
        },
      },
      // 色
      color: {
        value: '#00f9ff',
      },
      // 形
      shape: {
        // circle:丸、edge:四角、triangle:三角、polygon:多角形、star:星型、image:画像
        type: 'polygon',
        // 枠線
        stroke: {
          width: 0,
          color: '#000000',
        },
        // type を polygon にした場合
        polygon: {
          // 角数
          nb_sides: 5,
        },
        // type を image にした場合
        image: {
          src: 'img/github.svg',
          width: 100,
          height: 100,
        },
      },
      // 透過度
      opacity: {
        value: 1,
        // ランダムで透過度を変更するか
        random: false,
        // 各シェイプの透過度をアニメーション変化させるか
        anim: {
          enable: false,
          // 変化速度
          speed: 0.5,
          // 最小値
          opacity_min: 0.2,
          // 全てのシェイプのアニメーションを同時に行うか
          sync: true,
        },
      },
      // サイズ
      size: {
        value: 4,
        // シェイプの大きさをランダムにするか否か
        random: true,
        // 各シェイプのサイズをアニメーション変化させるか
        anim: {
          enable: false,
          // 変化速度
          speed: 40,
          // 最小値
          size_min: 0.1,
          // 全てのシェイプのアニメーションを同時に行うか
          sync: false,
        },
      },
      // リンク線についての設定
      line_linked: {
        // リンク線を表示するか
        enable: false,
        // 線をつなぐシェイプの間隔
        distance: 150,
        // リンク線の色
        color: '#ffffff',
        // リンク線の透過度
        opacity: 0.4,
        // リンク線の太さ
        width: 1,
      },
      // パーティクルの移動についての設定
      move: {
        // 移動させるか
        enable: true,
        // 移動速度
        speed: 2,
        // 移動の方向
        // ランダム（指定しない）：none
        // 上へ：top   、右上へ：top-right  、右へ：right、右下へ：bottom-right
        // 下へ：bottom、左下へ：bottom-left、左へ：left 、左上へ：top-left
        direction: 'none',
        // 移動のランダム性
        random: true,
        // 移動を直線的にするか
        straight: false,
        // 画面外の描画設定
        // 画面外へ出ていく：out、画面端でバンドする：bounce
        out_mode: 'out',
        // 互いに引きつける設定
        attract: {
          enable: false,
          // 左右方向の引きつけ率（小さい値ほど、引きつける力が大きくなる）
          rotateX: 600,
          // 上下方向の引きつけ率（小さい値ほど、引きつける力が大きくなる）
          rotateY: 1200,
        },
      },
    },
    // ==========================
    // 操作時の設定
    // ==========================
    interactivity: {
      // 操作判定対象のエレメントを指定（"window", "canves"）
      detect_on: 'canvas',
      // 各種操作時の発生イベントを指定
      events: {
        // ホバー（マウスエンター）時の設定
        onhover: {
          enable: false,
          // mode の指定（↓に詳細）
          mode: 'repulse',
        },
        // クリック（マウスアップ）時の設定
        onclick: {
          enable: false,
          // mode の指定（↓に詳細）
          mode: 'push',
        },
        // canvasのサイズ変更にわせて拡大縮小するか
        resize: true,
      },
      // 発生イベントの設定
      modes: {
        // リンク線がでる
        grab: {
          // イベントが発生する範囲（マウスポインターからの距離）
          distance: 400,
          // リンク線の透過度
          line_linked: {
            opacity: 1,
          },
        },
        // サイズ、透過度が一時的に変化する
        bubble: {
          // イベントが発生する範囲（マウスポインターからの距離）
          distance: 400,
          // サイズ
          size: 40,
          // 変化からもとに戻るまでにかかる時間
          duration: 2,
          // 透過度
          opacity: 8,
          // 移動速度
          speed: 3,
        },
        // 押しのける
        repulse: {
          // イベントが発生する範囲（マウスポインターからの距離）
          distance: 200,
        },
        // 新たなパーティクルを発生させる
        push: {
          // 発生数
          particles_nb: 4,
        },
        // パーティクルを削除する
        remove: {
          // 削除数
          particles_nb: 2,
        },
      },
    },
    // Retina Display に対応させるか
    retina_detect: true,

    // デモ用の設定（削除して良い）
    config_demo: {
      hide_card: false,
      background_color: '#b61924',
      background_image: '',
      background_position: '50% 50%',
      background_repeat: 'no-repeat',
      background_size: 'cover',
    },
  })

  window.particlesJS(
    'particlesYellow',

    {
      // ==========================
      // パーティクルの設定
      // ==========================
      particles: {
        // 数
        number: {
          value: 30,
          // 密集度
          density: {
            enable: true,
            value_area: 800,
          },
        },
        // 色
        color: {
          value: '#696603',
        },
        // 形
        shape: {
          // circle:丸、edge:四角、triangle:三角、polygon:多角形、star:星型、image:画像
          type: 'polygon',
          // 枠線
          stroke: {
            width: 0,
            color: '#000000',
          },
          // type を polygon にした場合
          polygon: {
            // 角数
            nb_sides: 5,
          },
          // type を image にした場合
          image: {
            src: 'img/github.svg',
            width: 100,
            height: 100,
          },
        },
        // 透過度
        opacity: {
          value: 1,
          // ランダムで透過度を変更するか
          random: false,
          // 各シェイプの透過度をアニメーション変化させるか
          anim: {
            enable: false,
            // 変化速度
            speed: 0.5,
            // 最小値
            opacity_min: 0.2,
            // 全てのシェイプのアニメーションを同時に行うか
            sync: true,
          },
        },
        // サイズ
        size: {
          value: 6,
          // シェイプの大きさをランダムにするか否か
          random: true,
          // 各シェイプのサイズをアニメーション変化させるか
          anim: {
            enable: false,
            // 変化速度
            speed: 40,
            // 最小値
            size_min: 0.1,
            // 全てのシェイプのアニメーションを同時に行うか
            sync: false,
          },
        },
        // リンク線についての設定
        line_linked: {
          // リンク線を表示するか
          enable: false,
          // 線をつなぐシェイプの間隔
          distance: 150,
          // リンク線の色
          color: '#ffffff',
          // リンク線の透過度
          opacity: 0.4,
          // リンク線の太さ
          width: 1,
        },
        // パーティクルの移動についての設定
        move: {
          // 移動させるか
          enable: true,
          // 移動速度
          speed: 2,
          // 移動の方向
          // ランダム（指定しない）：none
          // 上へ：top   、右上へ：top-right  、右へ：right、右下へ：bottom-right
          // 下へ：bottom、左下へ：bottom-left、左へ：left 、左上へ：top-left
          direction: 'none',
          // 移動のランダム性
          random: true,
          // 移動を直線的にするか
          straight: false,
          // 画面外の描画設定
          // 画面外へ出ていく：out、画面端でバンドする：bounce
          out_mode: 'out',
          // 互いに引きつける設定
          attract: {
            enable: false,
            // 左右方向の引きつけ率（小さい値ほど、引きつける力が大きくなる）
            rotateX: 600,
            // 上下方向の引きつけ率（小さい値ほど、引きつける力が大きくなる）
            rotateY: 1200,
          },
        },
      },
      // ==========================
      // 操作時の設定
      // ==========================
      interactivity: {
        // 操作判定対象のエレメントを指定（"window", "canves"）
        detect_on: 'canvas',
        // 各種操作時の発生イベントを指定
        events: {
          // ホバー（マウスエンター）時の設定
          onhover: {
            enable: false,
            // mode の指定（↓に詳細）
            mode: 'repulse',
          },
          // クリック（マウスアップ）時の設定
          onclick: {
            enable: false,
            // mode の指定（↓に詳細）
            mode: 'push',
          },
          // canvasのサイズ変更にわせて拡大縮小するか
          resize: true,
        },
        // 発生イベントの設定
        modes: {
          // リンク線がでる
          grab: {
            // イベントが発生する範囲（マウスポインターからの距離）
            distance: 400,
            // リンク線の透過度
            line_linked: {
              opacity: 1,
            },
          },
          // サイズ、透過度が一時的に変化する
          bubble: {
            // イベントが発生する範囲（マウスポインターからの距離）
            distance: 400,
            // サイズ
            size: 40,
            // 変化からもとに戻るまでにかかる時間
            duration: 2,
            // 透過度
            opacity: 8,
            // 移動速度
            speed: 3,
          },
          // 押しのける
          repulse: {
            // イベントが発生する範囲（マウスポインターからの距離）
            distance: 200,
          },
          // 新たなパーティクルを発生させる
          push: {
            // 発生数
            particles_nb: 4,
          },
          // パーティクルを削除する
          remove: {
            // 削除数
            particles_nb: 2,
          },
        },
      },
      // Retina Display に対応させるか
      retina_detect: true,

      // デモ用の設定（削除して良い）
      config_demo: {
        hide_card: false,
        background_color: '#b61924',
        background_image: '',
        background_position: '50% 50%',
        background_repeat: 'no-repeat',
        background_size: 'cover',
      },
    }
  )
}
