# `useRef`

- [`useRef`](#useref)
  - [Overview](#overview)
  - [Use cases](#use-cases)
  - [Good practices](#good-practices)

## Overview

React automatically updates the DOM to match your render output, so your components won't often need to manipulate it. However, sometimes you might need access to the DOM elemented managed by React. For example, to focus a node, scroll to it, or measure its size and position.

`useRef` is like a "box" that can hold a mutable value in its `.current` property.

Initially `.current` will be `null`. When React creates a DOM node for a given element, React will put a reference to this node into `.current`. You can then access this DOM node from your event handlers and use the built-in browser APIs defined on it.

## Use cases

`useRef` is used for two things:

1. __Accessing the DOM imperatively__. If you pass the `ref` prop to a DOM element, React will set the `useRef`'s `current` property to the corresponding DOM node whenever that node change. This is useful for things like triggering focus on an input element.
2. __Keeping any mutable value around without causing a re-render__. The difference between `useRef` and creating a `{current: ...}` object manually is that `useRef` will give you the same ref object on every render and it won't notify you of changes so that it doesn't trigger a re-render.

## Good practices

- __Do not overuse refs__. You should only use refs for _imperative_ behaviors that you can't express as props. For example: scrolling to a node, focusing a node, triggering an animation, selecting text, etc.

- __Use for non-destructive actions__. Stick to actions such as focusing, scrolling, or measuring DOM elements. If you try to modify the DOM manually, you can risk conflicting with the changes React is making.

- __Avoid changing DOM nodes managed by React__. If you do modify them, modify parts that React has no reason to update. Otherwise, it can lead to inconsistent visual results or crashes.
