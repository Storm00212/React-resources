
/**
 * App.tsx - useState Hook Demonstration Application
 *
 * This application demonstrates various use cases of React's useState hook,
 * which is the primary way to add local state to functional components.
 * useState allows components to maintain and update their own state.
 *
 * The app includes several commented-out components that showcase different
 * useState patterns, with the BgChanger component currently active.
 */

// Import CSS styles for the App component
import './App.css'

// Import the background changer component (currently active)
import BgChanger from './components/bgChanger/BgChanger'

// Import other useState demonstration components (currently commented out)
// import Count from './components/Count'      // Counter with increment/decrement
// import Events from './components/Events'    // Event registration with form handling
// import Intro from './components/Intro'      // Basic counter introduction

// Define the main App component
function App() {
  // This component serves as a container for different useState demonstrations
  // Currently only showing the BgChanger component

  return (
    // React Fragment - groups multiple elements without adding DOM nodes
    <>
      {/* Commented out components for different useState demonstrations */}
      {/* <Intro />     - Basic useState introduction with counter */}
      {/* <Count />     - Advanced counter with increment, decrement, reset */}
      {/* <Events />    - Form handling with state for event registration */}

      {/* Currently active component: Background color changer */}
      <BgChanger />
    </>
  )
}

// Export the App component as the default export
export default App
