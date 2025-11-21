# 📊 レスポンシブ料金表コンポーネント - 使い方ガイド

## 🎯 特徴

このコンポーネントは、**自動的にレスポンシブ対応**する料金表です。

- **PC（768px以上）**: テーブル形式で見やすく表示
- **モバイル（768px以下）**: カード形式に自動切り替え
- **CSSのみで実装**: JavaScriptは不要

## 📁 ファイル構成

- `pricing-table-component.html` - デモページ（そのまま開いて動作確認できます）
- このファイルには、必要なHTML + CSS全てが含まれています

## 🚀 使い方

### 1. 基本的な使い方

必要な部分をコピーして、あなたのページに貼り付けるだけです。

#### ステップ1: CSSをコピー

`<style>`タグ内の以下の部分をコピーして、あなたのCSSファイルに追加：

```css
/* ===== 料金表コンポーネント用CSS ===== */

/* 必要な変数 */
:root {
    --primary-color: #dc2626;
    --dark-color: #111827;
    --text-light: #6b7280;
    --border-color: #e5e7eb;
    --shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}

/* ここから料金表のスタイル全てをコピー */
.pricing-table-section { ... }
.pricing-category-title { ... }
/* 以下、全てのスタイル */
```

#### ステップ2: HTMLをコピー

`<!-- ========== 料金表コンポーネント ここから ========== -->`
から
`<!-- ========== 料金表コンポーネント ここまで ========== -->`
までをコピー

```html
<div class="pricing-table-section">
    <h3 class="pricing-category-title">一般クラス料金</h3>
    
    <!-- PC用テーブル -->
    <div class="pricing-table">
        <table>
            <!-- テーブル内容 -->
        </table>
    </div>
    
    <!-- モバイル用カード -->
    <div class="mobile-pricing-cards">
        <!-- カード内容 -->
    </div>
</div>
```

### 2. カスタマイズ方法

#### 色を変更する

```css
:root {
    --primary-color: #dc2626;  /* メインカラー（赤） */
    --dark-color: #111827;     /* 濃い色（黒） */
    --text-light: #6b7280;     /* 薄い文字色（グレー） */
    --border-color: #e5e7eb;   /* ボーダー色 */
}
```

#### ブレークポイントを変更する

デフォルトは768pxですが、変更できます：

```css
@media (max-width: 768px) {  /* ← ここを変更 */
    .pricing-table {
        display: none;
    }
    .mobile-pricing-cards {
        display: grid;
    }
}
```

#### プランを追加する

**PC用テーブル**と**モバイル用カード**の両方に追加してください：

```html
<!-- PC用テーブルに追加 -->
<tr>
    <td class="plan-name">新プラン名</td>
    <td>回数</td>
    <td class="price">¥10,000</td>
    <td class="price">¥8,000</td>
    <td class="description">説明文</td>
</tr>

<!-- モバイル用カードに追加 -->
<div class="mobile-price-card">
    <h4>新プラン名</h4>
    <div class="price-row">
        <span class="price-label">回数</span>
        <span>月4回</span>
    </div>
    <div class="price-row">
        <span class="price-label">料金</span>
        <span class="price-value">¥10,000</span>
    </div>
    <p class="description">説明文</p>
</div>
```

#### 人気プランをハイライト表示

**PC用テーブル**:
```html
<tr class="highlight">  <!-- ← classを追加 -->
    <td class="plan-name">人気プラン</td>
    <!-- ... -->
</tr>
```

**モバイル用カード**:
```html
<div class="mobile-price-card highlight">  <!-- ← classを追加 -->
    <h4>人気プラン <span style="...">人気</span></h4>
    <!-- ... -->
</div>
```

### 3. テーブル列のカスタマイズ

列を追加・削除したい場合：

```html
<!-- 例：「期間」列を追加 -->
<thead>
    <tr>
        <th>プラン</th>
        <th>回数</th>
        <th>期間</th>  <!-- ← 追加 -->
        <th>料金</th>
        <th>おすすめの方</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td class="plan-name">プラン名</td>
        <td>月4回</td>
        <td>1ヶ月</td>  <!-- ← 追加 -->
        <td class="price">¥10,000</td>
        <td class="description">説明</td>
    </tr>
</tbody>
```

**注意**: モバイル用カードも同じ情報を追加してください。

## 📱 動作確認方法

1. `pricing-table-component.html`をブラウザで開く
2. ブラウザの幅を変える
   - 広い幅: テーブル表示
   - 狭い幅（768px以下）: カード表示

または、デベロッパーツールで：
- Chrome: F12 → デバイスツールバー（Ctrl+Shift+M）
- Safari: 開発 → レスポンシブデザインモード

## 💡 よくある質問

### Q1: JavaScriptは必要ですか？
**A**: いいえ、必要ありません。CSSだけで自動切り替えします。

### Q2: 既存のCSSと競合しませんか？
**A**: クラス名が固有なので競合しにくいですが、念のため`:root`の変数名を変更することをお勧めします。

### Q3: テーブルだけ/カードだけ使いたい
**A**: 可能です。
- テーブルのみ: `.mobile-pricing-cards`を削除
- カードのみ: `.pricing-table`を削除し、`.mobile-pricing-cards`から`display: none;`を削除

### Q4: 3列のテーブルにしたい
**A**: `<th>`と`<td>`を減らすだけです：

```html
<thead>
    <tr>
        <th>プラン</th>
        <th>料金</th>
        <th>説明</th>
    </tr>
</thead>
```

### Q5: アニメーションを追加したい
**A**: CSSに以下を追加：

```css
.mobile-price-card {
    transition: transform 0.3s, box-shadow 0.3s;
}

.mobile-price-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.15);
}
```

## 🎨 デザインバリエーション

### バージョン1: シンプル版（枠線なし）

```css
.pricing-table {
    box-shadow: none;
    background: transparent;
}

.pricing-table tr {
    border-bottom: 2px solid var(--border-color);
}
```

### バージョン2: カラフル版

```css
.pricing-table th {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.highlight {
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    color: white;
}
```

### バージョン3: ダークモード

```css
.pricing-table {
    background: #1f2937;
    color: white;
}

.pricing-table td {
    border-bottom: 1px solid #374151;
}
```

## 📦 他のページで使う場合のチェックリスト

- [ ] CSSをコピーした
- [ ] HTMLをコピーした
- [ ] 色をカスタマイズした（必要に応じて）
- [ ] プラン内容を自分のデータに変更した
- [ ] PC表示を確認した
- [ ] モバイル表示を確認した（768px以下）
- [ ] 両方でハイライト表示が正しいか確認した

## 🔗 サポート

問題がある場合は、以下を確認してください：
1. CSSの変数が定義されているか
2. HTMLの構造が正しいか（閉じタグなど）
3. ブラウザのデベロッパーツールでエラーが出ていないか

---

**作成日**: 2024年11月
**バージョン**: 1.0