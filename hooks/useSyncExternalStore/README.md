# useSyncExternalStore

<!-- TOC -->
* [useSyncExternalStore](#usesyncexternalstore)
  * [Overview](#overview-)
<!-- TOC -->

## Overview 

Most of your React components will read only data from their props, state, and context. However, sometimes
a component needs to read some data from some external store outside of React that changes over time. This includes:

- 3rd party state management libraries that hold state outside of React.
- Browser APIs that expose a mutable value and events to subscribe to its changes.

`useSyncExternalStore` is the React Hook that lets you subscribe to such external stores. 

```js
const snapshot = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot?)
```

You need to pass two functions as arguments:

1. The `subscribe` function should subscribe to the store and return a function that unsubscribes. It takes a single
`callback` argument that will be invoked when the store changes. This will cause the component to re-render.

2. The `getSnapshot` function should read a snapshot of the data from the store.
While the store has not changed, repeated calls to `getSnapshot` must return the same value. If the store changes
and the returned value is different (as compared by `Object.is`), the component will re-render.

3. (Optional) The `getServerSnapshot` returns the initial snapshot of the data in the store and will be used only
during server rendering and during hydration of server-rendered content on the client. The server snapshot must be
the same between the client and the server, and is usually serialized and passed from the server to the client.

It will return the _current_ snapshot of the store which you can use in your rendering logic.

## Examples

- [To-Do store](./examples/todo-store)
- [Subscribing to Browser API](./examples/subscribe-to-browser-api)
- [Extract to custom hook](./examples/as-custom-hook)
