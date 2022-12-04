# youthsignal.stail-gamers.com

YouthSignal ホームページ

## 環境構築手順

- [VSCode](https://code.visualstudio.com/) を使用
- VSCode の拡張機能 `Dev Containers` ( ms-vscode-remote.remote-containers ) をインストール
- VSCode のコマンドパレットから `Dev Containers: Reopen in Container` を実行

※ VSCode の有無に関わらず Docker コマンドで動作させることも可能

> `docker-compose`で実行する。`docker compose`では動作しない。(M1 Mac)

## ホスティングについて

Netlify を使用

※ログインアカウント情報は開発リーダーに確認

- 本番
  - https://app.netlify.com/sites/youthsignal-stail-gamers-com
- テスト用
  - https://app.netlify.com/sites/test-youthsignal-stail-gamers-com

## ブランチ運用＆デプロイフロー

- `dev` から `??/XX` ブランチを切って開発
- `??/XX` ブランチから実験的にデプロイしたい場合は `test` ブランチにマージ（マージリクエストは不要）
  - https://test-youthsignal-stail-gamers-com.netlify.app/ にデプロイされる
- `??/XX` ブランチでの開発作業が終了したら、 `dev` に PullRequest
- `dev` にマージされたら、必要に応じて `deploy` ブランチにマージ（マージリクエストは不要）
  - https://youthsignal.stail-gamers.com/ にデプロイされる

※上記 `??/XX` は `feat/archive-ui` や `fix/hogefuga-bug` などのようなイメージ。細かい規定はない。

![ブランチ運用フロー図](https://user-images.githubusercontent.com/22608356/205312902-672ac872-2e6e-48c7-bd9e-3b48865d76af.png)
