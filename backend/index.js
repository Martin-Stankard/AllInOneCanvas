const http = require('http');
const express = require('express');
const app = express();
app.use(express.json());

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

app.post('/message', (req, res) => {
  console.log(`Received message: ${req.body.message}`);
  res.status(200).send('Message logged');
});

server.on('request', app);

server.listen(3017, () => console.log('Backend running on port 3017'));
