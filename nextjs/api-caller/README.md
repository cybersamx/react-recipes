# Basic API call Next.js

Simple project that demonstrates making calls to an api server, parsing the response, and binding the parsed data 
into the UI.

There are multiple ways to do this:

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

We can use a third-party package called `react-query` along with `axios`. The combination allows a design pattern 
that makes the code much cleaner and robust in support the use case of this example.

## Setup

1. Run the application.

   ```shell
   npm install
   npm run dev
   ```

1. Navigate to <http://localhost:3000>.
