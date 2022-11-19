# `useRef`

- [`useRef`](#useref)
  - [Overview](#overview)
  - [Use cases](#use-cases)

## Overview

`useRef` is like a "box" that can hold a mutable value in its `.current` property.

## Use cases

`useRef` is used for two things:

1. __Accessing the DOM imperatively__. If you pass the `ref` prop to a DOM element, React will set the `useRef`'s `current` property to the corresponding DOM node whenever that node change. This is useful for things like triggering focus on an input element.
2. __Keeping any mutable value around without causing a re-render__. The difference between `useRef` and creating a `{current: ...}` object manually is that `useRef` will give you the same ref object on every render and it won't notify you of changes so that it doesn't trigger a re-render.
