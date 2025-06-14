import './jokes.css'
import { useReducer } from "react"
import { jokesReducer } from "../reducers/jokesReducer"
import { initialJokes } from '../data/data'


const Jokes = () => {
    const [jokes, dispatch] = useReducer(jokesReducer, initialJokes);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const input = e.currentTarget.elements.namedItem('jokeInput') as HTMLInputElement
        const jokeText = input.value.trim()
        if (!jokeText) {
            alert("Please enter a joke")
            return
        }

        const newJoke = {
            id: Date.now(), // Using timestamp as a unique ID
            joke: jokeText,
            rate: 0, // Initial rate set to 0
        }

        dispatch({ type: 'ADD_JOKE', payload: newJoke });
        // log the new joke to the console
        console.log("New Joke Added:", newJoke);
        input.value = '' // Clear the input field after submission
    }

    return (
        <div className='container'>
            <h2>Jokes for you 💀</h2>
            <form className="form" onSubmit={handleSubmit}>
                <input type="text" name="jokeInput" placeholder="Add a Joke" />
                <button type="submit">Add Joke</button>
            </form>

            <div className="jokes">
                {jokes.sort((a, b) => b.rate - a.rate)
                    .map((joke) => (
                        <div className="joke" key={joke.id}>
                            <div className="joke-text">{joke.joke}</div>
                            <div className="text">{joke.rate}</div>

                            <div className="btns">
                                {/* Actions */}
                                <div className="addupdate-buttons">
                                    <button onClick={() => {
                                        const updatedText = prompt("Update your joke:", joke.joke);
                                        if (updatedText && updatedText.trim()) {
                                            dispatch({
                                                type: 'UPDATE_JOKE',
                                                payload: { ...joke, joke: updatedText.trim() }
                                            })
                                        }

                                    }}>Edit</button>

                                    {/* Delete */}
                                    <button
                                        onClick={() => dispatch({ type: 'DELETE_JOKE', payload: joke.id })}>
                                        Delete
                                    </button>

                                </div>



                                {/* joke Buttons */}
                                <div className="like-dislike-buttons">

                                    <button
                                        onClick={() => dispatch({ type: 'INCREMENT_RATE', payload: joke.id })}
                                    >
                                        👍
                                    </button>

                                    <button
                                        onClick={() => dispatch({ type: 'DECREMENT_RATE', payload: joke.id })}
                                    >
                                        👎
                                    </button>
                                </div>
                            </div>


                        </div>
                    ))}
            </div>
        </div>
    )
}

export default Jokes