# useEffectEvent

## Reactive values in useEffect

Sometimes, we want to use reactive values in `useEffect`, but that reactive value has nothing to do with
synchronizing the component, and therefore, shouldn't need to be included in the dependency array or our effect
will re-run when we don't want to.

This is a common problem when using `useEffect` with a value from a context, or a value from a parent component.

## Using useEffectEvent

`useEffectEvent` gives us a way to abstract those reactive but non-synchronizing values
into their own event handler which we can then use inside of `useEffect`
without having to include them in the dependency array.

```jsx
const onPageView = React.useEffectEvent((url) => {
  pageview(url, state)
})

React.useEffect(() => {
  onPageView(url);
}, [url])
```

## Example: Counter with delay and steps

Say you are building a Counter app that counted from 0, but allows the user to specify the duration between
increments (i.e., delay) and how much to increment (i.e., step).

This is the perfect use case for `useEffectEvent` because you'll need to access a reactive but non-synchronizing value
inside of `useEffect`: we need to access the reactive `step` value but we don't want to include it in the dependency
array because it has nothing to do with setting and removing the interval we must use for the delay.

```jsx
// SLIDER COMPONENT
import * as React from "react"

function Slider({ min, max, step, onChange, label }) {
  const [value, setValue] = React.useState(min)

  return (
    <div className="range">
      <div>{label}</div>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        step={step}
        onChange={(e) => {
          const value = Number(e.target.value)
          onChange(value)
          setValue(value)
        }}
      />
      <div>{value.toLocaleString()}</div>
    </div>
  );
}

// APP
React.useEffectEvent = React.experimenta_useEffectEvent;

export default function App() {
  const [count, setCount] = React.useState(0)
  const [delay, setDelay] = React.useState(100)
  const [step, setStep] = React.useState(1)
  
  const handleDelayChange = d => setDelay(d)
  const handleStepChange = s => setStep(s)
  
  const onInterval = React.useEffectEvent(() => setCount(c => c + step))
  
  React.useEffect(() => {
    const id = setInterval(onInterval, delay)
    
    return () => window.clearInterval(id)
  }, [delay])
  
  return (
    <main>
      <h1>{count}</h1>
      <Slider min={1} max={1000} step={100} onChange={handleDelayChange} label="Delay" />
        <Slider min={1} max={10} step={1} onChange={handleStepChange} label="Increment by" />
    </main>
  )
}
```
