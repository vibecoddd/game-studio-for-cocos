---
name: cocos-2d-game
description: Implement 2D browser games with Cocos Creator 3.x and TypeScript. Use when the user wants sprites, tilemaps, UITransform layouts, animation clips, 2D physics, cameras, and Cocos UI or DOM-overlay HUD patterns.
---

# Cocos 2D Game

## Overview

Use this skill for the main 2D execution path in this plugin. Cocos Creator 3.x is the default stack for 2D browser games here because it provides a visual editor, TypeScript components, scene and prefab workflows, animation tooling, UI components, cameras, and 2D physics in one project.

Preferred stack:

- Cocos Creator 3.x
- TypeScript
- Cocos scene, node, component, prefab, animation, and asset workflows
- Cocos UI for in-game HUD and menus, with DOM overlays only when the Web shell needs them

## Architecture

1. Keep gameplay state outside Cocos rendering components.
   - Systems own rules, turn order, movement, combat, inventory, objectives, and progression.
   - Cocos components adapt system state into nodes, sprites, camera motion, animation playback, tweens, particles, and effects.
2. Make scene components thin.
   - Bootstrap and scene loading
   - Menu or shell scene
   - Gameplay scene root
   - Optional overlay or debug components
3. Keep engine-facing objects disposable.
   - Nodes, components, tweens, animation state, particle systems, and camera rigs are view state, not source of truth.
4. Favor stable asset manifest keys over direct file-path references throughout gameplay code.

## Implementation Guidance

- Use one integration boundary where Cocos components read simulation state and emit input actions back.
- Prefer deterministic system updates over component-local mutation.
- Treat HUD and menus as Cocos UI when they are part of gameplay; use DOM when text density, web accessibility, or account/settings surfaces matter more.
- Keep animation state derived from gameplay state rather than ad hoc sprite flags.
- Use `@ccclass` and `@property` for inspector-facing component dependencies, but keep rules in plain TypeScript modules when possible.

## 2D Modes Covered Well

- Turn-based grids and tactics
- Top-down exploration
- Side-view action platformers
- Character-action combat with sprite animation
- Lightweight management or deck-driven battle scenes
- UI-heavy mobile-first browser games

## Camera and Presentation

- Choose the camera model early: locked, follow, room-based, or tactical-pan.
- Keep camera logic separate from game rules.
- Use restrained screen shake, hit-stop, and parallax. Effects should improve readability, not obscure it.

## UI Integration

- Use Cocos UI for HUD, command menus, pause screens, mobile controls, and narrative panels that belong inside the game presentation.
- Use DOM overlays for browser shell UI, login, debug tooling, or text-heavy settings.
- Keep the Cocos scene responsible for the world, combat readability, and motion.
- Avoid shoving dense web-app forms into Cocos UI unless the project explicitly needs an in-engine presentation.

## Asset Organization

- `characters/`
- `environment/`
- `ui/`
- `fx/`
- `audio/`
- `data/`

Keep manifest keys human-readable and stable.

## Default Directory Shape

See `../../references/cocos-2d-architecture.md` for a concrete module split.

## Anti-Patterns

- Game rules inside component `update()` loops without a system boundary
- Scene-to-scene state passed through mutable global objects
- Browser shell UI built inside Cocos UI just because it is convenient
- Asset paths embedded everywhere instead of a manifest or bundle layer
- Overusing generic web dashboard patterns for game UI

## References

- Shared architecture: `../cocos-game-foundations/SKILL.md`
- Frontend direction: `../cocos-game-ui-frontend/SKILL.md`
- Sprite workflow: `../cocos-sprite-pipeline/SKILL.md`
- Cocos 2D structure: `../../references/cocos-2d-architecture.md`
- Cocos Creator starter: `../../references/cocos-creator-starter.md`
