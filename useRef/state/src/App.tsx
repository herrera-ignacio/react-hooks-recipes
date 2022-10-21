import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [text, setText] = React.useState('');

  // Keeping mutable values without re-rendering
  const renders = React.useRef({
    count: 0,
  });

  // Tracking state changes
  const previousText = React.useRef({
    text: '',
  });

  // will run after each render
  React.useEffect(() => {
    renders.current.count++;
    previousText.current.text = text;
  });

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Type something!</p>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <br/>
      <p>Previous text: {previousText.current.text}</p>
      <p>Renders: {renders.current.count}</p>
    </div>
  );
}

export default App;
