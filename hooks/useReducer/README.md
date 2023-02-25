# `useReducer`

- [`useReducer`](#usereducer)
  - [Consolidate state logic](#consolidate-state-logic)
  - [Differences with `useState`](#differences-with-usestate)
  - [The reducer function](#the-reducer-function)
    - [`Array.prototype.reduce`](#arrayprototypereduce)

## Consolidate state logic

You can move the state logic into a single function outside your component, called a __reducer__, to reduce complexity as your component grows.

## Differences with `useState`

> Instead of "setting tasks" via an event handler, you're dispatching an "added/changed/deleted task" action. This is more descriptive of the user's intent.

- __Readability__: `useReducer` lets you clearly separate the _"how"_ of update logic from the _"what happened"_ from event handlers. Instead of telling React "what to do" by setting state, you specify _"what the user just did"_ by dispatching __actions__ from your event handlers.
- __Debugging__: With `useState` it can be difficult to tell _where_ the state was set incorrectly, and _why_. With `useReducer` you can add a console log to see every state update, and _why_ it happened (i.e., due to which `action`).
- __Testing__: A reducer is a pure function that doesn't depend on your component. Therefore, you can export and test it in isolation.

## The reducer function

A reducer function is where you put your state logic. It takes two arguments, the current state and the action object, and it returns the next state.

```js
function yourReducer(state, action) {
  // return next state for React to set
}
```

### `Array.prototype.reduce`

Reducers are named after the `Array.prototype.reduce()` function that lets you "accumulate" a single value out of many in an array. Similarly, reducers take the state so far and the action, and return the next state. In this way, they __acumulate actions over time into state__.

You could even use the `reduce()` method with an `initialState` and an array of `actions` to calculate the final state by passing your reducer function to it.

```js
const finalState = actions.reduce(tasksReducer, initialState);
```

## Concise reducers with Immer

You can use [`useImmerReducer`](https://github.com/immerjs/use-immer#useimmerreducer) to make reducers more concise and allow mutations.

Reducers must be pure, so they shouldn't mutate the state. But under the hood, Immer will create a copy of your state with the mutations you made.
