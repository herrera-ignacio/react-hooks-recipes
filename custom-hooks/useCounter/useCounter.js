import * as React from "react";

export default function useCounter(startingValue = 0, options = {}) {
  const { min, max } = options;

  if (typeof min === "number" && startingValue < min) {
    throw new Error(
      `Your starting value of ${startingValue} is less than your min of ${min}.`
    );
  }

  if (typeof max === "number" && startingValue > max) {
    throw new Error(
      `Your starting value of ${startingValue} is greater than your max of ${max}.`
    );
  }

  const [count, setCount] = React.useState(startingValue);

  const increment = React.useCallback(() => {
    setCount(prevCount => {
      if (prevCount + 1 > max) {
        return prevCount;
      } else {
        return prevCount + 1;
      }
    });
  }, [max]);

  const decrement = React.useCallback(() => {
    setCount(prevCount => {
      if (prevCount - 1 < min) {
        return prevCount;
      } else {
        return prevCount - 1;
      }
    });
  }, [min]);

  const set = React.useCallback((nextCount) => {
    setCount(prevCount => {
      if (typeof max === "number" && nextCount > max) {
        return prevCount;
      }

      if (typeof min === "number" && nextCount < min) {
        return prevCount;
      }

      return nextCount;
    });
  }, [min, max]);

  const reset = React.useCallback(() => {
    setCount(startingValue)
  }, [startingValue]);

  return [
    count,
    {
      increment,
      decrement,
      set,
      reset
    }
  ];
}
