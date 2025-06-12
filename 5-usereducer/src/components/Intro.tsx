import { useReducer } from "react"
import { reducerCounter } from "../reducers/counterReducer"

const Intro = () => {
    // useReducer is a hook that allows you to manage state in a more complex way than useState
    const [count, dispatch] = useReducer(reducerCounter, 0) //means that the initial state is 0

    const handleIncrease = () => {
        dispatch({ type: 'INCREMENT' }) // Dispatch an action to increment the count
    }

    // const handleDecrease = () => {
    //     dispatch({ type: 'DECREMENT' }) // Dispatch an action to decrement the count
    // }


    return (
        <div>
            <h1>Counter</h1>
            <div className="btns">
                <button onClick={handleIncrease}>ADD</button>
                <br />
                {count}
                <br />
                <button onClick={() => dispatch({ type: 'DECREMENT' })}>SUBTRACT</button>
                {/* 
                or
                <button onClick={handleDecrease}>SUBTRACT</button>
                */}
            </div>
        </div>
    )
}

export default Intro