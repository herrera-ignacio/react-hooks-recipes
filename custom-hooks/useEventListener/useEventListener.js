import * as React from "react";

React.useEffectEvent = React.experimental_useEffectEvent;

export default function useEventListener(target, eventName, handler, options) {
  const onEvent = React.useEffectEvent(handler);

  React.useEffect(() => {
    const element = target.current ?? target;
    if (element?.addEventListener) {
      element.addEventListener(eventName, handler, options);

      return () => {
        element.removeEventListener(eventName, handler);
      }
    }
  }, [target, eventName, options]);
}
