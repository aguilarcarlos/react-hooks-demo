import { useReducer } from "react";
import { ActionType } from './constants';
import { CounterState, Action } from './types';

const initialState: CounterState = {
  count: 0,
};

function reducer(state: CounterState, action: Action) {
  switch (action.type) {
    case ActionType.INCREMENT:
      return {
        ...state,
        count: state.count + 1
      };
    case ActionType.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
}

export default function useCounterReducer() {
  return useReducer(reducer, initialState);
}