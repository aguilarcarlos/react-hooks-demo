import { actions } from './actions';

export type CountState = {
  count: number;
};

export type CountActions = {
  type: actions.INCREMENT,
} | {
  type: actions.DECREMENT,
};