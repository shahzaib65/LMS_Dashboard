import React,{useState} from 'react'
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = ({onLogin}) => {
  const navigate = useNavigate();

   const [error, setError] = useState("");

   const {
     register,
     handleSubmit,
     formState: { errors },
   } = useForm();

  return (
   <>
   <div className="flex min-h-full flex-1 flex-col px-6 py-12 lg:px-8">
     <div className="sm:mx-auto sm:w-full sm:max-w-sm">
       <img
         className="mx-auto h-10 w-auto"
         src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
         alt="Your Company"
       />
       <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-white">
         Sign in to your account
       </h2>
     </div>

     <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
       <form 
       noValidate
       className="space-y-6"
       onSubmit={handleSubmit(async (data) => {
  
  const response = await fetch("https://odd-lime-caiman-cap.cyclic.app/api/auth/user/login", {
          method: "POST",
          body: JSON.stringify({
            email: data.email,
            password: data.password,
          }),
          headers: { "content-type": "application/json" },
        });
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setError("");
          const isAuthenticated = true;
          if (isAuthenticated) {
      onLogin();
    } else {
      alert('Invalid credentials. Please try again.');
    }   
        }else{
          const error = await response.text()
          setError(error)
        }
      })} 
       >
         <div>
           <label htmlFor="email" className="block text-sm text-start font-medium leading-6  text-white">
             Email address
           </label>
           <div className="mt-2">
             <input
               id="email"
               name="email"
               {...register("email", {
                    required: "email is required",
                    pattern: {
                      value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                      message: "email not valid",
                    },
                  })}
               className="block w-full rounded-md border-0 py-1.5 bg-gray-800 text-white shadow-sm ring-1 ring-inset ring-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
             />
             {errors.email && (
                  <p className="text-start text-red-500">{errors.email.message}</p>
                )}
           </div>
         </div>

         <div>
           <div className="flex items-center justify-between">
             <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
               Password
             </label>
           </div>
           <div className="mt-2">
             <input
               id="password"
               name="password"
               {...register("password", {
                    required: "password is required",
                  })}
               className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-900  bg-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
             />
              {errors.password && (
                  <p className=" text-start text-red-500">{errors.password.message}</p>
                )}
           </div>
           {error && (
                <p className="text-red-500">{error || error.message}</p>
              )}
         </div>
         <div>
           <button
             type="submit"
             className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
           >
             Sign in
           </button>
         </div>
       </form>
     </div>
   </div>
 </>
  )
}

export default Login
