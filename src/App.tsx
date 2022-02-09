import './App.css';

import UseState from './components/UseState';
import UseReducer from './components/UseReducer';
import UseEffect from './components/UseEffect';
import UseCallback from './components/UseCallback';
import UseContext from './components/UseContext';
import UseImperative from './components/UseImperative';
import UseLayoutEffect from './components/UseLayoutEffect';
import Counter from './components/counter';

import CounterV2 from './components/counterv2';

function App() {
  return (
    <div className="App">
      {/*
      <UseState />
      <UseContext />
      <hr />
      <UseReducer />
      <hr />
      <Counter />
      <hr />
      <UseEffect />
      <hr /> 
      <UseCallback />
      */}
      <UseLayoutEffect />
      <CounterV2 />
      <UseImperative />
    </div>
  );
}

export default App;
