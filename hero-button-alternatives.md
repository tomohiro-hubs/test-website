# ヒーローボタンの改行問題 - 代替案

## 現在の実装（推奨）
両方のボタンに2行テキストを追加して高さを揃える

```html
<a href="#" class="btn btn-primary btn-lg">
    無料体験を予約する →
    <small>LINEでかんたん1分</small>
</a>
<a href="#classes" class="btn btn-secondary btn-lg">
    クラス・料金を確認する
    <small>詳細ページへ</small>
</a>
```

**メリット**：
- ボタンの高さが揃う
- 情報量が増えてCVR向上
- バランスが良い

---

## 代替案1: サブテキストを削除
もっとシンプルにしたい場合

```html
<a href="#" class="btn btn-primary btn-lg">
    無料体験を予約する（LINE）→
</a>
<a href="#classes" class="btn btn-secondary btn-lg">
    クラス・料金を確認する
</a>
```

**メリット**：
- すっきりとした見た目
- テキストが1行で収まる

**デメリット**：
- 「LINEでかんたん1分」の訴求が弱まる

---

## 代替案2: ボタンを縦に配置
スマホでよく見られるパターン

```css
.hero-buttons {
    flex-direction: column;
    align-items: stretch;
}

.hero-buttons .btn {
    width: 100%;
}
```

**メリット**：
- 改行を気にしなくて良い
- モバイルフレンドリー

**デメリット**：
- PCでは横幅を取りすぎる可能性

---

## 代替案3: テキストを短縮
文字数を減らして改行を防ぐ

```html
<a href="#" class="btn btn-primary btn-lg">
    無料体験予約 →
    <small>LINEで1分</small>
</a>
<a href="#classes" class="btn btn-secondary btn-lg">
    料金を見る
</a>
```

**メリット**：
- コンパクト

**デメリット**：
- 情報が減る

---

## 推奨：現在の実装
**両方に2行テキスト**が最もバランスが良く、CVRも高いです。

- 左ボタン：「無料体験を予約する」＋「LINEでかんたん1分」
- 右ボタン：「クラス・料金を確認する」＋「詳細ページへ」

これで視覚的にも情報的にもバランスが取れます。