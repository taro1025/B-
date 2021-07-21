# B_plus

dockerの便利コマンド

docker system prune -a && docker-clean all && docker-compose down --rmi all --volumes --remove-orphans 


# npmインストールに使ったコマンド

npm i --save react-router-dom

npm i -D @types/react-router-dom

npm i axios

npm i @types/axios

npm i styled-components

npm i @types/styled-components

npm i @material-ui/core @material-ui/icons

npm i styled-reset

npm install react-anchor-link-smooth-scroll

npm i chart.js react-chartjs-2


# graphQLの導入に使ったコマンド

rails g graphql:mutation mutationの名前 #例えばUpdatePost

rails g graphql:object モデル #例えばPost

# graphQL導入時に参考にしたサイト

CRUDのチュートリアル
https://qiita.com/k-penguin-sato/items/07fef2f26fd6339e0e69

Relayの公式
https://relay.dev/docs/getting-started/step-by-step-guide/

GraphQLとは
https://qiita.com/yoshii0110/items/fbee34d5c235a2a064f9


# 見積もりと実際にかかった時間(まあまあ適当な測定)

1p = 1時間

✅ecs 20p 12h30

✅terraform  20p 3h30

✅circleCI  5 8h50(エラー6h)

✅Dockerファイルの準備　3p 1h12min 

✅DB設計　3p 44min

✔︎ログイン 3p 〆　50min

✔︎ログアウト 1p 〆

✅サインアップ3p 〆　40min

✔︎タイムライン 3p 〆　30min

✔︎通知機能 4p 〆 1h46min

✔︎読んだ本の登録 3p〆 3h11

✔︎読んだ本の作消　1h

✔︎ランク付け 3p 〆 47min

✔︎感想の投稿 3p 〆　38分。

✔︎感想の編集 1p 18min

✔︎感想の削除 1p

✔︎読みたい本の登録 3p 3min

✔︎読みたい本の削除 1p 読んだ本と同時。

✔︎人生の本追加 3p  1h

✔︎人生の本削除 1p

✔︎コメントを書く 3p コメント全体で23min

✔︎コメントを消す 1p

✔︎コメントを編集する 1p

✔︎いいねをつける 3p 45min 7:20~

✔︎いいねを消す 1p

✔︎フォロー機能 3p 35

✅本の検索(amz API) 5p 1h50min

✅つい、本　2p 30min

✅なるほどデザイン 3p

✅デザイン構成 2p  5h?

✅フロントと連携 2p 20min

✅タイムラインページ 2p 16:15~16:45 30min

✅読書データページ  5p 14:30~16:20 1:50min 8hくらい？　方法論を見誤ってcronなど使おうとしてしまった分余計に時間がかかった。

✅読みたい本のページ 3p 30min+15:50~19:00 3h10min

✅検索画面 2p

✅本の詳細ページ 3p

✅本の登録&感想を書くページ 2p 3hくらい

✅本の感想一覧ページ 2p 16:30~18:40 1h10min

✅読んだ本(ヒエラルキー 3p 

✅読んだ本(降順 1p


✅TS 1p 2h



✅インフラ本 3p


✅セキュリティ本 5p

ゴール

✅コメントを書けるようにする

✅通知があるときにマークがつくようにする 2h

✅postにその本のrankを載せる 6:53~8:15 30minで終わらせる→ 1h22min

✅読みたい本タブが機能するようにする 10:22=11:17 1h

✅人生の本の登録ができるようにする 11:42 ~12 13:46~１６  40くらいで終わらせたい 1h23min

//いいねしたらお礼が出るようにする

あと、ランクのなしが０になるようにしたい


# 見積もり入れ忘れ

urlsを作る 40min

シードの作成 10min

footer 6:40~7:27 47min

ログイン画面 7:30 ~8:30 1h

読みたい本の登録のクライアントAPI

フォローapi,　ユーザープロフィール 8:17~12:00 3h45min ヒエラルキーのバーの調整もまあまあした。

人生の本のページ 17:5 ~ 

通知画面  12:00 ~ 15:30 3h30min 


# デプロイで参考にしたサイト

【ポートフォリオをECSで！】Rails×NginxアプリをFargateにデプロイするまでを丁寧に説明してみた
https://qiita.com/maru401/items/8e7d32a8baded045adb2

[フロントエンド] create-react-appで作成したアプリをNginxで動かす
https://www.yoheim.net/blog.php?q=20180407

# 今回の開発でした質問

JSで１秒ごとにループさせたい
https://teratail.com/questions/346578

同じタスク定義にある二つのコンテナ間でソケット通信をする方法
https://teratail.com/questions/348336

# 思ったこと

そもそも知識がないときつい。(今回で言うとNginx、ECS、 TS,,,)

見切り発車でコード書いちゃダメ。実装方法をちゃんと考えないといけない。じゃないと遠回りになる。

AP

・　公式を読む(MDN, TS, Nginx, AWS...)

・ コード書く前に実現方法を書き出そう
