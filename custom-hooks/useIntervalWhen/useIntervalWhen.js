import * as React from "react";

React.useEffectEvent = React.experimental_useEffectEvent;

export default function useIntervalWhen(cb, { ms, when, startImmediately }) {
  const intervalRef = React.useRef();
  const onInterval = React.useEffectEvent(cb);
  const immediatelyCalled = React.useRef(startImmediately === true ? false : null);

  const handleClearInterval = React.useCallback(() => {
    window.clearInterval(intervalRef.current);
    intervalRef.current = null;
    immediatelyCalled.current = false;
  }, []);

  React.useEffect(() => {
    if (when) {
      if (startImmediately && !immediatelyCalled.current) {
        immediatelyCalled.current = true;
        onInterval();
      }

      intervalRef.current = window.setInterval(() => {
        onInterval();
      }, ms);

      return handleClearInterval;
    }
  }, [ms, when, handleClearInterval]);

  return handleClearInterval;
}
