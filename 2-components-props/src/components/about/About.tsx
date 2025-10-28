/**
 * About.tsx - About Component
 *
 * This component demonstrates a self-contained UI section that displays
 * information about the company. It shows how components can be modular
 * and reusable, handling their own styling and content.
 */

// Import the about image using Vite's asset handling
// The '../../' goes up two directories from components/about/ to reach src/assets/
import aboutimg from '../../assets/images/aboutimg.jpg';

// Import component-specific CSS styles
// This CSS file contains styles specific to the About component
import './about.css';

// Define the About component using arrow function syntax
// Arrow functions are a modern alternative to regular function declarations
const About = () => {
    // Return the JSX that describes the About section's UI
    return (
        // Main container div with CSS class for styling
        <div className="about-container">
            {/* Heading for the about section */}
            <h1 className="about-title">About Dairy Cream</h1>

            {/* Paragraph with descriptive text about the company */}
            <p className="about-description">
                Dairy Cream is committed to revolutionizing dairy farming by leveraging modern management systems. Our mission is to provide fresh, high-quality milk straight from our farms to your table, ensuring both quality and affordability. With a focus on streamlined operations and customer satisfaction, Dairy Cream stands for excellence in every drop.
            </p>

            {/* Image element displaying the about image */}
            {/* src uses the imported image path */}
            {/* alt provides alternative text for accessibility */}
            {/* className applies CSS styling to the image */}
            <img src={aboutimg} alt="About" className="about-image" />
        </div>
    );
};

// Export the component as the default export
// This allows other files to import it with: import About from './About'
export default About;