# SWR

`useSWR` is a client-side react hook for data fetching using the Stale-While-Revalidate (SWR) strategy. The strategy is simple:

1. Starting from a `stale` state where the data is either static or can be retrieved quickly from a cache.
1. Concurrently `revalidate` the current state by fetching the data from a dynamic source.

## Setup

1. Run the application.

   ```shell
   npm install
   npm run dev
   ```

1. Navigate to <http://localhost:3000>.

## Reference

* [SWR Home Page](https://swr.vercel.app/)
* [SWR and TypeScript](https://swr.vercel.app/docs/typescript)
