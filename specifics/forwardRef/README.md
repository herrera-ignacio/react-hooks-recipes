# `forwardRef`

## Use case

When you put a ref on a built-in component that outputs a browser element like `<input />`, React will set that ref's `current` property to the corresponding DOM node.

However, __if you try to put a ref on your own component__, like `<MyInput />`, by default you will get `null`.

To help you notice the issue, React also prints an error to the console:

```txt
Warning: Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?
```

## How it works

Components that want to expose their DOM nodes have to specify that it "forwards" its ref.

```js
const MyInput = forwardRef((props, ref) => {
  return <input {...props} ref={ref}>
});
```

This opts it into receiving the `ref` from above as an argument. Afterwards, `MyInput` passes the `ref` it received to the `<input>` inside of it.

### Design systems

In design systems, it is a common pattern for low-level components like buttons, inputs, and so on, to forward their refs to their DOM nodes. On the other hand, high-level components like forms, lists, or page sections usually won't expose their DOM nodes to avoid accidental dependencies on the DOM structure.
