import * as React from "react";

React.useEffectEvent = React.experimental_useEffectEvent;

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function useRandomInterval(cb, { minDelay, maxDelay }) {
  const timeout = React.useRef(null);
  const onInterval = React.useEffectEvent(cb);

  const handleClearTimeout = React.useCallback(() => {
    if (timeout.current) {
      window.clearTimeout(timeout.current);
      timeout.current = null;
    }
  }, []);

  React.useEffect(() => {
    const tick = () => {
      const intervalMs = getRandomNumber(minDelay, maxDelay)
      timeout.current = window.setTimeout(() => {
        onInterval();
        // Recursive call will schedule the next timeout with a new random interval
        tick();
      }, intervalMs);
    };

    // Call once to get started
    tick();

    return handleClearTimeout;
  }, [minDelay, maxDelay, handleClearTimeout])

  return handleClearTimeout;
}
