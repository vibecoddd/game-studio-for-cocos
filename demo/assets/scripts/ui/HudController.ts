import { _decorator, Button, Component, Label } from 'cc';
import type { GameState } from '../simulation/GameState';

const { ccclass, property } = _decorator;

@ccclass('HudController')
export class HudController extends Component {
  @property(Label)
  public scoreLabel: Label | null = null;

  @property(Label)
  public healthLabel: Label | null = null;

  @property(Label)
  public timeLabel: Label | null = null;

  @property(Label)
  public statusLabel: Label | null = null;

  @property(Button)
  public restartButton: Button | null = null;

  public onRestartRequested: (() => void) | null = null;

  protected start() {
    this.restartButton?.node.on(Button.EventType.CLICK, this.handleRestart, this);
  }

  protected onDestroy() {
    this.restartButton?.node.off(Button.EventType.CLICK, this.handleRestart, this);
  }

  public sync(state: GameState) {
    if (this.scoreLabel) {
      this.scoreLabel.string = `${state.score}/${state.shards.length}`;
    }
    if (this.healthLabel) {
      this.healthLabel.string = '♥'.repeat(Math.max(0, state.player.health));
    }
    if (this.timeLabel) {
      this.timeLabel.string = `${Math.floor(state.elapsed)}s`;
    }
    if (this.statusLabel) {
      this.statusLabel.string = this.statusText(state);
    }
  }

  private statusText(state: GameState) {
    if (state.status === 'won') return 'All shards secured';
    if (state.status === 'lost') return 'Core offline';
    return 'Collect all shards';
  }

  private handleRestart() {
    this.onRestartRequested?.();
  }
}
