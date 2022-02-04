import './App.css';

import UseState from './components/UseState';
import UseReducer from './components/UseReducer';
import UseEffect from './components/UseEffect';
import UseCallback from './components/UseCallback';
import UseContext from './components/UseContext';
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
      <CounterV2 />
    </div>
  );
}

export default App;
