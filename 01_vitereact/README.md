# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# React Basics Overview

## What is React?
React is a JavaScript library for building user interfaces. It's maintained by Facebook and a community of individual developers and companies. React allows developers to create reusable UI components and efficiently update the UI when the data changes.

## Component-Based Architecture
React follows a component-based architecture where UIs are composed of reusable components. Components are independent and encapsulate their own logic and UI. This promotes reusability and maintainability.

## JSX
JSX (JavaScript XML) is a syntax extension for JavaScript. It allows developers to write HTML-like code within JavaScript, making it easier to describe the UI components' structure. JSX gets transformed into regular JavaScript function calls during compilation.

## Virtual DOM
React uses a virtual DOM to improve performance. Instead of directly manipulating the browser's DOM, React creates a lightweight representation of the DOM in memory and updates it efficiently. Then, it calculates the difference between the virtual DOM and the real DOM, only making necessary updates.

## State and Props
State and props are essential concepts in React. State represents the data that a component manages internally and can change over time. Props (short for properties) are inputs to a React component that are passed from its parent component. Props are immutable.

## Lifecycle Methods
React components have lifecycle methods that allow developers to hook into various points in a component's lifecycle, such as when a component is mounted, updated, or unmounted. These methods can be used for tasks like fetching data, setting up subscriptions, or cleaning up resources.

## React Hooks
Introduced in React 16.8, hooks are functions that allow developers to use state and other React features in functional components. They provide a way to use stateful logic without writing a class component. Commonly used hooks include useState, useEffect, useContext, etc.

## React Router
React Router is a popular routing library for React applications. It allows developers to handle navigation and routing declaratively, mapping specific components to different URLs in the application.

## State Management
For managing state in large-scale applications, developers often use libraries like Redux or the Context API. These libraries provide centralized stores for managing state across the application.

## React Ecosystem
React has a vast ecosystem of libraries and tools that extend its capabilities. These include UI component libraries (e.g., Material-UI, Ant Design), state management solutions (e.g., Redux, MobX), testing frameworks (e.g., Jest, Enzyme), and more.

## Project Configuration (package.json)

### Name and Version
```json
"name": "01_basic_react",
"version": "0.1.0"
```

### Private
```json
"private": true
```
Indicates that the package is not intended to be published to a package manager like npm. This prevents accidental publishing of sensitive code.

### Dependencies
```json
"dependencies": {
  "@testing-library/jest-dom": "^5.17.0",
  "@testing-library/react": "^13.4.0",
  "@testing-library/user-event": "^13.5.0",
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-scripts": "5.0.1",
  "web-vitals": "^2.1.4"
}
```
Specifies the dependencies required for the project.

### Scripts
```json
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject"
}
```
Defines commands that can be executed via npm or yarn.

### eslintConfig
```json
"eslintConfig": {
  "extends": [ "react-app", "react-app/jest" ]
}
```
Configures ESLint, a tool for identifying and reporting patterns found in ECMAScript/JavaScript code.

### Browserslist
```json
"browserslist": {
  "production": [ ">0.2%", "not dead", "not op_mini all" ],
  "development": [ "last 1 chrome version", "last 1 firefox version", "last 1 safari version" ]
}
```
Specifies the browsers supported by the project.

## Additional Libraries and Tools

### @testing-library/jest-dom
This package provides custom Jest matchers for asserting on DOM elements.

### @testing-library/react
This package provides utilities for testing React components using Jest.

### @testing-library/user-event
Another package from the Testing Library family, this library provides utilities for simulating user events in tests.

### react
React is the core library for building user interfaces in JavaScript.

### react-dom
React DOM is a package that serves as the entry point to the DOM and server-rendering for React applications.

### react-scripts
React Scripts is a set of scripts and configurations used by Create React App.

### web-vitals
Web Vitals is a library for measuring essential performance metrics related to user experience on the web.

## Scripts Explanation

- **start**: Starts the development server for the React application.
- **build**: Creates a production build of the React application.
- **test**: Runs tests for the React application.
- **eject**: Ejects the configuration files and scripts provided by Create React App.

## React.StrictMode
React.StrictMode is a developer tool in React that highlights potential problems in your code and encourages best practices. It helps identify unsafe lifecycle methods, legacy APIs, and other potential issues.

---
These explanations and configurations provide essential information for understanding and working with React projects. They help in managing dependencies, scripts, and best practices for developing React applications effectively.