---
name: cocos-3d-game
description: Implement 3D browser games with Cocos Creator 3.x and TypeScript. Use when the user wants 3D scenes, cameras, lighting, model import, materials, animation, physics, and browser-safe Cocos Web builds.
---

# Cocos 3D Game

## Overview

Use this skill for the default 3D path in the plugin. This is not generic browser renderer advice. It is an opinionated Cocos Creator 3.x stack for browser 3D work:

- Cocos Creator 3.x
- TypeScript
- Cocos scene, node, component, prefab, material, camera, lighting, animation, and physics systems
- Imported 3D source assets normalized into Cocos project assets and prefabs
- Cocos UI for in-game HUD, menus, and prompts, with DOM only for an external Web shell around a Cocos build

Hard gate: do not implement playable 3D output as Three.js, React Three Fiber, Babylon.js, raw WebGL, DOM-only gameplay, raw HTML canvas, Phaser, PixiJS, or a "Cocos-style" simulation. If Cocos Creator cannot run locally, scaffold the Cocos project structure and document editor/build verification as blocked.

Use this skill when the project wants a Cocos Creator 3D runtime with editor-authored scenes and TypeScript component control. If the task is mostly about project structure, prefabs, or build setup, route to `../cocos-creator-game/SKILL.md` as well.

## Use This Skill When

- the project needs 3D cameras, lights, materials, model import, skeletal animation, or physics
- the user asks for Cocos Creator 3D, Cocos3D, or a 3D browser game in the Cocos stack
- the runtime needs componentized control over scene, camera, animation, assets, and physics

## Do Not Use This Skill When

- the task is a 2D sprite or tilemap game
- the main problem is shipped-asset optimization rather than runtime code
- the user wants implementation in a non-Cocos engine

## Core Rules

1. Keep simulation state outside Cocos nodes and components.
   - Game rules, AI, quest state, timers, and progression should not live inside meshes, materials, or scene-only state.
2. Treat the render graph as an adapter.
   - Scene graph, cameras, materials, animation controllers, particles, and post-processing are view concerns layered over simulation state.
3. Keep camera behavior explicit.
   - Orbit, follow, chase, rail, and first-person styles each need their own control boundary.
4. Keep UI in Cocos UI unless a surrounding Web shell is the better surface.
   - Menus, HUD, inventories, pause screens, and mobile controls usually belong in Cocos UI.
   - Account, docs, long-form settings, or editor-like web tooling can live in DOM only around a Cocos Web build.
   - DOM must not replace Cocos gameplay rendering, scene transitions, camera input, or the primary HUD.
5. Use Cocos prefabs and scene assets as the runtime contract.
   - Do not build gameplay code around raw DCC export filenames.
6. Use Cocos physics components and collision layers instead of ad hoc collision code when the game has meaningful 3D physics or collision response.
7. Keep the first playable view low-chrome.
   - Default to one compact objective or status cluster plus transient prompts.
   - Long notes, lore, and controls references should be collapsed until asked for.
   - Do not frame the scene with multiple equal-weight panels during normal play.

## Initial Scaffold UX

For exploration, traversal, and character-control prototypes, start with a sparse shell:

- one edge-aligned objective chip
- one transient controls hint
- one optional compact status strip

Only add larger UI surfaces when the game loop truly requires them. Journal, quest log, codex, map, and settings surfaces should open on demand, not occupy the viewport by default.

## Recommended Structure

Use the module shape in `../../references/cocos-3d-architecture.md`, then keep these boundaries clean:

- `simulation/`: rules, progression, state, and AI
- `scripts/components/`: thin Cocos components and scene adapters
- `scripts/camera/`: camera rigs, follow logic, aim logic, and input gating
- `scripts/assets/`: manifest keys, resources, bundles, prefab lookup, and loading helpers
- `scripts/materials/`: material setup and shader boundaries
- `scripts/physics/`: Cocos physics components, collision groups, queries, and simulation bridge
- `scripts/ui/`: Cocos UI controllers and optional external Web shell bridge
- `diagnostics/`: debug toggles, perf probes, and capture hooks

## Good Fit Scenarios

- Exploration demos
- Lightweight 3D combat prototypes
- Vehicle or traversal prototypes
- Scene-driven product or world showcases with gameplay
- Material, lighting, or post-process-led experiences
- 3D games where camera movement and depth readability are central

## Loaders, Assets, and Post-Processing

- Start with Cocos-imported models, materials, textures, animations, and prefabs.
- Add geometry or texture compression as part of the asset pipeline, not as a random runtime patch.
- Prefer built-in Cocos rendering, lighting, material, and post-processing features first. Add custom render pipeline work only when the project actually needs it.
- Keep post-processing optional and measurable. Bloom and color effects should not hide gameplay readability.

## Shader and Material Guidance

- Start with standard Cocos materials and correct lighting before reaching for custom shaders.
- Use custom shaders only when the visual target genuinely needs them.
- Keep shader parameters driven by game state, not by incidental scene mutations.
- If a material stack gets complex, isolate it behind material factories instead of scattering shader setup across scene code.

## Browser Safety

- Handle resize explicitly.
- Expect Web build and GPU differences across browsers.
- Keep a fallback or degraded mode in mind for fragile rendering paths.
- Watch texture size, geometry count, draw-call growth, and post-processing cost.
- Use browser performance tooling and engine stats when the scene behaves incorrectly or frame cost is unclear.

## Scope Warning

Do not claim that Cocos 3D work is just a renderer swap. The editor-authored scene, prefab, material, physics, and asset import workflow shapes the implementation.

## References

- Strict Cocos runtime policy: `../../references/strict-cocos-runtime-policy.md`
- Shared architecture: `../cocos-game-foundations/SKILL.md`
- Frontend direction: `../cocos-game-ui-frontend/SKILL.md`
- Cocos HUD layout patterns: `../../references/cocos-hud-layout-patterns.md`
- Cocos Creator ecosystem: `../../references/cocos-creator-stack.md`
- Cocos 3D structure: `../../references/cocos-3d-architecture.md`
- Cocos starter: `../../references/cocos-creator-starter.md`
- Cocos asset loading starter: `../../references/cocos-asset-loading-starter.md`
- Cocos physics starter: `../../references/cocos-physics-starter.md`
- 3D asset pipeline: `../../references/web-3d-asset-pipeline.md`
- Web build debugging and perf: `../../references/cocos-web-build-debugging-and-performance.md`
