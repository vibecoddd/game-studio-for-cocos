# Playtest Checklist

Use runtime-visible evidence for Cocos Creator Web and native builds. DOM checks alone are not enough for Cocos runtime games.

Before runtime QA, verify that the project is a real Cocos Creator project with `project.json`, `assets/scenes`, `assets/scripts`, `assets/prefabs`, and TypeScript components importing from `cc`. Do not treat raw canvas, DOM-only, Phaser, PixiJS, Three.js, React Three Fiber, Babylon.js, custom WebGL, or "Cocos-style" simulations as valid plugin output.

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
- Cocos scene and any external DOM shell stay synchronized.
- Performance does not cliff after scene reloads or repeated prefab spawns.

## Native

- Android install/update, back button, pause/resume, audio focus, permissions, safe areas, ABI, signing, and real-device performance.
- iOS signing, provisioning, safe areas, audio session, background/foreground, memory warnings, and real-device rendering.
- macOS/Windows desktop resize, fullscreen, high-DPI, input focus, controller support, storage paths, packaged launch, and shutdown behavior.
- Platform-specific SDK or editor gaps are reported as blocked instead of substituted with non-Cocos runtimes.
