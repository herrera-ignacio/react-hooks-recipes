import * as React from "react";

React.useEffectEvent = React.experimental_useEffectEvent;

export default function useTimeout(cb, ms) {
  // We want to avoid re-creating the timeout on every render
  // if the consumer doesn't memoize the cb function.
  const onTimeout = React.useEffectEvent(cb);
  const timeoutRef = React.useRef(null);

  const handleClearTimeout = React.useCallback(() => {
    clearTimeout(timeoutRef.current);
  }, []);

  React.useEffect(() => {
    timeoutRef.current = setTimeout(onTimeout, ms);

    return handleClearTimeout;
  }, [ms, handleClearTimeout]);

  return handleClearTimeout;
}
