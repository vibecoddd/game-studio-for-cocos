# Cocos Creator Starter

Use this as the smallest canonical TypeScript component shape for a Cocos Creator 3.x game scene.

```ts
import { _decorator, Component, Node } from 'cc';

const { ccclass, property } = _decorator;

@ccclass('GameRoot')
export class GameRoot extends Component {
  @property(Node)
  playerRoot: Node | null = null;

  private elapsed = 0;

  start() {
    this.elapsed = 0;
  }

  update(deltaTime: number) {
    this.elapsed += deltaTime;
  }
}
```

## Next Steps

- Add an input action map rather than reading raw input in every component.
- Add a plain TypeScript simulation module before adding gameplay rules to `update()`.
- Add prefab factories for repeated actors or effects.
- Add Cocos UI controllers for HUD and menu surfaces.
- Add Web or native build smoke tests once the project can run on the chosen target.
