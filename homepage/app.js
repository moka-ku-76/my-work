const express = require('express');
const app = express();
const mysql = require("mysql");//mysqlの読み込み
// const script = require("./script.js")
const bodyParser = require('body-parser')

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
  password: 'kymo7620',
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
    'SELECT * FROM `games`',
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
