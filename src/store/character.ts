import { Module, VuexModule, Mutation } from 'vuex-module-decorators'

export interface CharacterData {
  id:
    | 'yoshito'
    | 'shizuno'
    | 'asahi'
    | 'riko'
    | 'shunpei'
    | 'saya'
    | 'suzu'
    | 'mahiro'
    | 'yuto'
    | 'toshiyuki'
  jaName:
    | '宮道 嘉人'
    | '東雲 静乃'
    | '桜桃野 朝姫'
    | '椿 凛子'
    | '吉田 駿平'
    | '金蘭 咲綾'
    | '浦戸 鈴'
    | '土筆田 茉尋'
    | '深海 優仁'
    | '神崎 俊之'
  furigana:
    | 'くどう よしと'
    | 'しののめ しずの'
    | 'ゆすらの あさひ'
    | 'つばき りこ'
    | 'よしだ しゅんぺい'
    | 'かねらん さあや'
    | 'うらと すず'
    | 'つくしだ まひろ'
    | 'しんかい ゆうと'
    | 'かんざき としゆき'
  showing: boolean
  overview: {
    cv: string
  }
  introduction: {
    top: string
    text: string[]
    bot: string
  }
  img: {
    thumbnail: string
  }
}

@Module({ stateFactory: true, namespaced: true, name: 'character' })
export default class Character extends VuexModule {
  audio?: HTMLAudioElement
  showingIndex: number = 1

  list: CharacterData[] = [
    {
      id: 'yoshito',
      jaName: '宮道 嘉人',
      furigana: 'くどう よしと',
      showing: false,
      overview: {
        cv: '清水こうき',
      },
      introduction: {
        top: '「こんなことが許されていいのか……」',
        text: [
          '本作の主人公。',
          '間違っていること、自分の気に入らないこと、納得いかないことにはストレートにおかしいと言い切る。',
          'そんな彼を一目置く者もいるが、反面、毛嫌いする者もいる。',
          'この風紀が乱れた高校で『気に入らないもの』に文句を言うべく、時には駆けまわり、時には立ち止まる。',
          '自分の価値を問い苦悩しながらも、彼の青春は始まった。',
        ],
        bot:
          '「分からねぇなら教えてやる……てめぇらが、どうしようもないクソ野郎だってことをなぁ！」',
      },
      img: {
        thumbnail: 'youthsignal-chara-thumbnail-asahi.png',
      },
    },
    {
      id: 'shizuno',
      jaName: '東雲 静乃',
      furigana: 'しののめ しずの',
      showing: true,
      overview: {
        cv: '浅見ゆい',
      },
      introduction: {
        top: '「なんで私がそんな心配をしなければならないの」',
        text: [
          '嘉人と共に生徒会の風紀部門で活動している。',
          '成績も学年トップ、要領もよく生徒会活動もそつなくこなし、教員からの信頼も厚い。',
          'しかし、基本的に全ての他人に無関心で不愛想。',
          '生徒会活動もクラスの推薦で半ば無理矢理入ったようなもの。',
          '当然生徒間では浮き気味なところがあるが、本人は気にしない様子……。',
          '何が彼女をそうさせるのか、物語を通して、彼女の過去も紐解かれていく。',
        ],
        bot:
          '「不愛想な理由？　……心当たりがあるなら、自分の胸に手を当ててよく考えるのね」',
      },
      img: {
        thumbnail: 'youthsignal-chara-thumbnail-asahi.png',
      },
    },
    {
      id: 'asahi',
      jaName: '桜桃野 朝姫',
      furigana: 'ゆすらの あさひ',
      showing: false,
      overview: {
        cv: '結崎有理',
      },
      introduction: {
        top: '「もっとこう、高校生らしく……ね？」',
        text: [
          '二年生にして生徒会副会長を務めている。',
          'その働きは時に厳しく、かつ誰よりも丁寧に、穏やかに話を進める生徒として評価されている。',
          '普段はノリが良く、たまに可愛らしいちょっかいをしかけてくる茶目っ気の利いた普通の女の子である。',
          '実は自己主張の表現が苦手で、そういったところがむしろ『完璧な生徒会副会長をしてしまう』ところに繋がっているのかもしれない。',
        ],
        bot: '「こ、これはちょっと一人じゃ……手伝ってくれる？」',
      },
      img: {
        thumbnail: 'youthsignal-chara-thumbnail-asahi.png',
      },
    },
    {
      id: 'riko',
      jaName: '椿 凛子',
      furigana: 'つばき りこ',
      showing: false,
      overview: {
        cv: '紗倉妃芽',
      },
      introduction: {
        top: '「り、りり、凛子……そんな、自信ないです……」',
        text: [
          '感受性豊かで笑顔が可愛らしく愛嬌がある。',
          'ただ要領が良いとはいえず、クラスではいじられキャラとして生徒達に知られ、しばしば行き過ぎたものも見られる中、そういったことへの静かな不安感を心に閉じ込めつつ、表情豊かに優しく振る舞う。',
          '物語の上で、彼女は嘉人達との出会いによって大きく成長し、取り巻く環境も徐々に変わっていく。',
        ],
        bot:
          '「凛子にだって……凛子にだって！　どうしても曲げられない事はあります！」',
      },
      img: {
        thumbnail: 'youthsignal-chara-thumbnail-asahi.png',
      },
    },
    {
      id: 'shunpei',
      jaName: '吉田 駿平',
      furigana: 'よしだ しゅんぺい',
      showing: false,
      overview: {
        cv: '陽向ゆき',
      },
      introduction: {
        top: '「おい見ろよ。あれは……あぁ間違いねぇ、Eカップだ」',
        text: [
          '成績自体は普通だが、なぜ同じ高校にいるのかわからないくらい馬鹿。',
          'すべてのお調子者感を集約したような人物。',
          'しかし、『目利き』や『根拠のない説得力』や『ムードメイキング』において、この学校でかなう者はいないだろう。',
          'とにかくタフでしつこく、イベントごとにはセールに集う主婦のように現れる。',
          '嘉人とは中学からの付き合いで、彼が駿平の高校受験を手伝い、なんとかその仲は物語の舞台である高校二年まで続いている。',
        ],
        bot:
          '「あんまり難しいこと言わねーでさ。どっちもやる、これで良いだろ？」',
      },
      img: {
        thumbnail: 'youthsignal-chara-thumbnail-asahi.png',
      },
    },
    {
      id: 'saya',
      jaName: '金蘭 咲綾',
      furigana: 'かねらん さあや',
      showing: false,
      overview: {
        cv: '江井みゆき',
      },
      introduction: {
        top:
          '「僕と仲良くなると不幸になるんだ……理由は分かってる、それが僕なんだ」',
        text: [
          '普段から笑顔しかしないポーカーフェイス。',
          '学校生活から全てが謎、感受性豊かなのに情緒的でない。',
          'いつも周りとは一定の距離を保っているが、話し込むとどこか達観している。',
          '嘉人とは一年生の時に図書室で会い、とても小さな約束をした。',
          '彼女は学校において何か大きな目標を持っている様だが、嘉人との約束がそれと関係するかは、まだ知る由もない。',
        ],
        bot: '「僕は忘れてないよ、約束を……どうか、信じて」',
      },
      img: {
        thumbnail: 'youthsignal-chara-thumbnail-asahi.png',
      },
    },
    {
      id: 'suzu',
      jaName: '浦戸 鈴',
      furigana: 'うらと すず',
      showing: false,
      overview: {
        cv: '有村蓮',
      },
      introduction: {
        top: '「あ、こんにちは～！　今日も元気元気、ですねっ♪」',
        text: [
          'ふわふわパーマが似合う、ノリに生きる明るい女生徒。',
          '周辺生徒から『面白い人』で知られ、彼女を嫌う者はいないだろう。',
          '一年生の時に梁ノ宮高校に転校してきて、持ち前の明るさとノリの良さですぐに溶け込み、とうとうノリで生徒会に入ってしまう、ノリだらけのノリノリガール。',
          '仲良くなると少し振り回されることがあるが、そんなところも笑って許してしまう様な雰囲気の持ち主。',
          'たまに持ち前の意外性をよく分からないタイミングで放つところがある。',
        ],
        bot: '「そういうのはねぇ、なんていうかなぁ……自分次第、てヤツですよ♪」',
      },
      img: {
        thumbnail: 'youthsignal-chara-thumbnail-asahi.png',
      },
    },
    {
      id: 'mahiro',
      jaName: '土筆田 茉尋',
      furigana: 'つくしだ まひろ',
      showing: false,
      overview: {
        cv: '有村蓮',
      },
      introduction: {
        top: '「え？　……ああ、どうも」',
        text: [
          '成績も普通、学校生活においてもあまり目立つことはないが、口数の少なさから『東雲静乃を超えてクール』と言われている。',
          '生徒会関係では、主に口コミや目撃といった新鮮な情報を担当している。',
          'よく見ると美人だが、見た目を気にしない為に周りから勿体なく思われている。',
          'たまに自分を卑下する発言をするが、周りは割と頼りにしている。',
          '基本的に反応が薄く、いつも眠そうにしている。',
        ],
        bot: '「なんでもないよ……なんでもないって……なんでもな」',
      },
      img: {
        thumbnail: 'youthsignal-chara-thumbnail-asahi.png',
      },
    },
    {
      id: 'yuto',
      jaName: '深海 優仁',
      furigana: 'しんかい ゆうと',
      showing: false,
      overview: {
        cv: 'しぐれなお',
      },
      introduction: {
        top: '「仕方ないなぁ、僕がやって見せてあげよう」',
        text: [
          '男子生徒の中で一番ステータスが高いと言われていて、本人もそれを当然と思っている。',
          '少しナルシストなところがあるが、それらは自身の実績やストイックな姿勢で打ち込んだ功績から成る『彼の誇りそのもの』である。',
          '父が梁乃宮区から出馬した議員で「平和な街づくり」を手掛けている。',
          '彼も政治家の息子として、自分の住む町を良くするべく、梁ノ宮高校の悪化した風紀を率先して正そうと奮起する。',
        ],
        bot: '「――――――っておぉい！　なんたって君はいつもそうなんだ！」',
      },
      img: {
        thumbnail: 'youthsignal-chara-thumbnail-asahi.png',
      },
    },
    {
      id: 'toshiyuki',
      jaName: '神崎 俊之',
      furigana: 'かんざき としゆき',
      showing: false,
      overview: {
        cv: '美藤秀吉',
      },
      introduction: {
        top: '「ん～！　それは難しい相談だなぁ～」',
        text: [
          '普段から生徒にも教職員にも好かれている、36歳とは思えないほどのイケメンで小粋な先生。',
          '一部、彼と話したいが為に教えを乞う女生徒もいるが、噂によればすでに恋人がいるらしい。',
          '本人に直接問いただすと、優しい顔にむしろ似合って、丁寧に、したたかに、賢く話を逸らされる。',
          '普段の彼もきちんとした大人の態度で、なのに融通の利く有能な人材として厚い信頼を受けており、誰からも舐められない威厳を持っている。',
        ],
        bot: '「わかった、責任は先生がとるから。やっちまいなさい」',
      },
      img: {
        thumbnail: 'youthsignal-chara-thumbnail-asahi.png',
      },
    },
  ]

  @Mutation
  show(characterAreaData: CharacterData) {
    // 現在表示中のキャラを非表示にする
    this.list[this.showingIndex].showing = false
    // 対象キャラを表示
    characterAreaData.showing = true
    this.showingIndex = this.list.findIndex(
      (c) => c.id === characterAreaData.id
    )
  }

  @Mutation
  showPrev() {
    // 現在表示中のキャラを非表示にする
    this.list[this.showingIndex].showing = false
    // 前の表示キャラ番号を計算
    let index = this.showingIndex
    index = --index >= 0 ? index : 10 + index
    this.showingIndex = index
    // 対象キャラ表示
    this.list[index].showing = true
  }

  @Mutation
  showNext() {
    // 現在表示中のキャラを非表示にする
    this.list[this.showingIndex].showing = false
    // 前の表示キャラ番号を計算
    const index = ++this.showingIndex % 10
    this.showingIndex = index
    // 対象キャラ表示
    this.list[index].showing = true
  }

  @Mutation
  playVoice(src: string) {
    let voice = this.audio
    if (!voice) voice = this.audio = new Audio()
    else voice.pause()
    voice.src = src
    voice.play()
  }
}
