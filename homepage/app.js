const express = require('express');
const app = express();
const mysql = require("mysql");//mysqlの読み込み
// const script = require("./script.js")
const bodyParser = require('body-parser')

const numOfDisplay = 5;

// public配下の静的ファイルは無条件に公開
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json())

// テンプレートエンジンをEJSに設定
app.set("view engine", "ejs");
app.set("views", "./views")

// URLと処理をマッピング
// app.use("/", require("public/script.js"))

//mysqlの接続情報
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '***',
  database: 'nintendo'
});

// 接続できない時にエラーを表示する
connection.connect((err) => {
  if (err) {
    console.log('error connecting: ' + err.stack);
    return;
  }
  console.log('success to connect mysql!');
});



// ホームページの設定
app.get('/', (req, res) => {
  connection.query(
    'SELECT * FROM `games` ORDER BY RAND() LIMIT 5',
    (error, results) => {
      // console.log(results);
      res.render("index",{games:results})
    }
  )
  }
);



app.listen(3000, () =>{
  console.log('My app listening on port 3000!')
});


// function intRandom(min, max){
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// // ランダムな数を生成する関数
// function intArrRandom(min, max, k){
//   var randoms = [];
//
//   for(i = 0; i < k; i++){
//     while(true){
//       var tmp = intRandom(min, max);
//       if(!randoms.includes(tmp)){
//         randoms.push(tmp);
//         break;
//       }
//     }
//   }
//   return randoms;
// }
