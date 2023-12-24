document.getElementById('fileForm').addEventListener('submit', function(event) {
  event.preventDefault(); // フォームのデフォルトの送信を防止

  const fileName = document.getElementById('fileName').value;
  const fileContent = document.getElementById('fileContent').value;

  // サーバーにファイル編集リクエストを送信
  fetch('/edit-file', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ fileName: fileName, fileContent: fileContent })
  })
  .then(response => response.json())
  .then(data => {
    console.log('ファイルが編集されました:', data);
  })
  .catch(error => {
    console.error('ファイルの編集に失敗しました:', error);
  });
});
