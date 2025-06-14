import { useForm, type SubmitHandler } from 'react-hook-form';
import './App.css'

enum GenderEnum {
    female = 'female',
    male = 'male',
    other = 'other',
}

type Inputs = {
    name: string;
    status: string;
    gender: GenderEnum;
    age: number;
}

function Intro() {

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
            <form onSubmit={handleSubmit(onsubmit)}>
                <input type="text" {...register("name")} /> <br />

                <input type="text" {...register("status", { required: true })} /> <br />

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

export default Intro
