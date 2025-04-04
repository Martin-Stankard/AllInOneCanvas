const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 3000 });

wss.on('connection', (ws) => {
  console.log('Client connected');
  const interval = setInterval(() => {
    const time = new Date().toLocaleTimeString();
    ws.send(time);
    console.log('Sent time:', time);
  }, 1000);

  ws.on('close', () => {
    console.log('Client disconnected');
    clearInterval(interval);
  });
});
