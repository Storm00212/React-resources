# React Components

React components are the building blocks of any React application. They allow you to split the UI into independent, reusable pieces, and think about each piece in isolation.

## What is a Component?

A component in React is a JavaScript function or class that optionally accepts inputs (called "props") and returns a React element that describes how a section of the UI should appear.

There are two main types of components:

- **Functional Components**: Defined as JavaScript functions.
- **Class Components**: Defined as ES6 classes (less common in modern React).

## Example: Functional Component

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}
```

## Using Components

You can use (or "render") a component by including it in JSX, just like a regular HTML element:

```jsx
<Welcome name="Alice" />
```

## Props

Props are how you pass data from parent to child components. They are read-only and help make components reusable and dynamic.

## Best Practices

- Use functional components and hooks for new code.
- Keep components small and focused.
- Use props to make components reusable.
- Name components with a capital letter.

## Learn More

- [React Documentation: Components and Props](https://react.dev/learn/your-first-component)
- [Thinking in React](https://react.dev/learn/thinking-in-react)