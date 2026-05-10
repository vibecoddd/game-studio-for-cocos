# Cocos Crystal Dash

This demo is implemented as a Cocos Creator 3.x + TypeScript project. The previous raw browser canvas runtime has been removed from the demo entry path.

## Open In Cocos Creator

1. Install Cocos Creator 3.x.
2. Open this `demo/` folder as a Cocos Creator project.
3. Create or open a scene named `Game` under `assets/scenes`.
4. Add a Canvas node with:
   - one child node with a `Graphics` component for world rendering
   - a HUD node with `Label` components for score, health, time, and status
   - a restart `Button`
5. Attach `GameRoot` to the scene root or Canvas.
6. Attach `HudController` to the HUD node.
7. Wire the inspector properties listed in `assets/scenes/README.md`.
8. Run Preview or build the Web target from Cocos Creator.

## Runtime

- Gameplay state lives in `assets/scripts/simulation/GameState.ts`.
- Cocos rendering and input bridging lives in `assets/scripts/components/GameRoot.ts`.
- HUD state lives in `assets/scripts/ui/HudController.ts`.
- Prefab/resource folders are present so the project follows Creator structure.

## Verification

The repository environment does not include the Cocos Creator executable, so Preview/Web build validation must be run from Cocos Creator after opening the project.

Local structural and simulation tests can be run with:

```bash
npm test
```
