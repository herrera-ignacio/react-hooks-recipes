import * as React from "react";

export default function useThrottle(value, interval = 500) {
  const lastUpdated = React.useRef(null);
  const [throttledValue, setThrottledValue] = React.useState(value);

  React.useEffect(() => {
    const now = new Date();

    if (!lastUpdated.current || now >= lastUpdated.current + interval) {
      setThrottledValue(value);
      lastUpdated.current = now
    } else {
      const id = window.setTimeout(() => {
        setThrottledValue(value);
        lastUpdated.current = now; // + interval?
      }, interval);

      return () => window.clearTimeout(id);
    }
  }, [value, interval])

  return throttledValue;
}
