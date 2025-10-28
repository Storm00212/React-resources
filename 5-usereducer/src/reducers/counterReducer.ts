/**
 * counterReducer.ts - Simple Counter Reducer
 *
 * This is a basic reducer function that demonstrates the fundamental pattern
 * of reducer functions in React's useReducer hook. Reducers are pure functions
 * that take the current state and an action, then return the new state.
 *
 * Key concepts:
 * - Pure functions (no side effects)
 * - Action-based state transitions
 * - TypeScript type definitions for actions
 * - Default case handling
 */

// Define the action type using TypeScript union types
// Actions can be either 'INCREMENT' or 'DECREMENT'
type IAction = { type: 'INCREMENT' | 'DECREMENT'; } // The action can either be 'INCREMENT' or 'DECREMENT'

// Export the reducer function
// Reducers take current state and action, return new state
export const reducerCounter = (state: number, action: IAction) => {
    // Switch statement to handle different action types
    switch (action.type) {
        // Handle INCREMENT action
        case 'INCREMENT':
            return state + 1; // Increment the state by 1

        // Handle DECREMENT action
        case 'DECREMENT':
            return state - 1; // Decrement the state by 1

        // Default case - return current state unchanged
        // This handles any unrecognized actions
        default:
            return state; // If the action is not recognized, return the current state
    }
}