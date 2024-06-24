import * as React from "react";

export default function useDefault(initialState, defaultValue) {
  const [state, setState] = React.useState(initialState);

  return [state === null || state === undefined ? defaultValue : state, setState];
}
