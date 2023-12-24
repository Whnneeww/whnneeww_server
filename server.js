const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
app.use(bodyParser.json());

app.post('/edit-file', (req, res) => {
  const fileName = req.body.fileName;
  const fileContent = req.body.fileContent;

  // ファイルを編集する処理
  fs.writeFile(fileName, fileContent, 'utf8', (err) => {
    if (err) {
      console.error('ファイルの編集に失敗しました:', err);
      res.status(500).json({ message: 'ファイルの編集に失敗しました' });
    } else {
      console.log('ファイルが編集されました:', fileName);
      res.json({ message: 'ファイルが編集されました' });
    }
  });
});

app.listen(3000, () => {
  console.log('サーバがポート3000で起動しました');
});
