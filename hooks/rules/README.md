# Rules of hooks

## Overview

Hooks are defined using JavaScript functions, but they represent a special type of reusable UI logic
with restrictions on where they can be called.

React documentation provides us with [a list of rules](https://react.dev/reference/rules/rules-of-hooks)
Besides that, there are other 3 rules that we will consider with strong practical implications.

## Official rules of hooks

> Check [the official documentation](https://react.dev/reference/rules/rules-of-hooks) for latest reference.

- Only call hooks at the top level.
  - Do not call hooks inside conditions or loops.
  - Do not call hooks in event handlers.
  - Do not call hooks inside functions passed to `useMemo`, `useReducer` or `useEffect`.
  - Do not call hooks inside `try`/`catch`/`finally` blocks.
- Only call hooks from React functions.

## 3 practical rules

Most of the time, you should be able to apply these 3 practical rules. There are some exceptions to the rule 3.

1. When a component renders, it should do so without running into any side effects.
2. If a side effect is triggered by an event, put that side effect in an event handler.
3. If a side effect is synchronizing your component with some outside system, put it inside `useEffect`.
   - If the side effect needs to run _before_ the browser paints the screen, put it inside `useLayoutEffect`.
   - If the side effect is subscribing o an external store, use the `useSyncExternalStore` hook.
