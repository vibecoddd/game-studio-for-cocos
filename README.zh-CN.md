# Game Studio for Cocos

[English](README.md)

Game Studio for Cocos 是一个 Codex 插件，沿用 OpenAI 官方 Game Studio 插件的产品形态，并将底层游戏开发指导替换为 Cocos Creator 3.x + TypeScript。

这个插件设计为可以和官方 `game-studio` 插件同时安装：

- 插件名：`game-studio-for-cocos`
- 显示名：`Game Studio for Cocos`
- 插件路径：`plugins/game-studio-for-cocos`
- 默认技术栈：Cocos Creator 3.x + TypeScript

## 能力范围

- Cocos Creator 2D 游戏架构指导。
- Cocos Creator 3D 游戏架构指导。
- 场景、预制体、组件、资源包、物理、UI 和 Web 构建工作流。
- 面向 Cocos 的浏览器游戏测试和 QA 检查清单。
- 保留官方 Game Studio 中的 2D sprite pipeline 脚本。

## 严格 Cocos 运行时策略

本插件对可玩的游戏、demo、prototype 实现强制限定为 Cocos：

- 使用 Cocos Creator 3.x + TypeScript。
- 目标必须是真实 Creator 项目结构，包含 `project.json`、`assets/scenes`、`assets/scripts`、`assets/prefabs`，以及 `resources` 或明确记录的 asset bundle 布局。
- gameplay 渲染、输入、HUD、菜单、动画、物理、场景和预制体必须走 Cocos。
- 不得用原生 HTML canvas、纯 DOM 游戏、Phaser、PixiJS、Three.js、React Three Fiber、Babylon.js、自定义 WebGL，或只是“Cocos 风格”的浏览器模拟来替代。
- 如果本机无法运行 Cocos Creator，则只能搭建兼容 Cocos 的项目结构并说明 editor/build 验证被阻塞，不能切换到其它引擎替代。

## 仓库 Metadata

建议的 GitHub 仓库描述：

```text
Codex Game Studio plugin for Cocos Creator 3.x and TypeScript browser games.
```

建议的 topics：

```text
codex-plugin, cocos-creator, cocos2d, cocos3d, typescript, browser-games, game-development
```

## 安装

将本仓库添加为 Codex 插件 marketplace：

```bash
codex plugin marketplace add https://github.com/vibecoddd/game-studio-for-cocos --sparse .agents/plugins
```

然后在 Codex 的插件设置中，从新增的 marketplace 安装 `Game Studio for Cocos`。

如果是本地开发，可以从本地 checkout 添加：

```bash
codex plugin marketplace add /path/to/game-studio-for-cocos --sparse .agents/plugins
```

## 在 Codex 中使用

安装插件后，启动新的 Codex 会话，让插件技能完成加载。可以用自然语言触发，例如：

```text
Use Game Studio for Cocos to plan a Cocos Creator 3.x browser game.
```

```text
Build a Cocos Creator 2D action prototype with TypeScript, prefabs, and a HUD.
```

```text
Review this Cocos Creator 3D scene architecture and asset pipeline.
```

主入口技能是 `game-studio-for-cocos`。专项技能包括 `cocos-2d-game`、`cocos-3d-game`、`cocos-creator-game`、`cocos-game-ui-frontend`、`cocos-sprite-pipeline` 和 `cocos-game-playtest`。

## 游戏 Demo

本仓库包含 `demo/`，它现在是 Cocos Creator 3.x + TypeScript 版本的 Cocos Crystal Dash。旧的原生浏览器 canvas 运行时已经从 demo 入口移除。

本次提交环境没有安装 Cocos Creator，因此下面的图片保留为当前视觉参考；后续需要从 Cocos Creator Preview 或 Web build 重新生成运行时截图。

![Cocos Crystal Dash 视觉参考](demo/screenshots/cocos-crystal-dash.png)

用 Cocos Creator 打开：

```text
demo/
```

然后创建或打开 `Game` 场景，并按下面文件说明在 Inspector 中完成属性绑定：

```text
demo/assets/scenes/README.md
```

操作方式：

- 移动：`WASD` 或方向键
- 目标：收集所有水晶碎片，并避开巡逻无人机
- 重新开始：点击界面里的 `Restart` 按钮

## 目录结构

```text
demo/
  project.json
  assets/
    scenes/
    scripts/
    prefabs/
    resources/
  settings/
  screenshots/
plugins/game-studio-for-cocos/
  .codex-plugin/plugin.json
  assets/
  references/
  scripts/
  skills/
```

## 验证记录

本插件已经按与官方 Game Studio 同时安装的场景做过检查：

- 插件名无重复
- 显示名无重复
- skill frontmatter 名称无重复
- agent 显示名无重复
- manifest 中的资源路径可解析
- Markdown 内部引用可解析
- demo 的 Cocos 项目结构和 simulation 测试通过 `node --test demo/test/*.test.mjs`
- Cocos Creator Preview/Web build 需要在已安装 Cocos Creator 3.x 的环境中验证
