const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const colorButton = document.getElementById('colorButton');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

colorButton.addEventListener('click', () => {
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  canvas.style.backgroundColor = randomColor;
});

const socket = new WebSocket('ws://localhost:3000');
socket.onmessage = (event) => {
  const time = event.data;
  console.log('Received time:', time);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.font = '30px Arial';
  ctx.fillStyle = 'black';
  ctx.fillText(time, 50, 50);
};
