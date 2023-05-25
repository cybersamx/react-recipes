# Simple Auth using NextAuth.js

Simple project highlights a simple authentication flow using the NextAuth.js framework.

## Setup

1. Generate a random secret at <https://generate-secret.vercel.app/32>. Copy the secret.

1. Create a `.env` file.

   ```shell
   cp .env-example .env
   vi .env  # Paste the secret as NEXTAUTH_SECRET
   ```

1. Run the application.

   ```shell
   npm install
   npm run dev
   ```

1. Navigate to <http://localhost:3000>.

## Reference

* [NextAuth.js Home](https://next-auth.js.org/)
* [NextAuth.js: Docs](https://next-auth.js.org/getting-started/introduction)
