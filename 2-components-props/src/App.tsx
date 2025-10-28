/**
 * App.tsx - Components and Props Demonstration
 *
 * This component demonstrates React's component composition and props system.
 * It shows how to:
 * - Import and use custom components
 * - Pass data between components using props
 * - Reuse components with different data
 * - Structure a multi-component application
 * - Handle both static assets and external URLs as props
 */

// Import CSS styles for the App component
import './App.css'

// Commented out imports - these components exist but are not currently rendered
// This shows how to conditionally include components in your app
// import About from './components/about/About'
// import Home from './components/home/Home'

// Import the Navbar component - using named export syntax { Navbar }
// Named exports require destructuring when importing
import { Navbar } from './components/nav/Navbar'

// Import the Profile component - using default export syntax
// Default exports can be imported with any name
import Profile from './components/profile/Profile'

// Import a static image asset using Vite's asset handling
// This returns the processed URL path to the image
import useravatar from './assets/images/useravatar.webp';

// Define the main App component
function App() {
  // The component doesn't need any local state or effects for this demonstration
  // It focuses on component composition and props passing

  return (
    // React Fragment - groups multiple elements without adding extra DOM nodes
    <>
      {/* Render the navigation bar at the top of the app */}
      <Navbar />

      {/* Commented out components - shows how to temporarily disable parts of UI */}
      {/* <Home />
      <About /> */}

      {/* Render multiple Profile components with different props */}
      {/* Each Profile receives the same prop structure but different data */}
      {/* This demonstrates component reusability - same component, different content */}

      {/* First profile - using an external image URL */}
      <Profile
        name="Mary Johnson"
        avatar="https://randomuser.me/api/portraits/women/44.jpg"
        bio="Mary Johnson is a dedicated dairy farmer with over 10 years of experience in the industry. She is passionate about sustainable farming practices and ensuring the highest quality milk for her customers."
      />

      {/* Second profile - using another external image URL */}
      <Profile
        name="John Smith"
        avatar="https://randomuser.me/api/portraits/men/32.jpg"
        bio="John Smith has been a dairy farmer for over 15 years. He is committed to modernizing dairy farming through innovative management systems and practices, ensuring both quality and efficiency."
      />

      {/* Third profile - using a locally imported image asset */}
      {/* The avatar prop receives the processed image path from Vite */}
      <Profile
        name="Alice Brown"
        avatar={useravatar}
        bio="Alice Brown is a third-generation dairy farmer who believes in the importance of community and sustainability. She works tirelessly to maintain the health of her cows and the quality of her milk."
      />

    </>
  )
}

// Export the App component as the default export
export default App
