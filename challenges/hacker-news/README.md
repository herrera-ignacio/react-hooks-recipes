# Hacker News

In this challenge, we'll be fetching data from the Hacker News API. However, unlike the other effects challenges, the state and event handlers for this one don't need updating. Instead, given the fetchData function, you'll need to synchronize your component with the Hacker News API and then update the JSX appropriately.

This one is tricky so take your time and think it through. Anywhere in the JSX you see null or TODO you'll need to update it.

## Tasks

- Fetch data based on the search query
- Display the loading state while fetching
- Fetch new results when the tag filter changes
- Allow the user to navigate to the next and previous pages
- Disable the Next and Previous buttons based on the number of pages
- Display the results in a numbered list, with each page showing the correct position of each post
