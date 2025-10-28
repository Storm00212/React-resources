
/**
 * Jokes.tsx - Individual Joke Component with Star Rating
 *
 * This component demonstrates advanced JSX concepts including:
 * - Dynamic rendering based on data
 * - Array manipulation and mapping
 * - Icon integration (React Icons)
 * - Complex logic for visual representations (star ratings)
 * - TypeScript type definitions for props
 */

// Import component-specific CSS styles
import './jokes.css'

// Import a star icon from React Icons library
// FaRegStar is a regular (outlined) star icon from Font Awesome
import { FaRegStar } from "react-icons/fa";

// Helper function to convert a numeric rating (0-5) into an array of star icons
// This demonstrates how to create dynamic visual elements based on data
const ratingToStars = (rating: number) => {
    // Initialize an empty array to hold the star elements
    const stars = []

    // Loop 5 times (for a 5-star rating system)
    // rating = 4 means: 0, 1, 2, 3 (filled stars), 4 (empty star)
    for (let i = 0; i < 5; i++) {
        // If current index is less than rating, create a filled star
        if (i < rating) {
            // Push a filled star icon with unique key and CSS class
            stars.push(<FaRegStar key={i} className="star filled" />)
        } else {
            // Otherwise, create an empty (outlined) star
            stars.push(<FaRegStar key={i} className="star" />)
        }
    }

    // Return the array of star elements to be rendered
    return stars

    // Example: rating = 4
    /*
    i=0: 0 < 4 → filled star ⭐
    i=1: 1 < 4 → filled star ⭐
    i=2: 2 < 4 → filled star ⭐
    i=3: 3 < 4 → filled star ⭐
    i=4: 4 < 4 → false → empty star ☆
    Result: [⭐, ⭐, ⭐, ⭐, ☆]
    */
}

// TypeScript type definition for a single joke object
// This ensures type safety when working with joke data
type Joke = {
    joke: string    // The actual joke text
    rating: number  // Numeric rating from 0-5
}

// TypeScript type definition for the component's props
// The component receives a joke object as a prop
type JokeProps = {
    joke: Joke  // The joke data passed from parent component
}

// Define the Jokes component using destructured props
const Jokes = ({ joke }: JokeProps) => {
    // Destructure the joke object to get individual properties
    // Rename 'joke' to 'jokeName' to avoid naming conflict with the prop
    const { joke: jokeName, rating } = joke

    // Return the JSX structure for displaying a single joke
    return (
        <div>
            {/* Display the joke text */}
            <h4 className="jokeName">{jokeName}</h4>

            {/* Display the rating as a visual star representation */}
            {/* Call ratingToStars function to convert number to star icons */}
            <p className="jokeRating">Rating: {ratingToStars(rating)}</p>
        </div>
    )
}

// Export the component as the default export
export default Jokes