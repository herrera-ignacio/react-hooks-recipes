import * as React from "react";

const initialState = {
  past: [],
  present: null,
  future: []
};

const reducer = (state, action) => {
  const { past, present, future, initialPresent } = state;

  if (action.type === "UNDO") {
    return {
      past: past.slice(0, past.length - 1),
      present: past[past.length - 1],
      future: [present, ...future],
      initialPresent
    };
  } else if (action.type === "REDO") {
    return {
      past: [...past, present],
      present: future[0],
      future: future.slice(1),
      initialPresent
    };
  } else if (action.type === "SET") {
    const { newPresent } = action;

    if (action.newPresent === present) {
      return state;
    }

    return {
      past: [...past, present],
      present: newPresent,
      future: [],
      initialPresent
    };
  } else if (action.type === "CLEAR") {
    return {
      ...initialState,
      present: initialPresent,
      initialPresent,
    };
  } else {
    throw new Error("Unsupported action type");
  }
};

export default function useHistoryState(initialPresent = {}) {
  const [state, dispatch] = React.useReducer(reducer, {
    ...initialState,
    present: initialPresent,
    initialPresent,
  })

  const canUndo = state.past.length > 0;
  const canRedo = state.future.length > 0;

  return {
    state: state.present,
    canUndo,
    canRedo,
    set: React.useCallback((newPresent) => {
      dispatch({ type: "SET", newPresent })
    }, []),
    undo: React.useCallback(() => {
      if (canUndo) {
        dispatch({ type: "UNDO" });
      }
    }, [canUndo]),
    redo: React.useCallback(() => {
      if (canRedo) {
        dispatch({ type: "REDO" })
      }
    }, [canRedo]),
    clear: React.useCallback(() => dispatch({ type: "CLEAR" }), [])
  };
}
