/**
 * Home.tsx - Home Component
 *
 * This component represents the homepage/landing section of the application.
 * It demonstrates how components can structure content in a clean, organized way
 * and handle both text content and visual elements like images.
 */

// Import the home image asset from the assets directory
// Using relative path navigation: ../../ goes up two levels from components/home/
import homeIMG from '../../assets/images/homeimg.jpg';

// Import component-specific styles
// This CSS file contains styles unique to the Home component
import './home.css';

// Define the Home component using arrow function syntax
// This is a functional component that returns JSX
const Home = () => {
    // Return the JSX structure for the home page
    return (
        // Outer wrapper div (could be used for additional layout/styling)
        <div>
            {/* Main home container with CSS class for styling */}
            <div className="home-container">
                {/* Main heading for the home page */}
                <h1 className="home-title">Welcome to Our Website</h1>

                {/* Descriptive paragraph explaining the company's value proposition */}
                <p className="home-description">
                    Dairy Cream is a modern dairy farming management system designed to deliver fresh, high-quality milk directly from our farms to your table.
                    By streamlining operations and reducing overhead, we ensure our customers enjoy premium dairy products at affordable prices.
                    Experience the difference with Dairy Cream—where quality meets cost savings.
                </p>

                {/* Hero image for the home page */}
                {/* src uses the imported image path from Vite's asset processing */}
                {/* alt provides descriptive text for screen readers and accessibility */}
                {/* className applies specific styling to the image */}
                <img src={homeIMG} alt="Home" className="home-image" />
            </div>
        </div>
    );
};

// Export the component as default export
// This allows importing with: import Home from './Home'
export default Home;
