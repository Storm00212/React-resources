/**
 * Navbar.tsx - Responsive Navigation Component with Tailwind CSS
 *
 * This component demonstrates advanced Tailwind CSS techniques for creating
 * responsive navigation bars with mobile-friendly dropdown menus. It showcases:
 * - DaisyUI component classes (navbar, dropdown, menu, btn)
 * - Responsive design with breakpoint utilities (lg:, sm:, hidden)
 * - Mobile-first approach with hamburger menu
 * - React Router integration with NavLink
 * - Custom styling with Tailwind utilities
 * - SVG icons and accessibility features
 */

// Import the logo image asset
import logo from '../../assets/images/logo.png';

// Import NavLink from React Router for client-side navigation
import { NavLink } from 'react-router';

// Define the Navbar component
const Navbar = () => {
    // Return the navigation structure with Tailwind CSS classes
    return (
        // Wrapper div
        <div>
            {/* Main navbar container using DaisyUI navbar class */}
            {/* bg-base-100: background color, shadow-sm: subtle shadow */}
            <div className="navbar bg-base-100 shadow-sm">

                {/* Left side of navbar - logo and mobile menu */}
                <div className="navbar-start">

                    {/* Mobile dropdown menu */}
                    <div className="dropdown">
                        {/* Hamburger button - only visible on large screens and below */}
                        {/* tabIndex for keyboard accessibility, role="button" for screen readers */}
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            {/* Hamburger icon SVG */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>

                        {/* Dropdown menu content */}
                        {/* menu-sm: small menu size, dropdown-content: positioning */}
                        {/* rounded-box: rounded corners, z-1: z-index, mt-3: top margin */}
                        {/* w-52: width, p-2: padding, shadow: drop shadow */}
                        {/* bg-gray-700: dark background, h-[60vh]: 60% viewport height */}
                        <ul className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow text-base-content bg-gray-700 h-[60vh]">

                            {/* Nested menu list */}
                            <ul className="menu px-1">
                                {/* Navigation links with bold, large text */}
                                <li className="font-bold text-lg">
                                    <NavLink to="/">Home</NavLink>
                                </li>
                                <li className="font-bold text-lg">
                                    <NavLink to="/about">About</NavLink>
                                </li>
                                <li className="font-bold text-lg">
                                     <NavLink to="/dashboard">Dashboard</NavLink>
                                </li>
                                <li className="font-bold text-lg">
                                    <NavLink to="/register">Register</NavLink>
                                </li>
                                <li className="font-bold text-lg">
                                    <NavLink to="/login">Login</NavLink>
                                </li>
                            </ul>
                        </ul>
                    </div>

                    {/* Desktop logo - hidden on small screens, visible on sm and up */}
                    {/* w-16: width, ml-8: left margin, hidden sm:block: responsive visibility */}
                    <img src={logo} alt="" className="w-16 ml-8 hidden sm:block " />
                </div>

                {/* Center section - desktop navigation menu */}
                {/* hidden lg:flex: hidden by default, flex on large screens */}
                <div className="navbar-center hidden lg:flex">
                    {/* Horizontal menu */}
                    <ul className="menu menu-horizontal px-1 ">
                        {/* Main navigation links */}
                        <li className="font-bold text-lg">
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li className="font-bold text-lg">
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li className="font-bold text-lg">
                            <NavLink to="/dashboard">Dashboard</NavLink>
                        </li>
                    </ul>
                </div>

                {/* Right side - authentication links and profile button */}
                <div className="navbar-end">
                    {/* Auth links container */}
                    <div className='flex gap-4 mr-4'>
                        {/* Register and Login links */}
                        <li className="font-bold text-lg list-none">
                            <NavLink to="/register">Register</NavLink>
                        </li>
                        <li className="font-bold text-lg list-none">
                            <NavLink to="/login">Login</NavLink>
                        </li>
                    </div>

                    {/* Profile button using DaisyUI btn class */}
                    <a className="btn">Profile</a>
                </div>
            </div >
        </div >
    )
}

// Export the component as default
export default Navbar