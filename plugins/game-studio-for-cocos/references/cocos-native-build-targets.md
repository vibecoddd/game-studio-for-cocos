# Cocos Native Build Targets

Use this reference when a Cocos Creator 3.x project targets Android, iOS, macOS, or Windows desktop.

## Ground Rules

- Native output must come from the Cocos Creator native build pipeline.
- Shared gameplay stays in Cocos Creator scenes, prefabs, components, resources, bundles, and TypeScript modules.
- Platform code is an adapter layer, not the gameplay runtime.
- Do not replace Cocos with Cocos2d-x, Unity, Unreal, custom native engines, DOM shells, or browser-only runtimes.
- If the required SDK or editor is unavailable, scaffold the Cocos-compatible project and mark native build verification as blocked.

## Target Matrix

| Target | Required Environment | Key Checks |
| --- | --- | --- |
| Android | Cocos Creator, Android Studio, JDK, Android SDK/NDK, Gradle | package id, SDK levels, ABI, permissions, signing, emulator/real device |
| iOS | macOS, Cocos Creator, Xcode, Apple signing/provisioning | bundle id, team, entitlements, orientations, simulator/real device |
| macOS | macOS, Cocos Creator, Xcode or supported native toolchain | bundle id, signing, window/fullscreen, high-DPI, storage paths |
| Windows | Windows, Cocos Creator, supported native build toolchain | executable packaging, resolution, input focus, high-DPI, storage paths |

## Android Checklist

- Confirm supported Creator version and Android toolchain versions.
- Set package id, app name, orientation, min SDK, target SDK, ABI, and signing.
- Declare only required permissions.
- Test install/update, back button, pause/resume, audio focus, safe areas, memory pressure, and texture compression.
- Use real devices before release decisions.

## iOS Checklist

- Confirm macOS and Xcode availability.
- Set bundle id, team, provisioning profile, signing certificate, orientations, launch screen, and entitlements.
- Test safe areas, touch latency, audio session, background/foreground, memory warnings, and real-device rendering.
- Do not treat iOS simulator success as final device validation.

## Desktop Checklist

- Decide default window size, fullscreen policy, high-DPI behavior, keyboard/mouse/controller input, storage paths, and shutdown behavior.
- Test resize, focus changes, monitor scaling, file permissions, and packaged app launch.

## Shared Native QA

- Validate startup time, first playable moment, frame pacing, memory, crash logs, save persistence, controller/touch mapping, and package size.
- Keep platform-specific code isolated behind narrow services or plugin adapters.
- Record which native targets were actually built and which were blocked by missing SDKs.
