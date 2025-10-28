# React Topics

This repository contains a comprehensive collection of React learning projects, organized in numbered folders that follow a progressive learning path. Each folder represents a specific React concept or topic, building upon the previous ones to create a complete learning journey from basic React concepts to advanced state management and routing.

## Folder Structure and Learning Path

### 0-my-first-app
**Topic: Creating Your First React App**

This folder demonstrates the initial setup of a React application using Vite as the build tool. It covers:
- Project scaffolding with `pnpm create vite`
- Basic project structure (src/, public/, etc.)
- Installing dependencies with `pnpm install`
- Running the development server with `pnpm run dev`
- Understanding the default React app structure and files

**Key Concepts:**
- Vite as a modern build tool
- TypeScript integration in React
- Basic project configuration
- Development workflow

### 1-jsx
**Topic: JSX Fundamentals**

This project explores JSX (JavaScript XML), React's syntax extension that allows you to write HTML-like code in JavaScript. It covers:
- JSX syntax and expressions
- Embedding JavaScript in JSX
- JSX attributes and props
- Conditional rendering basics
- Lists and keys introduction

**Key Concepts:**
- JSX as a syntax extension
- JavaScript expressions in JSX
- Component composition
- Dynamic content rendering

### 2-components-props
**Topic: React Components and Props**

This folder focuses on building reusable React components and passing data through props. It includes:
- Functional components vs class components
- Props for data passing
- Component composition
- Building a multi-page application structure
- Navigation between different sections

**Key Concepts:**
- Component reusability
- Props drilling
- Component lifecycle
- UI composition patterns

### 3-render-lists
**Topic: Rendering Lists and Data**

This project demonstrates how to render dynamic lists of data in React applications. It covers:
- Mapping over arrays to create list items
- Keys for list items
- Conditional rendering in lists
- Data management with JSON files
- Component state for list data

**Key Concepts:**
- Array mapping in JSX
- React keys for performance
- Data-driven rendering
- Static data management

### 4-usestate
**Topic: useState Hook**

This folder introduces React's useState hook for managing local component state. It includes:
- Basic state management with useState
- Event handling in React
- State updates and re-rendering
- Multiple state variables
- Background color changer component
- Interactive buttons and counters

**Key Concepts:**
- Local state management
- Event handlers
- State immutability
- Component interactivity

### 5-usereducer
**Topic: useReducer Hook**

This project explores the useReducer hook for complex state management logic. It covers:
- useReducer vs useState
- Action-based state updates
- Reducer functions
- Managing complex state objects
- Counter and jokes list management

**Key Concepts:**
- Complex state logic
- Action patterns
- State transitions
- Predictable state updates

### 6-react-hook-form
**Topic: React Hook Form & Validation**

This folder demonstrates form handling in React using React Hook Form library. It includes:
- Form setup with React Hook Form
- Input validation
- Yup schema validation
- Error handling and display
- Form submission

**Key Concepts:**
- Declarative form handling
- Schema-based validation
- Performance optimization
- User experience improvements

### 7-useeffect
**Topic: useEffect Hook & Data Fetching**

This project covers side effects in React using the useEffect hook. It includes:
- useEffect for lifecycle management
- Data fetching from APIs
- Cleanup functions
- Dependency arrays
- Real API integration (users and todos)

**Key Concepts:**
- Side effects management
- API integration
- Cleanup and memory leaks prevention
- Asynchronous operations

### 8-react-router
**Topic: React Router DOM**

This folder introduces client-side routing with React Router. It covers:
- Setting up React Router
- Route configuration
- Navigation components
- Dynamic routing
- Multi-page application structure

**Key Concepts:**
- Client-side routing
- URL-based navigation
- Route parameters
- Browser history management

### 9-tailwind-css
**Topic: Styling with Tailwind CSS**

This comprehensive project demonstrates modern styling with Tailwind CSS in React. It includes:
- Tailwind CSS setup and configuration
- Utility-first CSS approach
- Responsive design
- Component-based styling
- Dashboard layout
- Forms and navigation
- Image assets and media

**Key Concepts:**
- Utility-first CSS
- Responsive design
- Component styling
- Modern CSS frameworks
- Production-ready layouts

## Learning Objectives

By working through these folders in order, you'll learn:
1. **Foundation**: Basic React setup and JSX
2. **Components**: Building reusable UI components
3. **Data**: Managing and displaying data
4. **State**: Local and complex state management
5. **Forms**: User input and validation
6. **Effects**: Side effects and API integration
7. **Routing**: Multi-page applications
8. **Styling**: Modern CSS with utility frameworks

## Prerequisites

- Basic JavaScript/TypeScript knowledge
- Node.js and npm/pnpm installed
- Understanding of HTML and CSS

## Getting Started

1. Clone this repository
2. Navigate to any folder (e.g., `cd 0-my-first-app`)
3. Install dependencies: `pnpm install`
4. Start development server: `pnpm run dev`
5. Open your browser to the provided localhost URL

Each folder is self-contained and can be studied independently, but following the numerical order provides the best learning progression.
