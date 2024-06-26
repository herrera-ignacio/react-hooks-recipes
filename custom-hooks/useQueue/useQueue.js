import * as React from "react";

export default function useQueue(initialValue = []) {
  const [queue, setQueue] = React.useState(initialValue);

  const add = React.useCallback(val => {
    setQueue(queue => [...queue, val]);
  }, []);

  const remove = React.useCallback(() => {
    let removedElement;
    setQueue(([first, ...rest]) => {
      removedElement = first;
      return rest;
    });
    return removedElement;
  }, []);

  const clear = React.useCallback(() => {
    setQueue([]);
  }, []);

  return {
    add,
    remove,
    clear,
    first: queue[0],
    last: queue[queue.length - 1],
    size: queue.length,
    queue
  };
}
