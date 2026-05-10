import { createGameState, stepGame } from './simulation.mjs';

const canvas = document.querySelector('#game');
const context = canvas.getContext('2d');
const scoreNode = document.querySelector('[data-score]');
const healthNode = document.querySelector('[data-health]');
const timeNode = document.querySelector('[data-time]');
const statusNode = document.querySelector('[data-status]');
const restartButton = document.querySelector('[data-restart]');

const input = {
  up: false,
  down: false,
  left: false,
  right: false,
};

let state = createGameState();
let previous = performance.now();

const keyMap = new Map([
  ['ArrowUp', 'up'],
  ['KeyW', 'up'],
  ['ArrowDown', 'down'],
  ['KeyS', 'down'],
  ['ArrowLeft', 'left'],
  ['KeyA', 'left'],
  ['ArrowRight', 'right'],
  ['KeyD', 'right'],
]);

function resizeCanvas() {
  const rect = canvas.getBoundingClientRect();
  const scale = window.devicePixelRatio || 1;
  canvas.width = Math.round(rect.width * scale);
  canvas.height = Math.round(rect.height * scale);
  context.setTransform(scale, 0, 0, scale, 0, 0);
}

function resetGame() {
  state = createGameState({ seed: Math.floor(Math.random() * 9000) + 1 });
  previous = performance.now();
}

function drawBackground(ctx) {
  const { width, height } = state;
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, '#081d2c');
  gradient.addColorStop(0.5, '#102f35');
  gradient.addColorStop(1, '#1b2438');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  ctx.strokeStyle = 'rgba(137, 211, 184, 0.14)';
  ctx.lineWidth = 1;
  for (let x = 40; x < width; x += 40) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
  }
  for (let y = 40; y < height; y += 40) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }

  ctx.strokeStyle = 'rgba(255, 255, 255, 0.22)';
  ctx.lineWidth = 3;
  ctx.strokeRect(18, 18, width - 36, height - 36);

  ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
  ctx.beginPath();
  ctx.roundRect(310, 165, 340, 210, 28);
  ctx.fill();
}

function drawShard(ctx, shard) {
  if (shard.collected) return;
  const bob = Math.sin(state.elapsed * 4 + shard.phase) * 4;
  ctx.save();
  ctx.translate(shard.x, shard.y + bob);
  ctx.rotate(Math.PI / 4);
  ctx.shadowColor = '#fbd868';
  ctx.shadowBlur = 18;
  ctx.fillStyle = '#f8c941';
  ctx.fillRect(-9, -9, 18, 18);
  ctx.strokeStyle = '#fff5b7';
  ctx.lineWidth = 2;
  ctx.strokeRect(-9, -9, 18, 18);
  ctx.restore();
}

function drawDrone(ctx, drone) {
  const pulse = 1 + Math.sin(state.elapsed * 5 + drone.phase) * 0.08;
  ctx.save();
  ctx.translate(drone.x, drone.y);
  ctx.scale(pulse, pulse);
  ctx.shadowColor = '#ff5b67';
  ctx.shadowBlur = 14;
  ctx.fillStyle = '#e54857';
  ctx.beginPath();
  ctx.arc(0, 0, drone.radius, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#38151c';
  ctx.fillRect(-13, -4, 26, 8);
  ctx.fillStyle = '#ffd5d9';
  ctx.fillRect(-8, -2, 16, 4);
  ctx.restore();
}

function drawPlayer(ctx) {
  const flash = state.player.invulnerable > 0 && Math.floor(state.elapsed * 14) % 2 === 0;
  ctx.save();
  ctx.translate(state.player.x, state.player.y);
  ctx.rotate(Math.atan2(state.player.facingY, state.player.facingX));
  ctx.shadowColor = '#65f0dc';
  ctx.shadowBlur = 18;
  ctx.fillStyle = flash ? '#ffffff' : '#4bd5c5';
  ctx.beginPath();
  ctx.moveTo(24, 0);
  ctx.lineTo(-15, -17);
  ctx.lineTo(-8, 0);
  ctx.lineTo(-15, 17);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = '#d7fff9';
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.restore();
}

function drawMessage(ctx) {
  if (state.status === 'playing') return;
  const title = state.status === 'won' ? 'All shards secured' : 'Core offline';
  const subtitle = state.status === 'won'
    ? 'Press Restart to seed the arena again.'
    : 'Press Restart and dodge the sentinels.';
  ctx.save();
  ctx.fillStyle = 'rgba(8, 14, 22, 0.78)';
  ctx.fillRect(0, 0, state.width, state.height);
  ctx.fillStyle = '#f5fffb';
  ctx.textAlign = 'center';
  ctx.font = '700 40px Inter, system-ui, sans-serif';
  ctx.fillText(title, state.width / 2, state.height / 2 - 18);
  ctx.font = '500 18px Inter, system-ui, sans-serif';
  ctx.fillStyle = '#9fe8db';
  ctx.fillText(subtitle, state.width / 2, state.height / 2 + 26);
  ctx.restore();
}

function render() {
  context.clearRect(0, 0, state.width, state.height);
  drawBackground(context);
  for (const shard of state.shards) drawShard(context, shard);
  for (const drone of state.drones) drawDrone(context, drone);
  drawPlayer(context);
  drawMessage(context);
}

function updateHud() {
  scoreNode.textContent = `${state.score}/${state.shards.length}`;
  healthNode.textContent = '♥'.repeat(Math.max(0, state.player.health));
  timeNode.textContent = `${Math.floor(state.elapsed)}s`;
  statusNode.textContent = state.status === 'playing' ? 'Collect all shards' : state.status;
}

function frame(now) {
  const dt = Math.min(0.04, (now - previous) / 1000);
  previous = now;
  stepGame(state, input, dt);
  render();
  updateHud();
  requestAnimationFrame(frame);
}

window.addEventListener('resize', resizeCanvas);
window.addEventListener('keydown', (event) => {
  const action = keyMap.get(event.code);
  if (action) {
    input[action] = true;
    event.preventDefault();
  }
});
window.addEventListener('keyup', (event) => {
  const action = keyMap.get(event.code);
  if (action) {
    input[action] = false;
    event.preventDefault();
  }
});
restartButton.addEventListener('click', resetGame);

resizeCanvas();
requestAnimationFrame(frame);
