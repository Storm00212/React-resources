/**
 * Jokes.tsx - Complete Jokes Management with useReducer
 *
 * This component demonstrates a full CRUD (Create, Read, Update, Delete) application
 * using the useReducer hook. It manages a list of jokes with ratings and provides
 * functionality to add, edit, delete, and rate jokes.
 *
 * Key concepts demonstrated:
 * - Complex state management with useReducer
 * - Form handling and validation
 * - Dynamic list rendering with sorting
 * - Action dispatching with payloads
 * - User interactions (prompts, alerts)
 * - Array manipulation in reducers
 */

// Import component-specific CSS styles
import './jokes.css'

// Import useReducer hook for complex state management
import { useReducer } from "react"

// Import the jokes reducer function
import { jokesReducer } from "../reducers/jokesReducer"

// Import initial jokes data
import { initialJokes } from '../data/data'

// Define the Jokes component
const Jokes = () => {
    // Initialize useReducer with the jokesReducer and initial state
    // Returns current jokes array and dispatch function
    const [jokes, dispatch] = useReducer(jokesReducer, initialJokes);

    // Form submission handler for adding new jokes
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        // Prevent default form submission behavior
        e.preventDefault()

        // Get the input element and extract its value
        const input = e.currentTarget.elements.namedItem('jokeInput') as HTMLInputElement
        const jokeText = input.value.trim()

        // Basic validation - ensure joke text is not empty
        if (!jokeText) {
            alert("Please enter a joke")
            return
        }

        // Create new joke object with unique ID and default rating
        const newJoke = {
            id: Date.now(), // Using timestamp as a unique ID
            joke: jokeText,
            rate: 0, // Initial rate set to 0
        }

        // Dispatch ADD_JOKE action with the new joke as payload
        dispatch({ type: 'ADD_JOKE', payload: newJoke });

        // Debug logging (development only)
        // log the new joke to the console
        console.log("New Joke Added:", newJoke);

        // Clear the input field after successful submission
        input.value = '' // Clear the input field after submission
    }

    // Return the JSX structure
    return (
        // Main container for the entire component
        <div className='container'>
            {/* Component title */}
            <h2>Jokes for you 💀</h2>

            {/* Form for adding new jokes */}
            <form className="form" onSubmit={handleSubmit}>
                {/* Text input with name attribute for form access */}
                <input type="text" name="jokeInput" placeholder="Add a Joke" />
                {/* Submit button triggers form onSubmit */}
                <button type="submit">Add Joke</button>
            </form>

            {/* Container for displaying all jokes */}
            <div className="jokes">
                {
                    // Sort jokes by rating (highest first) before mapping
                    // This ensures highest-rated jokes appear at the top
                    jokes.sort((a, b) => b.rate - a.rate)
                        .map((joke) => (
                            // Individual joke container with unique key
                            <div className="joke" key={joke.id}>
                                {/* Display the joke text */}
                                <div className="joke-text">{joke.joke}</div>

                                {/* Display the current rating */}
                                <div className="text">{joke.rate}</div>

                                {/* Action buttons container */}
                                <div className="btns">
                                    {/* Edit and Delete buttons */}
                                    {/* Actions */}
                                    <div className="addupdate-buttons">
                                        {/* Edit button - uses prompt for user input */}
                                        <button onClick={() => {
                                            // Prompt user for updated joke text
                                            const updatedText = prompt("Update your joke:", joke.joke);
                                            // Only update if user provided text and it's not empty
                                            if (updatedText && updatedText.trim()) {
                                                // Dispatch UPDATE_JOKE action with modified joke object
                                                dispatch({
                                                    type: 'UPDATE_JOKE',
                                                    payload: { ...joke, joke: updatedText.trim() }
                                                })
                                            }

                                        }}>Edit</button>

                                        {/* Delete button */}
                                        {/* Delete */}
                                        <button
                                            onClick={() => dispatch({ type: 'DELETE_JOKE', payload: joke.id })}>
                                            Delete
                                        </button>

                                    </div>

                                    {/* Rating buttons (like/dislike) */}
                                    {/* joke Buttons */}
                                    <div className="like-dislike-buttons">

                                        {/* Increment rating button */}
                                        <button
                                            onClick={() => dispatch({ type: 'INCREMENT_RATE', payload: joke.id })}
                                        >
                                            👍
                                        </button>

                                        {/* Decrement rating button */}
                                        <button
                                            onClick={() => dispatch({ type: 'DECREMENT_RATE', payload: joke.id })}
                                        >
                                            👎
                                        </button>
                                    </div>
                                </div>


                            </div>
                        ))
                }
            </div>
        </div>
    )
}

// Export the component as default
export default Jokes