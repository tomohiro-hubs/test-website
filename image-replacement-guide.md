# 画像差し替えガイド

## 📋 現在の画像使用状況と差し替え方法

### 🔴 差し替えが必要な画像（仮の画像を使用中）

現在、以下の箇所で既存サイトの画像を流用していますが、より適切な画像への差し替えを推奨：

| 現在の画像 | 使用箇所 | 推奨する差し替え内容 |
|------------|----------|-------------------|
| `img_trainer.webp` | ヒーローセクション | 大黒力斗さんの高解像度ポートレート写真 |
| `kids.webp` | キックボクシングクラス | 実際のキックボクシングレッスン風景 |
| `img_trainer.webp` | フィジカルクラス | 筋トレ・体幹トレーニングの様子 |
| `grappling.webp` | グラップリングクラス | グラップリング練習風景 |
| `trainer2.webp` | サブトレーナー | 実際のトレーナー写真 |

## 🛠️ 差し替え方法（3つのオプション）

### オプション1: 直接URLを変更する方法
最も簡単な方法です。

1. 画像をWebサーバーにアップロード（既存サイトのサーバーなど）
2. `index.html`内の画像URLを直接編集

```html
<!-- 例: ヒーロー画像を変更 -->
<img src="https://challenger-gym.com/assets/img/top/img_trainer.webp" alt="代表トレーナー大黒力斗">
↓
<img src="新しい画像のURL" alt="代表トレーナー大黒力斗">
```

### オプション2: ローカルファイルとして保存する方法
プロジェクト内に画像を保存します。

1. プロジェクトに`images`フォルダを作成
2. 画像ファイルをアップロード
3. HTMLの画像パスを相対パスに変更

```html
<!-- 例: ローカル画像を使用 -->
<img src="images/hero-rikito.jpg" alt="代表トレーナー大黒力斗">
```

### オプション3: 外部画像サービスを利用
Cloudinaryなどの画像ホスティングサービスを利用。

## 📝 差し替えたい画像リスト（優先順位順）

### 1. **ヒーローセクション** 🔴 最優先
```html
<!-- 現在: line 115 -->
<img src="https://challenger-gym.com/assets/img/top/img_trainer.webp" alt="代表トレーナー大黒力斗">
```
**推奨**: 
- 大黒力斗さんの高品質なポートレート写真
- Breaking Downの試合写真
- ジムでの指導風景

### 2. **クラスカード画像** 🟡 優先度高
各クラスの実際のレッスン風景写真に差し替え：

```html
<!-- キックボクシング: line 191 -->
<img src="実際のキックボクシングレッスン写真.jpg" alt="キックボクシングクラス">

<!-- フィジカル: line 203 -->
<img src="筋トレ・体幹トレーニング写真.jpg" alt="フィジカルクラス">

<!-- グラップリング: line 215 -->
<img src="グラップリング練習風景.jpg" alt="グラップリングクラス">

<!-- S×G School: line 227 -->
<img src="キッズクラスの実際の写真.jpg" alt="S×G School キッズクラス">

<!-- ダンス: line 240 -->
<img src="ダンスレッスンの実際の写真.jpg" alt="ダンスレッスン">
```

### 3. **トレーナー紹介** 🟢 優先度中
```html
<!-- 代表: line 302 -->
<img src="大黒力斗さんの正式な写真.jpg" alt="代表トレーナー 大黒力斗">

<!-- サブトレーナー: line 321 -->
<img src="実際のトレーナー写真.jpg" alt="トレーナー">

<!-- ダンスインストラクター: line 332 -->
<img src="ダンスインストラクターの写真.jpg" alt="ダンスインストラクター">
```

### 4. **Instagram埋め込み部分** 🔵 オプション
現在は仮のグリッドになっているので、実際のInstagram埋め込みウィジェットに置き換え：

```html
<!-- 現在の仮グリッド（line 521-543）を削除して、以下を追加 -->
<script src="https://snapwidget.com/js/snapwidget.js"></script>
<iframe src="https://snapwidget.com/embed/あなたのウィジェットコード" 
        class="snapwidget-widget" 
        allowtransparency="true" 
        frameborder="0" 
        scrolling="no" 
        style="border:none; overflow:hidden; width:100%;">
</iframe>
```

## 🎯 画像準備のポイント

### 推奨画像仕様
- **形式**: WebP（推奨）、JPG、PNG
- **サイズ**: 
  - ヒーロー画像: 1200x800px以上
  - クラスカード: 600x400px
  - トレーナー: 400x400px（正方形推奨）
- **ファイルサイズ**: 200KB以下に最適化
- **画質**: 高品質だが軽量化済み

### 画像最適化ツール
1. **TinyPNG**: https://tinypng.com/
2. **Squoosh**: https://squoosh.app/
3. **WebP変換**: https://convertio.co/ja/jpg-webp/

## 📤 画像アップロード手順

### このプロジェクト内に画像を保存する場合：

1. **画像フォルダを作成**
```javascript
// 以下のフォルダ構造を作成
/images/
  /hero/
  /classes/
  /trainers/
  /gallery/
```

2. **画像をアップロード**
- 各フォルダに適切な画像を配置

3. **HTMLを更新**
```html
<!-- 相対パスに変更 -->
<img src="images/hero/rikito-oguro.jpg" alt="代表トレーナー大黒力斗">
```

## 💡 すぐに差し替えたい場合の簡単な方法

最も簡単なのは、**既存サイトの`/assets/img/`フォルダに新しい画像をアップロード**して、そのURLを使用することです：

```html
<!-- 例: 既存サイトのサーバーを利用 -->
<img src="https://challenger-gym.com/assets/img/new/hero-rikito-2024.jpg" alt="代表">
```

## 📌 注意事項

1. **著作権**: 使用する画像の著作権を確認
2. **肖像権**: 人物が写っている場合は使用許可を取得
3. **画質**: モバイルでも綺麗に表示される画質を維持
4. **読み込み速度**: 画像サイズを最適化してページ速度を維持

---

**質問がある場合は、具体的な画像と差し替えたい箇所を教えてください。**