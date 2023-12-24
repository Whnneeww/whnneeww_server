const fs = require('fs');

const fileName = '編集するファイルのパス';
const fileContent = '編集する内容';

fs.writeFile(fileName, fileContent, 'utf8', (err) => {
  if (err) {
    console.error('ファイルの編集に失敗しました:', err);
  } else {
    console.log('ファイルが編集されました:', fileName);
  }
});
