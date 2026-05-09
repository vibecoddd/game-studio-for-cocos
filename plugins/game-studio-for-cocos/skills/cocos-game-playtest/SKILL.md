---
name: cocos-game-playtest
description: Run Cocos Creator browser-game playtests and frontend QA. Use when the user asks for smoke tests, screenshot-based verification, browser automation, HUD or overlay review, Cocos Web build checks, or structured issue-finding.
---

# Game Playtest

## Overview

Use this skill to test Cocos Creator browser games the way players experience them: through boot, input, scene transitions, HUD readability, and visual state changes. Prefer browser automation and screenshot review when the project supports it.

## Preferred Workflow

1. Boot the game and confirm the first actionable screen.
2. Exercise the main verbs.
3. Capture screenshots from representative states.
4. Check the UI layer independently from the render layer.
5. Report findings in severity order with reproduction steps.

## Tooling Guidance

- Prefer Playwright or equivalent browser automation already available in the repo.
- When the game is Cocos canvas heavy, screenshots are mandatory because DOM assertions alone miss visual regressions.
- Use screenshots to judge playfield obstruction and HUD weight, not just correctness of text or layout.
- When deterministic automation is not practical, do a structured manual pass and capture evidence.
- For 3D rendering bugs or unexplained frame cost, use SpectorJS and browser performance tooling rather than guessing from code alone.

## Common Checks

### 2D checks

- sprite alignment and baseline consistency
- hit or hurt animation readability
- HUD overlap with the playfield
- command menu state changes
- tile or platform readability
- input-state feedback and turn-state clarity
- Cocos UI anchoring, Widget behavior, and Canvas scaling

### 3D checks

- first-load playability versus dashboard-like chrome
- persistent overlay weight versus playfield visibility
- camera control and camera reset behavior
- pointer-lock or drag-look transitions when menus and overlays open
- depth readability and silhouette clarity
- secondary panels collapsed or dismissible during normal play
- resize behavior
- Cocos Web build renderer fallback behavior
- material, lighting, or render pipeline regressions
- imported model or texture streaming stalls
- collision proxy or physics mismatch
- performance cliffs tied to post-processing or asset load

## Responsive and Browser Checks

- desktop and mobile viewport sanity
- safe-area and notch issues where relevant
- reduced-motion behavior for UI transitions
- keyboard, pointer, and pause-state handling
- DOM overlay and Cocos scene synchronization when the project uses a hybrid Web shell

## Reporting Standard

Lead with findings. Keep each finding concrete:

- what the user sees
- how to reproduce it
- why it matters
- what likely subsystem owns it

## References

- Shared architecture: `../cocos-game-foundations/SKILL.md`
- Frontend review cues: `../cocos-game-ui-frontend/SKILL.md`
- 3D debugging notes: `../../references/cocos-web-build-debugging-and-performance.md`
- Full checklist: `../../references/playtest-checklist.md`
