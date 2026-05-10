---
name: game-studio-for-cocos
description: Route early Cocos Creator game work. Use when the user needs Web versus native target selection, 2D versus 3D Cocos workflow selection, project structure, assets, UI, or playtesting before moving to a specialist skill.
---

# Game Studio for Cocos

## Overview

Use this skill as the umbrella entrypoint for Cocos Creator game work across Web and native targets. Default to Cocos Creator 3.x with TypeScript. Choose the 2D or 3D Cocos track based on the game fantasy, camera, asset needs, and target platforms.

This plugin keeps the original product shape but swaps the runtime guidance to Cocos Creator:

- 2D uses Cocos Creator's scene, node, component, Canvas, UITransform, Sprite, animation, tilemap, and 2D physics workflows.
- 3D uses Cocos Creator's 3D scene, camera, lighting, MeshRenderer, model import, animation, material, and physics workflows.
- Native uses Cocos Creator's Android, iOS, macOS, and Windows build workflows with platform SDK requirements made explicit.
- Shared architecture, UI, asset, and playtest practices apply to both.

Hard gate: every playable game, demo, or prototype implementation produced through this plugin must target a real Cocos Creator 3.x project/runtime. Do not substitute raw HTML canvas, DOM-only games, Phaser, PixiJS, Three.js, React Three Fiber, Babylon.js, custom WebGL, Cocos2d-x, Unity, Unreal, custom native engines, or "Cocos-style" simulations.

## Platform Checkpoint

Before planning implementation details or writing runtime code, confirm the target platform and build output:

```text
Platform checkpoint: choose target platform(s) and build output: Web build, Android APK/AAB, iOS app/IPA, macOS app, Windows app, or Web + native.
```

- If the user already named the target platform and build output, echo them back and continue.
- If the target is ambiguous, ask this checkpoint as a single blocking question before choosing specialist skills.
- Treat `browser`, `site embed`, `PWA`, or `Web build` as Web.
- Treat `Android`, `iOS`, `APK`, `AAB`, `IPA`, `app store`, `macOS`, `Windows`, `desktop package`, signing, permissions, native plugins, or real-device QA as native.
- Treat `mobile` or `desktop` as ambiguous unless the user says Web or names a native platform.

## Use This Skill When

- the user is still choosing a stack
- the request spans multiple domains such as runtime, UI, asset pipeline, and QA
- the user says "help me build a game" without naming the implementation path
- the user asks whether the game should ship to Web, Android, iOS, macOS, or Windows desktop

## Do Not Stay Here When

- the runtime is clearly Cocos Creator 2D
- the runtime is clearly Cocos Creator 3D
- the task is clearly a shipped-asset problem
- the task is clearly frontend-only or QA-only

Once the intent is clear, route to the most specific specialist skill and continue from there.

## Routing Rules

1. Run the Platform Checkpoint before designing or coding.
2. Classify the request:
   - `2D default`: Cocos Creator 2D, sprites, tilemaps, top-down, side-view, grid tactics, action platformers, UI-heavy games.
   - `3D`: Cocos Creator 3D, cameras, lights, model import, character controllers, physics, 3D traversal, product-like worlds.
   - `Creator project`: Cocos scene/component organization, TypeScript scripts, prefabs, resources or bundles, editor workflow, build targets.
   - `Native target`: Android, iOS, macOS, Windows desktop, SDK setup, signing, permissions, package identifiers, native QA.
   - `3D asset pipeline`: model import, texture packaging, compression, LOD, collision proxies, runtime asset size.
   - `Shared`: core loop design, UI direction, save/debug/perf boundaries, Web and native QA.
3. Route to the specialist skills immediately after classification:
   - Shared architecture and engine choice: `../cocos-game-foundations/SKILL.md`
   - Deep 2D implementation: `../cocos-2d-game/SKILL.md`
   - Deep 3D implementation: `../cocos-3d-game/SKILL.md`
   - Cocos Creator project and component workflow: `../cocos-creator-game/SKILL.md`
   - Native platform targets: `../cocos-native-game/SKILL.md`
   - 3D asset shipping and optimization: `../cocos-3d-asset-pipeline/SKILL.md`
   - HUD and menu direction: `../cocos-game-ui-frontend/SKILL.md`
   - 2D sprite generation and normalization: `../cocos-sprite-pipeline/SKILL.md`
   - Web/native QA and visual review: `../cocos-game-playtest/SKILL.md`
4. Keep one coherent plan across the routed skills. Do not let engine, UI, asset, and QA decisions drift apart.

## Default Workflow

1. Lock the game fantasy and player verbs.
2. Define the core loop, failure states, progression, and target play session length.
3. Confirm the target platform and build output through the Platform Checkpoint.
4. Choose the implementation track:
   - Default to Cocos Creator 2D for sprite, tilemap, UI-heavy, or classic arcade/Web/native game flows.
   - Choose Cocos Creator 3D for spatial navigation, 3D cameras, model-driven worlds, physics-driven objects, or lighting/material-heavy scenes.
   - Use the Cocos Creator project track when the question is mostly about components, prefabs, asset bundles, editor workflow, or build layout.
   - Use the native target track when the question is about Android, iOS, macOS, Windows desktop, SDK setup, signing, permissions, store packaging, or real-device QA.
5. Enforce the Cocos project shape before writing runtime code: `project.json`, `assets/scenes`, `assets/scripts`, `assets/prefabs`, and resources or bundles.
6. Define the UI surface early. In-game HUDs, menus, prompts, and mobile controls must use Cocos UI. DOM is only allowed for an external Web shell around a Cocos Web build.
   - For 3D starter scaffolds, default to low-chrome Cocos UI that preserves the playfield and keeps secondary panels collapsed.
7. Decide the asset workflow:
   - 2D characters and effects: use `sprite-pipeline`.
   - 3D models, textures, and shipping format: use `web-3d-asset-pipeline`.
8. Close with a playtest loop against the relevant Cocos target: Preview/Web build for Web, emulator/simulator or real device for native.

## Output Expectations

- For planning requests, return a game-specific plan with stack choice, gameplay loop, UI surface, asset workflow, and test approach.
- For implementation requests, produce or target a real Cocos Creator project structure. If Cocos Creator cannot run locally, scaffold the compatible structure and document blocked editor/build verification instead of replacing the runtime.
- For mixed requests, preserve the plugin default: Cocos Creator 2D first unless the user asks for 3D.
- When the user asks for non-Cocos implementation through this plugin, do not implement it here. Explain that this plugin is Cocos-only and keep any comparison conceptual.

## References

- Strict Cocos runtime policy: `../../references/strict-cocos-runtime-policy.md`
- Engine selection: `../../references/engine-selection.md`
- Cocos Creator stack: `../../references/cocos-creator-stack.md`
- Cocos Creator editor workflow: `../../references/cocos-creator-editor-workflow.md`
- Native build targets: `../../references/cocos-native-build-targets.md`
- 3D asset pipeline: `../../references/web-3d-asset-pipeline.md`
- Cocos Creator starter: `../../references/cocos-creator-starter.md`
- Cocos component starter: `../../references/cocos-creator-component-starter.md`
- Frontend prompting patterns: `../../references/frontend-prompts.md`
- Playtest checklist: `../../references/playtest-checklist.md`

## Examples

- "Help me prototype a Web tactics game."
- "I need a Cocos Creator 2D action game loop with a HUD and menus."
- "I want a Cocos Creator 3D exploration demo with lighting and platform-safe UI."
- "I want to ship this Cocos Creator game to Android and iOS."
- "I want a Cocos Creator component structure for a 3D configurator."
- "Optimize my 3D assets for Cocos Creator Web and native builds and keep file sizes under control."
- "Set up the asset workflow for consistent 2D sprite animations."
