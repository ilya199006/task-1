const http = require('http');
const figlet = require('figlet');
const path = require('path');
const fs = require('fs');

//settings
const serverAdd = 'localhost';
const portNum = 3000;
//

const fileName = path.parse(__filename).name;
const server = http.createServer();

server.on('request', (req, res) => { 

  if (req.url === '/')
    req.url = 'index.html';

  let filePath = path.join(__dirname, 'dist', req.url);
  let extName = path.extname(filePath);
  let contentType = 'text/html';

  switch (extName) {
    case '.css':
      contentType = 'text/css';
      break;
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.img':
      contentType = 'image/png';
      break;
    default:
      contentType = 'text/html';
      break;
  }

  fs.readFile(filePath, (err, data) => {
    if(err) {
      console.log('\n Файл не создан! Запустите "npm run build" в корне проекта \n');
      throw err;
    }
    res.writeHead(200, {
      'Content-Type': contentType
    });
    res.end(data);
  });
});

server.listen(portNum, serverAdd,() => {
  figlet.text(fileName, (err, data) => {
    if(err) 
      console.error(err); 
    else {
      console.log(data);
      console.info(' starts on ' + serverAdd + ':' + portNum);
    }
  });
});
