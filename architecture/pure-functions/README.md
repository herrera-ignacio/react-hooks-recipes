# Pure functions

- [Pure functions](#pure-functions)
  - [Definition](#definition)
    - [Benefits](#benefits)
  - [Unpredictable functions](#unpredictable-functions)
    - [Side effects](#side-effects)
      - [Side effects - Example 1](#side-effects---example-1)
      - [Side effects - Example 2](#side-effects---example-2)
    - [Inconsistent outputs](#inconsistent-outputs)
      - [Inconsistent outputs - Example 1](#inconsistent-outputs---example-1)
      - [Inconsistent outputs - Example 2](#inconsistent-outputs---example-2)

> A function is a process which takes some input (an argument), and returns some output (a return value).

## Definition

A function is considered pure if it contains __no side effects__ and if, it has a __consistent output__ (given the same input, it always returns the same output).

Therefore, you pure functions are __predictable__.

### Benefits

- More predictable, and therefore, less susceptible to bugs.
- Composable and reusable (because they don't depend on context).
- Cacheable.
- Easy to test.
- Easy to read.

## Unpredictable functions

Functions often starts off as a simple, composable function. But, if you're not careful, they might transform into an unpredictable mess as your application grows.

What makes a function unpredictable? __Side effects__ and __inconsistent outputs__.

### Side effects

Any time a function does __anything__ other than taking some input and calculating some output, whether through relying on state other than the input value it receives or creating an observable change to the program itself, it's said to have a side effect.

Side effects are not bad, they're __unpredictable__. They're __contextual__ to the current state of the application. If such state changes, they'll __behave differently__.

#### Side effects - Example 1

```js
function addTodo(todo) {
  todos.push(todo);
}
```

It both __relies on state__ other than the input value it receives (`todos`), and it creates an observable change to the program itself (by mutating `todos`).

#### Side effects - Example 2

```js
function getGithubProfile(username) {
  return fetch(
    `https://api.github.com/users/${username}`
  ).then((res) => res.json());
}
```

Although it doesn't create an observable change to the program, it __relies on state__ other than the input value it receives (from the external API).

### Inconsistent outputs

Inconsistent (or a lack of) outputs make a function unpredictable.

#### Inconsistent outputs - Example 1

If a function doesn't have a return value, it's unpredictable. You can assume it either does nothing (unlikely), or it has a side effect.

```js
thisIsUnpredictable()
soIsThis()
```

#### Inconsistent outputs - Example 2

If a function, given the same input, doesn't consistently return the same output, it's unpredictable.

```js
const friends = ["Ben", "Lynn", "Alex"]

friends.splice(0, 1) // ["Ben"]
friends.splice(0, 1) // ["Lynn"]
friends.splice(0, 1) // ["Alex"]
```

Other examples are `Math.random()`, `Date.now()` and `Array.prototype.push()`.
