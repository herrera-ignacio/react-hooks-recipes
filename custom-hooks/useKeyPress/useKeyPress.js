import * as React from "react";

React.useEffectEvent = React.experimental_useEffectEvent;

export default function useKeyPress(key, cb, options = {}) {
  const {
    event = "keydown",
    target = window ?? null,
    eventOptions
  } = options;

  const onKeyPress = React.useEffectEvent((e) => {
    if (e.key === key) {
      cb(e);
    }
  });

  React.useEffect(() => {
    target.addEventListener(event, onKeyPress, eventOptions);
    return () => target.removeEventListener(event, onKeyPress, eventOptions)
  }, [key, target, event, options])
}
