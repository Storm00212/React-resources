import { useState } from "react"


const Events = () => {
  const [name, setName] = useState<string>("");
  const [attendees, setAttendees] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    console.log(`Input changed: ${e.target.value}`);
  }

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (name) { //used to avoid empty names
      console.log(`Registering attendee: ${name}`);
      setAttendees([...attendees, name])
      setName(""); // Clear the input field after registration
    }
  }

  return (
    <div>
      <h2>Event Registration</h2>
      <form onSubmit={handleRegister} >
        <input
          type="text"
          value={name}
          onChange={handleInputChange}
          placeholder="Enter your name"
        />
        <button type="submit">Register</button>
      </form>

      <h3>Attendees:</h3>
      <ul>
        {
          attendees.map((attendee, index) => (
            <li key={index}> {attendee}</li>
          ))
        }
      </ul>
    </div>

  )
}

export default Events