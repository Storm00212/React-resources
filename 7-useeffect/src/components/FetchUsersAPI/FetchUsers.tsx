/**
 * FetchUsers.tsx - API Data Fetching with useEffect
 *
 * This component demonstrates real-world API data fetching using the useEffect hook.
 * It shows how to fetch data from external APIs, handle loading states, and manage
 * user interactions that trigger additional API calls.
 *
 * Key concepts demonstrated:
 * - useEffect for data fetching on component mount
 * - Axios for HTTP requests with TypeScript typing
 * - State management for API data
 * - Form handling for user search
 * - Conditional rendering based on data availability
 * - Error handling for API calls
 */

// Import component-specific CSS styles
import './fetchusers.css'

// Import React hooks for state and side effects
import { useEffect, useState } from "react"

// Import TypeScript type definition for User data
import { type TUser } from "../../types/TUser"

// Import Axios for making HTTP requests
import axios from "axios"

// Define the FetchUsers component
const FetchUsers = () => {
    // State to store users data - can be array of users or null
    const [users, setUsers] = useState<TUser[] | null>([])

    // Debug logging to track state changes
    console.log(users);

    // Function to fetch all users from the API
    const FetchUsers = async () => {
        // Axios GET request with TypeScript typing for response
        axios.get<TUser[]>('https://jsonplaceholder.typicode.com/users')
            .then((res) => setUsers(res.data))  // Set users state with response data
            .catch((err) => console.log(err))   // Log any errors
    }

    // useEffect hook - runs once on component mount (empty dependency array)
    useEffect(() => {
        FetchUsers()  // Fetch users when component first renders
    }, [])  // Empty array means run only once

    // Function to fetch a single user by ID
    const getUserById = async (id: number) => {
        // Axios GET request for specific user
        axios.get<TUser>(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((res) => setUsers([res.data])) // Set users to array with single user
            .catch((err) => console.log(err))
    }

    // Form submission handler for user search
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()  // Prevent default form submission

        // Get form and extract input value
        const form = e.target as HTMLFormElement
        const id = (form.elements.namedItem('id') as HTMLInputElement).value

        // Validate input is a number
        if (Number(id)) {
            getUserById(Number(id));  // Fetch user by ID

            // Clear the input field after search
            (form.elements.namedItem('id') as HTMLInputElement).value = ''
        } else {
            alert("Please enter a valid ID")  // Show error for invalid input
        }
    }

    // Return JSX structure
    return (
        <div>
            {/* Page title */}
            <h1 className='title'>Fetch Users API</h1>

            {/* Search and control section */}
            <div className="search-user">
                {/* Search form */}
                <form onSubmit={handleSubmit}>
                    <input type="number" name='id' placeholder="Enter user ID" />
                    <button type="submit">Search</button>
                </form>

                {/* Button to fetch all users again */}
                <button
                    onClick={() => {
                        setUsers(null) // Clear current users (show loading state)
                        FetchUsers() // Fetch all users again
                    }}
                    className='refetch-users'>Fetch all Users</button>
            </div>

            {/* Users display section */}
            <div className="users">
                {
                    // Conditional rendering based on users state
                    users ? (
                        // Map over users array to display each user
                        users.map((user: TUser) => {
                            return (
                                <div className="user" key={user.id}>
                                    {/* Display user information */}
                                    <p>ID: {user.id}</p>
                                    <p>Name: {user.name}</p>
                                    <p>UserName: {user.username}</p>
                                    <p>Email: {user.email}</p>

                                    {/* Address information */}
                                    <p>Address:
                                        <span> {user.address.street}</span> <br />
                                        <span>{user.address.city}</span> <br />
                                        <span>{user.address.zipcode}</span> <br />
                                        <span>{user.address.street}</span> <br />

                                        {/* Geographic coordinates */}
                                        <p>{`lat: ${user.address.geo.lat} & lng: ${user.address.geo.lng}`}</p>

                                        {/* Contact information */}
                                        <p>Phone: {user.phone}</p>
                                        <p>Website: {user.website}</p>
                                        <p>Company: {user.company.name}</p>
                                    </p>
                                </div>
                            )
                        })
                    ) : (
                        // Show loading/no data message
                        <div>No Data</div>
                    )
                }
            </div>
        </div>
    )
}

// Export the component as default
export default FetchUsers