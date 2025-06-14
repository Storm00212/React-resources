export interface Joke {
    id: number;
    joke: string;
    rate: number;
}

// payload is the data that we want to send to the reducer 
// Increment and Decrement actions will use the joke id to identify which joke to update

type AddJoke = { type: 'ADD_JOKE'; payload: Joke }
type Increment = { type: 'INCREMENT_RATE'; payload: number }
type Decrement = { type: 'DECREMENT_RATE'; payload: number }
type Delete = { type: 'DELETE_JOKE'; payload: number }
type Update = { type: 'UPDATE_JOKE'; payload: Joke } //payload is the updated joke object

// This type defines the structure of actions that can be dispatched to the jokesReducer
export type JokeAction = AddJoke | Increment | Decrement | Delete | Update  // Union type for all joke actions


// TODO : INITIAL JOKES

// state is an array of jokes, action is an action that can be dispatched to the reducer
export function jokesReducer(state: Joke[], action: JokeAction): Joke[] {
    switch (action.type) {
        case 'ADD_JOKE':
            return [...state, action.payload]

        case 'INCREMENT_RATE':
            return state.map(joke =>
                joke.id === action.payload ? { ...joke, rate: joke.rate + 1 } : joke
            ) // joke.id === action.payload ? means that we are checking if the id of the joke is equal to the id of the joke we want to update, if it is, we increment the rate by 1, otherwise we return the joke as it is.

        case 'DECREMENT_RATE':
            return state.map(joke =>
                joke.id === action.payload ? { ...joke, rate: joke.rate - 1 } : joke
            );

        case 'DELETE_JOKE':
            return state.filter(joke => joke.id !== action.payload) // Filter out the joke with the id that matches the payload, effectively deleting it from the state
        // joke.id !== action.payload - means that we are keeping all jokes except the one with the id that matches the payload
        case 'UPDATE_JOKE':
            return state.map(joke =>
                joke.id === action.payload.id ? { ...joke, joke: action.payload.joke } : joke //...joke, joke: action.payload.joke - this spreads the existing joke properties and updates the joke text with the new one from the payload
            )

        default:
            return state
    }
}