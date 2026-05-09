# Cocos Web Build Debugging and Performance

Use this when a Cocos Creator Web build has rendering, input, loading, or frame-time problems.

## First Checks

- Browser console errors and warnings.
- Network panel for missing assets, slow bundles, or cache mistakes.
- Canvas size, device pixel ratio, and resize behavior.
- Scene reloads and prefab cleanup after transitions.
- Input focus, pointer/touch events, and audio unlock.

## Visual Checks

- Cocos UI anchoring, Canvas scaling, and safe-area behavior.
- Sprite or model import scale and pivot correctness.
- Material, lighting, shadow, and post-processing readability.
- Texture resolution versus visible use.
- Draw-call and batch behavior for repeated sprites, UI, or props.

## Runtime Checks

- Heavy imported models or textures loaded before first playable moment.
- Repeated prefab instantiation without cleanup.
- Broad per-frame component scans.
- Gameplay state hidden inside view components.
- Collision callbacks doing too much work directly.

## Evidence

- Capture screenshots for visual regressions.
- Record console output for load and runtime errors.
- Use browser performance tooling for frame-time cliffs.
- Compare before and after Web builds when optimizing assets or render settings.
