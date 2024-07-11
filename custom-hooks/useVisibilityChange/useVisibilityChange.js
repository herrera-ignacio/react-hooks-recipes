import * as React from "react";

const subscribe = (cb) => {
  document.addEventListener("visibilitychange", cb);
  return () => document.removeEventListener("visibilitychange", cb);
}

const getSnapshot = () => document.visibilityState;

const getServerSnapshot = () => throw new Error("useVisibilityChange is client-side only!");

export default function useVisibilityChange() {
  const visibilityState = React.useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  return visibilityState === "visible";
}
