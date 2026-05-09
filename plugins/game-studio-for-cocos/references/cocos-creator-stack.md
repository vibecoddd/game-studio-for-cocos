# Cocos Creator Stack

Default stack for this plugin:

- Runtime and editor: Cocos Creator 3.x.
- Language: TypeScript.
- Architecture: componentized Cocos scene adapters over plain TypeScript simulation systems.
- 2D: Canvas, UITransform, Sprite, Label, Button, Widget, Layout, TiledMap, Animation, Tween, 2D physics.
- 3D: Scene nodes, Camera, Light, MeshRenderer, SkinnedMeshRenderer, materials, animation, particles, 3D physics.
- Assets: scenes, prefabs, resources, asset bundles, imported models, textures, materials, animation clips, audio.
- Web target: Cocos Creator Web build, optionally embedded in a surrounding site.

## Official Docs

- Cocos Creator 3.8 manual: https://docs.cocos.com/creator/3.8/manual/en/
- Scripting guide and event system: https://docs.cocos.com/creator/3.8/manual/en/scripting/
- Assets system: https://docs.cocos.com/creator/3.8/manual/en/asset/
- Physics system: https://docs.cocos.com/creator/3.8/manual/en/physics/
- UI system: https://docs.cocos.com/creator/3.8/manual/en/ui-system/

## Code Generation Defaults

- Use `import { _decorator, Component, Node } from 'cc';`.
- Define components with `@ccclass`.
- Expose scene references and tunables with `@property`.
- Keep reusable gameplay rules in plain TypeScript modules.
- Keep one component responsible for bridging a simulation system to a view prefab.
- Use prefab factories or asset manifests rather than scattered path literals.

## Project Assumptions

Cocos Creator 3.x is not Cocos2d-x and is not Cocos Creator 2.x. Do not use legacy APIs unless the existing project already depends on them.
