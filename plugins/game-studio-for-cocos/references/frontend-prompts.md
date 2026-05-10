# Frontend Prompts

Use these prompt shapes when asking for Cocos Creator game UI, native game UI, or surrounding Web shell work.

Strict rule: gameplay HUDs, menus, prompts, mobile controls, and overlays belong in Cocos UI. DOM prompts are only for external Web shell surfaces around a Cocos Web build, not as a replacement for Cocos gameplay UI.

## Cocos UI Prompt

```text
Design and implement the Cocos Creator UI for:

Game fantasy: <fantasy>
Camera/viewpoint: <2D side-view, top-down, isometric, third-person, first-person>
Player verbs: <move, aim, interact, cast, build, etc.>
UI surface: Cocos UI inside the scene
Persistent HUD: <health, objective, timer, resources>
Transient UI: <interaction prompt, damage numbers, notifications>
Menus: <pause, inventory, map, settings>
Input boundary: gate gameplay and camera input while menus are open
Desktop/mobile: <constraints>
Avoid: large center panels during play, dashboard layout, raw DOM-only HUD
```

## DOM Overlay Prompt

```text
Design a DOM overlay around a Cocos Creator Web build:

Game fantasy: <fantasy>
Cocos scene responsibilities: <world, combat, cameras, in-game HUD>
DOM responsibilities: <account, settings, docs, debug tools, launcher>
State bridge: <events/messages/shared store>
Responsive constraints: <desktop/mobile>
Avoid: DOM panels covering the live playfield unless paused
Do not: render gameplay or primary HUD in DOM instead of Cocos UI
```

## Native UI Prompt

```text
Design and implement the Cocos Creator native UI for:

Target platforms: <Android, iOS, macOS, Windows>
Game fantasy: <fantasy>
Camera/viewpoint: <2D side-view, top-down, isometric, third-person, first-person>
UI surface: Cocos UI inside the scene
Safe areas: <notch, gesture bar, desktop title/window behavior>
Input: <touch, keyboard, controller, mouse, sensors>
Pause/resume: <foreground/background behavior>
Native adapters: <permissions, vibration, storage, platform back/close>
Avoid: DOM UI, browser storage, browser-only input APIs, Web shell assumptions
```

## Hybrid 3D Prompt

```text
Create a low-chrome UI plan for a Cocos Creator 3D scene:

Camera/control mode: <orbit, follow, chase, first-person>
Primary persistent UI: one compact objective or status cluster
Secondary UI: collapsed map/journal/inventory
Prompt behavior: transient, near edge or world-space
Input safety: pause or gate camera controls under pointer-driven UI
Playfield protection: keep center and lower-middle clear during movement
```
