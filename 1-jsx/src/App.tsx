/**
 * App.tsx - JSX Fundamentals Demonstration
 *
 * This component demonstrates the core concepts of JSX (JavaScript XML) in React.
 * JSX allows us to write HTML-like syntax directly in JavaScript, making it easier
 * to describe the UI structure. This example shows:
 * - Embedding JavaScript expressions in JSX using {}
 * - Working with different data types (strings, objects, arrays)
 * - TypeScript interfaces and type annotations
 * - Dynamic list rendering with .map()
 * - Inline styles and CSS classes
 * - Importing and using static assets (images)
 */

// Import CSS styles for this component
import './App.css'

// Import an image asset - Vite allows us to import static assets as modules
// This returns the URL path to the image that we can use in the src attribute
import myPic from './assets/professional.avif'

// Define the main App component
function App() {
  // Define a string variable - demonstrates embedding strings in JSX
  const myName: string = "Brian Kemboi";

  // Define a TypeScript interface - shows how to type objects in TS
  // Interfaces define the shape/structure of objects
  interface IDetails {
    Id: number;        // Unique identifier
    country: string;   // Country of residence
    occupation: string; // Job title
  }

  // Create an object that matches the IDetails interface
  // This demonstrates object destructuring and property access in JSX
  const moreDetails: IDetails = {
    Id: 12345,
    country: "Kenya",
    occupation: "Technical Trainer"
  }

  // Define an array of strings - shows how to work with arrays in JSX
  // We'll render this as a dynamic list using .map()
  const fevoriteProgrammingLangauges: string[] = [
    "JavaScript",
    "TypeScript",
    "C",
    "Java",
    "C#"
  ]

  // The return statement contains our JSX
  // JSX must return a single parent element (we use React Fragment <>)
  return (
    <>
      {/* Header element with an id for styling/CSS targeting */}
      <header id='app-header'>
        {/* Text container div - groups related content */}
        <div className='text-container'>
          {/* Embedding JavaScript variables in JSX using curly braces {} */}
          {/* This is called JSX expressions */}
          <h1>My name is {myName}</h1>

          {/* Accessing object properties in JSX */}
          <p>My ID is {moreDetails.Id}</p>
          <p>I am from {moreDetails.country}</p>
          <p>I work as a {moreDetails.occupation}</p>

          {/* Regular JSX text without JavaScript expressions */}
          <h2>My favorite programming languages are:</h2>

          {/* Commented out static HTML list - shows alternative approach */}
          {/* In React, we prefer dynamic rendering over static HTML */}
          {/* <ul>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>C</li>
        <li>Java</li>
        <li>C#</li>
      </ul> */}

          {/* Dynamic list rendering using .map() */}
          {/* Inline styles: style prop takes an object with camelCase CSS properties */}
          {/* backgroundColor instead of background-color, listStyle instead of list-style */}
          <ul style={{ backgroundColor: "green", color: "white", listStyle: "none" }}>
            {
              // .map() transforms each array item into JSX elements
              // Each <li> represents one programming language
              // key prop is required by React for list items (performance optimization)
              fevoriteProgrammingLangauges.map((lang, index) => (
                <li key={index}> {lang}</li>
              ))
            }
          </ul>
        </div>

        {/* Image container - demonstrates importing and using static assets */}
        <div className='image-container'>
          {/* src attribute uses the imported image variable */}
          {/* alt attribute is important for accessibility */}
          <img src={myPic} alt="Brian Kemboi" />
        </div>

      </header>



    </>
  )
}

// Export the component as the default export
export default App
