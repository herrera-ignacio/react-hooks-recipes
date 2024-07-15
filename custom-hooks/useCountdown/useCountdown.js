import * as React from "react";

React.useEffectEvent = React.experimental_useEffectEvent;

export default function useCountdown(endTime, { interval, onTick, onComplete }) {
  const [count, setCount] = React.useState(null);
  const intervalIdRef = React.useRef(null);

  const handleClearInterval = () => window.clearInterval(intervalIdRef.current);

  const onInterval = React.useEffectEvent(() => {
    if (count === 0) {
      handleClearInterval();
      onComplete();
    } else {
      setCount(c => c - 1);
      onTick();
    }
  });

  React.useEffect(() => {
    setCount(Math.round((endTime - Date.now()) / interval));
  }, [endTime, interval]);

  React.useEffect(() => {
    intervalIdRef.current = window.setInterval(onInterval, interval);
    return handleClearInterval;
  })

  return count;
}
