# official_site2026

```sh
git clone git@github.com:Yadosai/official_site2026.git
docker compose up -d
```
http://localhost:3000
にアクセスすると確認できます。

うまく行かない場合は

```sh
docker compose up --build -d

```
でビルドし直してみてください。

終了時
```sh
docker compose down
```





# 模擬店情報の更新方法
指定形式のエクセルシートをofficial_site2026/data/配下に 「mogiten.xlsx」 のファイル名でアップロードする。

アップロード前に昨年のエクセル形式と同じ構成になっているか確認。

テント番号	団体名	店舗名	品目	PR文	出店
<img width="3076" height="81" alt="image" src="https://github.com/user-attachments/assets/3f88888a-729a-4202-bc19-e25cce6c4db9" />

一行目がこのようになっていれば良い。見出し判定してstringで抜き出す。

アップロード時にactions動いて自動デプロイされるよ。




# 協賛企業情報の更新方法

指定形式のエクセルシートを official_site2026/data/ 配下に 「thanks.xlsx」 のファイル名でアップロードする。

アップロード前に既存のエクセル形式と同じ構成になっているか確認。

## シート構成

シート名：`協賛`

| 団体名 |
| 銀の豚 |
| つくば電気空調株式会社 |
| ... |

一行目が「団体名」になっていれば良い。見出し判定して string で抜き出す。

## 更新フロー

1. エクセルを編集して保存
2. `thanks.xlsx` をこのディレクトリにアップロード
3. GitHub Actions が自動実行
4. `front/data/thanks.json` を自動生成・コミット
5. サイトに反映

アップロード時に actions 動いて自動デプロイされるよ。


