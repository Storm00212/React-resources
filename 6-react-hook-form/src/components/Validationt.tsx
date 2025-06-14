import { useForm, type SubmitHandler } from 'react-hook-form';
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
}

function Validation() {

  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },

  } = useForm<Inputs>();

  const onsubmit: SubmitHandler<Inputs> = (data: Inputs) => {
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
          {...register("firstName", { required: true, maxLength: 20 })}
          placeholder='First Name'
        /> <br />

        <input
          type="text"
          {...register("lastName", { required: true, maxLength: 20 })}
          placeholder='Last Name'
        /> <br />

        <input
          type="text"
          {...register("age", { min: 18, max: 70 })}
          placeholder='Age'
        /> <br />
        {errors.age && (
          <span>Age must be between 18 and 70</span>
        )} <br />

        <input
          type="text"
          {...register("status", { required: true })}
          placeholder='Status'
        /> <br />

        {errors.status && <span>This field is required</span>} <br />

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

export default Validation
