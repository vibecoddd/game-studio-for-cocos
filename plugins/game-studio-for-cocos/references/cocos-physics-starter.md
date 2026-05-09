# Cocos Physics Starter

Use Cocos physics components and collision groups when collision has gameplay meaning.

## 2D

- Use 2D colliders and rigid bodies for arcade, platform, trigger, and overlap logic.
- Keep collision callbacks thin; translate them into simulation events.
- Define collision groups and masks before adding many interactable types.

## 3D

- Use rigid bodies, colliders, raycasts, and character movement helpers for 3D interaction.
- Author collision proxies intentionally instead of relying on visual meshes by default.
- Keep physics scale, units, layers, and material assumptions documented next to the prefab.

## Boundary Pattern

```ts
export type CollisionEvent =
  | { type: 'hit'; attackerId: string; targetId: string }
  | { type: 'trigger-enter'; triggerId: string; actorId: string };
```

Convert Cocos callbacks into domain events, then let simulation systems decide outcomes.
