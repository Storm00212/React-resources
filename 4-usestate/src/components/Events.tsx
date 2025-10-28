/**
 * Events.tsx - Event Registration with Form Handling
 *
 * This component demonstrates advanced useState patterns:
 * - Managing multiple state variables
 * - Form handling with controlled inputs
 * - Event handling with TypeScript types
 * - Array state management (adding items to lists)
 * - State updates that depend on previous state
 * - Form submission and validation
 */

// Import useState hook from React
import { useState } from "react"

// Define the Events component
const Events = () => {
  // State for the input field - controlled component pattern
  // TypeScript ensures name is always a string
  const [name, setName] = useState<string>("");

  // State for the list of attendees - array of strings
  // Initialized as empty array, will be populated as users register
  const [attendees, setAttendees] = useState<string[]>([]);

  // Event handler for input changes
  // TypeScript typing ensures e is the correct event type
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Update the name state with the input value
    setName(e.target.value);
    // Log the change for debugging (development only)
    console.log(`Input changed: ${e.target.value}`);
  }

  // Form submission handler
  // Prevents default form behavior and handles registration
  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    // Prevent the browser's default form submission
    e.preventDefault()

    // Only register if name is not empty (basic validation)
    if (name) { //used to avoid empty names
      // Log the registration for debugging
      console.log(`Registering attendee: ${name}`);

      // Add the new attendee to the existing array
      // Use spread operator to create new array with existing attendees + new name
      // This follows React's immutability principle
      setAttendees([...attendees, name])

      // Clear the input field after successful registration
      setName(""); // Clear the input field after registration
    }
  }

  // Return the JSX structure
  return (
    <div>
      {/* Section heading */}
      <h2>Event Registration</h2>

      {/* Registration form */}
      {/* onSubmit calls handleRegister when form is submitted */}
      <form onSubmit={handleRegister} >
        {/* Controlled input - value is controlled by React state */}
        {/* onChange updates state whenever user types */}
        <input
          type="text"
          value={name}                    // Controlled by state
          onChange={handleInputChange}   // Updates state on change
          placeholder="Enter your name"  // Placeholder text
        />

        {/* Submit button triggers form submission */}
        <button type="submit">Register</button>
      </form>

      {/* Attendees list section */}
      <h3>Attendees:</h3>
      <ul>
        {
          // Map over attendees array to create list items
          // Each attendee becomes a list item
          attendees.map((attendee, index) => (
            // key prop required by React for list items
            // Using index as key (acceptable for simple lists)
            <li key={index}> {attendee}</li>
          ))
        }
      </ul>
    </div>

  )
}

// Export the component as default
export default Events