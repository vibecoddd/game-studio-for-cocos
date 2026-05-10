---
name: cocos-game-foundations
description: Set Cocos Creator game architecture before implementation. Use when the user needs Web/native target choice, 2D versus 3D choice, simulation and component boundaries, input model, asset organization, or save/debug/performance strategy.
---

# Web Game Foundations

## Overview

Use this skill to establish the non-negotiable Cocos Creator architecture before implementation starts. Games degrade quickly when simulation, rendering, UI, asset loading, input handling, and platform targets are mixed together.

Default rule: playable implementation must be a real Cocos Creator 3.x + TypeScript project. Simulation state is owned outside Cocos rendering components, in-game UI is Cocos UI, and shipped assets are imported through stable Cocos Creator project contracts rather than ad hoc file-path references.

Do not use this plugin to implement gameplay with raw HTML canvas, DOM-only runtimes, Phaser, PixiJS, Three.js, React Three Fiber, Babylon.js, custom WebGL, or "Cocos-style" simulations.

## Use This Skill When

- the user has not settled the Cocos 2D, Cocos 3D, or Creator project workflow
- the user has not settled Web versus native targets
- the task is about boundaries, module shape, state ownership, or asset policy
- multiple specialist skills need one shared architectural frame

## Do Not Stay Here When

- the runtime track is clearly Cocos Creator 2D
- the runtime track is clearly Cocos Creator 3D
- the task is clearly about Cocos editor, prefab, or component workflow
- the task is purely about shipped 3D assets

Once the stack is clear, hand off to the runtime or asset specialist skill.

## Architecture Rules

1. Separate simulation from rendering.
   - Simulation owns entities, turns, timers, collisions, progression, and saveable state.
   - Cocos components adapt simulation state into nodes, transforms, animation playback, cameras, particles, and input plumbing.
2. Keep input mapping explicit.
   - Define actions such as `move`, `confirm`, `cancel`, `ability-1`, and `pause`.
   - Map physical inputs to actions in one place.
3. Treat asset loading as a first-class system.
   - Use stable manifest keys.
   - Group by domain: characters, environment, UI, audio, FX.
   - For Cocos runtime code, refer to prefab, scene, sprite, material, animation, and bundle keys rather than scattered raw paths.
4. Define save/debug/perf boundaries up front.
   - Save serializable simulation state, not Cocos `Node`, `Component`, or asset instances.
   - Keep debug overlays and perf probes easy to toggle.
5. Keep gameplay UI inside Cocos.
   - Cocos UI is the default for in-game HUD, buttons, pause menus, world-space prompts, and mobile-first game controls.
   - DOM is only acceptable for text-heavy web shells, account flows, accessibility-sensitive forms, or tooling around an actual Cocos Web build.
   - DOM must not replace gameplay rendering, the primary HUD, scene transitions, input plumbing, or in-game menus.
   - Native targets must not rely on DOM or browser-only APIs for gameplay, HUD, storage, input, or platform features.
   - In 3D, keep the persistent UI budget small so the scene stays readable and interactive.
6. Lock Cocos runtime conventions early.
   - Choose consistent units, origins, pivots, and naming conventions.
   - Decide how collision proxies, LODs, and baked lighting data are authored before runtime integration starts.
   - Decide which systems live as scene components, reusable prefabs, singleton services, or plain TypeScript modules before feature code grows.
7. Validate the Cocos project shape before implementation.
   - Require `project.json`, `assets/scenes`, `assets/scripts`, `assets/prefabs`, and resources or documented asset bundles for new playable projects.
   - Require Cocos component scripts under `assets/scripts` to import from `cc` and use `@ccclass` when they attach to nodes.
   - If the editor is unavailable, scaffold the Cocos-compatible structure and document the blocked editor steps instead of switching engines.

## Engine Selection

- Default to Cocos Creator 2D for sprites, tilemaps, top-down or side-view action, turn-based grids, UI-heavy games, and classic arcade flows across Web and native targets.
- Default to Cocos Creator 3D for spatial scenes, camera-driven exploration, model-driven worlds, lighting/material work, and physics-driven 3D interactions.
- Use the Cocos Creator project track when the work is mainly about script components, prefabs, scenes, asset bundles, editor workflow, or Web/native build setup.
- Use the native track when the work is mainly about Android, iOS, macOS, Windows desktop, SDK setup, signing, permissions, package identifiers, native plugins, or real-device QA.
- Treat non-Cocos engines as comparison-only while this plugin is active. Do not implement a non-Cocos runtime from this plugin.

See `../../references/engine-selection.md` for the default decision table.

## Implementation Checklist

Define these before writing core code:

- Cocos project root and required folders
- Player fantasy and primary verbs
- Core loop and loss or reset states
- Camera model
- Input action map
- Simulation modules
- Cocos component and prefab boundaries
- Asset manifest, resources, and bundle layout
- 3D import and optimization rules
- HUD and menu surfaces
- Save data boundary
- Debug and perf surfaces
- Target platform SDK, packaging, signing, and device-test boundaries when native targets are in scope

## Anti-Patterns

- Mixing gameplay rules directly into scene callbacks
- Treating Cocos nodes or components as the source of truth for saveable game state
- Replacing Cocos gameplay or primary HUD with DOM, raw canvas, Phaser, PixiJS, Three.js, React Three Fiber, Babylon.js, or a custom browser renderer
- Putting text-heavy browser shell UI into Cocos UI when an external Web shell around the Cocos build would be clearer
- Letting raw asset filenames become the public API instead of stable keys
- Shipping unoptimized 3D assets straight from the DCC tool into Cocos Web or native builds
- Mixing camera-control state and menu or modal state without an explicit input boundary
- Rebuilding architecture every time the game changes genre

## References

- Strict Cocos runtime policy: `../../references/strict-cocos-runtime-policy.md`
- Engine selection: `../../references/engine-selection.md`
- Cocos 2D structure: `../../references/cocos-2d-architecture.md`
- Cocos 3D structure: `../../references/cocos-3d-architecture.md`
- Cocos Creator stack: `../../references/cocos-creator-stack.md`
- Cocos Creator workflow: `../../references/cocos-creator-editor-workflow.md`
- Native targets: `../../references/cocos-native-build-targets.md`
- 3D asset shipping: `../../references/web-3d-asset-pipeline.md`
