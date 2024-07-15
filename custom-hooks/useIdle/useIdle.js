import * as React from "react";

function throttle(cb, ms) {
  let lastTime = 0;
  return () => {
    const now = Date.now();
    if (now - lastTime >= ms) {
      cb();
      lastTime = now;
    }
  };
}

const events = ["mousemove", "mousedown", "resize", "keydown", "touchstart", "wheel"];

export default function useIdle(ms = 1000 * 20) {
  const [idle, setIdle] = React.useState(false);

  React.useEffect(() => {
    let timeoutId;

    const handleTimeout = () => {
      setIdle(true);
    };

    const handleEvent = throttle(() => {
      setIdle(false);
      window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(handleTimeout, ms);
    }, 500);

    const handleVisibilityChange = () => {
      if (!document.hidden) {
        handleEvent();
      }
    };

    timeoutId = window.setTimeout(handleTimeout, ms);

    events.forEach(event => window.addEventListener(event, handleEvent))
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      events.forEach(event => window.removeEventListener(event, handleEvent))
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.clearTimeout(timeoutId);
    };
  }, [ms]);

  return idle;
}