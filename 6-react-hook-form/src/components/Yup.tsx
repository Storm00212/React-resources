/**
 * Yup.tsx - React Hook Form with Yup Validation (Duplicate of App.tsx)
 *
 * This component is identical to App.tsx and demonstrates the same
 * React Hook Form + Yup integration. It shows how to create reusable
 * form components with comprehensive schema-based validation.
 *
 * Note: This appears to be a duplicate of the main App.tsx component.
 * In a real application, you would typically have one canonical version.
 *
 * Key concepts demonstrated:
 * - Yup schema validation integration
 * - Complex validation rules (string length, email format, number ranges)
 * - Enum validation with oneOf()
 * - Error message customization
 * - TypeScript integration with Yup schemas
 */

// Import React Hook Form hooks and types
import { useForm, type SubmitHandler } from 'react-hook-form';

// Import Yup resolver for schema validation
import { yupResolver } from '@hookform/resolvers/yup';

// Import Yup for creating validation schemas
import * as yup from 'yup';

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
    email: string;
}

// Create Yup validation schema with detailed rules
const schema = yup.object({
    // First name validation: string, length constraints, required
    firstName: yup.string().max(20, 'Max length is 20 characters').min(2, 'Min length is 2 characters').required('First name is required'),

    // Last name validation: same rules as first name
    lastName: yup.string().max(20, 'Max length is 20 characters').min(2, 'Min length is 2 characters').required('Last name is required'),

    // Age validation: number with range constraints, required
    age: yup.number().min(18, 'Age must be at least 18').max(70, 'Age must be at most 70').required('Age is required'),

    // Email validation: proper email format, required
    email: yup.string().email('Invalid email format').required('Email is required'),

    // Status validation: required string
    status: yup.string().required('Status is required'),

    // Gender validation: must be one of enum values, required
    gender: yup.mixed<GenderEnum>().oneOf(Object.values(GenderEnum)).required('Gender is required')
})

// Main Yup component (duplicate of App.tsx)
function Yup() {
    // Initialize React Hook Form with Yup resolver
    const {
        register,        // Function to register form inputs
        handleSubmit,    // Function to handle form submission
        // watch,        // Function to watch form values (commented out)
        formState: { errors },  // Object containing validation errors
    } = useForm<Inputs>({
        resolver: yupResolver(schema)  // Connect Yup schema to form
    })

    // Form submission handler
    const onsubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);  // Log form data to console
    }

    // Example of watching form values (commented out)
    // const nameValue = watch("name");
    // console.log("Name value:", nameValue);

    // Return JSX structure (identical to App.tsx)
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
export default Yup
