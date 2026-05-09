# Alternative Engines

This plugin defaults to Cocos Creator 3.x. Treat other engines as explicit opt-outs, not competing defaults.

## When To Leave Cocos

Choose another engine only when:

- the user explicitly requests a non-Cocos stack
- the project already has a production runtime in another engine
- a platform, renderer, physics, editor, or team constraint makes Cocos Creator the wrong fit
- the request is a comparison rather than implementation work

## Comparison Rules

- Compare trade-offs honestly, but do not silently route implementation away from Cocos Creator.
- Preserve the Game Studio for Cocos workflow: game loop, architecture, UI, assets, and playtest still need one coherent plan.
- If the user returns to Cocos, use `cocos-2d-game`, `cocos-3d-game`, or `cocos-creator-game` as the implementation path.
