# Simple Storybook in Next.js

Simple project to demonstrate how Storyboard can be used in Next.js.

## Setup

Here's the process on how this project was created.

1. Copy an existing next.js project.

   ```shell
   cp ..
   cp -rf basic storyboard
   cd storyboard
   ```
   
   > **Note**
   > 
   > Alternatively, we can also run `npx create-next-app --typescript storyboard` to create a next.js (TypeScript) boilerplate next.js project from scratch.


1. Set up Storybook. In a next.js root project directory, run the following command.

   ```shell
   npx sb init
   npm install
   ```

1. Run Storybook locally and navigate to <http://localhost:6006/>.

   ```shell
   npm run storybook
   ```
   
1. See sample components in the `stories` directory. Create new components there.

1. Run the application.

   ```shell
   npm install
   npm run dev
   ```

1. Navigate to <http://localhost:3000>.

## Notes

* This project was set up using the steps above. The sample components were all modified.

## Reference/Credits

* [Storybook for React Tutorial](https://storybook.js.org/tutorials/intro-to-storybook/react/en/get-started/)
* [Storybook Addon Next](https://storybook.js.org/addons/storybook-addon-next)
