import { useCounterState } from '../../providers/CounterProvider';
import Footer from './Footer';

const CounterV2 = () => {
  const { count } = useCounterState();
  return (
    <>
      <h1>{ count }</h1>
      <Footer />
    </>
  )
};

export default CounterV2;
