# Cocos Creator Component Starter

Use this pattern for components that adapt simulation state into Cocos view state.

```ts
import { _decorator, Component, Node, Vec3 } from 'cc';
import { ActorSnapshot } from '../simulation/ActorSnapshot';

const { ccclass, property } = _decorator;

@ccclass('ActorView')
export class ActorView extends Component {
  @property(Node)
  visualRoot: Node | null = null;

  applySnapshot(snapshot: ActorSnapshot) {
    const target = this.visualRoot ?? this.node;
    target.setPosition(new Vec3(snapshot.x, snapshot.y, snapshot.z ?? 0));
    target.active = snapshot.visible;
  }
}
```

## Rules

- `applySnapshot()` should be deterministic and side-effect-light.
- View components should not decide combat, scoring, progression, or save data.
- Inspector properties should represent view dependencies and tuning values.
- Cleanup ownership should be explicit when instantiating prefabs.
