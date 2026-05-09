# Cocos 2D Architecture

Use this as the default module split for Cocos Creator 3.x 2D browser games.

## Directory Shape

```text
assets/
  scenes/
    Boot.scene
    MainMenu.scene
    Game.scene
  prefabs/
    characters/
    projectiles/
    ui/
    fx/
  scripts/
    simulation/
      GameState.ts
      systems/
      save/
    components/
      GameRoot.ts
      PlayerView.ts
      EnemyView.ts
      CameraRig2D.ts
    input/
      InputActions.ts
      KeyboardInput.ts
      TouchInput.ts
    ui/
      HudController.ts
      PauseMenu.ts
    assets/
      AssetKeys.ts
      PrefabFactory.ts
    diagnostics/
      DebugOverlay.ts
  textures/
  audio/
  animations/
```

## Boundaries

- `simulation/` owns rules, timers, turns, health, combat, inventory, objectives, and serializable state.
- `components/` adapts simulation state into Cocos nodes, sprites, animation clips, particles, tweens, and cameras.
- `input/` maps keyboard, pointer, touch, and gamepad events to game actions.
- `ui/` owns Cocos UI controllers and menu state.
- `assets/` owns stable keys and prefab instantiation.

## Scene Rules

- Keep `GameRoot` as the scene coordinator, not the rules engine.
- Keep `update()` methods thin; gather input, step systems, then sync views.
- Prefer prefabbed entities for repeated view assemblies.
- Use inspector properties for view references and tuning values, not for hidden gameplay rules.

## UI Rules

- Use Cocos UI for in-game HUD, combat prompts, mobile controls, and pause menus.
- Use DOM only for surrounding Web shell, long-form settings, auth, or tooling.
- Keep Canvas scaling, safe areas, and Widget anchoring part of the first implementation pass.
