import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { ThemeContext, themes } from './context/ThemeContext';
import Tooltip from './components/Tooltip';

function App() {
  const [theme, setTheme] = useState(themes.light);
  
  const toggleTheme = React.useCallback(() => {
    setTheme(prevTheme => {
      if (prevTheme.id === 'light') {
        return themes.dark;
      } else {
        return themes.light;
      }
    })}, []);
  
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {/* Renders ThemedButton that consumes ThemeContext */}
        <Tooltip />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
