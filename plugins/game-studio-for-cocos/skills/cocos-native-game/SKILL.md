---
name: cocos-native-game
description: Build Cocos Creator native games with TypeScript. Use when the user needs Android, iOS, macOS, Windows desktop, native build settings, SDK setup, permissions, signing, packaging, device QA, or platform integration.
---

# Cocos Native Game

## Overview

Use this skill when a Cocos Creator 3.x game targets native platforms instead of, or in addition to, Web. Keep the same strict Cocos runtime requirement: gameplay, UI, scenes, prefabs, assets, animation, physics, and input must remain inside a real Cocos Creator project.

Supported target families:

- Android
- iOS
- macOS desktop
- Windows desktop

Native support here means Cocos Creator native builds, not Unity, Unreal, Cocos2d-x, or hand-written platform engines.

## Use This Skill When

- the user asks for native games, mobile games, Android, iOS, desktop builds, app-store packaging, signing, or device testing
- a Cocos project needs platform-specific permissions, orientation, safe areas, storage, vibration, sensors, native plugins, or SDK integration
- Web build guidance is insufficient because the target is a native app package

## Core Rules

1. Keep one Cocos Creator project as the source of truth.
   - Shared gameplay and UI live in `assets/scripts`, scenes, prefabs, resources, and bundles.
   - Platform adapters stay narrow and explicit.
2. Decide targets early.
   - Android requires Android Studio, JDK, SDK, NDK, Gradle, package id, signing, ABI, orientation, and permission choices.
   - iOS and macOS require macOS, Xcode, signing identity, provisioning, bundle id, entitlements, and device or simulator selection.
   - Windows desktop requires the Cocos-supported native build toolchain and packaging assumptions for the chosen Creator version.
3. Keep browser-only assumptions out of native runtime code.
   - Do not depend on DOM, browser storage, browser-only networking APIs, pointer lock, or Web shell UI.
   - Use Cocos APIs and explicit native bridge or plugin boundaries for platform-specific features.
4. Treat native verification as platform-specific.
   - Web Preview is not enough for native.
   - Run on a simulator/emulator when appropriate and on real devices before calling mobile work production-ready.
5. Keep performance budgets platform-aware.
   - Watch memory, texture compression, startup time, thermal cost, frame pacing, shader variants, and package size.

## Native Project Checklist

- Target platforms and minimum OS versions
- Package or bundle identifiers
- Orientation and safe-area policy
- Input model: touch, keyboard, controller, mouse, sensors
- Asset bundle and remote asset policy
- Texture compression and audio format choices
- Save storage and privacy-sensitive data policy
- Permissions and entitlements
- Signing, provisioning, and app-store metadata requirements
- Device test matrix
- Crash/log collection approach

## Platform Notes

### Android

- Use Android Studio and the Creator-supported SDK/NDK versions.
- Decide `minSdkVersion`, `targetSdkVersion`, ABI set, orientation, permissions, and signing before release builds.
- Test back button, pause/resume, audio focus, safe areas, input latency, memory pressure, and install/update flows.

### iOS

- Requires macOS and Xcode.
- Decide bundle id, team, signing, provisioning, orientations, launch screen, safe areas, and entitlements.
- Test real devices for touch latency, audio session behavior, background/foreground, memory pressure, and notch/safe-area handling.

### macOS And Windows Desktop

- Decide window mode, resolution policy, input mapping, storage paths, controller support, and packaging expectations.
- Test resize, fullscreen, high-DPI scaling, keyboard focus, file paths, and shutdown behavior.

## Anti-Patterns

- Treating native as a Web build wrapped in a shell.
- Adding DOM UI or browser-only APIs to gameplay code.
- Hiding platform-specific behavior inside broad gameplay systems.
- Claiming native support after only running browser Preview.
- Shipping mobile builds without real-device checks for safe areas, pause/resume, memory, and input latency.

## References

- Strict Cocos runtime policy: `../../references/strict-cocos-runtime-policy.md`
- Native build targets: `../../references/cocos-native-build-targets.md`
- Cocos Creator stack: `../../references/cocos-creator-stack.md`
- Cocos Creator editor workflow: `../../references/cocos-creator-editor-workflow.md`
- Playtest checklist: `../../references/playtest-checklist.md`
