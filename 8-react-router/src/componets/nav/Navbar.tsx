/**
 * Navbar.tsx - Navigation Component for React Router
 *
 * This component provides navigation links for a React Router application.
 * Currently uses regular HTML anchor tags (<a>), but in a proper React Router
 * setup, these would be replaced with Link or NavLink components from
 * react-router-dom for client-side routing.
 *
 * Key differences from regular links:
 * - Link components prevent full page reloads
 * - They enable client-side routing
 * - They can show active states
 * - They integrate with browser history
 */

// Import the logo image asset
import logo from '../../assets/images/logo.webp';

// Import navigation-specific CSS styles
import './nav.css'

// Define the Navbar component using named export
export const Navbar = () => {
    // Return the navigation structure
    return (
        // Wrapper div
        <div>
            {/* HTML5 nav element for semantic navigation */}
            <nav>
                {/* Company logo */}
                <img src={logo} alt="Logo" style={{ height: '100px' }} />

                {/* Navigation links list */}
                <ul>
                    {/* Navigation links - currently using <a> tags */}
                    {/* In React Router, these would be <Link to="/">Home</Link> */}
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            </nav>
        </div>
    );
}