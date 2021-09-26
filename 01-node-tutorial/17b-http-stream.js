const fs = require('fs');

const http = require('http');

server = http.createServer();

server.on('request', (req, res) => {
  const fileStream = fs.createReadStream('./content/big.txt', 'utf8');
  fileStream.on('open', () => {
    fileStream.pipe(res);
  });
  fileStream.on('error', (err) => {
    res.end(err);
  });
});
server.listen(5000, () => console.log('Server Listening on port 5000...'));
