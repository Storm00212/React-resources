/**
 * jokesReducer.ts - Complex Jokes State Management Reducer
 *
 * This reducer demonstrates advanced state management patterns for handling
 * complex data structures (arrays of objects) with multiple operations.
 * It implements full CRUD functionality for managing jokes with ratings.
 *
 * Key concepts demonstrated:
 * - Complex state structures (arrays of objects)
 * - Multiple action types with different payload structures
 * - Array manipulation methods (map, filter, spread operator)
 * - Immutable state updates
 * - TypeScript union types for actions
 * - Pure functions and predictable state transitions
 */

// Define the Joke interface - represents the structure of a single joke
export interface Joke {
    id: number;    // Unique identifier for the joke
    joke: string;  // The actual joke text
    rate: number;  // Rating/like count for the joke
}

// Define action types with their specific payload structures
// Each action type has a different payload based on what data it needs

// Add a new joke - payload is the complete joke object
type AddJoke = { type: 'ADD_JOKE'; payload: Joke }

// Increment rating - payload is just the joke ID (number)
type Increment = { type: 'INCREMENT_RATE'; payload: number }

// Decrement rating - payload is just the joke ID (number)
type Decrement = { type: 'DECREMENT_RATE'; payload: number }

// Delete joke - payload is the joke ID to delete
type Delete = { type: 'DELETE_JOKE'; payload: number }

// Update joke - payload is the updated joke object
type Update = { type: 'UPDATE_JOKE'; payload: Joke } //payload is the updated joke object

// Union type that represents all possible actions for this reducer
// This ensures type safety when dispatching actions
// This type defines the structure of actions that can be dispatched to the jokesReducer
export type JokeAction = AddJoke | Increment | Decrement | Delete | Update  // Union type for all joke actions

// TODO : INITIAL JOKES - placeholder for future enhancement

// The main reducer function
// Takes current state (array of jokes) and an action, returns new state
// state is an array of jokes, action is an action that can be dispatched to the reducer
export function jokesReducer(state: Joke[], action: JokeAction): Joke[] {
    // Switch on action type to determine how to update state
    switch (action.type) {
        // Add a new joke to the array
        case 'ADD_JOKE':
            // Use spread operator to create new array with existing jokes + new joke
            // This maintains immutability - we never mutate the original state
            return [...state, action.payload]

        // Increment the rating of a specific joke
        case 'INCREMENT_RATE':
            // Use map to create new array with updated joke
            // Find the joke by ID and increment its rate, leave others unchanged
            return state.map(joke =>
                joke.id === action.payload ? { ...joke, rate: joke.rate + 1 } : joke
            ) // joke.id === action.payload ? means that we are checking if the id of the joke is equal to the id of the joke we want to update, if it is, we increment the rate by 1, otherwise we return the joke as it is.

        // Decrement the rating of a specific joke
        case 'DECREMENT_RATE':
            // Similar to increment but decreases the rate
            return state.map(joke =>
                joke.id === action.payload ? { ...joke, rate: joke.rate - 1 } : joke
            );

        // Delete a joke from the array
        case 'DELETE_JOKE':
            // Use filter to create new array without the deleted joke
            // Keep all jokes except the one with matching ID
            return state.filter(joke => joke.id !== action.payload) // Filter out the joke with the id that matches the payload, effectively deleting it from the state
        // joke.id !== action.payload - means that we are keeping all jokes except the one with the id that matches the payload

        // Update the text of an existing joke
        case 'UPDATE_JOKE':
            // Use map to find and update the specific joke
            // Spread existing properties and override the joke text
            return state.map(joke =>
                joke.id === action.payload.id ? { ...joke, joke: action.payload.joke } : joke //...joke, joke: action.payload.joke - this spreads the existing joke properties and updates the joke text with the new one from the payload
            )

        // Default case - return state unchanged for unrecognized actions
        default:
            return state
    }
}