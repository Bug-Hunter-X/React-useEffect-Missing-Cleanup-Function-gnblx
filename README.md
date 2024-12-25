# React useEffect Missing Cleanup Function

This example demonstrates a common error in React's `useEffect` hook: forgetting to include a cleanup function. This can lead to memory leaks or unexpected behavior when the component unmounts.

## Bug

The `bug.js` file shows a `useEffect` hook that fetches data from an API and updates the component's state. However, it's missing the return statement which is crucial for adding a cleanup function.  Without this, any ongoing network requests or timers will persist even after the component has been unmounted.

## Solution

The `bugSolution.js` file shows the corrected code which includes a cleanup function. This function is executed before the component is unmounted, ensuring that any ongoing processes are properly stopped to prevent memory leaks.

## How to reproduce

1. Clone this repository.
2. Navigate to the directory containing `bug.js` and `bugSolution.js`.
3. Run the code using a React environment (e.g., `npm start`).
4. Observe the behavior, and compare the `bug.js` version with the `bugSolution.js` to understand the fix.
