---
name: cocos-3d-asset-pipeline
description: Prepare and optimize Cocos Creator browser-game 3D assets. Use when the user asks for imported model assets, Blender cleanup and export, collision or LOD setup, compression, texture packaging, and runtime validation.
---

# Web 3D Asset Pipeline

## Overview

Use this skill for shipped 3D assets, not runtime scene code. The goal is predictable Cocos Creator project assets and prefabs, not whatever the DCC tool happened to export first.

This guidance is tuned for Cocos Creator 3.x Web builds while keeping common DCC cleanup and optimization principles.

## Use This Skill When

- the task is about Cocos-imported 3D models, materials, textures, animations, prefabs, or bundles
- the task is about model cleanup, texture packaging, compression, LOD, or collision proxies
- the runtime stack is already chosen and the remaining problem is asset quality or size

## Do Not Use This Skill When

- the task is about scene, camera, renderer, or game-loop structure
- the task is about choosing 2D versus 3D Cocos runtime structure
- the user wants implementation or asset packaging for a non-Cocos runtime

## Default Pipeline

1. Author and clean the source asset in a DCC tool such as Blender.
2. Export in a Cocos-supported interchange format and import through Cocos Creator.
3. Optimize geometry, materials, textures, animations, and compression before committing the imported asset contract.
4. Validate naming, pivots, transforms, material reuse, animation clips, and texture budgets.
5. Add collision proxies, LOD strategy, prefab boundaries, and baked-lighting assumptions as needed.
6. Ship the optimized Cocos project asset or prefab and load it through the project's asset manifest, resources, or bundle strategy.

## Format Rules

- Default runtime contract: Cocos-imported assets, prefabs, and stable manifest keys.
- Do not treat FBX, OBJ, or DCC-native formats as the long-term runtime contract.
- Apply or normalize transforms before shipping.
- Keep units, pivots, and orientation conventions consistent across the whole asset set.

## Optimization Rules

- Use DCC tools and supported optimization tooling for pruning, deduplication, simplification, and packaging before import.
- Use geometry compression intentionally.
  - Draco is a valid option when decode cost and compatibility fit the runtime.
  - Meshopt is often a strong default for web delivery.
- Compress textures deliberately.
  - Use compressed texture formats when the Cocos build target and asset pipeline support them.
  - Use WebP or AVIF where they make sense in the broader asset pipeline.
- Reuse materials and textures where possible to cut memory and draw-call cost.

## Runtime-Ready Asset Rules

- Keep model hierarchy names stable and meaningful.
- Set pivots and origins for gameplay interaction and Cocos transform use, not just for DCC convenience.
- Author explicit collision proxies for physics-heavy scenes.
- Decide whether lighting is dynamic, baked, or hybrid before final export.
- Plan LODs for large environments or repeated props.
- Keep texture resolution proportional to on-screen use, not source-art ambition.

## Common Failure Modes

- Shipping raw DCC exports without cleanup
- Too many unique materials
- Texture sizes far above visible need
- Missing collision proxies
- Scale or pivot mismatches between assets
- Cocos runtime code compensating for asset mistakes that should be fixed upstream

## References

- Strict Cocos runtime policy: `../../references/strict-cocos-runtime-policy.md`
- Cocos Creator stack: `../../references/cocos-creator-stack.md`
- Cocos Creator editor workflow: `../../references/cocos-creator-editor-workflow.md`
- Cocos asset loading starter: `../../references/cocos-asset-loading-starter.md`
- Cocos physics starter: `../../references/cocos-physics-starter.md`
- 3D asset pipeline reference: `../../references/web-3d-asset-pipeline.md`
