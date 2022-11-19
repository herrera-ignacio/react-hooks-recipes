import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    document.title = "You clicked " + count + " times";

    // You can run conditional logic
    if (count === 3) {
      console.log("You clicked 3 times!");
    }
  });
  
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Count: {count}</p>
        <button onClick={() => setCount(count+1)}>+1</button>
    </div>
  );
}

export default App;
