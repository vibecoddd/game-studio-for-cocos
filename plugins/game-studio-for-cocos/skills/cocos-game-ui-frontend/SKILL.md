---
name: cocos-game-ui-frontend
description: Design UI surfaces for Cocos Creator browser games. Use when the user asks for HUDs, menus, Cocos UI, external Web shells, responsive layouts, or visual direction that must protect the playfield.
---

# Game UI Frontend

## Overview

Use this skill whenever the game needs a visible interface layer. The job is not to produce generic dashboard UI. The job is to produce a readable, thematic browser-game interface that supports the play experience.

Default assumption: build in-game HUDs and menus in Cocos UI. DOM is allowed only for surrounding Web shell, account, tooling, documentation, or accessibility-heavy surfaces around a Cocos Creator Web build.

Hard gate: do not implement gameplay UI as a DOM-only or canvas-only substitute for Cocos UI. This skill designs Cocos UI first and optional external shell UI second.

## Frontend Standards

1. Establish visual direction before coding.
   - Genre and fantasy
   - Material language
   - Typography
   - Palette
   - Motion tone
2. Use CSS variables for the UI theme.
3. Build clear hierarchy.
   - Critical combat or survival information first
   - Secondary tools second
   - Rarely used settings behind menus or drawers
4. Protect the playfield first, especially in 3D.
   - The initial screen should feel playable within a few seconds.
   - Default to one primary persistent HUD cluster and at most one small secondary cluster.
   - Keep the center of the playfield clear during normal play.
   - Keep the lower-middle playfield mostly clear during normal play.
   - Put lore, field notes, quest details, and long control lists behind drawers, toggles, or pause surfaces.
   - Prefer contextual prompts and transient hints over permanent boxed panels.
5. Keep overlays readable over motion.
   - Use backing panels, edge treatment, contrast, and restrained blur where needed.
6. Design for both desktop and mobile from the start.
7. Design 3D UI around camera and input control boundaries.
   - Pause or gate camera-control input when menus, dialogs, or pointer-driven UI are active.
   - Keep pointer-lock, drag-to-look, and menu interaction states explicit.
8. Use Cocos UI conventions deliberately.
   - Use Canvas, UITransform, Widget, Layout, Sprite, Label, Button, Toggle, ScrollView, and prefabbed UI controllers when the UI should ship inside the Cocos scene.
   - Keep external DOM shell surfaces coordinated through explicit events instead of reaching into Cocos scene internals.
   - Keep gameplay HUD, menus, overlays, prompts, and mobile controls in Cocos UI unless the user explicitly scopes the surface as external Web shell.

## 3D Starter Defaults

For exploration, traversal, or third-person starter scaffolds, prefer this UI budget:

- one compact objective chip or status strip at the edge
- one transient controls hint or interaction prompt
- one optional collapsible secondary surface such as a journal, map, or quest log

Do not open every informational surface on first load. The scene should be readable before the user opens any deeper UI.

As a default implementation constraint for 3D Cocos browser games:

- no always-on full-width header plus multi-card body plus full-width footer layout
- no large center-screen or lower-middle overlays during normal movement
- no more than roughly 20-25% of the viewport covered by persistent HUD on desktop unless the user explicitly requests a denser layout
- on mobile, collapse to a narrow stack or contextual chips before covering the playfield with larger panels

## Prompting Rules

When asking the model to design or implement game UI, include:

- the game fantasy
- the camera or viewpoint
- the player verbs
- the HUD layers
- the camera or control mode when the game is 3D
- whether the surface is Cocos UI or an external DOM shell around a Cocos Web build
- the tone of motion
- desktop and mobile expectations
- playfield protection and disclosure strategy
- explicit anti-patterns to avoid

Use `../../references/frontend-prompts.md` for concrete prompt shapes.

## Motion Rules

- Prefer a few meaningful transitions over constant micro-animation.
- Reserve strong motion for state change, reward, danger, and onboarding.
- Respect reduced-motion settings for non-essential animation.
- Keep 3D HUD motion from competing with camera motion.

## What Good Looks Like

- HUD elements are legible without flattening the scene.
- Menus feel native to the game world, not like a SaaS admin panel.
- Layout adapts cleanly across breakpoints.
- Pointer, keyboard, and game-state feedback are obvious.
- In 3D games, menu and HUD states do not fight camera control or pointer-lock.
- In 3D games, the first playable view keeps most of the viewport available for movement, aiming, and spatial reading.
- Persistent information density is low enough that screenshots still read as game scenes, not UI comps.

## Anti-Patterns

- Generic app dashboard layouts
- Flat placeholder styling with no theme
- Default font stacks without intent
- Dense overlays that obscure the playfield
- Large title cards or multi-paragraph notes sitting over a live playable scene
- Equal-weight boxed panels distributed around every edge of the viewport
- Controls, objectives, notes, and lore all expanded at once on first load
- Full-width top-and-bottom chrome with large always-on center or body panels in 3D play
- Excessive motion on every element
- Raw canvas or DOM-only gameplay UI replacing Cocos UI
- DOM-only game HUD, menus, prompts, or mobile controls while using this plugin
- Forcing shell forms into the Cocos scene when standard DOM would be clearer
- Letting camera input remain active under modals or inventory panels

## References

- Strict Cocos runtime policy: `../../references/strict-cocos-runtime-policy.md`
- Shared architecture: `../cocos-game-foundations/SKILL.md`
- Prompt recipes: `../../references/frontend-prompts.md`
- Low-chrome 3D layout patterns: `../../references/cocos-hud-layout-patterns.md`
- Cocos Creator UI context: `../cocos-creator-game/SKILL.md`
- Playtest review: `../../references/playtest-checklist.md`
