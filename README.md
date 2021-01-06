# React App Starter (Cypress, Enzyme, Typescript ...)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Instalation

- Clone the repo
- `yarn install` or `npm install`

## Configuration

This proyect has been configured with:

- Cypress for e2e testing
- Enzyme for Component unit and integration testing
- Eslint: Airbnb for react package
- Prettier to format code
- Typescript
- Commitzent friend. Commit message with style and scopes!
- Husky hooks to make sure we commit and pushing the right code!

## Commit Cycle Hooks

### Pre Commit

When we create a commit, husky hooks comes up and run prettier and eslint command before to finish the commit

### Pre Push

When we push our change to the repo, husky hooks comes up and run unit testing and e2 testing. We make sure our code is fully tested before to push it to the repo. The app needs to be run locally before to push the code, because cypress:run commands, needs the app running locally to make the e2e test.

## Aditional Scrips

### `yarn cypress:open`

It runs Cypess command to make e2e test in cypress ecosystem.

### `yarn cypress:run`

It runs Cypess command to make e2e test in command line, ideal to make CI/CD integration.

### `yarn lint`

It runs eslint command in src directory.

### `yarn format`

It runs prettier command. We write and check files.

### `yarn commit`

It runs commitzent-friendly command. it prompts up in command line interface a helpful menu to create commit messages acording Angular team.

## Available React Team Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
