import React from 'react';
import { ThemeContext } from "../context/ThemeContext";

function ThemedButton() {
  const { theme, toggleTheme } = React.useContext(ThemeContext);

  return (
    <button
      style={{ background: theme.background, color: theme.foreground }}
      onClick={toggleTheme}
    >
      Toggle Theme
    </button>
  )
}

export default ThemedButton;
