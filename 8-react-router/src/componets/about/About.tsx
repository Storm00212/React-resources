/**
 * About.tsx - About Page Component for React Router
 *
 * This component represents the About page in a React Router application.
 * It displays information about the company and would typically be rendered
 * when users navigate to the "/about" route.
 *
 * In a React Router setup, this component would be associated with a Route
 * component and would render when the URL path matches the specified route.
 */

// Import the about image asset
// Using relative path navigation to reach the assets directory
import aboutimg from '../../assets/images/aboutimg.jpg';

// Import component-specific CSS styles
import './about.css';

// Define the About component
const About = () => {
    // Return the JSX structure for the About page
    return (
        // Main container with CSS class for styling
        <div className="about-container">
            {/* Page heading */}
            <h1 className="about-title">About Dairy Cream</h1>

            {/* Descriptive paragraph about the company */}
            <p className="about-description">
                Dairy Cream is committed to revolutionizing dairy farming by leveraging modern management systems. Our mission is to provide fresh, high-quality milk straight from our farms to your table, ensuring both quality and affordability. With a focus on streamlined operations and customer satisfaction, Dairy Cream stands for excellence in every drop.
            </p>

            {/* About image */}
            <img src={aboutimg} alt="About" className="about-image" />
        </div>
    );
};

// Export the component as default
// This allows importing in router configuration: import About from './About'
export default About;