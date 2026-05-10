export const ARENA_WIDTH = 960;
export const ARENA_HEIGHT = 540;

const PLAYER_SPEED = 250;
const DRONE_SPEED = 92;
const DAMAGE_COOLDOWN = 1.1;

export type RunStatus = 'playing' | 'won' | 'lost';

export interface GameInput {
  up?: boolean;
  down?: boolean;
  left?: boolean;
  right?: boolean;
}

export interface ActorState {
  id?: string;
  x: number;
  y: number;
  radius: number;
}

export interface PlayerState extends ActorState {
  health: number;
  invulnerable: number;
  facingX: number;
  facingY: number;
}

export interface ShardState extends ActorState {
  id: string;
  collected: boolean;
  phase: number;
}

export interface DroneState extends ActorState {
  id: string;
  vx: number;
  vy: number;
  phase: number;
}

export type GameEvent =
  | { type: 'collect'; shardId: string }
  | { type: 'damage'; droneId: string }
  | { type: 'win' }
  | { type: 'lose' };

export interface GameState {
  width: number;
  height: number;
  elapsed: number;
  score: number;
  status: RunStatus;
  player: PlayerState;
  shards: ShardState[];
  drones: DroneState[];
  events: GameEvent[];
}

export interface CreateGameStateOptions {
  width?: number;
  height?: number;
  shardCount?: number;
  droneCount?: number;
  seed?: number;
}

function seededRandom(seed: number) {
  let value = seed >>> 0;
  return () => {
    value = (value * 1664525 + 1013904223) >>> 0;
    return value / 0x100000000;
  };
}

function distanceSquared(a: ActorState, b: ActorState) {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  return dx * dx + dy * dy;
}

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

export function createGameState({
  width = ARENA_WIDTH,
  height = ARENA_HEIGHT,
  shardCount = 8,
  droneCount = 4,
  seed = 42,
}: CreateGameStateOptions = {}): GameState {
  const random = seededRandom(seed);
  const shards = Array.from({ length: shardCount }, (_, index) => ({
    id: `shard-${index + 1}`,
    x: 90 + random() * (width - 180),
    y: 90 + random() * (height - 180),
    radius: 13,
    collected: false,
    phase: random() * Math.PI * 2,
  }));
  const drones = Array.from({ length: droneCount }, (_, index) => {
    const angle = random() * Math.PI * 2;
    return {
      id: `drone-${index + 1}`,
      x: 160 + random() * (width - 320),
      y: 120 + random() * (height - 240),
      vx: Math.cos(angle) * DRONE_SPEED,
      vy: Math.sin(angle) * DRONE_SPEED,
      radius: 19,
      phase: random() * Math.PI * 2,
    };
  });

  return {
    width,
    height,
    elapsed: 0,
    score: 0,
    status: 'playing',
    player: {
      x: width / 2,
      y: height / 2,
      radius: 17,
      health: 3,
      invulnerable: 0,
      facingX: 1,
      facingY: 0,
    },
    shards,
    drones,
    events: [],
  };
}

export function stepGame(state: GameState, input: GameInput = {}, dt = 1 / 60) {
  state.events = [];
  if (state.status !== 'playing') {
    return state;
  }

  state.elapsed += dt;
  state.player.invulnerable = Math.max(0, state.player.invulnerable - dt);

  const moveX = Number(Boolean(input.right)) - Number(Boolean(input.left));
  const moveY = Number(Boolean(input.down)) - Number(Boolean(input.up));
  const magnitude = Math.hypot(moveX, moveY) || 1;
  const vx = (moveX / magnitude) * PLAYER_SPEED;
  const vy = (moveY / magnitude) * PLAYER_SPEED;

  if (moveX !== 0 || moveY !== 0) {
    state.player.facingX = moveX / magnitude;
    state.player.facingY = moveY / magnitude;
  }

  state.player.x = clamp(
    state.player.x + vx * dt,
    state.player.radius,
    state.width - state.player.radius,
  );
  state.player.y = clamp(
    state.player.y + vy * dt,
    state.player.radius,
    state.height - state.player.radius,
  );

  for (const drone of state.drones) {
    drone.x += drone.vx * dt;
    drone.y += drone.vy * dt;

    if (drone.x < drone.radius || drone.x > state.width - drone.radius) {
      drone.vx *= -1;
      drone.x = clamp(drone.x, drone.radius, state.width - drone.radius);
    }
    if (drone.y < drone.radius || drone.y > state.height - drone.radius) {
      drone.vy *= -1;
      drone.y = clamp(drone.y, drone.radius, state.height - drone.radius);
    }
  }

  for (const shard of state.shards) {
    if (shard.collected) continue;
    const collectRadius = state.player.radius + shard.radius;
    if (distanceSquared(state.player, shard) <= collectRadius * collectRadius) {
      shard.collected = true;
      state.score += 1;
      state.events.push({ type: 'collect', shardId: shard.id });
    }
  }

  const remaining = state.shards.some((shard) => !shard.collected);
  if (!remaining) {
    state.status = 'won';
    state.events.push({ type: 'win' });
    return state;
  }

  for (const drone of state.drones) {
    const hitRadius = state.player.radius + drone.radius;
    if (
      state.player.invulnerable <= 0 &&
      distanceSquared(state.player, drone) <= hitRadius * hitRadius
    ) {
      state.player.health -= 1;
      state.player.invulnerable = DAMAGE_COOLDOWN;
      state.events.push({ type: 'damage', droneId: drone.id });
      if (state.player.health <= 0) {
        state.status = 'lost';
        state.events.push({ type: 'lose' });
      }
      break;
    }
  }

  return state;
}
