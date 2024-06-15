# Match media

You're given a functioning app that utilizes useEffect with some React state to synchronize the browser's dimension with the component. This works, but it's not ideal. Instead, refactor the app to utilize React's useSyncExternalStore hook.

## Tasks

- Refactor the app to keep the same functionality but use the useSyncExternalStore hook
- Show the correct UI for larger browser dimensions
- Show the correct UI for mobile browser dimensions
- Subscribe and unsubscribe to the browser's dimensions using the MatchMedia API
