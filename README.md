![Cocos Crystal Dash demo screenshot](demo/screenshots/cocos-crystal-dash.png)

# Game Studio for Cocos

[中文说明](README.zh-CN.md)

Game Studio for Cocos is a Codex plugin derived from OpenAI's Game Studio plugin shape, with the runtime guidance changed to Cocos Creator 3.x and TypeScript for Web and native games.

The plugin is designed to coexist with the official `game-studio` plugin:

- Plugin name: `game-studio-for-cocos`
- Display name: `Game Studio for Cocos`
- Plugin root: `plugins/game-studio-for-cocos`
- Primary stack: Cocos Creator 3.x + TypeScript
- Targets: Web, Android, iOS, macOS, and Windows desktop through Cocos Creator build workflows

## Origin And Thanks

This plugin is based on the official OpenAI Game Studio plugin from the OpenAI plugins repository. Thanks to OpenAI and the Game Studio contributors for the original plugin structure, skill organization, sprite pipeline utilities, and game workflow foundation. This repository adapts that product shape for a strict Cocos Creator 3.x + TypeScript workflow.

## What It Provides

- Cocos Creator 2D game architecture guidance.
- Cocos Creator 3D game architecture guidance.
- Scene, prefab, component, asset bundle, physics, UI, Web build, and native build workflows.
- Android, iOS, macOS, and Windows desktop target guidance.
- Cocos-specific playtesting, Web QA, and native device QA checklists.
- Sprite pipeline scripts preserved from the original Game Studio implementation.

## Strict Cocos Runtime Policy

This plugin is Cocos-only for playable game, demo, and prototype implementation:

- Use Cocos Creator 3.x + TypeScript.
- Target a real Creator project structure with `project.json`, `assets/scenes`, `assets/scripts`, `assets/prefabs`, and resources or documented asset bundles.
- Keep gameplay rendering, input, HUD, menus, animation, physics, scenes, and prefabs in Cocos.
- Do not substitute raw HTML canvas, DOM-only gameplay, Phaser, PixiJS, Three.js, React Three Fiber, Babylon.js, custom WebGL, Cocos2d-x, Unity, Unreal, custom native engines, or a "Cocos-style" simulation.
- If Cocos Creator or required platform SDKs are unavailable, scaffold the Cocos-compatible project and document blocked editor/build verification instead of switching engines.

## Repository Metadata

Suggested GitHub repository description:

```text
Codex Game Studio plugin for Cocos Creator 3.x and TypeScript Web and native games.
```

Suggested topics:

```text
codex-plugin, cocos-creator, cocos2d, cocos3d, typescript, browser-games, native-games, android, ios, desktop-games, game-development
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
Use Game Studio for Cocos to plan a Cocos Creator 3.x Web or native game.
```

```text
Build a Cocos Creator 2D action prototype with TypeScript, prefabs, and a HUD.
```

```text
Review this Cocos Creator 3D scene architecture and asset pipeline.
```

```text
Plan native Android and iOS targets for this Cocos Creator game, including SDK setup, signing, permissions, and device QA.
```

### Target Platform And Build Output Guide

Before implementation, the plugin asks users to choose the target platform and expected build output when they are not already clear:

```text
Platform checkpoint: choose target platform(s) and build output: Web build, Android APK/AAB, iOS app/IPA, macOS app, Windows app, or Web + native.
```

Use explicit platform words in prompts to avoid ambiguity:

| Target | Say This In The Prompt | Build Output | Required Validation |
| --- | --- | --- | --- |
| Web | `Web`, `browser`, `site embed`, `PWA`, `Web build` | Cocos Creator Web build | Cocos Preview or generated Web build in a browser |
| Android | `Android`, `APK`, `AAB`, `Google Play`, `native mobile` | Android APK or AAB | Android emulator plus real-device QA before release |
| iOS | `iOS`, `iPhone`, `iPad`, `IPA`, `App Store` | iOS app project or IPA | iOS simulator plus real-device QA before release |
| macOS | `macOS`, `Mac desktop`, `desktop native` | macOS app bundle | Local macOS run, signing/package checks when needed |
| Windows | `Windows`, `PC desktop`, `desktop native` | Windows app/executable package | Windows packaged run, input, storage, high-DPI checks |
| Web + native | `Web + native`, `cross-platform`, named target list | One shared Cocos project plus per-target outputs | Web build checks plus each native target's SDK/device checks |

If a prompt only says `mobile`, `desktop`, or `cross-platform`, the plugin should stop at the checkpoint and ask for the exact target platforms before choosing build settings, input assumptions, storage, permissions, or QA scope.

## Skills

- `game-studio-for-cocos`: Main routing skill for early Cocos game planning, Web versus native target selection, 2D versus 3D direction, and specialist skill handoff.
- `cocos-game-foundations`: Establishes core architecture, simulation boundaries, input model, asset layout, save/debug strategy, and platform target assumptions.
- `cocos-creator-game`: Guides real Cocos Creator 3.x project structure, scenes, prefabs, components, resources, bundles, editor workflow, and build layout.
- `cocos-2d-game`: Implements 2D Cocos games with sprites, tilemaps, UITransform layouts, animation clips, cameras, 2D physics, and Cocos UI.
- `cocos-3d-game`: Implements 3D Cocos games with cameras, lights, models, materials, animation, physics, Cocos UI, and Web/native runtime constraints.
- `cocos-native-game`: Plans and builds Android, iOS, macOS, and Windows desktop targets through Cocos Creator native build workflows.
- `cocos-game-ui-frontend`: Designs Cocos UI surfaces such as HUDs, menus, prompts, mobile controls, native safe areas, and optional external Web shells.
- `cocos-3d-asset-pipeline`: Prepares and optimizes 3D assets for Cocos Creator imports, prefabs, collision proxies, texture budgets, Web validation, and native validation.
- `cocos-sprite-pipeline`: Generates, normalizes, and previews 2D sprite strips with consistent anchors, scale, and animation review assets.
- `cocos-game-playtest`: Runs Cocos runtime QA for Preview, Web builds, native builds, screenshots, HUD readability, input, performance, and platform checks.

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

Build for native:

1. Open Project > Build.
2. Select the Android, iOS, macOS, or Windows target.
3. Configure the required SDK, signing, package or bundle id, orientation, and permissions in Cocos Creator.
4. Build from Cocos Creator, then run on an emulator, simulator, or real device supported by that target.

Local non-editor checks:

```bash
cd demo
npm test
```

These tests verify the Cocos project structure and deterministic simulation logic. They do not replace Cocos Creator Preview, Web build, or native build validation.

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

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE).
