import './jokes.css'
import { FaRegStar } from "react-icons/fa6";


const ratingToStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars.push(<FaRegStar key={i} className="star filled" />);
        } else {
            stars.push(<FaRegStar key={i} className="star" />);
        }
    }
    return stars;
}

type JokeProps = {
    joke: string;
    rating: number;
}
const Jokes = ({ joke, rating }: JokeProps) => {
    return (
        <div>
            <h4 className="jokeName">{joke}</h4>
            {/* <p className="jokeRating">Rating {rating}</p> */}
            <p className="jokeRating">Rating {ratingToStars(rating)}</p>

        </div>
    )
}

export default Jokes