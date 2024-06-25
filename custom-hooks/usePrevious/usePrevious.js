import * as React from "react";

export default function usePrevious(value) {
  const [next, setNext] = React.useState(value);
  const [prev, setPrev] = React.useState(null);

  if (value !== next) {
    setPrev(next);
    setNext(value);
  }

  return prev;
}
