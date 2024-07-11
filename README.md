# React notes

Theory and practice notes on React.

## Architecture

- [Pure functions and side effects](./architecture/pure-functions/README.md)

## Specifics

- [Elements vs components](specifics/elements-vs-components/README.md)
- [forwardRef](gotchas/forwardRef)

## Styling

- [Design system as Monorepo with Lerna](styling/design-system)
  - [SCSS to CSS](styling/design-system/packages/scss)
- [Waiting for CSS animations](styling/waiting-css-animations)

## Hooks

- [Rules of hooks](hooks/rules/README.md)

### Built-in hooks

- [useState](hooks/useState)
- [useEffect](hooks/useEffect)
- [useRef](hooks/useRef)
  - [forwardRef](gotchas/forwardRef)
- [useContext](hooks/useContext) 
- [useReducer](hooks/useReducer)
  - [To-Do list](hooks/useReducer/todo)
  - [Counter with steps](hooks/useReducer/counterWithSteps)
- [useImperativeHandle](hooks/useImperativeHandle)
- [useLayoutEffect](hooks/useLayoutEffect)
- [useSyncExternalStore](hooks/useSyncExternalStore)
- [useEffectEvent](hooks/useEffectEvent)

### Challenges

#### useEffect and useState

- [Counter](challenges/counter)
- [Smart character limit](challenges/smart-character-limit)
- [Password Toggle](challenges/password-toggle)
- [Multistep form](challenges/multi-step-form)
- [Form builder](challenges/form-builder)
- [Search filter](challenges/search-filter)
- [Poke API ignore stale response](challenges/pokeapi-ignore-stale-res)
- [Clock](challenges/clock)
- [Country info](challenges/country-info)

#### useRef

- [Autofocus](challenges/autofocus)
- [Video-player](challenges/video-player)
- [Field notes](challenges/field-notes)
- [Click outside](challenges/click-outside)
- [Expanding textarea](challenges/expanding-textarea)
- [Follow the leader](challenges/follow-the-leader)

#### useContext

- [Auth context](challenges/auth-context)
- [Translations context](challenges/translations-context)
- [Tabs context](challenges/tabs-context)
- [News feed context](challenges/news-feed-context)

#### useReducer

- [Multistep form reducer](challenges/multi-step-form-reducer)
- [Task manager reducer](challenges/task-manager-reducer)
- [Add to cart reducer](challenges/add-to-cart-reducer)
- [Undo redo reducer](challenges/undo-redo-reducer)

#### Referential equality & memoization

- [Localized primes](challenges/localized-primes)
- [Data table](challenges/data-table)
- [Optimizing renders counter](challenges/optimizing-renders-counter)

#### useLayoutEffect

- [React ruler resize](challenges/react-ruler-resize)
- [Flexible tooltip](challenges/flexible-tooltip)

#### useSyncExternalStorage

- [Match media](challenges/match-media)

### Custom hooks

#### Rebuilding useHooks

> https://usehooks.com/

- [useDocumentTitle](custom-hooks/useDocumentTitle)
- [useDefault](custom-hooks/useDefault)
- [useToggle](custom-hooks/useToggle)
- [usePrevious](custom-hooks/usePrevious)
- [usePreferredLanguage](custom-hooks/usePreferredLanguage)
- [useFavicon](custom-hooks/useFavicon)
- [useCopyToClipboard](custom-hooks/useCopyToClipboard)
- [useInterval](custom-hooks/useInterval)
- [useCounter](custom-hooks/useCounter)
- [useLockBodyScroll](custom-hooks/useLockBodyScroll)
- [useQueue](custom-hooks/useQueue)
- [useTimeout](custom-hooks/useTimeout)
- [useWindowSize](custom-hooks/useWindowSize)
- [useVisibilityChange](custom-hooks/useVisibilityChange)
- [useList](custom-hooks/useList)
- [useObjectState](custom-hooks/useObjectState)