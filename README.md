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

## 2026-10 リニューアル（構成とコピーの見直し）

「何者か・何を頼めるか・何をしてきたか・どう相談するか」が上から順に伝わる構成に変更しました。

| ページ | 主な変更 |
|---|---|
| `index.html` | メインコピー「ローカルから、面白い仕事をつくる。」、3つのサービス領域、実績、進め方、なぜコザか、相談内容別の問い合わせ入口 |
| `projects.html` | 自社事業／クライアントワークの絞り込み、1件ごとに「背景・考えたこと・つくったもの・結果」を表示 |
| `services.html` | 企画・プロデュース／クリエイティブ制作／イベント・体験づくりの3領域と、3つの関わり方（スポット・プロジェクト・月額）。本文はHTMLに直接記述（`data/services.json` は現在未使用） |
| `about.html` | Vision、Cignalsとは（4行の自己定義）、なぜコザか、仕事の進め方、チーム、拠点、これから、会社概要 |
| `contact.html` | 相談内容を選ぶフォーム。`contact.html?type=production` のように開くと種別が選択済みになる（production / event / project / training / other） |
| 全ページ | ナビを Projects → Services → About → Journal ＋「相談する」ボタンに統一 |

### 実績の追加・編集（`data/projects.json`）

- `type`: `own`（自社事業）か `client`（クライアントワーク）
- `featured: true` の実績がトップに優先表示されます（最大4件）
- `roles`: 「企画」「制作」「運営」から担当したものを列挙
- `background` / `approach` / `deliverables` / `result`: 詳細ページの各項目。空欄の項目は表示されません
- `contactType`: 詳細下部の相談ボタンの種別（production / event / project / training）
- `status` が `published` で、`mainImage` がある実績だけが表示されます
- `memo` は社内用のメモで、サイトには表示されません

### 画像

リニューアル用の画像は `images/works/` に、Web用に縮小（長辺1800px程度）したものを置いています。元データは Desktop/In progress 内の各案件フォルダにあります。

### ローカル表示用データ

`js/app.js` の1行目は `data/*.json` を埋め込んだものです。JSONを編集したら、ファイルを直接開いて確認する場合のみ再生成が必要です（Web公開時はJSONを直接読み込みます）。
