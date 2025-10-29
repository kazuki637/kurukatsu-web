# MicroCMS セットアップガイド

## 必要な情報
- API キー: `tY6jGkAFf7n9n8Tuf5erekEjHW6b5c8lBQBg`
- Service ID: 確認してください（MicroCMSダッシュボードの設定→APIに記載）

## コンテンツモデル作成

### 1. 記事（articles）
1. 新規コンテンツ作成 → コンテンツID: `articles`
2. 表示名: `クルカツ記事`
3. フィールド追加:

| フィールドID | 表示名 | 種類 | 必須 | 備考 |
|------------|--------|------|------|------|
| title | タイトル | テキストフィールド | ✓ | |
| category | カテゴリ | 選択 | ✓ | |
| thumbnail | サムネイル | 画像 | | |
| author | 著者 | テキストフィールド | ✓ | |
| content | 本文 | リッチエディタ | | |

### 2. 協賛案件（sponsors）
1. コンテンツID: `sponsors`
2. 表示名: `協賛案件`
3. フィールド追加:

| フィールドID | 表示名 | 種類 | 必須 | 備考 |
|------------|--------|------|------|------|
| title | タイトル | テキストフィールド | ✓ | |
| company | 会社名 | テキストフィールド | ✓ | |
| thumbnail | サムネイル | 画像 | | |
| content | 本文 | リッチエディタ | ✓ | |
| category | カテゴリ | 選択 | ✓ | |
| deadline | 締切 | 日時 | ✓ | |
| status | ステータス | 選択 | ✓ | "募集中"、"終了" |

### 3. インターン（internships）⚠️ 将来実装予定
現在はダミーデータのまま。実装時までコンテンツAPIは作成しない。

## 環境変数設定
`.env.local` ファイルを作成:

```
NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN=your-service-id
NEXT_PUBLIC_MICROCMS_API_KEY=tY6jGkAFf7n9n8Tuf5erekEjHW6b5c8lBQBg
```

