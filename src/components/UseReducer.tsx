import { useReducer } from "react";

type CountState = {
  name: string;
  count: number;
};

enum actions {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
  CHANGE_NAME = 'CHANGE_NAME'
}

type GAction = {
  type: actions.INCREMENT,
} | {
  type: actions.DECREMENT,
} | {
  type: actions.CHANGE_NAME,
  payload: {
    name: string;
  },
};

const reducer = (state: CountState, action: GAction) => {
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
    case actions.CHANGE_NAME:
      return {
        ...state,
        name: 'Hector',
      };
    default:
      return state;
  }
};

export default function UseReducer() {
  const [ state, dispatch ] = useReducer(reducer, {
    name: 'Fabian',
    count: 0,
  });

  const changeName = (name: string) => {
    dispatch({
      type: actions.CHANGE_NAME,
      payload: {
        name,
      }
    });
  }

  const increment = () => dispatch({ type: actions.INCREMENT })
  const decrement = () => dispatch({ type: actions.DECREMENT })

  return (
    <>
      <h1>{state.name}</h1>
      <button onClick={() => changeName('Hector')}>Change Name</button>
      <h1>{state.count}</h1>
      <button onClick={() => increment()}>Increment</button>
      <button onClick={() => decrement()}>Decrement</button>
    </>
  )
}
