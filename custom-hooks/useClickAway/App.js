import * as React from "react";

React.useEffectEvent = React.experimental_useEffectEvent;

export default function useClickAway(cb) {
  const ref = React.useRef(null);

  const onClickAwayHandler = React.useEffectEvent((e) => {
    const element = ref.current;
    if (element && !element.contains(e.target)) {
      cb(e);
    }
  });

  React.useEffect(() => {
    document.addEventListener("mousedown", onClickAwayHandler);
    document.addEventListener("touchstart", onClickAwayHandler);

    return () => {
      document.removeEventListener("mousedown", onClickAwayHandler);
      document.removeEventListener("touchstart", onClickAwayHandler);
    }
  }, [])

  return ref;
}