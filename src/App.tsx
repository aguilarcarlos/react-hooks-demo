import './App.css';

import UseState from './components/UseState';
import UseReducer from './components/UseReducer';
import UseEffect from './components/UseEffect';
import Counter from './components/counter';

function App() {
  return (
    <div className="App">
      <UseState />
      <hr />
      <UseReducer />
      <hr />
      <Counter />
      <hr />
      <UseEffect />
    </div>
  );
}

export default App;
