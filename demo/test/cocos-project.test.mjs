import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = new URL('..', import.meta.url).pathname;

function readText(relativePath) {
  return readFileSync(join(root, relativePath), 'utf8');
}

test('demo is a Cocos Creator 3.x project, not a raw browser runtime', () => {
  assert.equal(existsSync(join(root, 'project.json')), true, 'missing Cocos project.json');
  assert.equal(existsSync(join(root, 'assets/scenes')), true, 'missing Cocos scenes folder');
  assert.equal(existsSync(join(root, 'assets/scripts')), true, 'missing Cocos scripts folder');
  assert.equal(existsSync(join(root, 'assets/prefabs')), true, 'missing Cocos prefabs folder');
  assert.equal(existsSync(join(root, 'assets/resources')), true, 'missing Cocos resources folder');
  assert.equal(existsSync(join(root, 'settings')), true, 'missing Cocos settings folder');

  assert.equal(existsSync(join(root, 'index.html')), false, 'raw browser HTML entry must not be the demo runtime');
  assert.equal(existsSync(join(root, 'src/game.mjs')), false, 'raw canvas runtime must not be the demo runtime');
});

test('demo gameplay is bridged through Cocos TypeScript components', () => {
  const rootComponent = readText('assets/scripts/components/GameRoot.ts');
  const hudComponent = readText('assets/scripts/ui/HudController.ts');

  assert.match(rootComponent, /from 'cc'/);
  assert.match(rootComponent, /@ccclass\('GameRoot'\)/);
  assert.match(rootComponent, /extends Component/);
  assert.match(rootComponent, /createGameState/);
  assert.match(rootComponent, /stepGame/);

  assert.match(hudComponent, /from 'cc'/);
  assert.match(hudComponent, /@ccclass\('HudController'\)/);
  assert.match(hudComponent, /Label/);
});
