import * as React from "react";

React.useEffectEvent = React.experimental_useEffectEvent;

export default function useInterval(cb, ms) {
  const interval = React.useRef(null);
  // cb could be reactive but non-synchronizing
  // we don't want to recreate the interval on every cb change
  // (e.g., consumer forgets to wrap it with useCallback)
  const onInterval = React.useEffectEvent(cb);

  const handleClearInterval = React.useCallback(() => {
    if (interval?.current) {
      clearInterval(interval.current);
      interval.current = null;
    }
  }, []);

  React.useEffect(() => {
    interval.current = setInterval(onInterval, ms)

    return handleClearInterval;
  }, [ms, handleClearInterval]);

  return handleClearInterval;
}
