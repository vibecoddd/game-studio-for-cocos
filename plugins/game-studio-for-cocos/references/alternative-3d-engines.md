# Alternative Engines

This plugin is Cocos Creator 3.x only for implementation. Treat other engines as conceptual comparisons or reasons to leave this plugin, not competing defaults inside the plugin.

## When To Leave Cocos

Discuss another engine only when:

- the user explicitly asks for a comparison
- the project already has a production runtime in another engine
- a platform, renderer, physics, editor, or team constraint makes Cocos Creator the wrong fit
- the next step is to stop using this plugin for implementation work

## Comparison Rules

- Compare trade-offs honestly, but do not route implementation away from Cocos Creator while this plugin is active.
- Preserve the Game Studio for Cocos workflow: game loop, architecture, UI, assets, and playtest still need one coherent plan.
- If the user returns to Cocos, use `cocos-2d-game`, `cocos-3d-game`, or `cocos-creator-game` as the implementation path.
- If the user insists on non-Cocos implementation, explain that this plugin is not the right tool for that work.
