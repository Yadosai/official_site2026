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

一列目がこのようになっていれば良い。見出し判定してstringで抜き出す。

アップロード時にactions動いて自動デプロイされるよ。


