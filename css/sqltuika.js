const mysql = require('mysql');

// MySQLデータベースへの接続情報を設定
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'ユーザー名',
  password: 'パスワード',
  database: 'contest'
});

// データベースに接続
connection.connect((err) => {
  if (err) {
    console.error('データベースへの接続エラー: ' + err.stack);
    return;
  }
  console.log('データベースに接続しました');
});

// ここにSQLクエリを追加してデータベースを操作するコードを記述

// データベースから切断
connection.end((err) => {
  if (err) {
    console.error('データベース切断エラー: ' + err.message);
  }
  console.log('データベースから切断しました');
});