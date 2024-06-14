# Auth context

In this challenge our goal is to make the user's authentication state (as well as a way to update that state) available to anywhere in our component tree that needs it.

You're given an authContext with the expected shape of the user's auth state – isAuthenticated: boolean, login: function, logout: function.

Your challenge is to finish the AuthProvider component – making isAuthenticated, login, and logout available anywhere in the component tree – and then to use those values in any component that needs them.

## Tasks

- Render a login form when the user is not authenticated
- Display the Dashboard component after the user logs in
- Display the login screen if the user logs out
