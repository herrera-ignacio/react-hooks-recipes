# Flexible Tooltip

You're given an app that... kind of works. The only problem is when you hover over any of the yellow underlined text, the tooltip renders in the wrong position. Your job is to fix the app so that the tooltip renders correctly – either above the text if there's room, or below it if there's not.

To do this, you'll want to utilize the browser's getBoundingClientRect API to get position information about specific elements.

You won't need to touch any code other than the Tip component.

## Tasks

- Position the tooltip above the hovered text if there’s enough room
- If there's not enough room above it, and if there's more room below it than above it, position the tooltip below the hovered text
- If there's not enough room above it, and there's less room below it, position the tooltip above the hovered text
