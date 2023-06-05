# React Hooks

Hooks allows a component to "hook" to additional functions. Here are the built-in react hook types:

| Type              | Description                                                                                                                                                                                                        |
|-------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| State hooks       | Allow components to remember a state. Useful in user inputs.                                                                                                                                                       |
| Context hooks     | Allow components to receive info from distant parents without passing it as props.                                                                                                                                 |
| Effect hooks      | Allow components to connect and synchronize with external systems eg. network, browser DOM, animations, or UI components written with a different framework.  It's part of the React paradigm called escape hatch. |
| Ref hooks         | Allow components to hold some info that isn't use for rendering, aka refs. Unlike state hooks, updating a ref doesn't re-render the components.  It's part of the React paradigm called escape hatch.              |
| Performance hooks | Allow components to optimize re-rendering performance by reusing a cached calculated value, skipping an expensive, unnecessary workload, etc.                                                                      |
| Other hooks       | Other built-in hooks.                                                                                                                                                                                              |


Specific reach hook functions (source: [React.dev: built-in react hooks](https://react.dev/reference/react)):

| Hook                   | Type             | Description                                                                                                                                                                                              |
|------------------------|------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `useState`             | State hook       | "Declares a state variable that you can update directly."                                                                                                                                                |
| `useReducer`           | State hook       | "Declares a state variable with the update logic inside a reducer function."                                                                                                                             |
| `useContext`           | Context hook     | "Reads and subscribes to a context."                                                                                                                                                                     |
| `useEffect`            | Effect hook      | "Connects a component to an external system."                                                                                                                                                            |
| `useLayoutEffect`      | Effect hook      | "Fires before the browser repaints the screen." **This is rarely used.**                                                                                                                                 |
| `useInsertionEffect`   | Effect hook      | "Fires before the React makes changes to the DOM. Libraries can insert dynamic CSS here." **This is rarely used.**                                                                                       |
| `useRef`               | Ref hook         | "Declares a ref. You can hold any value in it, but most often it’s used to hold a DOM node."                                                                                                             |
| `useImperativeHandle`  | Ref hook         | "Lets you customize the ref exposed by your component." It's part of the React paradigm called escape hatch. **This is rarely used.**                                                                    |
| `useMemo`              | Performance hook | "Lets you cache the result of an expensive calculation."                                                                                                                                                 |
| `useCallback`          | Performance hook | "Lets you cache a function definition before passing it down to an optimized component."                                                                                                                 |
| `useTransition`        | Performance hook | "Lets you mark a state transition as non-blocking and allow other updates to interrupt it." **Use for prioritizing rendering by separating synchronous and asynchronous workloads on the UI rendering.** |
| `useDeferredValue`     | Performance hook | "Lets you defer updating a non-critical part of the UI and let other parts update first.." **Use for prioritizing rendering by separating synchronous and asynchronous workloads on the UI rendering.**  |
| `useDebugValue`        | Other hook       | "Lets you customize the label React DevTools displays for your custom Hook." **This is rarely used.**                                                                                                    |
| `useId`                | Other hook       | "Lets a component associate a unique ID with itself. Typically used with accessibility APIs." **This is rarely used.**                                                                                   |
| `useSyncExternalStore` | Other hook       | "Lets a component subscribe to an external store." **This is rarely used.**                                                                                                                              |
## Sample Code

* [useState](src/use-state)
* [useReducer](src/use-reducer)

## Setup

1. Run the application.

   ```shell
   npm install
   npm start
   ```

1. Navigate to <http://localhost:3000>.

# Reference and Credits

* [React.dev: Built-in React Hooks](https://react.dev/reference/react)
