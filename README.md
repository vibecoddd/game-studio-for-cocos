# Game Studio for Cocos

[中文说明](README.zh-CN.md)

Game Studio for Cocos is a Codex plugin derived from OpenAI's Game Studio plugin shape, with the runtime guidance changed to Cocos Creator 3.x and TypeScript.

The plugin is designed to coexist with the official `game-studio` plugin:

- Plugin name: `game-studio-for-cocos`
- Display name: `Game Studio for Cocos`
- Plugin root: `plugins/game-studio-for-cocos`
- Primary stack: Cocos Creator 3.x + TypeScript

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

This repository includes `demo/`, a Cocos Creator 3.x + TypeScript implementation of Cocos Crystal Dash. The old raw browser canvas runtime was removed from the demo entry path.

The repository environment used for this commit does not include Cocos Creator, so the screenshot below is retained as the current visual reference until a Creator Preview or Web build screenshot is regenerated from the Cocos project.

![Cocos Crystal Dash visual reference](demo/screenshots/cocos-crystal-dash.png)

Open it in Cocos Creator:

```text
demo/
```

Then create or open the `Game` scene and wire the inspector properties described in:

```text
demo/assets/scenes/README.md
```

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

## Validation Notes

The plugin was checked for side-by-side installation with the official Game Studio plugin:

- no duplicate plugin names
- no duplicate display names
- no duplicate skill frontmatter names
- no duplicate agent display names
- manifest asset paths resolve
- Markdown reference links resolve
- demo Cocos project structure and simulation tests pass with `node --test demo/test/*.test.mjs`
- Cocos Creator Preview/Web build must be verified in an environment with Cocos Creator 3.x installed
