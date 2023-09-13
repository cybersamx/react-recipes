# Basic API call Next.js

Simple project that demonstrates making calls to an api server, parsing the response, and binding the parsed data 
into the UI.

> **Note**
> 
> When we run this application, we will see that the name for the button refreshes itself twice. This is not by 
> design, but it's due to the application running in [React Strict mode](https://legacy.reactjs.org/docs/strict-mode.
> html), which is beneficial for development. But this means that `fetch` will be called twice due to double 
> rendering. Will post an update to fix this later.

## Setup

1. Run the application.

   ```shell
   npm install
   npm run dev
   ```

1. Navigate to <http://localhost:3000>.
