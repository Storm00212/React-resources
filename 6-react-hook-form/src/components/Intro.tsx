/**
 * Intro.tsx - Basic React Hook Form Introduction
 *
 * This component provides a basic introduction to React Hook Form without
 * external validation libraries. It demonstrates the core concepts of
 * form registration, submission handling, and basic validation.
 *
 * Key concepts demonstrated:
 * - Basic useForm setup
 * - Form registration with register()
 * - Simple validation rules
 * - Error handling and display
 * - Form submission with handleSubmit()
 * - TypeScript integration
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
    name: string;
    status: string;
    gender: GenderEnum;
    age: number;
}

// Main Intro component
function Intro() {
    // Initialize React Hook Form
    // No external resolver, using built-in validation
    const {
        register,        // Function to register form inputs
        handleSubmit,    // Function to handle form submission
        // watch,        // Function to watch form values (commented out)
        formState: { errors },  // Object containing validation errors
    } = useForm<Inputs>();

    // Form submission handler with proper typing
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
            <form onSubmit={handleSubmit(onsubmit)}>
                {/* Basic text input - no validation */}
                <input type="text" {...register("name")} /> <br />

                {/* Text input with required validation */}
                <input type="text" {...register("status", { required: true })} /> <br />

                {/* Conditional error display for status field */}
                {errors.status && <span>This field is required</span>} <br />

                {/* Select dropdown for gender */}
                <select
                    {...register('gender')}
                >
                    <option value='female'> Female</option>
                    <option value='male'>Male</option>
                    <option value='other'>Other</option>
                </select>

                {/* Submit button */}
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

// Export the component as default
export default Intro
