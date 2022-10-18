import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [name, setName] = React.useState('');
  const inputRef = React.useRef<HTMLInputElement>(null);

  function focusInput() {
    inputRef.current?.focus();
  }

  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Enter your name</p>
        <input value={name} onChange={(e) => setName(e.target.value)} ref={inputRef} />
        <br/><br/>
        <button onClick={focusInput}>Focus input</button>
    </div>
  );
}

export default App;
