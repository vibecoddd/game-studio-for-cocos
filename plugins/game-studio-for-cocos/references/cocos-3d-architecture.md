# Cocos 3D Architecture

Use this as the default module split for Cocos Creator 3.x 3D browser games.

## Directory Shape

```text
assets/
  scenes/
    Boot.scene
    World.scene
  prefabs/
    actors/
    props/
    cameras/
    ui/
  scripts/
    simulation/
      WorldState.ts
      systems/
      save/
    components/
      WorldRoot.ts
      ActorView3D.ts
      InteractableView.ts
    camera/
      FollowCamera.ts
      OrbitCamera.ts
      CameraInputGate.ts
    physics/
      CollisionLayers.ts
      PhysicsBridge.ts
      CharacterMotor.ts
    assets/
      AssetKeys.ts
      PrefabFactory.ts
      BundleLoader.ts
    ui/
      HudController.ts
      InteractionPrompt.ts
    diagnostics/
      PerfOverlay.ts
  models/
  materials/
  textures/
  animations/
```

## Boundaries

- `simulation/` owns game rules and saveable state.
- `components/` owns Cocos scene adaptation.
- `camera/` owns camera rigs and camera input state.
- `physics/` owns Cocos physics components, collision groups, queries, and simulation bridging.
- `assets/` owns imported asset, prefab, resources, and bundle access.
- `ui/` owns Cocos UI and optional DOM bridge events.

## Runtime Rules

- Do not store progression or quest state in meshes, materials, or scene-only node state.
- Keep model, material, animation, and collider assumptions documented next to the prefab factory or asset manifest.
- Gate camera input whenever menus, dialogs, inventory, or pointer-driven UI is active.
- Keep the first playable view low-chrome; expand maps, journals, and settings on demand.

## Asset Rules

- Normalize pivots, scale, orientation, and hierarchy names before treating assets as runtime contracts.
- Author collider proxies deliberately.
- Keep texture resolution proportional to on-screen use.
- Prefer reusable prefabs that combine view model, materials, colliders, animation, and thin scripts.
