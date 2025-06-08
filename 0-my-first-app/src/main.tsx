import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render( // Create a root for the React application and Render the application into the root element
  //StrictMode is used to highlight potential problems in an application
  // App is the main component of the application
  <StrictMode>
    <App />
  </StrictMode>,
)
