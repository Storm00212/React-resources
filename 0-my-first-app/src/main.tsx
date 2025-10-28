/**
 * main.tsx - Application Entry Point
 *
 * This file serves as the entry point for our React application. It's where React
 * takes control of the DOM and renders our application. This file is referenced
 * in index.html via the script tag.
 */

// Import React's StrictMode component
// StrictMode helps identify potential problems in the application during development
// It performs additional checks and warnings for its descendants
import { StrictMode } from 'react'

// Import createRoot from react-dom/client
// This is the modern way to create a React root (React 18+)
// createRoot creates a root container that manages the React component tree
import { createRoot } from 'react-dom/client'

// Import global CSS styles that apply to the entire application
// This typically includes base styles, fonts, and global resets
import './index.css'

// Import our main App component
// This is the root component that contains our entire application
import App from './App.tsx'

// Create a root for the React application
// document.getElementById('root') finds the div with id="root" in index.html
// The ! asserts that the element exists (non-null assertion)
// createRoot() returns a root object that we can use to render our app
createRoot(document.getElementById('root')!).render(
  // Wrap our App component in StrictMode for development checks
  // StrictMode doesn't render anything visible but adds development warnings
  <StrictMode>
    {/* Render our main App component */}
    {/* This is where our React application begins rendering */}
    <App />
  </StrictMode>,
)
