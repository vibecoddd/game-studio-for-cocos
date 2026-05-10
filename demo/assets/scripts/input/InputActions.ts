import { KeyCode } from 'cc';
import type { GameInput } from '../simulation/GameState';

export type InputAction = keyof GameInput;

export const KEYBOARD_ACTIONS = new Map<KeyCode, InputAction>([
  [KeyCode.KEY_W, 'up'],
  [KeyCode.ARROW_UP, 'up'],
  [KeyCode.KEY_S, 'down'],
  [KeyCode.ARROW_DOWN, 'down'],
  [KeyCode.KEY_A, 'left'],
  [KeyCode.ARROW_LEFT, 'left'],
  [KeyCode.KEY_D, 'right'],
  [KeyCode.ARROW_RIGHT, 'right'],
]);
