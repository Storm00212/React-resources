/**
 * Profile.tsx - Profile Component for React Router
 *
 * This component displays user profile information and could be used
 * in a React Router application to show user profiles at routes like
 * "/profile/:id" or "/users/:userId".
 *
 * The component accepts props for displaying different user information,
 * making it reusable across different profile pages in a routing setup.
 */

// Import component-specific CSS styles
import './profile.css'

// Define TypeScript type for component props
type profiledetailes = {
    name: string;    // User's display name
    avatar: string;  // URL or path to profile image
    bio: string      // User's biographical information
}

// Define the Profile component with destructured props
const Profile = ({ name, avatar, bio }: profiledetailes) => {
    // Return the profile card structure
    return (
        // Main profile container with CSS styling
        <div className="profile-card">
            {/* Profile avatar image */}
            <img src={avatar} alt={name} className="profile-avatar" />

            {/* User's name */}
            <h2 className="profile-name">{name}</h2>

            {/* User's bio/description */}
            <p className="profile-bio">{bio}</p>
        </div>
    )
}

// Export the component as default
export default Profile