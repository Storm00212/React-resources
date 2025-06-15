import { useEffect, useState } from "react"


const Basics = () => {
    const [count, setCount] = useState<number>(0)

    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1)
        }, 1000)
    })


    return (
        <div>I have been rendered {count} times</div>
    )

}


export default Basics