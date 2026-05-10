# Engine Selection

Default to Cocos Creator 3.x with TypeScript. Treat the choice as a Web/native target plus 2D versus 3D Cocos workflow decision, not a choice between unrelated engines.

Hard rule: while this plugin is active, implementation output must stay on Cocos Creator 3.x. Other engines may be compared conceptually, but they are not valid runtimes for generated playable games, demos, or prototypes.

## Defaults

- Choose Cocos Creator 2D for sprite, tilemap, UI-heavy, side-view, top-down, tactics, arcade, and mobile-first Web or native games.
- Choose Cocos Creator 3D for model-driven worlds, spatial cameras, lighting, materials, physics-driven traversal, and 3D interaction.
- Choose the Cocos Creator project workflow when the task is about scenes, prefabs, components, resources, asset bundles, editor references, or Web/native build setup.
- Choose the Cocos native workflow when the task is about Android, iOS, macOS, Windows desktop, SDK setup, signing, permissions, package identifiers, native plugins, or device testing.
- Keep DOM as an optional Web shell surface around a Cocos Web build, not gameplay rendering or the default gameplay UI.

## Platform Checkpoint

Ask this before implementation when the user has not named the target platform and build output:

```text
Platform checkpoint: choose target platform(s) and build output: Web build, Android APK/AAB, iOS app/IPA, macOS app, Windows app, or Web + native.
```

- `Web`: Cocos Creator Web build, optional external Web shell.
- `Android`: Android APK or AAB with SDK, signing, permissions, safe areas, and real-device QA.
- `iOS`: iOS app project or IPA with signing, provisioning, safe areas, simulator, and real-device QA.
- `macOS` or `Windows`: native desktop app package with windowing, input, storage, packaging, and high-DPI checks.
- `Web + native`: one Cocos Creator project with shared gameplay plus explicit per-target build outputs and QA notes.

## Cocos Creator 2D Is Best Fit When

- gameplay is built from sprites, tilemaps, particles, UI nodes, or simple 2D collision
- screen-space layout and responsive HUD matter
- the target feels like a classic browser, mobile, puzzle, platform, tactics, or management game
- the project needs fast iteration through editor-authored scenes and prefabs

## Cocos Creator 3D Is Best Fit When

- the camera, depth, lighting, or 3D model readability is central
- objects need 3D collision, raycasts, character movement, or physics response
- characters, props, or environments arrive from DCC tools
- the project needs prefabs that combine models, materials, animation, colliders, and scripts

## Cocos Creator Project Workflow Is Best Fit When

- the user asks how to organize `assets/scripts`, scenes, prefabs, resources, or bundles
- the runtime crosses both 2D and 3D
- the feature depends on inspector properties, script components, or editor-authored references
- the Web build must be embedded or coordinated with a surrounding site

## Cocos Native Workflow Is Best Fit When

- the user asks for Android, iOS, macOS, Windows desktop, app-store, APK/AAB, IPA, signing, provisioning, or desktop packaging work
- platform-specific permissions, entitlements, storage, sensors, vibration, native plugins, or real-device QA are part of the task
- browser Preview is not sufficient evidence for the target runtime

## Anti-Patterns

- Picking a non-Cocos stack after the user asked for a Cocos plugin.
- Implementing a raw HTML canvas, DOM-only, Phaser, PixiJS, Three.js, React Three Fiber, Babylon.js, or custom WebGL runtime from this plugin.
- Calling a browser-only prototype "Cocos-style" when it does not target Cocos Creator.
- Treating Cocos Creator 3.x as Cocos2d-x or Cocos Creator 2.x; the 3.x API and engine base are different.
- Putting saveable game state in `Node` or `Component` instances.
- Scattering raw resource paths throughout gameplay code instead of using stable keys.
- Treating gameplay UI as DOM when it belongs in Cocos UI.
