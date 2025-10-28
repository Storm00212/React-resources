
/**
 * App.tsx - useEffect Hook Demonstration Application
 *
 * This application demonstrates the useEffect hook, which is used for side effects
 * in functional components. Side effects include data fetching, subscriptions,
 * manual DOM manipulation, and other operations that happen outside of React's
 * normal rendering flow.
 *
 * The app includes several components that showcase different useEffect patterns:
 * - Basics: Simple counter with setTimeout
 * - FetchUsers: API data fetching with search functionality
 * - FetchTodos: Todo list from a backend API (currently active)
 */

// Import CSS styles for the App component
import './App.css'

// Import components (most are commented out, only FetchTodos is active)
// import Basics from './components/basics/Basics'        // Basic useEffect with setTimeout
// import FetchUsers from './components/FetchUsersAPI/FetchUsers'  // User API with search
import FetchTodos from './components/todoAPI/FetchTodos'  // Todo API fetching

// Define the main App component
function App() {
  // This component serves as a container for different useEffect demonstrations
  // Currently showing the FetchTodos component which demonstrates API data fetching

  return (
    // React Fragment for grouping elements without extra DOM nodes
    <>
      {/* Commented out components for different useEffect demonstrations */}
      {/* <FetchUsers /> - API fetching with user search functionality */}
      {/* <Basics /> - Basic useEffect with counter and setTimeout */}

      {/* Currently active component: Todo list from backend API */}
      <FetchTodos />
    </>
  )
}

// Export the App component as the default export
export default App
