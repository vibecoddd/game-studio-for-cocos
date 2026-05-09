# Engine Selection

Default to Cocos Creator 3.x with TypeScript. Treat the choice as a 2D versus 3D Cocos workflow decision, not a choice between unrelated browser engines.

## Defaults

- Choose Cocos Creator 2D for sprite, tilemap, UI-heavy, side-view, top-down, tactics, arcade, and mobile-first browser games.
- Choose Cocos Creator 3D for model-driven worlds, spatial cameras, lighting, materials, physics-driven traversal, and 3D interaction.
- Choose the Cocos Creator project workflow when the task is about scenes, prefabs, components, resources, asset bundles, editor references, or Web build setup.
- Keep DOM overlays as an optional Web shell surface, not the default gameplay UI.

## Cocos Creator 2D Is Best Fit When

- gameplay is built from sprites, tilemaps, particles, UI nodes, or simple 2D collision
- screen-space layout and responsive HUD matter
- the target feels like a classic browser, mobile, puzzle, platform, tactics, or management game
- the project needs fast iteration through editor-authored scenes and prefabs

## Cocos Creator 3D Is Best Fit When

- the camera, depth, lighting, or 3D model readability is central
- objects need 3D collision, raycasts, character movement, or physics response
- characters, props, or environments arrive from DCC tools
- the project needs prefabs that combine models, materials, animation, colliders, and scripts

## Cocos Creator Project Workflow Is Best Fit When

- the user asks how to organize `assets/scripts`, scenes, prefabs, resources, or bundles
- the runtime crosses both 2D and 3D
- the feature depends on inspector properties, script components, or editor-authored references
- the Web build must be embedded or coordinated with a surrounding site

## Anti-Patterns

- Picking a non-Cocos stack after the user asked for a Cocos plugin.
- Treating Cocos Creator 3.x as Cocos2d-x or Cocos Creator 2.x; the 3.x API and engine base are different.
- Putting saveable game state in `Node` or `Component` instances.
- Scattering raw resource paths throughout gameplay code instead of using stable keys.
- Treating all UI as DOM or all UI as Cocos UI without deciding based on gameplay, accessibility, and Web shell needs.
