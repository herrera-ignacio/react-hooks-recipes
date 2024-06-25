import * as React from "react";

export default function useToggle(defaultValue = true) {
  const [value, setValue] = React.useState(!!defaultValue);

  const updateValue = React.useCallback((newValue) => {
    if (typeof newValue === "boolean") {
      setValue(newValue)
    } else {
      setValue(v => !v);
    }
  }, [])

  return [value, updateValue]
}
