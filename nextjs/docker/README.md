# Docker

Dockerize a next.js project for deployment.

## Setup

Steps taken to build a docker image.

1. Change the next.js configuration file to make the project a standalone app.

   ```javascript
   module.exports = {
     output: 'standalone',
     // ...
   }
   ```

1. Build the docker image.

   ```shell
   npm run docker-build
   ```

1. Run the app as a container.

   ```shell
   npm run docker-up
   ```

1. Navigate to <http://localhost:3000>.
