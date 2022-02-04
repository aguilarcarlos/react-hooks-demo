import { useMemo } from 'react';
import useCounterReducer from './reducer';
import { ActionType } from './constants';
import { CounterState, CounterActions } from './types';

export default function useActions(): [CounterState, CounterActions]  {
  const [ state, dispatch] = useCounterReducer();

  const actions: CounterActions = useMemo(()  => ({
    increment: () => dispatch({
      type: ActionType.INCREMENT,
    }),

    decrement: () => dispatch({
      type: ActionType.DECREMENT,
    }),

  }), [dispatch]);

  return [state, actions];
}