import { useForm, type SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './App.css'

enum GenderEnum {
  female = 'female',
  male = 'male',
  other = 'other',
}

type Inputs = {
  firstName: string;
  lastName: string;
  status: string;
  gender: GenderEnum;
  age: number;
  email: string;
}

const schema = yup.object({
  firstName: yup.string().max(20, 'Max length is 20 characters').min(2, 'Min length is 2 characters').required('First name is required'),
  lastName: yup.string().max(20, 'Max length is 20 characters').min(2, 'Min length is 2 characters').required('Last name is required'),
  age: yup.number().min(18, 'Age must be at least 18').max(70, 'Age must be at most 70').required('Age is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  status: yup.string().required('Status is required'),
  gender: yup.mixed<GenderEnum>().oneOf(Object.values(GenderEnum)).required('Gender is required')
})

function App() {

  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema)
  })

  const onsubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  }

  // Watch the value of the 'name' field
  // const nameValue = watch("name");
  // console.log("Name value:", nameValue);


  return (
    <>
      <form
        onSubmit={handleSubmit(onsubmit)}
      >
        <input
          type="text"
          {...register("firstName", { required: "First name is required" })}
          placeholder='First Name'
        /> <br />

        <p>
          {errors.firstName?.message}
        </p>

        <input
          type="text"
          {...register("lastName", { required: "Last name is required" })}
          placeholder='Last Name'
        /> <br />

        <p>
          {errors.lastName?.message}
        </p>

        <input
          type="number"
          {...register("age")}
          placeholder='Age'
        /> <br />

        <p>
          {errors.age?.message}
        </p>
        <br />

        <input
          type='email'
          {...register("email")}
          placeholder='Email'
        /> <br />

        <p>
          {errors.email?.message}
        </p>
        <br />

        <input
          type="text"
          {...register("status")}
          placeholder='Status'
        /> <br />
        <p>
          {errors.status?.message}
        </p>
        <br />

        <select
          {...register('gender')}
        >
          <option value='female'> Female</option>
          <option value='male'>Male</option>
          <option value='other'>Other</option>
        </select>


        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default App
