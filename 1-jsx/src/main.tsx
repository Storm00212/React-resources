/**
 * main.tsx - JSX Project Entry Point
 *
 * This file demonstrates the standard React 18 setup for mounting an application.
 * It shows how React takes control of the DOM and renders our JSX-based components.
 * The setup is identical to the basic React app, but now our App component contains
 * JSX expressions and dynamic content rendering.
 */

// Import React's StrictMode for development warnings and checks
import { StrictMode } from 'react'

// Import createRoot for React 18's concurrent features
import { createRoot } from 'react-dom/client'

// Import global styles that apply to the entire application
import './index.css'

// Import our main App component that demonstrates JSX concepts
import App from './App.tsx'

// Create a React root and mount it to the DOM element with id 'root'
// This is where our JSX application will be rendered
createRoot(document.getElementById('root')!).render(
  // StrictMode helps catch potential problems in development
  <StrictMode>
    {/* Render our App component with all its JSX content */}
    <App />
  </StrictMode>,
)
