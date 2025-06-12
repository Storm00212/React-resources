export interface Joke {
    id: number;
    joke: string;
    rate: number;
}

export interface IAction {
    type: 'ADD_JOKE' | 'DELETE_JOKE' | 'DECREASE_RATE' | 'INCREMENT_RATE' | 'UPDATE_JOKE'
    payload: Joke | number
}

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

export const reducerJokes = (state: Joke[], action: IAction) => {
    switch (action.type) {
        case 'ADD_JOKE':
            return [...state, action.payload as Joke]
        case 'INCREMENT_RATE':
            return state.map(joke =>
                joke.id === action.payload ? { ...joke, rate: joke.rate + 1 } : joke
            )
        case 'DECREASE_RATE':
            return state.map(joke =>
                joke.id === action.payload ? { ...joke, rate: joke.rate - 1 } : joke
            )
        case 'UPDATE_JOKE':
            return state.map(joke =>
                joke.id === (action.payload as Joke).id
                    ? { ...joke, joke: (action.payload as Joke).joke }
                    : joke
            )
        default:
            return state
    }
}