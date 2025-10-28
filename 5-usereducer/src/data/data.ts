/**
 * data.ts - Initial Jokes Data
 *
 * This file contains the initial state data for the jokes application.
 * It demonstrates how to structure and export static data that will be
 * used as the initial state in a useReducer hook.
 *
 * Key concepts:
 * - TypeScript type imports for type safety
 * - Static data management
 * - Array of objects with consistent structure
 * - Exporting data for use in other modules
 */

// Import the Joke type from the reducer file
// This ensures our data structure matches the expected interface
import type { Joke } from "../reducers/jokesReducer";

// Export the initial jokes array
// This will be used as the initial state in useReducer
export const initialJokes: Joke[] = [
    {
        id: 1,
        joke: 'What do you call a very small valentine? A valen-tiny!',
        rate: 3,
    },
    {
        id: 2,
        joke: 'What did the dog say when he rubbed his tail on the sandpaper? Rough, rough!',
        rate: 2,
    },
    {
        id: 3,
        joke: 'A termite walks into the bar and says, "Where is the bar tender?"',
        rate: 1,
    },
    {
        id: 4,
        joke: 'Why did the scarecrow win an award? Because he was outstanding in his field!',
        rate: 0,
    },
    {
        id: 5,
        joke: 'Why was the math book sad? Because it had too many problems.',
        rate: 0,
    },

]