
/**
 * App.tsx - useReducer Hook Demonstration Application
 *
 * This application demonstrates the useReducer hook, which is an alternative
 * to useState for managing complex state logic. useReducer is particularly
 * useful when state transitions are complex or when the next state depends
 * on the previous state.
 *
 * The app showcases a jokes management system with CRUD operations
 * (Create, Read, Update, Delete) using reducer patterns.
 */

// Import CSS styles for the App component
import './App.css'

// Import components (Intro is commented out, Jokes is active)
// import Intro from './components/Intro'  // Basic counter with useReducer
import Jokes from './components/Jokes'     // Full jokes CRUD application

// Define the main App component
function App() {
  // This component serves as a container for useReducer demonstrations
  // Currently showing the Jokes component which demonstrates complex state management

  return (
    // React Fragment for grouping elements without extra DOM nodes
    <>
      {/* Commented out Intro component - shows basic useReducer usage */}
      {/* <Intro /> */}

      {/* Active Jokes component - demonstrates advanced useReducer patterns */}
      <Jokes />
    </>
  )
}

// Export the App component as the default export
export default App
