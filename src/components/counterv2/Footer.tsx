import { useCounterAction } from '../../providers/CounterProvider';

const Footer = () => {
  const { increment, decrement } = useCounterAction();

  return (
    <>
      <button onClick={() => increment()}>Increment</button>
      <button onClick={() => decrement()}>Decrement</button>
    </>
  )
};

export default Footer;
