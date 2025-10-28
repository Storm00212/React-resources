/**
 * Hero.tsx - Hero Section Component with Tailwind CSS
 *
 * This component demonstrates advanced Tailwind CSS usage for creating
 * responsive, modern hero sections. It showcases:
 * - Responsive design with breakpoint prefixes (md:, lg:, etc.)
 * - Flexbox layout utilities
 * - Typography and color utilities
 * - Spacing and sizing utilities
 * - Border and shadow effects
 * - Image styling and responsive behavior
 */

// Import the hero image asset
import homeIMG from '../../assets/images/home-image.png'

// Define the Hero component using named export
export const Hero = () => {
    // Return the hero section JSX with extensive Tailwind CSS classes
    return (
        // Main container: responsive flex layout (column on mobile, row on desktop)
        // justify-between: space items apart, gap-8: consistent spacing
        // h-fit: height fits content, responsive padding
        <div className="flex flex-col md:flex-row justify-between gap-8 h-fit p-4 md:p-8">

            {/* Left side content: text and description */}
            {/* Full width on mobile, half width on desktop */}
            {/* Border, rounded corners, responsive padding, bottom margin on mobile */}
            <div className="w-full md:w-1/2 border-2 border-gray-300 rounded-lg p-6 md:p-8 mb-6 md:mb-0">

                {/* Main heading: responsive text size, bold, margin bottom, gray color */}
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-600">
                    Welcome to TodoPro!
                </h1>

                {/* First paragraph: responsive text size, gray color, margin bottom */}
                <p className="mb-4 text-gray-700 text-base md:text-lg">
                    Supercharge your team's productivity with <span className="font-semibold text-blue-600">TodoPro</span> — the ultimate task management service for modern teams.
                </p>

                {/* Second paragraph: responsive text size, gray color, small margin bottom */}
                <p className="mb-2 text-gray-700 text-base md:text-lg">
                    Effortlessly assign tasks, track progress, and collaborate in real-time. Whether you're managing a small project or a large team, TodoPro makes delegation and follow-up a breeze.
                </p>

                {/* Third paragraph: responsive text size, gray color */}
                <p className="text-gray-700 text-base md:text-lg">
                    Get started today and experience seamless teamwork like never before!
                </p>
            </div>

            {/* Right side content: image container */}
            {/* Full width on mobile, half width on desktop */}
            {/* Flex container centering the image */}
            <div className="w-full md:w-1/2 flex items-center">

                {/* Hero image: full width, responsive height, object cover for aspect ratio */}
                {/* Rounded corners, shadow effect for depth */}
                <img
                    src={homeIMG}
                    alt="home-image"
                    className="w-full h-48 md:h-full object-cover rounded-lg shadow-lg"
                />
            </div>
        </div>
    );
}
