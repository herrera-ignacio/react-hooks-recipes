# `useImperativeHandle`

- [`useImperativeHandle`](#useimperativehandle)
  - [Overview](#overview)
  - [Use cases](#use-cases)
    - [Custom `ref` handle exposed](#custom-ref-handle-exposed)
    - [Exposing own imperative methods](#exposing-own-imperative-methods)

## Overview

`useImperativeHandle` lets you customize the `ref` handle exposed and your own imperative methods.

## Use cases

### Custom `ref` handle exposed

Consider the [custom input example](custom-input). Suppose, you don't want to expose an entire `<input>` DOM node, but you want to expose two of its methods: `focus` and `scrollIntoView`. To do this, keep the real browser DOM in a separate ref. Then use `useImperativeHandle` to expose a handle with only the methods that you want the parent component to call.

### Exposing own imperative methods

Consider the [Posts](posts) example. The methods you expose via an imperative handle don't have to match the DOM methods exactly.

For example, the `Posts` component in the example exposes a `scrollAndFocusAddComponent` method via an imperative handle. This lets the parent `Page` scroll the list of comments _and_ focus the input field when you click a button.
