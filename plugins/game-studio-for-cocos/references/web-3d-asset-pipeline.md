# Web 3D Asset Pipeline

Prepare 3D assets so they become predictable Cocos Creator project assets and prefabs.

## References

- Cocos Creator 3.8 assets manual: https://docs.cocos.com/creator/3.8/manual/en/asset/
- Cocos Creator 3.8 model import documentation: https://docs.cocos.com/creator/3.8/manual/en/asset/model/
- Blender export documentation: https://docs.blender.org/manual/en/latest/files/import_export.html

## Default Rules

- Normalize scale, orientation, pivots, hierarchy names, and animation clip names before import.
- Treat Cocos prefabs and imported assets as the runtime contract.
- Keep source DCC files and runtime Cocos assets conceptually separate.
- Use stable manifest keys for runtime loading.
- Author collision proxies deliberately.
- Keep texture size proportional to on-screen use.

## Pipeline

1. Clean the source asset in Blender or the chosen DCC tool.
2. Export in a Cocos-supported interchange format.
3. Import through Cocos Creator and inspect generated materials, meshes, textures, and animation clips.
4. Create prefabs that combine model, material, scripts, collider proxies, and animation setup.
5. Validate asset size, draw-call impact, texture memory, and Web build load timing.
6. Route runtime loading through resources, bundles, or a project asset manifest.

## Failure Modes

- Runtime scripts compensate for bad pivots or scale.
- Visual meshes are reused as physics collision by default.
- Every prop ships unique materials and large textures.
- Gameplay code references raw import paths everywhere.
- Imported asset names change and silently break component references.

## Related Files

- `cocos-creator-stack.md`
- `cocos-creator-editor-workflow.md`
- `cocos-asset-loading-starter.md`
- `cocos-physics-starter.md`
