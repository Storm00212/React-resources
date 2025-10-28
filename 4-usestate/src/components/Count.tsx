/**
 * Count.tsx - Counter Component with useState
 *
 * This component demonstrates fundamental useState concepts:
 * - Basic state initialization with TypeScript typing
 * - State updates using the setter function
 * - Event handlers for user interactions
 * - Different ways to update state (direct value vs function)
 * - State immutability and best practices
 */

// Import useState hook from React
// useState is a Hook that lets you add React state to function components
import { useState } from "react"

// Define the Count component using arrow function syntax
const Count = () => {
    // Declare state variable 'number' initialized to 0
    // useState returns an array: [current state value, setter function]
    // TypeScript typing ensures number is always a number
    const [number, setNumber] = useState<number>(0)

    // Alternative approach: Define a separate function for decrement
    // This demonstrates how to organize state update logic
    const decrement = () => setNumber(number - 1)

    // Return the JSX that describes the UI
    return (
        <div>
            {/* Heading for the counter section */}
            <h2>Increase & Decrease</h2>

            {/* Button to increment the counter */}
            {/* onClick handler uses an arrow function to update state */}
            {/* setNumber(number + 1) directly sets the new value */}
            <button onClick={() => setNumber(number + 1)}> ADD </button>
            <br />

            {/* Display the current counter value */}
            <span> {number} </span>
            <br />

            {/* Alternative increment approach (commented out) */}
            {/* <button onClick={() => setNumber((prev) => prev + 1)}> ADD </button> */}
            {/* This uses the functional update pattern, which is safer for async updates */}

            {/* Button to decrement using the separate function */}
            {/* onClick references the decrement function directly */}
            <button onClick={decrement}> Decrease </button>
            <br />

            {/* Reset button sets the counter back to 0 */}
            <button onClick={() => setNumber(0)}>Reset</button>

        </div>
    )
}

// Export the component as default
export default Count