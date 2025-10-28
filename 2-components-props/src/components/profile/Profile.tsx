/**
 * Profile.tsx - Reusable Profile Component
 *
 * This component demonstrates how to create reusable components that accept props.
 * It shows TypeScript type definitions for props, destructuring props in function parameters,
 * and how the same component can display different data based on the props passed to it.
 */

// Import component-specific CSS styles
// This file contains styles for the profile card layout
import './profile.css'

// Define a TypeScript type for the component's props
// This ensures type safety - the component will only accept objects with these exact properties
// Using 'type' instead of 'interface' - both work, but 'type' is more flexible for unions
type profiledetailes = {
    name: string;    // The person's name to display
    avatar: string;  // URL or path to the profile image
    bio: string      // Biographical text about the person
}

// Define the Profile component using arrow function syntax with destructured props
// The props are destructured directly in the function parameter: ({ name, avatar, bio })
// This is equivalent to: (props: profiledetailes) => { const { name, avatar, bio } = props; ... }
const Profile = ({ name, avatar, bio }: profiledetailes) => {
    // Return the JSX structure for a profile card
    return (
        // Main container div with CSS class for styling
        <div className="profile-card">
            {/* Profile avatar image */}
            {/* src uses the avatar prop (can be external URL or imported asset) */}
            {/* alt uses the name prop for accessibility */}
            {/* className applies CSS styling to the image */}
            <img src={avatar} alt={name} className="profile-avatar" />

            {/* Profile name heading */}
            {/* Uses the name prop to display the person's name */}
            <h2 className="profile-name">{name}</h2>

            {/* Profile biography paragraph */}
            {/* Uses the bio prop to display the person's description */}
            <p className="profile-bio">{bio}</p>
        </div>
    )
}

// Export the component as the default export
// This allows importing with: import Profile from './Profile'
export default Profile