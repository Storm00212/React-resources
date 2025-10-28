
/**
 * App.tsx - List Rendering Application
 *
 * This component demonstrates how to render dynamic lists of data in React.
 * It shows the fundamental pattern of mapping over an array of data to create
 * multiple components, each receiving different props based on the data.
 */

// Import CSS styles for the App component
import './App.css'

// Import the Jokes component that will display individual jokes
import Jokes from './components/Jokes'

// Import jokes data from a JSON file
// Vite allows importing JSON files directly as JavaScript objects
import jokesData from './data/data.json'

// Define the main App component
function App() {
  // The component doesn't need local state - it renders data from the imported JSON

  return (
    // React Fragment to group multiple elements without adding extra DOM nodes
    <>
      {
        // Conditional rendering: only render if jokesData exists
        // This prevents errors if the data hasn't loaded yet
        jokesData && jokesData.map((joke) => (
          // For each joke in the array, create a container div
          // key prop is required by React for list items - helps with performance and updates
          // joke.id provides a unique identifier for each item
          <div key={joke.id} className='jokeContainer'>
            {/* Render the Jokes component, passing the current joke data as props */}
            {/* Each Jokes component receives different data (different joke object) */}
            <Jokes joke={joke} />
          </div>
        ))
      }
    </>
  )
}

// Export the App component as the default export
export default App
