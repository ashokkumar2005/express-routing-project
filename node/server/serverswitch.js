const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

  let path = './';
  res.setHeader('Content-Type', 'text/html');

  switch (req.url) {

    case '/':
    case '/index':
      path += 'index.html';
      res.statusCode = 200;
      break;

    case '/home':
      res.statusCode = 302;
      res.setHeader('Location', '/');
      res.end();
      return;

    case '/contact':
      path += 'contact.html';
      res.statusCode = 200;
      break;

    case '/about':
      path += 'about.html';
      res.statusCode = 200;
      break;

    default:
      path += 'error.html';
      res.statusCode = 404;
      break;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err.message);
      res.end();
    } else {
      res.write(data);
      res.end();
    }
  });

});

server.listen(3000, 'localhost', () => {
  console.log('Server listening on port 3000');
});