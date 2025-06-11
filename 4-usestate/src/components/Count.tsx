import { useState } from "react"


const Count = () => {
    const [number, setNumber] = useState<number>(0)

    // or
    const decrement = () => setNumber(number - 1)
    return (
        <div>
            <h2>Increase & Decrease</h2>
            <button onClick={() => setNumber(number + 1)}> ADD </button>
            <br />
            <span> {number} </span>
            <br />
            {/* 
                or
                <button onClick={() => setNumber((prev) => prev + 1)}> ADD </button>
            */}
            <button onClick={decrement}> Decrease </button>
            <br />
            <button onClick={() => setNumber(0)}>Reset</button>

        </div>
    )
}

export default Count