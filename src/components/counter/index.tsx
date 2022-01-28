import useCountReducer from './reducer';

export default function UseReducer() {
  const { state, actions } = useCountReducer();

  return (
    <>
      <h1>{state.count}</h1>
      <button onClick={() => actions.increment()}>Increment</button>
      <button onClick={() => actions.decrement()}>Decrement</button>
    </>
  )
}