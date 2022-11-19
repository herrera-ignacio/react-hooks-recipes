# `useContext`

- [`useContext`](#usecontext)
  - [Overview](#overview)
  - [When to use](#when-to-use)
  - [How to use](#how-to-use)
  - [Optimize re-renders](#optimize-re-renders)

## Overview

Context provides a way to pass data through the component tree without having to pass props down manually at every level (i.e. _prop drilling_).

## When to use

Context is designed to share data that can be considered "global" for a tree of React components, such as:

- Current authenticated user
- Theme
- Preferred language (e.g., Internationalization)

> Apply it sparingly, because it makes component reuse more difficult.

If you only want to avoid passing some props through many levels, component composition is often a simpler solution than context.

## How to use

Accest a context object (i.e., `React.createContext`) and returns the current context value for that context which is determined by the `value` prop of the nearest `<MyContext.Provider>`. When it updates, this hook will trigger a re-render with the latest context value.

> Even if an ancestor uses `React.memo` or `shouldComponentUpdate`, a rerender will still happen starting at the component itself using `useContext`.

## Optimize re-renders

> [Docs: Preventing rerenders with React.memo and useContext hook](https://github.com/facebook/react/issues/15156#issuecomment-474590693)

1. (Preferred) Split contexts that don't change together.
2. Split your component in two, put `memo` in between.
3. One component with `useMemo` inside.
