const express = require('express');
const mysql = require("mysql");//mysqlの読み込み

const app = express();
//mysqlの接続情報
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'kymo7620',
  database: 'progate'
});
// 接続できない時にエラーを表示する
connection.connect((err) => {
  if (err) {
    console.log('error connecting: ' + err.stack);
    return;
  }
  console.log('success');
});
// "/"のルーティング
app.get('/', (req, res) => {
  connection.query(
    "select * from users",
    (error, results) =>{
      console.log(results);
      res.render("hello.ejs");
    }
  );
});

app.listen(3000);
