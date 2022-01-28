import { useReducer } from "react";

import {actions} from './actions';
import { CountState, CountActions} from './types';

const reducer = (state: CountState, action: CountActions) => {
  switch (action.type) {
    case actions.INCREMENT:
      return {
        ...state,
        count: state.count + 1
      };
    case actions.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default function useCountReducer() {
  const [ state, dispatch ] = useReducer(reducer, { count: 0 });

  const increment = () => dispatch({ type: actions.INCREMENT })
  const decrement = () => dispatch({ type: actions.DECREMENT })

  return {
    state,
    actions: {
      increment,
      decrement,
    }
  }
}

