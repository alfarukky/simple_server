const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Name: Aliyu Umar Faruk');
    res.end();
  }
});

server.listen(8900, null, null, (err) => {
  if (err) {
    console.log('something went wrong');
  } else {
    console.log('server listening at port 8900');
  }
});
