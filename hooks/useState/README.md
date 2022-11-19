# `useState`

> [`useState` API docs](https://reactjs.org/docs/hooks-reference.html#usestate)

- [`useState`](#usestate)
  - [Overview](#overview)
  - [Functional updates](#functional-updates)
  - [Lazy initial state](#lazy-initial-state)
  - [Bailing out of a state update](#bailing-out-of-a-state-update)
  - [Batching of state updates](#batching-of-state-updates)

## Overview

```js
const [state, setState] = useState(initialState);
```

Returns a stateful value, and a function to update it.

During the initial render, the returned state (`state`) is the same as the value passed as the first argument (`initialState`). During subsequent re-renders, the first value returned by `useState` will always be the most recent state after applying updates.

> React guarantees that `setState` function identity is stable and won’t change on re-renders. This is why it’s safe to omit from the `useEffect` or `useCallback` dependency list.

## Functional updates

If the new state is computed using the previous state, you can pass a function to `setState`. The function will receive the previous value, and return an updated value.

> See [example](./functional-update)

## Lazy initial state

If the initial state is the result of an expensive computation, you may provide a function instead, which will be executed only on the initial render:

## Bailing out of a state update

If you update a State Hook to the same value as the current state, React will bail out without rendering the children or firing effects. (React uses the Object.is comparison algorithm.)

Note that React may still need to render that specific component again before bailing out. That shouldn’t be a concern because React won’t unnecessarily go “deeper” into the tree.

## Batching of state updates

React may group several state updates into a single re-render to improve performance. Normally, this improves performance and shouldn’t affect your application’s behavior.

In the rare case that you need to force the DOM update to be applied synchronously, you may wrap it in `flushSync`. However, this can hurt performance so do this only where needed.

> [`flushSync` docs](https://reactjs.org/docs/react-dom.html#flushsync)

```js
// Force this state update to be synchronous.
flushSync(() => {
  setCount(count + 1);
});
// By this point, DOM is updated.
```
