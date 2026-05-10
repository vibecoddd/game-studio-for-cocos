# Cocos Crystal Dash

## Run In Cocos Creator

Prerequisites:

- Install Cocos Creator 3.x through Cocos Dashboard on a Windows or macOS desktop environment.
- Clone this repository locally.

Open and run:

1. Launch Cocos Creator from Dashboard.
2. Open this `demo/` folder as an existing Cocos Creator project.
3. Create or open `assets/scenes/Game.scene`.
4. Add a Canvas node.
5. Add a child node named `WorldGraphics` with a Cocos `Graphics` component.
6. Add a HUD node with `Label` components for score, health, time, and status.
7. Add a restart `Button`.
8. Attach `GameRoot` to the Canvas or scene root.
9. Attach `HudController` to the HUD node.
10. Wire the Inspector properties listed in `assets/scenes/README.md`.
11. Click Preview to run the game in Cocos Creator.

Build for Web:

1. Open Project > Build.
2. Select the Web target.
3. Build and run the generated Web output from Cocos Creator.

Controls:

- Move: `WASD` or arrow keys.
- Goal: collect every crystal shard while avoiding drones.
- Restart: click the restart button.
