import * as React from "react";

function ChildComponent({ children, onClick }) {
  console.count("Child component is rendering");

  return <button onClick={onClick}>{children}</button>;
}

const MemoizedChildComponent = ChildComponent;

export default function ParentComponent() {
  const [time, setTime] = React.useState(new Date().toLocaleTimeString());
  let count = 0;

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleIncrementCount = () => {};

  return (
    <div>
      <p>Current time: {time}</p>
      <p>Count: {count}</p>
      <MemoizedChildComponent onClick={handleIncrementCount}>
        Increment Count
      </MemoizedChildComponent>
    </div>
  );
}
