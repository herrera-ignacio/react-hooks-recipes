# Data table

Given an application that already has the completed JSX and event handlers for deciding how you should filter and sort the data (searchTerm, sortColumn, and sortOrder), your job is to fetch the data (using the fetchData function), and then, in the most performant way possible, using searchTerm, sortColumn, and sortOrder, update the filteredData and sortedData variables.

filteredData should be a memoized array of data that has been filtered based on the searchTerm.

sortedData should be a memoized array of filteredData that has been sorted based on the sortColumn and sortOrder.

## Tasks

- The user can search Pokémon
- The user can sort Pokémon
- The Pokémon data is correctly memoized
