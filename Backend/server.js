const http = require('node:http');

const hostname = '127.0.0.1';
const port = 2202;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n XimenT dep trai hon Nhut Tuong');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
