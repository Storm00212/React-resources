/**
 * Intro.tsx - Introduction to useState Hook
 *
 * This is the most basic example of using React's useState hook.
 * It demonstrates the fundamental concept of state in functional components:
 * - Importing and using the useState hook
 * - Declaring state with array destructuring
 * - Updating state with the setter function
 * - Using state in the UI (dynamic text)
 * - Event handling to trigger state changes
 */

// Import the useState hook from React
// This hook allows functional components to have state
import { useState } from 'react'

// Define the Intro component using arrow function syntax
const Intro = () => {
    // Declare a state variable called 'count' initialized to 0
    // useState returns an array with two elements:
    // 1. The current state value (count)
    // 2. A function to update the state (setCount)
    const [count, setCount] = useState(0)

    // Define a function to handle button clicks
    // This function will be called when the user clicks the button
    function handleClick() {
        // Update the count state by incrementing it by 1
        // This triggers a re-render of the component with the new count value
        setCount(count + 1)
    }

    // Return the JSX that describes what should be rendered
    return (
        // React Fragment - allows multiple elements without a wrapper div
        <>
            {/* Button element with onClick event handler */}
            {/* When clicked, calls the handleClick function */}
            <button onClick={handleClick}>
                {/* Dynamic text that includes the current count value */}
                {/* The {count} syntax embeds the JavaScript variable in JSX */}
                You pressed me {count} times
            </button>
        </>
    )
}

// Export the component as the default export
export default Intro