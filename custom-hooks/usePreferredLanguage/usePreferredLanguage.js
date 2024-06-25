import * as React from "react";

const subscribe = (cb) => {
  window.addEventListener("languagechange", cb);
  return () => {
    window.removeEventListener("languagechange", cb);
  };
}

const getSnapshot = () => navigator.language;

const getServerSnapshot = () => {
  throw new Error("usePreferredLanguage is a client-only hook")
}

export default function usePreferredLanguage() {
  return React.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
};
