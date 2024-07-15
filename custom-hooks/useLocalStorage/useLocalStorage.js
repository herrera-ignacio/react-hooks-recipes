import * as React from "react";

const dispatchStorageEvent = (key, newValue) => {
  window.dispatchEvent(new StorageEvent("storage", { key, newValue }));
};

const setItem = (key, value) => {
  const stringifiedValue = JSON.stringify(value);
  window.localStorage.setItem(key, stringifiedValue);
  dispatchStorageEvent(key, stringifiedValue);
};

const removeItem = (key) => {
  window.localStorage.removeItem(key);
  dispatchStorageEvent(key, null);
};

const getItem = (key) => {
  return window.localStorage.getItem(key);
};

const subscribe = (cb) => {
  window.addEventListener("storage", cb);
  return () => window.removeEventListener("storage", cb);
};

const getServerSnapshot = () => {
  throw Error("useLocalStorage is a client-only hook");
};

export default function useLocalStorage(key, initialValue) {
  const getSnapshot = () => getItem(key);

  const store = React.useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  // Update local storage with the new value
  const setState = React.useCallback((v) => {
    try {
      const nextState = typeof v === "function"
        ? v(JSON.parse(store))
        : v;

      if (nextState === undefined || nextState === null) {
        removeItem(key);
      } else {
        setItem(key, nextState);
      }
    } catch (e) {
      console.error(e);
    }
  }, [key, store]);

  // Initialize value if it doesn't exist
  React.useEffect(() => {
    if (getItem(key) === null && typeof initialValue !== "undefined") {
      setItem(key, initialValue);
    }
  }, [key, initialValue]);

  return [store ? JSON.parse(store) : initialValue, setState];
}
