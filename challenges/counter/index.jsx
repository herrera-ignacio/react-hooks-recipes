import * as React from "react";

export default function App() {
  const [count, setCount] = React.useState(0);

  return (
    <main>
      <span>{count}</span>
      <div>
        <button onClick={() => setCount(prev => prev - 1)}>-</button>
        <button onClick={() => setCount(prev => prev + 1)}>+</button>
      </div>
    </main>
  )
}
