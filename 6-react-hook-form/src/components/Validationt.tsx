/**
 * Validationt.tsx - React Hook Form with Built-in Validation
 *
 * This component demonstrates React Hook Form's built-in validation
 * capabilities without external libraries. It shows how to use
 * validation rules directly in the register function.
 *
 * Key concepts demonstrated:
 * - Built-in validation rules (required, maxLength, min, max)
 * - Error handling and conditional display
 * - Different validation patterns for different input types
 * - Form state management with errors object
 */

// Import React Hook Form hooks and types
import { useForm, type SubmitHandler } from 'react-hook-form';

// Import component styles
import './App.css'

// Define enum for gender options
enum GenderEnum {
  female = 'female',
  male = 'male',
  other = 'other',
}

// Define TypeScript interface for form inputs
type Inputs = {
  firstName: string;
  lastName: string;
  status: string;
  gender: GenderEnum;
  age: number;
}

// Main Validation component
function Validation() {
  // Initialize React Hook Form with TypeScript types
  const {
    register,        // Function to register form inputs with validation
    handleSubmit,    // Function to handle form submission
    // watch,        // Function to watch form values (commented out)
    formState: { errors },  // Object containing validation errors
  } = useForm<Inputs>();

  // Form submission handler
  const onsubmit: SubmitHandler<Inputs> = (data: Inputs) => {
    console.log(data);  // Log form data to console
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
        {/* First Name Input with validation */}
        <input
          type="text"
          {...register("firstName", { required: true, maxLength: 20 })}
          placeholder='First Name'
        /> <br />

        {/* Last Name Input with validation */}
        <input
          type="text"
          {...register("lastName", { required: true, maxLength: 20 })}
          placeholder='Last Name'
        /> <br />

        {/* Age Input with range validation */}
        <input
          type="text"
          {...register("age", { min: 18, max: 70 })}
          placeholder='Age'
        /> <br />

        {/* Conditional error display for age field */}
        {errors.age && (
          <span>Age must be between 18 and 70</span>
        )} <br />

        {/* Status Input with required validation */}
        <input
          type="text"
          {...register("status", { required: true })}
          placeholder='Status'
        /> <br />

        {/* Conditional error display for status field */}
        {errors.status && <span>This field is required</span>} <br />

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
export default Validation
