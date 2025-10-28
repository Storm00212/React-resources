/**
 * Home.tsx - Home Page Component for React Router
 *
 * This component represents the Home/Landing page in a React Router application.
 * It would typically be rendered when users visit the root path "/" or "/home".
 * The component displays welcome content and company information.
 *
 * In a React Router setup, this would be associated with a Route component
 * and would serve as the default page users see when they first visit the site.
 */

// Import the home image asset
import homeIMG from '../../assets/images/homeimg.jpg';

// Import component-specific CSS styles
import './home.css';

// Define the Home component
const Home = () => {
    // Return the JSX structure for the Home page
    return (
        // Outer wrapper div
        <div>
            {/* Main home container with CSS styling */}
            <div className="home-container">
                {/* Page heading */}
                <h1 className="home-title">Welcome to Our Website</h1>

                {/* Descriptive content about the company */}
                <p className="home-description">
                    Dairy Cream is a modern dairy farming management system designed to deliver fresh, high-quality milk directly from our farms to your table.
                    By streamlining operations and reducing overhead, we ensure our customers enjoy premium dairy products at affordable prices.
                    Experience the difference with Dairy Cream—where quality meets cost savings.
                </p>

                {/* Hero image for the home page */}
                <img src={homeIMG} alt="Home" className="home-image" />
            </div>
        </div>
    );
};

// Export the component as default
export default Home;
