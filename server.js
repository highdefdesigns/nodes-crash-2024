import http from 'http';
const PORT = 5500;

const server = http.createServer((req, res) => {
  //   res.setHeader('contentType', 'text/html');
  //   res.statusCode = '200';
  console.log(res.statusCode);
  res.writeHead(200, { 'Content-Type': 'application/json' });

  res.end(JSON.stringify({ message: `Server Error: ${res.statusCode}` }));
});
// console.log(server);

server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
