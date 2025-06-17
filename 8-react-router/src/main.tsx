import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
// import App from './App.tsx'
import Home from './componets/home/Home.tsx'
import About from './componets/about/About.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />

  </StrictMode>,
)
