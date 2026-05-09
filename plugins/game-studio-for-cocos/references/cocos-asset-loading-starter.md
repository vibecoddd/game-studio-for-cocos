# Cocos Asset Loading Starter

Use stable keys and one loading boundary instead of scattered path literals.

```ts
import { Prefab, resources } from 'cc';

export const AssetKeys = {
  playerPrefab: 'prefabs/actors/Player',
  enemyPrefab: 'prefabs/actors/Enemy',
} as const;

export function loadPrefab(key: string): Promise<Prefab> {
  return new Promise((resolve, reject) => {
    resources.load(key, Prefab, (error, prefab) => {
      if (error || !prefab) {
        reject(error ?? new Error(`Prefab not found: ${key}`));
        return;
      }
      resolve(prefab);
    });
  });
}
```

## Rules

- Keep keys stable and human-readable.
- Hide `resources.load` or bundle loading behind project helpers.
- Do not make gameplay systems know raw import paths.
- For larger projects, prefer asset bundles for independently loaded worlds, chapters, or cosmetic packs.
