import * as React from "react";

const isPlainObject = (value) => {
  return Object.prototype.toString.call(value) === "[object Object]";
};

export default function useObjectState(initialValue) {
  const [state, setState] = React.useState(initialValue);

  const handleUpdate = React.useCallback((arg) => {
    const update = typeof arg === "function" ? arg(state) : arg;
    if (isPlainObject(update)) {
      setState(currentState => ({
        ...currentState,
        ...update
      }));
    }
  }, []);

  return [state, handleUpdate];
}
