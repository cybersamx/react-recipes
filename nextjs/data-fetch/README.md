# Basic Data Fetching in Next.js

Simple project that demonstrates data fetching from a remote API server, parsing the response, and binding the parsed data with the UI on the client-side.

There are a few established patterns to do this:

## useEffect

We can call `useEffect` to fetch the data and then set the state of the UI using `useState`. But this isn't ideal.

> **Note**
> 
> When we run this application, we will see that the name for the button refreshes itself twice. This is not by 
> design, but it's due to the application running in [React Strict mode](https://legacy.reactjs.org/docs/strict-mode.
> html), which is beneficial for development. But this means that `fetch` will be called twice due to double 
> rendering.

## useEffect with Condition to Update Only Once

We can improve on `useEffect` and use a conditional variable to update the state only once.

## useQuery

We can use a third-party package called `react-query` along with `axios`. The combination allows a design pattern that makes the code cleaner and more robust in support the use case of this example.

## useSWR

Next.js provides a hook called `useSWR`, which has similar functionality as `useQuery`. It uses the same principle of hydrating a UI with data fetching using 3 possible states of data fetching, data loading, and error handling.

## Setup

1. Run the application.

   ```shell
   npm install
   npm run dev
   ```

1. Navigate to <http://localhost:3000>.
