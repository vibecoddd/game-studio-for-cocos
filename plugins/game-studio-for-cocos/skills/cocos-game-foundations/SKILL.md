---
name: cocos-game-foundations
description: Set Cocos Creator browser-game architecture before implementation. Use when the user needs 2D versus 3D choice, simulation and component boundaries, input model, asset organization, or save/debug/performance strategy.
---

# Web Game Foundations

## Overview

Use this skill to establish the non-negotiable architecture before implementation starts. Browser games degrade quickly when simulation, rendering, UI, asset loading, and input handling are mixed together.

Default rule: simulation state is owned outside Cocos rendering components, UI location is chosen deliberately, and shipped assets are imported through stable Cocos Creator project contracts rather than ad hoc file-path references.

## Use This Skill When

- the user has not settled the engine or renderer choice
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
5. Choose Cocos UI or DOM overlays intentionally.
   - Cocos UI is the default for in-game HUD, buttons, pause menus, world-space prompts, and mobile-first game controls.
   - DOM overlays are acceptable for text-heavy web shells, account flows, settings, accessibility-sensitive forms, or tooling around the Web build.
   - In 3D, keep the persistent UI budget small so the scene stays readable and interactive.
6. Lock Cocos runtime conventions early.
   - Choose consistent units, origins, pivots, and naming conventions.
   - Decide how collision proxies, LODs, and baked lighting data are authored before runtime integration starts.
   - Decide which systems live as scene components, reusable prefabs, singleton services, or plain TypeScript modules before feature code grows.

## Engine Selection

- Default to Cocos Creator 2D for sprites, tilemaps, top-down or side-view action, turn-based grids, UI-heavy games, and classic browser arcade flows.
- Default to Cocos Creator 3D for spatial scenes, camera-driven exploration, model-driven worlds, lighting/material work, and physics-driven 3D interactions.
- Use the Cocos Creator project track when the work is mainly about script components, prefabs, scenes, asset bundles, editor workflow, or Web build setup.
- Use a non-Cocos engine only when the user explicitly asks to compare or leave the Cocos Creator 3.x stack.

See `../../references/engine-selection.md` for the default decision table.

## Implementation Checklist

Define these before writing core code:

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

## Anti-Patterns

- Mixing gameplay rules directly into scene callbacks
- Treating Cocos nodes or components as the source of truth for saveable game state
- Putting all browser shell UI into Cocos UI when DOM would be clearer, or all game HUD into DOM when Cocos UI would integrate better
- Letting raw asset filenames become the public API instead of stable keys
- Shipping unoptimized 3D assets straight from the DCC tool into Cocos Web builds
- Mixing camera-control state and menu or modal state without an explicit input boundary
- Rebuilding architecture every time the game changes genre

## References

- Engine selection: `../../references/engine-selection.md`
- Cocos 2D structure: `../../references/cocos-2d-architecture.md`
- Cocos 3D structure: `../../references/cocos-3d-architecture.md`
- Cocos Creator stack: `../../references/cocos-creator-stack.md`
- Cocos Creator workflow: `../../references/cocos-creator-editor-workflow.md`
- 3D asset shipping: `../../references/web-3d-asset-pipeline.md`
