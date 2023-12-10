# Elements vs Components

## What is a React Element?

> A _React Element_ is an object representation of a DOM node.

Here's an example of what one looks like:

```js
{
  type: "h1",
  props: {
    children: "Profile",
    className: "header"
  }
}
```

This is the representation of a DOM node that looks like this:

```html
<h1 class="header">
  Profile
</h1>
```

In order to create a React element, you have a few options, one of them being React's `jsx-runtime` package.

```js
import { jsx } from "react/jsx-runtime"

const element = jsx("h1", {
  className: "header",
  children: "Profile"
})
```

Notice there's no JSX, it's just JavaScript. __Elements are the true building blocks of React__.

## What is a component?

> Components, by definitions, are just functions that optionally accept input via props, and return a _React Element_.

Here's an example:

```js
import { jsx } from "react/jsx-runtime"

const Component = () => {
  const element = jsx("h1", {
    className: "header",
    children: "Profile"
  })

  return element
}

export default Component
```

And you are not limited to creating React Elements from native HTML elements. You can also pass in other React components as the first argument to `jsx`.

```js
const element = jsx(Badge, {
  name: "Nacho Herrera",
  handle: "nachoherrera"
});
```

React will recursively render that component as well as all of its children components in order to get all the React Elements and the final description of the UI.

Here's what the `Badge` component looks like:

```js
function Badge({ name, handle, img }) {
  return jsx("div", {
    className: "badge",
    children: [
      jsx("img", {
        alt: name,
        src: img
      }),
      jsx("div", {
        children: [
          jsx("h4", {
            children: name
          }),
          jsx("p", {
            children: ["@", handle]
          })
        ]
      })
    ]
  });
}
```

Writting JSX comes into play because creating a description of your UI with `jsx` function invocations is not so efficient. At build time, all the JSX in your app gets compiled to JavaScript via `jsx` invocations that the browser can understand.
