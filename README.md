![Cocos Crystal Dash demo screenshot](demo/screenshots/cocos-crystal-dash.png)

# Game Studio for Cocos

[中文说明](README.zh-CN.md)

Game Studio for Cocos is a Codex plugin derived from OpenAI's Game Studio plugin shape, with the runtime guidance changed to Cocos Creator 3.x and TypeScript.

The plugin is designed to coexist with the official `game-studio` plugin:

- Plugin name: `game-studio-for-cocos`
- Display name: `Game Studio for Cocos`
- Plugin root: `plugins/game-studio-for-cocos`
- Primary stack: Cocos Creator 3.x + TypeScript

## Origin And Thanks

This plugin is based on the official OpenAI Game Studio plugin from the OpenAI plugins repository. Thanks to OpenAI and the Game Studio contributors for the original plugin structure, skill organization, sprite pipeline utilities, and browser-game workflow foundation. This repository adapts that product shape for a strict Cocos Creator 3.x + TypeScript workflow.

## What It Provides

- Cocos Creator 2D game architecture guidance.
- Cocos Creator 3D game architecture guidance.
- Scene, prefab, component, asset bundle, physics, UI, and Web build workflows.
- Cocos-specific playtesting and browser QA checklists.
- Sprite pipeline scripts preserved from the original Game Studio implementation.

## Strict Cocos Runtime Policy

This plugin is Cocos-only for playable game, demo, and prototype implementation:

- Use Cocos Creator 3.x + TypeScript.
- Target a real Creator project structure with `project.json`, `assets/scenes`, `assets/scripts`, `assets/prefabs`, and resources or documented asset bundles.
- Keep gameplay rendering, input, HUD, menus, animation, physics, scenes, and prefabs in Cocos.
- Do not substitute raw HTML canvas, DOM-only gameplay, Phaser, PixiJS, Three.js, React Three Fiber, Babylon.js, custom WebGL, or a "Cocos-style" browser simulation.
- If Cocos Creator is unavailable, scaffold the Cocos-compatible project and document blocked editor/build verification instead of switching engines.

## Repository Metadata

Suggested GitHub repository description:

```text
Codex Game Studio plugin for Cocos Creator 3.x and TypeScript browser games.
```

Suggested topics:

```text
codex-plugin, cocos-creator, cocos2d, cocos3d, typescript, browser-games, game-development
```

## Install

Add this repository as a Codex plugin marketplace:

```bash
codex plugin marketplace add https://github.com/vibecoddd/game-studio-for-cocos --sparse .agents/plugins
```

Then open Codex plugin settings and install `Game Studio for Cocos` from the added marketplace.

For local development from a cloned checkout:

```bash
codex plugin marketplace add /path/to/game-studio-for-cocos --sparse .agents/plugins
```

## Use In Codex

After installing the plugin, start a new Codex session so the skills are loaded. You can invoke it naturally with prompts such as:

```text
Use Game Studio for Cocos to plan a Cocos Creator 3.x browser game.
```

```text
Build a Cocos Creator 2D action prototype with TypeScript, prefabs, and a HUD.
```

```text
Review this Cocos Creator 3D scene architecture and asset pipeline.
```

The main entry skill is `game-studio-for-cocos`. Specialist skills include `cocos-2d-game`, `cocos-3d-game`, `cocos-creator-game`, `cocos-game-ui-frontend`, `cocos-sprite-pipeline`, and `cocos-game-playtest`.

## Demo

### Run The Demo

Prerequisites:

- Use a Windows or macOS desktop environment with Cocos Creator 3.x installed through Cocos Dashboard.
- Clone this repository locally.
- Open Cocos Creator from the Dashboard, then choose the repository `demo/` folder as an existing project.

Open this folder in Cocos Creator:

```text
demo/
```

First-time scene setup:

1. Create or open `assets/scenes/Game.scene`.
2. Create a `Canvas` node for the game view.
3. Add a child node named `WorldGraphics` and attach a Cocos `Graphics` component.
4. Add a HUD node with four Cocos `Label` components for score, health, time, and status.
5. Add a Cocos `Button` for restart.
6. Attach `GameRoot` from `assets/scripts/components/GameRoot.ts` to the Canvas or scene root.
7. Attach `HudController` from `assets/scripts/ui/HudController.ts` to the HUD node.
8. Wire the Inspector properties described in:

```text
demo/assets/scenes/README.md
```

Run in the editor:

1. Click Preview in Cocos Creator.
2. Confirm the game accepts `WASD` or arrow-key movement.
3. Use the restart button to reseed the run.

Build for Web:

1. Open Project > Build.
2. Select the Web target.
3. Build and run the generated Web output from Cocos Creator.

Local non-editor checks:

```bash
cd demo
npm test
```

These tests verify the Cocos project structure and deterministic simulation logic. They do not replace Cocos Creator Preview or Web build validation.

Controls:

- Move: `WASD` or arrow keys
- Goal: collect every crystal shard while avoiding the drones
- Restart: use the on-screen `Restart` button

## Layout

```text
demo/
  project.json
  assets/
    scenes/
    scripts/
    prefabs/
    resources/
  settings/
  screenshots/
plugins/game-studio-for-cocos/
  .codex-plugin/plugin.json
  assets/
  references/
  scripts/
  skills/
```
