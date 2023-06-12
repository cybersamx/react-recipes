# Component Testing with Cypress

End-to-end testing of next.js components using Cypress.

## Setup

1. In a Next.js project, we install the `cypress` package.
1. Add the test script to `package.json`.
1. Create `cypress.config.ts` to the root directory with the right configurations for component testing.
1. Create `cypress/support/component.ts` file, which contains test setups and other global declarations that need to be run before running the tests.
1. Create `cypress/support/component-index.html` to host the components to be tested.
1. Add cypress tests.
1. Test the application.

   ```shell
   npm install
   npm run test
   ```

## Reference

* [Next.js Docs: Cypress Component Testing](https://nextjs.org/docs/pages/building-your-application/optimizing/testing#creating-your-first-cypress-component-test)
