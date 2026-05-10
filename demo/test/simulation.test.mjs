import test from 'node:test';
import assert from 'node:assert/strict';

import { createGameState, stepGame } from '../src/simulation.mjs';

test('collecting the final shard wins the run', () => {
  const state = createGameState({ shardCount: 1, droneCount: 0, seed: 3 });
  state.player.x = 120;
  state.player.y = 160;
  state.shards[0].x = 122;
  state.shards[0].y = 160;

  stepGame(state, {}, 1 / 60);

  assert.equal(state.score, 1);
  assert.equal(state.shards[0].collected, true);
  assert.equal(state.status, 'won');
});

test('player movement is clamped inside the arena', () => {
  const state = createGameState({ shardCount: 0, droneCount: 0, seed: 7 });
  state.player.x = 12;
  state.player.y = 12;

  stepGame(state, { left: true, up: true }, 1);

  assert.equal(state.player.x, state.player.radius);
  assert.equal(state.player.y, state.player.radius);
});

test('drone collision damages the player once during invulnerability', () => {
  const state = createGameState({ shardCount: 1, droneCount: 1, seed: 11 });
  state.player.x = 300;
  state.player.y = 260;
  state.shards[0].x = 820;
  state.shards[0].y = 420;
  state.drones[0].x = 300;
  state.drones[0].y = 260;
  state.drones[0].vx = 0;
  state.drones[0].vy = 0;

  stepGame(state, {}, 1 / 60);
  stepGame(state, {}, 1 / 60);

  assert.equal(state.player.health, 2);
  assert.equal(state.status, 'playing');
  assert.ok(state.player.invulnerable > 0);
});
