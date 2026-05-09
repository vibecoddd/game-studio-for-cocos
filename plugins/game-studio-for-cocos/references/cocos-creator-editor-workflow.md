# Cocos Creator Editor Workflow

Use this when a task depends on the Creator editor, scene graph, inspector wiring, prefabs, resources, bundles, or Web builds.

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
