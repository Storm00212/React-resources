
import './jokes.css'
import { FaRegStar } from "react-icons/fa";

const ratingToStars = (rating: number) => {
    const stars = []
    //rating = 4
    //0, 1,2,3,4
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars.push(<FaRegStar key={i} className="star filled" />)
        } else {
            stars.push(<FaRegStar key={i} className="star" />)
        }
    }
    return stars

    // rating = 4
    /*
    i=0 0  is less than 4 
    i= 1 - 1 is less than 4
    i = 2 - 2 is less than 4 
    i = 3 - 3 is less than 4
    i = 4 
stars = [*****]
    */
}

type Joke = {
    joke: string
    rating: number
}

type JokeProps = {
    joke: Joke
}

const Jokes = ({ joke }: JokeProps) => {
    const { joke: jokeName, rating } = joke
    return (
        <div>
            <h4 className="jokeName">{jokeName}</h4>
            <p className="jokeRating">Rating: {ratingToStars(rating)}</p>
        </div>
    )
}

export default Jokes