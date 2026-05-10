---
name: cocos-creator-game
description: Build Cocos Creator 3.x games with TypeScript. Use when the user needs scene, prefab, component, asset bundle, editor workflow, Cocos UI, Web build structure, or native build structure across 2D and 3D projects.
---

# Cocos Creator Game

## Overview

Use this skill when the main problem is Cocos Creator project structure rather than genre-specific 2D or 3D gameplay. This is the project and editor workflow path in the plugin.

Recommended stack:

- Cocos Creator 3.x
- TypeScript scripts under `assets/scripts`
- Scene roots, prefabs, components, resources, asset bundles, and Cocos UI
- Web and native builds from the Cocos Creator build pipeline

Hard gate: playable output must be a real Cocos Creator project/runtime. Do not replace Creator scenes, prefabs, components, UI, physics, Web builds, or native builds with raw HTML canvas, DOM-only gameplay, Phaser, PixiJS, Three.js, React Three Fiber, Babylon.js, custom WebGL, Cocos2d-x, Unity, Unreal, custom native engines, or a "Cocos-style" simulation.

## Use This Skill When

- the project needs a Cocos Creator folder, scene, prefab, or script organization plan
- the user asks how TypeScript components should be structured
- the work spans 2D and 3D Cocos scenes
- the task is about resources, asset bundles, build settings, project conventions, or editor-authored references
- the game needs Cocos UI, Web build integration, native target structure, or optional external DOM integration around a Web build

## Do Not Use This Skill When

- the task is specifically a 2D gameplay implementation
- the task is specifically a 3D gameplay implementation
- the problem is asset packaging rather than runtime composition

## Best Fit Scenarios

- New Cocos Creator project scaffolds
- Reusable gameplay components and inspector properties
- Prefab-first enemy, prop, UI, or projectile workflows
- Scene loading and transition plans
- Asset bundle and resources strategies
- Web build integration in an existing site
- Native build structure for Android, iOS, macOS, or Windows desktop

## Core Rules

1. Run the Platform Checkpoint before choosing build layout.
   - If the user did not specify a target and output, ask: `Choose target platform(s) and build output: Web build, Android APK/AAB, iOS app/IPA, macOS app, Windows app, or Web + native.`
   - Web projects may include an external Web shell around the Cocos Web build.
   - Native projects must use Cocos UI and narrow native adapters instead of DOM or browser-only APIs.
2. Require a real Creator project shape for new playable work.
   - Include `project.json`, `assets/scenes`, `assets/scripts`, `assets/prefabs`, and resources or documented asset bundles.
   - Include `settings/` when producing a full project scaffold.
   - Put Cocos component scripts under `assets/scripts` and import engine APIs from `cc`.
3. Keep simulation state outside scene-only references.
   - Components coordinate engine state; plain TypeScript modules own reusable rules and saveable state.
4. Use inspector properties deliberately.
   - Use `@property` for scene-authored references, tunables, prefabs, materials, and assets.
   - Avoid hiding gameplay logic in inspector wiring that cannot be tested or understood from code.
5. Use prefabs deliberately.
   - Prefabs should represent reusable view or entity assemblies.
   - Runtime factories should instantiate prefabs through one documented boundary.
6. Keep gameplay UI in Cocos UI.
   - Cocos UI is the default for in-game HUD, menus, overlays, and mobile controls.
   - DOM is appropriate only for account flows, documentation, editor-like tools, or surrounding site chrome around a Cocos Web build.
   - DOM must not replace gameplay rendering, scene transitions, input plumbing, or the primary HUD.
   - Native targets must use Cocos UI and explicit platform adapters instead of DOM or browser-only APIs.
7. Keep starter scaffolds visually restrained.
   - Start with one compact objective or status surface and transient prompts.
   - Keep notes, maps, and multi-step checklists collapsed until opened.
   - Do not surround the playfield with equally weighted panels.

## Architectural Guidance

- Use dedicated scene root components for bootstrapping, input, camera, UI, and gameplay adapters.
- Keep camera rigs and control components isolated from gameplay systems.
- Keep resources, asset bundles, and prefab factories predictable.
- Keep any external DOM shell and Cocos scenes coordinated through explicit event or message boundaries.
- If a system needs high-frequency control, isolate it from broad component update churn.
- If the scene is immediately playable, keep the initial overlay budget low and let the world do more of the onboarding.

## Anti-Patterns

- Treating Cocos components as the gameplay state store
- Pushing heavy per-frame mutation through broad singleton state
- Creating one giant scene component that owns input, rules, rendering, UI, and persistence
- Loading assets through scattered string paths instead of a manifest, resources boundary, or bundle boundary
- Shipping a fake Cocos project that has no `project.json`, no Creator asset layout, or no TypeScript components importing from `cc`
- Replacing Cocos runtime work with raw browser canvas, DOM, Phaser, PixiJS, Three.js, React Three Fiber, Babylon.js, or custom WebGL
- Shipping an initial scaffold with large panels occupying every side of the viewport

## References

- Strict Cocos runtime policy: `../../references/strict-cocos-runtime-policy.md`
- Shared architecture: `../cocos-game-foundations/SKILL.md`
- Frontend direction: `../cocos-game-ui-frontend/SKILL.md`
- Cocos HUD layout patterns: `../../references/cocos-hud-layout-patterns.md`
- Cocos Creator stack: `../../references/cocos-creator-stack.md`
- Cocos editor workflow: `../../references/cocos-creator-editor-workflow.md`
- Native build targets: `../../references/cocos-native-build-targets.md`
- Cocos component starter: `../../references/cocos-creator-component-starter.md`
- Cocos asset loading starter: `../../references/cocos-asset-loading-starter.md`
- Cocos physics starter: `../../references/cocos-physics-starter.md`
- 3D asset pipeline: `../../references/web-3d-asset-pipeline.md`
- Web build debugging and perf: `../../references/cocos-web-build-debugging-and-performance.md`
