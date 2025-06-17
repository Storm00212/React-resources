import './fetchusers.css'
import { useEffect, useState } from "react"
import { type TUser } from "../../types/TUser"
import axios from "axios"

const FetchUsers = () => {
    const [users, setUsers] = useState<TUser[] | null>([])
    console.log(users);

    const FetchUsers = async () => {
        axios.get<TUser[]>('https://jsonplaceholder.typicode.com/users')
            .then((res) => setUsers(res.data))
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        FetchUsers()
    }, [])

    const getUserById = async (id: number) => {
        axios.get<TUser>(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((res) => setUsers([res.data])) // Set users to an array with the single user
            .catch((err) => console.log(err))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.target as HTMLFormElement
        const id = (form.elements.namedItem('id') as HTMLInputElement).value
        if (Number(id)) {
            getUserById(Number(id));
            // reset the input field
            (form.elements.namedItem('id') as HTMLInputElement).value = ''
        } else {
            alert("Please enter a valid ID")
        }
    }

    return (
        <div>
            <h1 className='title'>Fetch Users API</h1>
            <div className="search-user">
                <form onSubmit={handleSubmit}>
                    <input type="number" name='id' />
                    <button type="submit">Search</button>
                </form>
                <button
                    onClick={() => {
                        setUsers(null) // Clear the users state
                        FetchUsers() // Fetch all users again
                    }}
                    className='refetch-users'>Fetch all Users</button>
            </div>

            <div className="users">
                {
                    users ? (
                        users.map((user: TUser) => {
                            return (
                                <div className="user" key={user.id}>
                                    <p>ID: {user.id}</p>
                                    <p>Name: {user.name}</p>
                                    <p>UserName: {user.username}</p>
                                    <p>Email: {user.email}</p>
                                    <p>Address:
                                        <span> {user.address.street}</span> <br />
                                        <span>{user.address.city}</span> <br />
                                        <span>{user.address.zipcode}</span> <br />
                                        <span>{user.address.street}</span> <br />
                                        <p>{`lat: ${user.address.geo.lat} & lng: ${user.address.geo.lng}`}</p>
                                        <p>Phone: {user.phone}</p>
                                        <p>Website: {user.website}</p>
                                        <p>Company: {user.company.name}</p>
                                    </p>
                                </div>
                            )
                        })
                    ) : (
                        <div>No Data</div>
                    )
                }
            </div>
        </div>
    )
}

export default FetchUsers