import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [runInterval, setRunInterval] = useState(false);
  const [ticks, setTicks] = useState(0);

  useEffect(() => {
    if (runInterval) {
      const interval = setInterval(() => {
        setTicks(ticks + 1);
      }, 1000); 

      return () => {
        clearInterval(interval);
      }
    }
    // If anything but what's on the array changes, we skip this effect
  }, [runInterval, ticks]);

  // console.log("Re-render");

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Run interval: {runInterval ? "Yes" : "No"}
        <br/>
        Ticks: {ticks}
      </p>
      <button onClick={() => runInterval ? setRunInterval(false) : setRunInterval(true)}>
        {runInterval ? "Stop" : "Start"}
      </button>
    </div>
  );
}

export default App;
