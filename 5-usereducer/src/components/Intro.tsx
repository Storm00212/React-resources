/**
 * Intro.tsx - Introduction to useReducer Hook
 *
 * This component provides a basic introduction to the useReducer hook.
 * useReducer is an alternative to useState that is useful for complex state
 * logic or when the next state depends on the previous state.
 *
 * Key concepts demonstrated:
 * - useReducer hook usage
 * - Action dispatching
 * - Reducer functions
 * - Action objects with type property
 */

// Import useReducer hook from React
import { useReducer } from "react"

// Import the counter reducer function
import { reducerCounter } from "../reducers/counterReducer"

// Define the Intro component
const Intro = () => {
    // useReducer takes a reducer function and initial state
    // Returns current state and dispatch function
    // useReducer is a hook that allows you to manage state in a more complex way than useState
    const [count, dispatch] = useReducer(reducerCounter, 0) //means that the initial state is 0

    // Event handler for increment button
    // Dispatches an action object to the reducer
    const handleIncrease = () => {
        dispatch({ type: 'INCREMENT' }) // Dispatch an action to increment the count
    }

    // Alternative way to handle decrease (commented out)
    // const handleDecrease = () => {
    //     dispatch({ type: 'DECREMENT' }) // Dispatch an action to decrement the count
    // }

    // Return the JSX structure
    return (
        <div>
            {/* Component title */}
            <h1>Counter</h1>

            {/* Button container */}
            <div className="btns">
                {/* Increment button - calls handler function */}
                <button onClick={handleIncrease}>ADD</button>
                <br />

                {/* Display current count value */}
                {count}
                <br />

                {/* Decrement button - dispatches action directly inline */}
                <button onClick={() => dispatch({ type: 'DECREMENT' })}>SUBTRACT</button>

                {/* Alternative approach (commented out) */}
                {/*
                or
                <button onClick={handleDecrease}>SUBTRACT</button>
                */}
            </div>
        </div>
    )
}

// Export the component as default
export default Intro