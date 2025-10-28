/**
 * BgChanger.tsx - Background Color Changer Component
 *
 * This component demonstrates advanced useState patterns:
 * - State management for UI changes (background color)
 * - Function props and callback patterns
 * - Dynamic styling with inline styles
 * - Component composition with child components
 * - Conditional rendering and default values
 * - Event handling through multiple components
 */

// Import component-specific CSS styles
import "./bgchanger.css"

// Import useState hook for state management
import { useState } from "react"

// Import the Button component for reusable UI elements
import Button from "../btn/Button";

// Define the BgChanger component
const BgChanger = () => {
    // State to track the current background color
    // Initialized as empty string, will be set to color names like "red", "green", etc.
    const [bg, setBg] = useState<string>("");

    // Function to handle background color changes
    // This function is passed as a prop to Button components
    const changeBackground = (color: string) => {
        // Special handling for "Reset" button
        if (color === "Reset") {
            // Reset to empty string (will default to white in styling)
            setBg("");
        } else {
            // Set background to the specified color
            setBg(color);
        }
    }

    // Debug logging to track state changes (development only)
    console.log(`Background color changed to: ${bg}`);

    // Return the JSX structure
    return (
        // Main container with dynamic background color
        // style prop applies inline styles based on state
        // Conditional: if bg is truthy use it, otherwise default to "white"
        <div className="app" style={{ backgroundColor: bg ? bg : "white" }}>
            {/* Component title */}
            <h2>Background Color Changer</h2>

            {/* Container for the color buttons */}
            <div className="button-container">
                {/* Color buttons - each passes different color and the same change function */}
                <Button color="red" changeBGFunc={changeBackground} />
                <Button color="green" changeBGFunc={changeBackground} />
                <Button color="blue" changeBGFunc={changeBackground} />

                {/* Reset button - uses inline arrow function instead of shared handler */}
                {/* This demonstrates alternative ways to handle events */}
                <Button color="Reset" changeBGFunc={() => setBg("white")} />
            </div>
        </div>
    )
}

// Export the component as default
export default BgChanger