import * as React from "react";

export default function useMediaQuery(mq) {
  const subscribe = React.useCallback((cb) => {
    const mediaQuery = window.matchMedia(mq);
    mediaQuery.addEventListener("change", cb);
    return () => mediaQuery.removeEventListener("change", cb);
  }, [mq])

  const getSnapshot = React.useCallback(() => {
    return window.matchMedia(mq).matches;
  }, []);

  const getServerSnapshot = {
    throw new Error("useMediaQuery cannot be used on the server side");
  }

  return React.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
