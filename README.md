# Project: REACT-REDUX-TO-DO-LIST

## Author

Gino Sy
https://ginosy.github.io/js_react_project/

## Overview/Description

This project is a web-based Todo List application built using React and Redux. It provides a user-friendly interface for managing tasks, allowing you to create, complete, and organize your to-dos effortlessly.

## User Stories

    User Story 1: Adding Todos

    As a user, I want to be able to add new tasks or todos to the list.
    I should be able to provide a title and optional details for each todo.
    After adding a todo, it should appear in the list of tasks.

    User Story 2: Marking Todos as Complete

    As a user, I want to mark todos as complete when I've finished them.
    There should be an option or button to toggle the completion status of a todo.
    Completed todos should be visually distinguished from incomplete ones.
    User Story 3: Filtering and Sorting Todos

    As a user, I want to be able to filter and sort my todos for better organization.
    I should have options to filter by completed and incomplete todos.
    Additionally, I should be able to sort todos by due date, priority, or creation date.

    These user stories outline the core functionality that users would expect from a todo list app and can serve as a starting point for your project's development and documentation.

## Wireframes

    ## Components

    5 components:
        - NavBar
        - About component
        - Add todo component
        - Todo display component
        - Contact form component    


    ## State Tree

            Todos
        {
        Id,
        Title (String)
        Description (String)
        isCompleted (Boolean)
        isPending (Boolean)
        }

            Contact
        {
        Id,
        FirstName(string)
        LastName(string)
        Email(email)
        Comment(string)
        }

## How to Use

To run this project locally, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run the following command to install project dependencies:

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

https://create-react-app.dev/docs/code-splitting/

### Analyzing the Bundle Size

https://create-react-app.dev/docs/analyzing-the-bundle-size/

### Making a Progressive Web App

https://create-react-app.dev/docs/making-a-progressive-web-app/

### Advanced Configuration

https://create-react-app.dev/docs/advanced-configuration/

### Deployment

https://create-react-app.dev/docs/deployment/

### `npm run build` fails to minify

https://create-react-app.dev/docs/troubleshooting/#npm-run-build-fails-to-minify

### Ideas for future improvement 

Sharing and Collaboration: Enable users to share todo lists with others and collaborate on tasks. Real-time updates and notifications for shared lists could be beneficial.

Progress Tracking: Provide users with insights into their productivity, such as task completion statistics, charts, or graphs.

Task Reminders: Add the ability for users to set due dates and reminders for their todos. Send notifications or emails to remind users of upcoming tasks.
