# Counter Context React

## Features

- Global shared counter state via `React.createContext`
- `CounterContextProvider` wraps the app in `src/main.jsx`
- Tailwind CSS classes

## How it works

The `CounterContextProvider` exposes:

- `counter` value
- `incrementCounter()` function
- `decrementCounter()` function

All counter components use `useContext(counterContextObj)` to read and update the shared state.
