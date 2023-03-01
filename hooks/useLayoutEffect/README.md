# `useLayoutEffect`

## Overview

`useLayoutEffect` is a version of `useEffect` that fires before the browser repaints the screen.

```js
useLayoutEffect(setup, dependencies?)
```

## Parameters

### `setup`

The function with your effect's logic. It may optionally return a _cleanup_ function.

Before your component is first added to the DOM, React will run your setup function. After every re-render with changed dependencies, React will first run the cleanup function with the old values, and then run your setup function with the new values.

Before your component is removed from the DOM, React will run your cleanup function one last time.

### `dependencies`

The list of all reactive values referenced inside of the `setup` code. Reactive values include props, state, and all the variables and functions declared inside your component body.

React will compare each dependency with its previous value using the `Object.is` comparison algorithm. If you don't specify the dependencies at all, your effect will re-run after every re-render of the component.

## Use cases

### Measuring layout before the browser repaints the screen

Most components don't need to know their position and size on the screen to decide what to render. The browser calculates their _layout_ (position and size) and repaints the screen based on JSX and CSS.

Sometimes, that's not enough. For example, a tooltip that appears next to some element on hover. If there's enough space, the tooltip should appear above the element, but if it doesn't fit, it should appear below. This means that in order to render the tooltip at the right final position, you need to know its height.

To do this, you need to render in two passes:

1. Render the tooltip anywhere (even with a wrong position).
2. Measure its height and decide where to place the tooltip.
3. Render the tooltip _again_ in the correct place.

All of this needs to happen __before the browser repaints the screen__. You don't want the user to see the tooltip moving. Call `useLayoutEffect` to perform the layout measurements before the browser repaints the screen:

```js
function Tooltip() {
  const ref = useRef(null);
  const [tooltipHeight, setTooltipHeight] = useState(0);

  useLayoutEffect(() => {
    const { height } = ref.current.getBoundingClientRect();
    setTooltipHeight(height); // re-render now that you know the real height.
  }, []);

  // use tooltipHeight in the rendering logic below.
}
}
```

React guarantees that the code inside `useLayoutEffect` and any state updates scheduled inside it will be processed before the browser repaints the screen. This lets you render the tooltip (React places it in the DOM), run the code in `useLayoutEffect` (measure the tooltip), and re-render the tooltip again without the user noticing the first extra render. In other words, `useLayoutEffect` blocks the browser from painting
