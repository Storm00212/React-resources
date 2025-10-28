
/**
 * App.tsx - Main Application Component
 *
 * This is the root component of our React application. In React, components are
 * the building blocks of the UI. This functional component returns JSX that
 * describes what should be rendered on the screen.
 */

// Import CSS styles for this component
// This allows us to style our component with custom CSS rules
import './App.css'

// Define the main App component as a function
// In modern React, functional components are preferred over class components
function App() {
  // The return statement contains JSX (JavaScript XML)
  // JSX allows us to write HTML-like syntax in JavaScript
  // The <> and </> are React Fragments - they group multiple elements without adding extra DOM nodes
  return (
    <>
      {/* This is a heading element that displays our welcome message */}
      {/* In JSX, we use className instead of class for CSS classes */}
      {/* We can embed JavaScript expressions in JSX using curly braces {} */}
      <h1>Welcome to your React App</h1>
    </>
  )
}

// Export the App component so it can be imported and used in other files
// This is the default export, meaning it's the main thing exported from this file
export default App
