### はじめに

カレンダーアプリを作るとなると必ず必要な要素が「情報をどこに保存するか?」です。四文字予定では、情報の保存の仕組みにローカルストレージを用いています。

### データを保存する主な3種の方法と特徴

Webにおいてデータを保存する方法は主に3つあります。(本当はもっと色々あるけど)

### クッキー(Cookie)

[クッキー](https://ja.wikipedia.org/wiki/HTTP_cookie)

クッキーは少量のデータを保存する方法の一つです。名前だけ聞いたことがある方も多いのではないでしょうか?

クッキーは広く普及しているが故に簡単に使えることがメリットです。また、ほぼ全てのブラウザで使える点も魅力ですね!これらはユーザーにとっても開発者にとっても大きな利点です。

一方、クッキーは仕様に癖があり取り扱う際には注意が必要です。主要な仕様として、一つの文字列しか保存できない点、ユーザーが変更可能な点、および有効期限がある点が挙げられます。

また、最近ではITP2.1という規格によりsafari等一部のブラウザでクッキーの有効期間が7日になるという報道がありました。

[Intelligent Tracking Prevention 2.1](https://webkit.org/blog/8613/intelligent-tracking-prevention-2-1/)

四文字予定では当初クッキーを用いて予定表の管理を行っていましたが、これらの事項により現在はクッキーの仕様を見送っています。(google analyticsでは使用しています)

### データベース(DB)

対して、データベース(DB)は大量のデータを定義立てて保存する用途に適しています。

DBはそれ自体が一つの学問になるほどの分野なので詳しくは割愛しますが、Webアプリにおけるデータ保存といった観点ではクッキーとほぼ正反対の性質を持ちます。すなわち、あらゆるデータが保存できる点、ユーザーが変更不可能な点、および有効期限がない点が長所となります。唯一共通する長所は、ほぼ全てのブラウザで使える点ですね!

一方、DBの欠点は開発者にとっては工数(開発の手間)の大幅な増加、ユーザーにとってはログインの必須化が挙げられます。四文字予定のようなサクッと簡単に作るアプリにおいてはどちらも死活問題でしたので、当アプリではDBは用いておりません。

### ローカルストレージ

[ローカルストレージ](https://developer.mozilla.org/ja/docs/Web/API/Web_Storage_API)

ローカルストレージは先に挙げたクッキーとDBの中間的な性質を持ちます。大体のデータがシンプルかつ無期限で保存できる反面、ユーザーが任意に変更可能です。また、上述した2つと比べ新しい技術のため、未対応のブラウザも存在します。

四文字予定ではデータの保存にローカルストレージを用いています。ローカルストレージを用いることで実装がシンプルになり、また短期間で開発が進んだように感じます。加えて、任意の変更が可能であるといった欠点は、カレンダーアプリの性質上そこまで問題でなかったといった事情もあります。

### おわりに

開発者目線だと「情報をどこに保存するか」、ユーザー目線だと「情報がどこに保存されるか」はアプリケーションを評価する上での視点の一つです。特に個人に紐付く情報の入力が求められるような場面では、情報の保存形態に着目してみると面白いかもしれません。