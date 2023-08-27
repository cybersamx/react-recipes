# Next.js Routing

Simple project that demonstrates Next.js routing.

## Setup

1. Run the application.

   ```shell
   npm install
   npm run dev
   ```

1. Navigate to <http://localhost:3000/webapp>.

## Notes

* Next.js supports subpath of a domain through the `basePath` configuration in `next.config.js`. This means that the 
  root directory of the project will be severed through the url that is prefixed with `basePath` than the default 
  empty string "". For example, if `basePath` = `'/webapp'`, the root url for the web application can be accessed 
  through `http://example.com/webapp`.
* To access the `basePath` programmatically in code, we use the `useRouter` hook.

