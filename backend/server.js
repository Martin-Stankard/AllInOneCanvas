const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/time') {
    res.writeHead(200, { 'Content-Type': 'text/event-stream' });
    setInterval(() => {
      const time = new Date().toISOString();
      res.write(`data: ${time}\n\n`);
      console.log(`Sent time: ${time}`);
    }, 1000);
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(3017, () => console.log('Backend running on port 3017'));
