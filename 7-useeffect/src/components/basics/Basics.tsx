import { useEffect, useState } from "react"


const Basics = () => {
    const [count, setCount] = useState<number>(0)

    useEffect(() => { //setTimeout

        setTimeout(() => {
            setCount((count) => count + 1) // -- count + 1
        }, 1000) //after 1 sec 0, 1 , 2, 3, 4

    }, [count])


    return (
        <div>I have been rendered {count} times</div>
    )

}


export default Basics