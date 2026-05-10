# Cocos Creator Editor Workflow

Use this when a task depends on the Creator editor, scene graph, inspector wiring, prefabs, resources, bundles, or Web builds.

## Project Structure Gate

Playable work must be represented as a real Cocos Creator 3.x project. For new projects, require this minimum shape unless an existing Cocos project already documents a compatible variant:

```text
project.json
assets/
  scenes/
  scripts/
  prefabs/
  resources/        # or documented asset bundles
settings/
```

Scripts that attach to scene nodes must be TypeScript components under `assets/scripts` and import from `cc`. Use plain TypeScript modules for deterministic simulation only when Cocos components bridge them into scenes, prefabs, input, UI, animation, physics, and assets.

Do not replace missing editor access with raw browser canvas, DOM-only gameplay, Phaser, PixiJS, Three.js, React Three Fiber, Babylon.js, custom WebGL, or a "Cocos-style" simulation. If Creator cannot run, document the blocked editor steps and keep the project Cocos-compatible.

## Workflow

1. Define the scene root and major prefabs.
2. Keep TypeScript components small and inspector-friendly.
3. Put gameplay rules in plain TypeScript modules where possible.
4. Expose only necessary assets, nodes, prefabs, and tuning values with `@property`.
5. Create prefabs for repeated entities and UI surfaces.
6. Centralize asset access through manifest keys, resources, or bundles.
7. Build and smoke-test the Web target after meaningful runtime changes.

## Component Rules

- One component should have one reason to change.
- Components should coordinate Cocos objects, not hide large gameplay systems.
- Prefer explicit dependencies over `find()` calls in update loops.
- Treat inspector wiring as configuration that must be named and documented in code.
- Avoid singleton sprawl; if a service is global, make its lifecycle explicit.

## Prefab Rules

- Use prefabs for enemies, props, projectiles, UI panels, effects, and camera rigs that repeat.
- Keep prefab root names stable.
- Keep prefab scripts thin and data-driven.
- Instantiate through a factory or scene coordinator so ownership and cleanup are obvious.

## Build Rules

- Check Web build output after changes to rendering, input, asset loading, or UI layout.
- Test resize behavior, canvas scaling, audio unlock, pointer/touch input, and asset load timing in browser.
- Keep platform-specific assumptions close to the build or platform adapter layer.
- Screenshots used as runtime proof must come from Cocos Creator Preview or a Cocos Web build. Label any mock or static reference image clearly.
