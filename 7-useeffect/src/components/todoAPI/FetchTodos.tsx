/**
 * FetchTodos.tsx - Todo List API Integration with useEffect
 *
 * This component demonstrates fetching data from a backend API using useEffect.
 * It shows how to handle asynchronous data fetching, error handling, and
 * displaying the fetched data in a React component.
 *
 * Key concepts demonstrated:
 * - useEffect for API calls on component mount
 * - Axios for HTTP requests
 * - Async/await pattern
 * - Error handling in API calls
 * - TypeScript interfaces for API data
 * - Date formatting and manipulation
 * - Conditional rendering based on data
 */

// Import Axios for making HTTP requests
import axios from 'axios';

// Import component-specific CSS styles
import './todo.css'

// Import React and necessary hooks
import React, { useEffect, useState } from "react";

// Define TypeScript interface for Todo objects
// This ensures type safety when working with todo data from the API
type Todo = {
    id: number;          // Unique identifier for the todo
    userId: number;      // ID of the user who created the todo
    todoName: string;    // Title/name of the todo item
    createdAt: string;   // ISO date string when todo was created
    dueDate: string;     // ISO date string when todo is due
    description: string; // Detailed description of the todo
    isCompleted: boolean; // Completion status
};

// API endpoint URL - points to local backend server
const API_URL = "http://localhost:8081/todos";

// Define the TodoList component using React.FC (Function Component) type
const TodoList: React.FC = () => {
    // State to store the array of todos fetched from API
    const [todos, setTodos] = useState<Todo[]>([]);

    // Debug logging to track state changes
    console.log(todos);

    // Optional loading state (commented out)
    // const [loading, setLoading] = useState<boolean>(true);

    // Function to fetch todos from the API
    const FetchTodos = async () => {
        try {
            // Make GET request to API endpoint
            const response = await axios.get(API_URL);

            // Set todos state with the data from response
            // API returns { data: Todo[] }, so we access response.data.data
            setTodos(response.data.data);
        } catch (err) {
            // Log any errors that occur during the API call
            console.log(err);
        }
    }

    // useEffect hook - runs once on component mount
    useEffect(() => {
        // Alternative implementation using fetch API (commented out)
        // const fetchTodos = async () => {
        //     try {
        //         const response = await fetch(API_URL);
        //         if (!response.ok) throw new Error("Failed to fetch todos"); //200 status code
        //         const result = await response.json();
        //         setTodos(result.data);
        //     } catch (err) {
        //         console.error("Error fetching todos:", err);
        //         alert("Failed to fetch todos. Please try again later.");
        //     } finally {
        //         setLoading(false);
        //     }
        // };
        // fetchTodos();

        // Execute the fetch function
        FetchTodos()
    }, []);  // Empty dependency array means run only once on mount

    // Optional loading state rendering (commented out)
    // if (loading) return <div>Loading...</div>;

    // Return JSX structure
    return (
        <>
            {/* Page title */}
            <h1 className="todo-title">Todo List</h1>

            {/* Container for todo items */}
            <div className="todo-list">
                {
                    // Map over todos array to render each todo item
                    todos.map(todo => (
                        // Individual todo item container with unique key
                        <div className="todo" key={todo.id}>
                            {/* Display todo information */}
                            <p className="user-id">User ID: {todo.userId}</p>
                            <p className="todoName"><strong>{todo.todoName}</strong></p>
                            <p className="todo-description">Description: {todo.description}</p>

                            {/* Format due date using Date object and locale string */}
                            <p className="due-date">Due: {new Date(todo.dueDate).toLocaleString()}</p>

                            {/* Conditional status display based on completion */}
                            <p className="todo-status">Status: {todo.isCompleted ? "Completed" : "Pending"}</p>

                            {/* Format creation date */}
                            <p className="created-at">Created At: {new Date(todo.createdAt).toLocaleString()}</p>
                        </div>
                    ))
                }
            </div>
        </>
    );
};

// Export the component as default
export default TodoList;