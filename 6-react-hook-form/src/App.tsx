/**
 * App.tsx - React Hook Form with Yup Validation
 *
 * This component demonstrates advanced form handling using React Hook Form
 * combined with Yup schema validation. It shows how to create robust,
 * type-safe forms with comprehensive validation rules.
 *
 * Key concepts demonstrated:
 * - React Hook Form setup and configuration
 * - Yup schema-based validation
 * - TypeScript integration with forms
 * - Error handling and display
 * - Form submission with type safety
 * - Enum usage for select options
 */

// Import React Hook Form hooks and types
import { useForm, type SubmitHandler } from 'react-hook-form';

// Import Yup resolver for schema validation
import { yupResolver } from '@hookform/resolvers/yup';

// Import Yup for creating validation schemas
import * as yup from 'yup';

// Import component styles
import './App.css'

// Define an enum for gender options
// Enums provide type safety and prevent typos in string values
enum GenderEnum {
  female = 'female',
  male = 'male',
  other = 'other',
}

// Define TypeScript interface for form inputs
// This ensures type safety throughout the form handling
type Inputs = {
  firstName: string;
  lastName: string;
  status: string;
  gender: GenderEnum;  // Using enum for type safety
  age: number;
  email: string;
}

// Create Yup validation schema
// This defines validation rules for each form field
const schema = yup.object({
  // First name: string, max 20 chars, min 2 chars, required
  firstName: yup.string().max(20, 'Max length is 20 characters').min(2, 'Min length is 2 characters').required('First name is required'),

  // Last name: same rules as first name
  lastName: yup.string().max(20, 'Max length is 20 characters').min(2, 'Min length is 2 characters').required('Last name is required'),

  // Age: number between 18-70, required
  age: yup.number().min(18, 'Age must be at least 18').max(70, 'Age must be at most 70').required('Age is required'),

  // Email: valid email format, required
  email: yup.string().email('Invalid email format').required('Email is required'),

  // Status: required string
  status: yup.string().required('Status is required'),

  // Gender: must be one of the enum values, required
  gender: yup.mixed<GenderEnum>().oneOf(Object.values(GenderEnum)).required('Gender is required')
})

// Main App component
function App() {
  // Initialize React Hook Form with Yup resolver
  // This connects our Yup schema to the form validation
  const {
    register,        // Function to register form inputs
    handleSubmit,    // Function to handle form submission
    // watch,        // Function to watch form values (commented out)
    formState: { errors },  // Object containing validation errors
  } = useForm<Inputs>({
    resolver: yupResolver(schema)  // Connect Yup schema to form
  })

  // Form submission handler with proper typing
  const onsubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);  // Log form data (in real app, would send to server)
  }

  // Example of watching form values (commented out)
  // const nameValue = watch("name");
  // console.log("Name value:", nameValue);

  // Return JSX structure
  return (
    <>
      {/* Form with React Hook Form submission handler */}
      <form
        onSubmit={handleSubmit(onsubmit)}
      >
        {/* First Name Input */}
        <input
          type="text"
          {...register("firstName", { required: "First name is required" })}
          placeholder='First Name'
        /> <br />

        {/* Display first name validation errors */}
        <p>
          {errors.firstName?.message}
        </p>

        {/* Last Name Input */}
        <input
          type="text"
          {...register("lastName", { required: "Last name is required" })}
          placeholder='Last Name'
        /> <br />

        {/* Display last name validation errors */}
        <p>
          {errors.lastName?.message}
        </p>

        {/* Age Input */}
        <input
          type="number"
          {...register("age")}
          placeholder='Age'
        /> <br />

        {/* Display age validation errors */}
        <p>
          {errors.age?.message}
        </p>
        <br />

        {/* Email Input */}
        <input
          type='email'
          {...register("email")}
          placeholder='Email'
        /> <br />

        {/* Display email validation errors */}
        <p>
          {errors.email?.message}
        </p>
        <br />

        {/* Status Input */}
        <input
          type="text"
          {...register("status")}
          placeholder='Status'
        /> <br />

        {/* Display status validation errors */}
        <p>
          {errors.status?.message}
        </p>
        <br />

        {/* Gender Select Dropdown */}
        <select
          {...register('gender')}
        >
          <option value='female'> Female</option>
          <option value='male'>Male</option>
          <option value='other'>Other</option>
        </select>

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

// Export the component as default
export default App
