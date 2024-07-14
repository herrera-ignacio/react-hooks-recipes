import * as React from "react";

React.useEffectEvent = React.experimental_useEffectEvent;

export default function useLogger(name, ...rest) {
  const isInitialRender = React.useRef(true);
  const handleLog = React.useEffectEvent(event => {
    console.log(`${name} ${event}:`, rest)
  });

  React.useEffect(() => {
    if (!isInitialRender.current) {
      // is not first render
      handleLog("updated");
    }
  })

  React.useEffect(() => {
    handleLog("mounted");
    isInitialRender.current = false;

    return () => {
      handleLog("unmounted");
      // I believe this is not needed because when unmounted,
      // the ref should be destroyed
      // isInitialRender.current = true;
    }
  }, [])
}
