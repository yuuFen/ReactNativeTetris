import { Action } from './action';

export const PAUSE = 'PAUSE';
export const MUSIC = 'MUSIC';
export const MATRIX = 'MATRIX';
export const NEXT_BLOCK = 'NEXT_BLOCK';
export const MOVE_BLOCK = 'MOVE_BLOCK';
export const START_LINES = 'START_LINES';
export const MAX = 'MAX';
export const POINTS = 'POINTS';
export const SPEED_START = 'SPEED_START';
export const SPEED_RUN = 'SPEED_RUN';
export const LOCK = 'LOCK';
export const CLEAR_LINES = 'CLEAR_LINES';
export const RESET = 'RESET';
export const DROP = 'DROP';
export const KEY_DROP = 'KEY_DROP';
export const KEY_DOWN = 'KEY_DOWN';
export const KEY_LEFT = 'KEY_LEFT';
export const KEY_RIGHT = 'KEY_RIGHT';
export const KEY_ROTATE = 'KEY_ROTATE';
export const KEY_RESET = 'KEY_RESET';
export const KEY_MUSIC = 'KEY_MUSIC';
export const KEY_PAUSE = 'KEY_PAUSE';
export const FOCUS = 'FOCUS';

export let reducerCreator = <T>(type: string, initState: T) => (state: T = initState, action: Action<T>) =>  {
    switch (action.type) {
        case type:
            return action.data            
        default:
            return state
    }
}
  