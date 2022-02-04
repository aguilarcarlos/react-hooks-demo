import { createContext, PropsWithChildren, useContext } from "react";
import { CounterState, CounterActions} from './types';
import useActions from './actions';

const CounterStateContext = createContext<CounterState | null>(null);
const CounterActionContext = createContext<CounterActions | null>(null);

export default function CounterProvider({ children }: PropsWithChildren<{}>) {
  const [state, actions] = useActions();

  return (
    <CounterStateContext.Provider value={state}>
      <CounterActionContext.Provider value={actions}>
        {children}
      </CounterActionContext.Provider>
    </CounterStateContext.Provider>
  );
}

export function useCounterState(): CounterState {
  const context = useContext(CounterStateContext);

  if (!context) {
    throw new Error('useCounterState must be within CounterProvider');
  }

  return context;
}

export function useCounterAction(): CounterActions {
  const context = useContext(CounterActionContext);

  if (!context) {
    throw new Error('useCounterAction must be within CounterProvider');
  }

  return context;
}