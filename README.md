# Cignals Site

Cignals公式サイトの静的HTML構成です。トップページに加えて、Projects / Journal / Services / Contact を別ページとして管理します。

## 構成

| パス | 内容 |
|---|---|
| `index.html` | トップページ |
| `projects.html` | Projects一覧。`data/projects.json` から表示します。 |
| `journal.html` | Journal記事。`data/journal.json` から表示します。 |
| `services.html` | Services詳細。`data/services.json` から表示します。 |
| `contact.html` | Contactフォーム。送信時にメールソフトを起動する静的フォームです。 |
| `css/style.css` | 全ページ共通スタイル |
| `js/app.js` | JSON読込と各ページの描画処理 |
| `data/*.json` | 投稿・実績・サービス管理データ |
| `images/` | ブランドロゴ、プロジェクト写真、デザイン素材 |

## 更新方法

Projectsは `data/projects.json` にオブジェクトを追加してください。Journalは `data/journal.json` の `body` を編集すると本文が反映されます。BEHINDは `data/behind.json` に下書き枠を残しているため、制作背景や会議メモを後から追加できます。

## ローカル閲覧について

`index.html` をブラウザで直接開いても、Projects / Journal / Services は `js/app.js` 内のフォールバックデータから表示されます。通常のWeb公開時は `data/*.json` を読み込むため、投稿追加は引き続きJSON編集で運用できます。

## ABOUTページについて

`about.html` を追加しました。Vision / Mission / Values、CEO Message、Membersを長文のブランドステートメントとして構成しています。代表ポートレートは現在プレースホルダーです。撮影後、該当ブロックを画像に差し替えてください。

## 2026-05 refinement

トップページProjectsを大判ショーケース化し、Projectsページの崩れを修正しました。ServicesページにはKOZA BASECAMPとArcade Resort Okinawaの2拠点紹介を追加し、背景シンボル回転・ホバー矢印・スクロール表示アニメーションを追加しています。
