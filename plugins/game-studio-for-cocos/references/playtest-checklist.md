# Playtest Checklist

Use browser-visible evidence for Cocos Creator Web builds. DOM checks alone are not enough for canvas-heavy games.

## Boot

- Web build loads without console errors.
- First actionable screen is visible.
- Asset loading state is readable.
- Audio, input, and focus behavior are sane after first interaction.

## Input

- Keyboard, pointer, touch, and gamepad mappings trigger actions correctly.
- Menus gate gameplay and camera input.
- Pause, resume, retry, and scene transitions work.
- Mobile controls stay inside safe areas.

## 2D

- Sprite anchors, baselines, and animation clips stay stable.
- Tile, platform, and collision readability is clear.
- Cocos UI Canvas scaling and Widget anchoring survive resize.
- HUD does not cover combat-critical space.

## 3D

- Camera, controls, and reset behavior are predictable.
- Depth readability and silhouettes are clear.
- Materials, lighting, shadows, and post effects do not hide gameplay state.
- Imported model and texture streaming does not stall the first playable moment.
- Physics colliders match the visible interaction model.
- Persistent UI does not cover the center or lower-middle playfield.

## Browser

- Desktop and mobile viewport sanity.
- Resize behavior and device pixel ratio sanity.
- Reduced-motion behavior for UI transitions where applicable.
- Cocos scene and optional DOM overlay stay synchronized.
- Performance does not cliff after scene reloads or repeated prefab spawns.
