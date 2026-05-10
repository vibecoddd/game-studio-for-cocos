# Cocos HUD Layout Patterns

Use low-chrome HUDs for playable Cocos Web and native scenes, especially in 3D.

## Starter 2D HUD

- top-left: compact status cluster
- top-right: pause/settings button
- bottom edge: context commands or mobile controls when needed
- center: keep clear except for transient prompts

## Starter 3D HUD

- one edge-aligned objective chip
- one transient interaction prompt
- one optional collapsible surface for map, quest, inventory, or settings
- no large always-on center panels during normal movement

## Cocos UI Notes

- Use Canvas and Widget anchoring intentionally.
- Make safe-area behavior explicit for mobile Web and native targets.
- Prefer prefabbed panels with controller scripts.
- Gate camera and gameplay input when a modal, inventory, drawer, or pointer-driven UI is active.

## Native Notes

Keep native gameplay HUDs, menus, prompts, and mobile controls in Cocos UI. Account for safe areas, orientation, pause/resume, touch target size, controller focus, and platform back or close behavior in the Cocos scene or a narrow native adapter.

## DOM Overlay Notes

Use DOM only for web shell surfaces around a Cocos Web build, such as login, documentation, external settings, analytics panels, or editor-like tools. Keep gameplay HUDs, menus, prompts, overlays, and mobile controls in Cocos UI. Keep the communication boundary explicit through events or a bridge service.
