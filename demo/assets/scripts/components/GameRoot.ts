import {
  _decorator,
  Color,
  Component,
  EventKeyboard,
  Graphics,
  input,
  Input,
  Node,
  UITransform,
  Vec3,
} from 'cc';
import { KEYBOARD_ACTIONS } from '../input/InputActions';
import {
  ARENA_HEIGHT,
  ARENA_WIDTH,
  createGameState,
  stepGame,
  type DroneState,
  type GameInput,
  type GameState,
  type ShardState,
} from '../simulation/GameState';
import { HudController } from '../ui/HudController';

const { ccclass, property } = _decorator;

@ccclass('GameRoot')
export class GameRoot extends Component {
  @property(Graphics)
  public worldGraphics: Graphics | null = null;

  @property(HudController)
  public hud: HudController | null = null;

  private state: GameState = createGameState();
  private readonly inputState: GameInput = {};

  protected start() {
    this.worldGraphics = this.worldGraphics ?? this.ensureWorldGraphics();
    if (this.hud) {
      this.hud.onRestartRequested = () => this.resetGame();
    }
    input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
    input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
    this.resetGame();
  }

  protected onDestroy() {
    input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this);
    input.off(Input.EventType.KEY_UP, this.onKeyUp, this);
    if (this.hud) {
      this.hud.onRestartRequested = null;
    }
  }

  protected update(deltaTime: number) {
    stepGame(this.state, this.inputState, Math.min(deltaTime, 0.04));
    this.drawWorld();
    this.hud?.sync(this.state);
  }

  public resetGame(seed = Math.floor(Math.random() * 9000) + 1) {
    this.state = createGameState({ seed });
    this.drawWorld();
    this.hud?.sync(this.state);
  }

  private onKeyDown(event: EventKeyboard) {
    const action = KEYBOARD_ACTIONS.get(event.keyCode);
    if (action) {
      this.inputState[action] = true;
    }
  }

  private onKeyUp(event: EventKeyboard) {
    const action = KEYBOARD_ACTIONS.get(event.keyCode);
    if (action) {
      this.inputState[action] = false;
    }
  }

  private ensureWorldGraphics() {
    const worldNode = new Node('WorldGraphics');
    worldNode.setParent(this.node);
    worldNode.addComponent(UITransform).setContentSize(ARENA_WIDTH, ARENA_HEIGHT);
    worldNode.setPosition(new Vec3(0, 0, 0));
    return worldNode.addComponent(Graphics);
  }

  private drawWorld() {
    const graphics = this.worldGraphics;
    if (!graphics) return;

    graphics.clear();
    this.drawBackground(graphics);
    for (const shard of this.state.shards) this.drawShard(graphics, shard);
    for (const drone of this.state.drones) this.drawDrone(graphics, drone);
    this.drawPlayer(graphics);
    this.drawEndState(graphics);
  }

  private drawBackground(graphics: Graphics) {
    graphics.fillColor = new Color(8, 29, 44, 255);
    graphics.rect(-ARENA_WIDTH / 2, -ARENA_HEIGHT / 2, ARENA_WIDTH, ARENA_HEIGHT);
    graphics.fill();

    graphics.strokeColor = new Color(137, 211, 184, 36);
    graphics.lineWidth = 1;
    for (let x = 40; x < ARENA_WIDTH; x += 40) {
      graphics.moveTo(this.stageX(x), this.stageY(0));
      graphics.lineTo(this.stageX(x), this.stageY(ARENA_HEIGHT));
    }
    for (let y = 40; y < ARENA_HEIGHT; y += 40) {
      graphics.moveTo(this.stageX(0), this.stageY(y));
      graphics.lineTo(this.stageX(ARENA_WIDTH), this.stageY(y));
    }
    graphics.stroke();

    graphics.strokeColor = new Color(255, 255, 255, 56);
    graphics.lineWidth = 3;
    graphics.rect(this.stageX(18), this.stageY(ARENA_HEIGHT - 18), ARENA_WIDTH - 36, ARENA_HEIGHT - 36);
    graphics.stroke();
  }

  private drawShard(graphics: Graphics, shard: ShardState) {
    if (shard.collected) return;
    const bob = Math.sin(this.state.elapsed * 4 + shard.phase) * 4;
    const x = this.stageX(shard.x);
    const y = this.stageY(shard.y + bob);

    graphics.fillColor = new Color(248, 201, 65, 255);
    graphics.strokeColor = new Color(255, 245, 183, 255);
    graphics.lineWidth = 2;
    graphics.moveTo(x, y + 14);
    graphics.lineTo(x + 14, y);
    graphics.lineTo(x, y - 14);
    graphics.lineTo(x - 14, y);
    graphics.close();
    graphics.fill();
    graphics.stroke();
  }

  private drawDrone(graphics: Graphics, drone: DroneState) {
    const pulse = 1 + Math.sin(this.state.elapsed * 5 + drone.phase) * 0.08;
    const radius = drone.radius * pulse;
    const x = this.stageX(drone.x);
    const y = this.stageY(drone.y);

    graphics.fillColor = new Color(229, 72, 87, 255);
    graphics.circle(x, y, radius);
    graphics.fill();

    graphics.fillColor = new Color(56, 21, 28, 255);
    graphics.rect(x - 13, y - 4, 26, 8);
    graphics.fill();

    graphics.fillColor = new Color(255, 213, 217, 255);
    graphics.rect(x - 8, y - 2, 16, 4);
    graphics.fill();
  }

  private drawPlayer(graphics: Graphics) {
    const { player } = this.state;
    const x = this.stageX(player.x);
    const y = this.stageY(player.y);
    const angle = Math.atan2(-player.facingY, player.facingX);
    const flash = player.invulnerable > 0 && Math.floor(this.state.elapsed * 14) % 2 === 0;
    const points = [
      new Vec3(24, 0, 0),
      new Vec3(-15, 17, 0),
      new Vec3(-8, 0, 0),
      new Vec3(-15, -17, 0),
    ].map((point) => this.rotatePoint(point, angle, x, y));

    graphics.fillColor = flash ? new Color(255, 255, 255, 255) : new Color(75, 213, 197, 255);
    graphics.strokeColor = new Color(215, 255, 249, 255);
    graphics.lineWidth = 2;
    graphics.moveTo(points[0].x, points[0].y);
    for (let index = 1; index < points.length; index += 1) {
      graphics.lineTo(points[index].x, points[index].y);
    }
    graphics.close();
    graphics.fill();
    graphics.stroke();
  }

  private drawEndState(graphics: Graphics) {
    if (this.state.status === 'playing') return;
    graphics.fillColor = new Color(8, 14, 22, 198);
    graphics.rect(-ARENA_WIDTH / 2, -ARENA_HEIGHT / 2, ARENA_WIDTH, ARENA_HEIGHT);
    graphics.fill();
  }

  private rotatePoint(point: Vec3, angle: number, offsetX: number, offsetY: number) {
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    return new Vec3(
      point.x * cos - point.y * sin + offsetX,
      point.x * sin + point.y * cos + offsetY,
      0,
    );
  }

  private stageX(x: number) {
    return x - ARENA_WIDTH / 2;
  }

  private stageY(y: number) {
    return ARENA_HEIGHT / 2 - y;
  }
}
