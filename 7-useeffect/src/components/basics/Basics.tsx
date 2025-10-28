/**
 * Basics.tsx - Basic useEffect Hook Demonstration
 *
 * This component demonstrates the fundamental concepts of the useEffect hook.
 * useEffect allows you to perform side effects in functional components, such as:
 * - Setting up timers
 * - Making API calls
 * - Manually manipulating the DOM
 * - Setting up subscriptions
 *
 * Key concepts demonstrated:
 * - useEffect with dependency array
 * - setTimeout for delayed execution
 * - State updates that trigger re-renders
 * - Infinite loops prevention with proper dependencies
 */

// Import useEffect and useState hooks from React
import { useEffect, useState } from "react"

// Define the Basics component
const Basics = () => {
    // State to track how many times the component has rendered
    const [count, setCount] = useState<number>(0)

    // useEffect hook - runs side effects after render
    // The dependency array [count] means this effect runs whenever count changes
    useEffect(() => { //setTimeout
        // setTimeout creates a delay before executing the callback
        setTimeout(() => {
            // Update state using functional update pattern
            // This prevents stale closure issues
            setCount((count) => count + 1) // -- count + 1
        }, 1000) //after 1 sec 0, 1 , 2, 3, 4
        // After 1 second, increment count, which triggers re-render
        // This creates a loop: render -> useEffect -> setTimeout -> setCount -> render -> ...

    }, [count]) // Dependency array - effect runs when count changes

    // Return JSX - displays current render count
    return (
        <div>I have been rendered {count} times</div>
    )
}

// Export the component as default
export default Basics