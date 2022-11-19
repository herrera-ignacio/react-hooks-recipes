import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [counter, setCounter] = React.useState(0);

  const addOne = () => {
    setCounter(prev => prev + 1);
  }

  const reset = () => {
    setCounter(0);
  }
  
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Count: {counter}</p>
      <button onClick={addOne}>+1</button>
      <br/><br/>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
