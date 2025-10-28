/**
 * Navbar.tsx - Navigation Component
 *
 * This component demonstrates a reusable navigation bar that can be used
 * across different pages. It shows how to structure navigation elements
 * and handle both images and links in a component.
 */

// Import the logo image asset
// Using relative path to navigate from components/nav/ to src/assets/
import logo from '../../assets/images/logo.webp';

// Import navigation-specific styles
// This CSS file contains styles for the navbar layout and appearance
import './nav.css'

// Define the Navbar component using arrow function syntax
// Using named export: export const Navbar = () => { ... }
// This requires destructuring when importing: import { Navbar } from './Navbar'
export const Navbar = () => {
    // Return the JSX structure for the navigation bar
    return (
        // Wrapper div for additional layout control
        <div>
            {/* HTML5 nav element - semantic element for navigation */}
            <nav>
                {/* Logo image */}
                {/* src uses the imported logo path */}
                {/* alt provides alternative text for accessibility */}
                {/* Inline style sets the height - demonstrates mixing CSS classes and inline styles */}
                <img src={logo} alt="Logo" style={{ height: '100px' }} />

                {/* Unordered list for navigation links */}
                <ul>
                    {/* List items with anchor tags for navigation */}
                    {/* href attributes point to different routes/pages */}
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            </nav>
        </div>
    );
}