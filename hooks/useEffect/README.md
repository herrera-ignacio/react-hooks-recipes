# The Effect Hook

- [The Effect Hook](#the-effect-hook)
  - [Overview](#overview)
  - [Callback: The "effect"](#callback-the-effect)
  - [Clean up](#clean-up)
  - [Why runs on each update?](#why-runs-on-each-update)
  - [Optimizing performance by skipping events](#optimizing-performance-by-skipping-events)

## Overview

The _Effect Hook_ lets you perform __side effects in components after render_. Network requests, setting up a subscription, and manual DOM mutations are all examples of side effects.

## Callback: The "effect"

By default, the functions passed to `useEffect` is going to be different on every render. This is intentional.

```js
useEffect(() => {
  // This function is going to be different on every render
});
```

This lets us read the props and state values from the render that the effect is being applied to without worrying about it getting stale. Every time we render, we schedule a _different_ effect.

## Clean up

Some effects require cleanup. For example, we might want to set up a subscription to some external data source. In that case, it is important to clean up so that we don't introduce a memory leak.

However, effects run for every render and not just once. This is why React _also_ cleans up effects from the previous render before running the effects next time.

```js
import React, { useState, useEffect } from 'react';

function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    // Specify how to clean up after this effect:
    return function cleanup() {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}
```

## Why runs on each update?

For example, consider the following sequence of events that this component may handle:

```js
// Mount with { friend: { id: 100 } } props
ChatAPI.subscribeToFriendStatus(100, handleStatusChange);     // Run first effect

// Update with { friend: { id: 200 } } props
ChatAPI.unsubscribeFromFriendStatus(100, handleStatusChange); // Clean up previous effect
ChatAPI.subscribeToFriendStatus(200, handleStatusChange);     // Run next effect

// Update with { friend: { id: 300 } } props
ChatAPI.unsubscribeFromFriendStatus(200, handleStatusChange); // Clean up previous effect
ChatAPI.subscribeToFriendStatus(300, handleStatusChange);     // Run next effect

// Unmount
ChatAPI.unsubscribeFromFriendStatus(300, handleStatusChange); // Clean up last effect
```

This behavior ensures consistency by default and prevents bugs that are common in class components due to missing update logic.

> In class based components you'd need to handle `componentDidUpdate` and `componentWillUnmount` separately to avoid bugs and memory leaks. For example, if the `props.friend.id` changes, we would need to unsubscribe from the previous friend and subscribe to the next one. Otherwise, we would be leaking memory by keeping a subscription to the previous friend and displaying inconsistent data on the screen.

## Optimizing performance by skipping events

You can skip by using the _dependency array_.

```js
useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]); // Only re-run the effect if count changes
```

This also works for clean-ups.

```js
useEffect(() => {
  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
  return () => {
    ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
  };
}, [props.friend.id]); // Only re-subscribe if props.friend.id changes
```

