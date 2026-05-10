# Scene Setup

Create `Game.scene` in Cocos Creator 3.x and wire these nodes through the Inspector:

- `GameRoot.worldGraphics`: a child node with a Cocos `Graphics` component.
- `GameRoot.hud`: a HUD node with the `HudController` component.
- `HudController.scoreLabel`: score label.
- `HudController.healthLabel`: health label.
- `HudController.timeLabel`: elapsed-time label.
- `HudController.statusLabel`: objective/status label.
- `HudController.restartButton`: restart button.

The scene file itself should be authored by Cocos Creator so UUIDs, `.meta` files, and editor-only serialization stay valid.
