import { NEXT_BLOCK, MOVE_BLOCK, START_LINES, MATRIX, CLEAR_LINES, POINTS, MAX, PAUSE, RESET, LOCK, SPEED_START, SPEED_RUN } from './../until/reducerType';
import { BlockType, MatrixPoint } from './../until/const';
import { actionCreator, actionCreator_1 } from "../until/action";
import TetrisBlock, { TetrisBlockOption } from "../control/tetrisBlock";
import { List } from 'immutable';
import MatrixManager from '../control/matrixManager';


export default {
    nextBlock: actionCreator<BlockType>(NEXT_BLOCK, MatrixManager.getNextType()),
    moveBlock: actionCreator_1<TetrisBlockOption>(MOVE_BLOCK),
    startLines: actionCreator(START_LINES, 0),
    matrix: actionCreator<List<List<MatrixPoint>>>(MATRIX),
    clearLines: actionCreator(CLEAR_LINES, 0),
    points: actionCreator(POINTS, 0),
    max: actionCreator(MAX, 0),
    pause: actionCreator(PAUSE, false),
    reset: actionCreator(RESET, false),
    lock: actionCreator(LOCK, false),
    speedStart: actionCreator(SPEED_START, 0),
    speedRun: actionCreator(SPEED_RUN, 0),
};