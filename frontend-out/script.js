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

function logButtonPress(button) {
  fetch('http://localhost:3017/message', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: `Button pressed: ${button}` })
  });
}

canvas.addEventListener('click', (e) => {
  const dist = Math.hypot(e.clientX - circle.x, e.clientY - circle.y);
  if (dist <= circle.radius) {
    window.open('https://google.com', '_blank');
  }
});

document.getElementById('changeCircle').addEventListener('click', () => {
  logButtonPress('changeCircle');
  fetch('/logButtonPress', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ button: 'changeCircle' })
  });
  circle.x = Math.random() * canvas.width;
  circle.y = Math.random() * canvas.height;
  circle.color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  drawCircle();
});

document.getElementById('changeBackground').addEventListener('click', () => {
  logButtonPress('changeBackground');
  fetch('/logButtonPress', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ button: 'changeBackground' })
  });
  canvas.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
});

document.getElementById('logCanvasState').addEventListener('click', () => {
  logButtonPress('logCanvasState');
  fetch('/logButtonPress', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ button: 'logCanvasState' })
  });
  console.log({ circle, backgroundColor: canvas.style.backgroundColor });
  fetch('/logCanvasState', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ circle, backgroundColor: canvas.style.backgroundColor })
  })
    .then(response => response.json())
    .then(data => console.log('Server response:', data))
    .catch(error => console.error('Error:', error));
});

drawCircle();
