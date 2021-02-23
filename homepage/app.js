const express = require('express');
const mysql = require("mysql");//mysqlの読み込み
const script = require("./script.js")

// jqueryを使いたい
// DOMを使いたい
// 参考：https://qiita.com/gitcho/items/251c66947c0b1d5b5523
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const dom = new JSDOM('<html><body><div id="aaa">AAA<div></body></html>');
const { document } = dom.window;

const jquery = require("jquery");
const $ = jquery(dom.window);

const app = express();

// テンプレートエンジンをEJSに設定
app.set("view engine", "ejs");
app.set("views", "./views")

// public配下の静的ファイルは無条件に公開
app.use(express.static("public"));

// URLと処理をマッピング
// app.use("/", require("./script.js"))

//mysqlの接続情報
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'nintendo',
  database: 'nintendo'
});



// 接続できない時にエラーを表示する
connection.connect((err) => {
  if (err) {
    console.log('error connecting: ' + err.stack);
    return;
  }
  console.log('success');
  console.log($("#aaa"));
});

// ホームページの設定
app.get('/', (req, res) => {
  const games = [
  {id:1, name:"ピクミン3 デラックス",iconSrc:"pikumin-icon.jpg",bannerSrc:"/img/pikumin-banner.jpg"},
  {id:2, name:"あつまれ　どうぶつの森",iconSrc:"",bannerSrc:"/img/domori-banner.jpg"},
  {id:3, name:"脳を鍛える大人のNintendo Switchトレーニング",iconSrc:"",bannerSrc:"/img/notore-banner.jpg"},
  {id:4, name:"世界のアソビ大全51",iconSrc:"",bannerSrc:"img/asobi-banner.jpg"},
  {id:5, name:"ポケットモンスターソード・シールド",iconSrc:"",bannerSrc:"/img/pokemon-banner.jpg"}
  ];
    res.render("index.ejs",{games:games});
    script();
  }
);


// $(function(){
//    $("#del-btn").click(
//      function(){
//        $(".display").fadeOut(300);
//      }
//    );
// });





app.listen(3000);
