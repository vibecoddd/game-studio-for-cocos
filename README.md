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

## Layout

```text
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
