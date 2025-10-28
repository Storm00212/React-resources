/**
 * AboutPage.tsx - About Page Component with Tailwind CSS
 *
 * This page demonstrates how to compose multiple components into a complete page
 * using Tailwind CSS for styling. It combines navigation, content sections,
 * testimonials, and footer components to create a cohesive page layout.
 *
 * The page structure shows component composition patterns commonly used
 * in React applications with utility-first CSS frameworks like Tailwind.
 */

// Import individual components that make up the About page
import About from "../components/about/About"           // Main about section
import Testimonials from "../components/about/Testimonials" // Customer testimonials
import Footer from "../components/footer/Footer"       // Site footer
import Navbar from "../components/nav/Navbar"          // Navigation bar

// Define the AboutPage component
const AboutPage = () => {
  // Return the page structure with all components
  return (
    // Main container div - could have Tailwind classes for layout
    <div>
      {/* Navigation bar at the top of the page */}
      <Navbar />

      {/* Main about content section */}
      <About />

      {/* Customer testimonials section */}
      <Testimonials />

      {/* Site footer at the bottom */}
      <Footer />
    </div>
  )
}

// Export the component as default
export default AboutPage