
/**
 * Button.tsx - Reusable Button Component
 *
 * This component demonstrates:
 * - TypeScript interface definitions for props
 * - Optional props with the ? operator
 * - Optional chaining (?.) for safe function calls
 * - Component reusability and prop passing
 * - Event handling through callback functions
 */

// Import component-specific CSS styles
import './button.css'

// Define TypeScript type for component props
// This ensures type safety when using the Button component
type ButtonProps = {
    color: string;                           // Required: the button text/color name
    changeBGFunc?: (color: string) => void;  // Optional: callback function (marked with ?)
}

// Define the Button component with destructured props
const Button = ({ color, changeBGFunc }: ButtonProps) => {
    // Return the button element
    return (
        // Button element with CSS class and click handler
        <button
            className="button"  // Applies CSS styling

            // onClick handler uses optional chaining (?.) to safely call the function
            // If changeBGFunc is undefined, nothing happens (no error)
            // This prevents runtime errors when the prop isn't provided
            onClick={() => changeBGFunc?.(color)} //means optional chaining
        >
            {/* Button text displays the color name */}
            {color}
        </button>
    )
}

// Export the component as default
export default Button