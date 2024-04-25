import React from "react";
import Link from "next/link";
const LoginForm = () => {
   return (
      <div className='grid place-items-center h-screen'>
         <div className=' shadow-lg p-5 rounded-lg border-t-4 border-green-400'>
            <h1 className='text-4xl font-bold my-4'>Enter the details</h1>
            <form className='flex flex-col gap-3 '>
               <input
                  className=' outline-none py-2 px-6 w-[400px] border-2 border-slate-400 rounded-[4px]'
                  type='email'
                  placeholder='Email'
               />
               <input
                  className=' outline-none py-2 px-6 w-[400px] border-2 border-slate-400 rounded-[4px]'
                  type='password'
                  placeholder='Password'
               />
               <Link href={"/home"} className='text-center'>
                  <button className='bg-green-600 text-white font-bold cursor-pointer px-6 py-2 rounded-sm'>Login</button>
               </Link>

               <div className='bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-sm mt-2'>All the fields are required</div>
               <Link href={"/register"} className='text-sm text-right'>
                  Don't have an account? <span className='underline'>Register</span>
               </Link>
            </form>
         </div>
      </div>
   );
};

export default LoginForm;
