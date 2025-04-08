const canvas = document.getElementById('mainCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let circle = { x: 100, y: 100, radius: 50, color: 'yellow' };

function drawCircle() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = circle.color;
  ctx.beginPath();
  ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
  ctx.fill();
}

canvas.addEventListener('click', (e) => {
  const dist = Math.hypot(e.clientX - circle.x, e.clientY - circle.y);
  if (dist <= circle.radius) {
    window.open('https://google.com', '_blank');
  }
});

document.getElementById('changeCircle').addEventListener('click', () => {
  circle.x = Math.random() * canvas.width;
  circle.y = Math.random() * canvas.height;
  circle.color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  drawCircle();
});

document.getElementById('changeBackground').addEventListener('click', () => {
  canvas.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
});

document.getElementById('logCanvasState').addEventListener('click', () => {
  console.log({ circle, backgroundColor: canvas.style.backgroundColor });
});

drawCircle();
