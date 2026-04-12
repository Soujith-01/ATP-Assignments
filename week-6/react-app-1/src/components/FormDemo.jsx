import { useForm } from "react-hook-form"
function FormDemo(){

    const {register,handleSubmit,formState:{errors}}=useForm()
    console.log(errors)

    //form submit function
    const onFormSubmit=(obj)=>{
        console.log(obj)
    }

    return (
        <div>
            <h1 className="text-center text-5xl">Form Demo</h1>
            {/* Form  */}
            <form className="max-w-md mx-auto mt-10" onSubmit={handleSubmit(onFormSubmit)}>
                {/* Username */}
                <div className="mb-3 ">
                    <label htmlFor="username">Username</label>
                    <input type="text" {...register("username",
                        {
                            required:"Username Required",
                            // minLength:4,
                            maxLength:10,
                            validate:(v)=>v.trim().length!=0 || "White space is not vaid"
                        }
                    )} id="username" className="border w-full p-3" />
                    {/* validation rules and messages */}
                    {/* username */}
                    {errors.username?.type==="required" && <p className="text-red-500">{errors.username.message}</p>}
                    {/* minLength */}
                    {errors.username?.type==="minLength" && <p className="text-red-500">Min length of Username is 4</p>}
                    {/* maxLength */}
                    {errors.username?.type==="maxLength" && <p className="text-red-500">Max length of Username is 10</p>}
                    {errors.username?.type==="validate" && <p className="text-red-500">{errors.username.message}</p>}
                </div>
                {/* Email */}
                <div className="mb-3">
                    <label htmlFor="email">Email</label>
                    <input type="email" {...register("email")} id="email" className="border w-full p-3" />

                </div>
                <button type="submit" className="bg-blue-600 text-white block m-auto p-4">Submit</button>
            </form>
        </div>
    )
}

export default FormDemo