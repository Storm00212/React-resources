/**
 * App.tsx - Tailwind CSS Application with React Router
 *
 * This application demonstrates modern React development with:
 * - Tailwind CSS for utility-first styling
 * - React Router for client-side routing
 * - Component composition and page structure
 * - Responsive design patterns
 *
 * The app includes multiple pages (Landing, About, Register, Login, Dashboard)
 * and showcases how Tailwind CSS classes create responsive, modern UIs.
 */

// Import React Router components for routing functionality
import { createBrowserRouter, RouterProvider } from 'react-router'

// Import global CSS styles
import './App.css'

// Import page components
import LandingPage from './pages/LandingPage'    // Home/landing page
import Register from './pages/Register'           // User registration page
import Login from './pages/Login'                 // User login page
import AboutPage from './pages/AboutPage'         // About page
import Dashboard from './pages/dashboard/Dashboard' // Dashboard with nested routes
import Error from './components/error/Error'      // 404 error page

// Define the main App component
function App() {
  // Create the router configuration with all application routes
  const router = createBrowserRouter([
    // Root path - landing page
    {
      path: '/',
      element: <LandingPage />,
    },

    // About page route
    {
      path: '/about',
      element: <AboutPage />
    },

    // User registration route
    {
      path: '/register',
      element: <Register />
    },

    // User login route
    {
      path: '/login',
      element: <Login />
    },

    // Dashboard route with nested child routes
    {
      path: '/dashboard',
      element: <Dashboard />,

      // Nested routes that render inside the Dashboard layout
      children: [
        {
          path: 'main',      // /dashboard/main
          element: <h1>Analytics</h1>
        },
        {
          path: 'todos',     // /dashboard/todos
          element: <h1>Analytics</h1>
        },
        {
          path: 'profile',   // /dashboard/profile
          element: <h1>Analytics</h1>
        }
      ]
    },

    // Catch-all route for 404 errors
    {
      path: '*',  // Matches any path that doesn't exist above
      element: <Error />
    }
  ])

  // Return the RouterProvider with our configured router
  // This enables client-side routing throughout the application
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

// Export the App component as default
export default App
