import { ActionType } from './constants';

export type CounterState = {
  count: number;
};

export type CounterActions = {
  increment: () => void,
  decrement: () => void,
};

export type Action = {
  type: ActionType.INCREMENT,
} | {
  type: ActionType.DECREMENT,
};
