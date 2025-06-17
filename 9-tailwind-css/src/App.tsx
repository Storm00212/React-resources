import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'

import LandingPage from './pages/LandingPage'
import Register from './pages/Register'
import Login from './pages/Login'
import AboutPage from './pages/AboutPage'
import Dashboard from './pages/dashboard/Dashboard'


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <LandingPage />
    },
    {
      path: '/about',
      element: <AboutPage />
    },
    {
      path: '/register',
      element: <Register />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/dashboard',
      element: <Dashboard />,
      children: [
        {
          path: 'main',
          element: <h1>Analytics</h1>
        },
        {
          path: 'todos',
          element: <h1>Analytics</h1>
        },
        {
          path: 'profile',
          element: <h1>Analytics</h1>
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
