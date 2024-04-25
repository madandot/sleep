import React from "react";

const FormFill = () => {
   return (
      <div className='grid place-items-center mt-4'>
         <div className=' shadow-lg p-5 rounded-lg border-t-4 border-green-400'>
            <h1 className='text-4xl font-bold my-4'>Fill The Form</h1>
            <form className='flex flex-col space-y-4'>
               <div className='flex flex-col'>
                  <label htmlFor='First Name'>First Name</label>
                  <input
                     className='outline-none py-2 px-3 w-[400px] border-2 border-slate-400 rounded-[4px]'
                     type='text'
                     placeholder='FirstName'
                  />
               </div>
               <div className='flex flex-col'>
                  <label htmlFor='First Name'>Last Name</label>
                  <input
                     className='outline-none py-2 px-3 w-[400px] border-2 border-slate-400 rounded-[4px]'
                     type='text'
                     placeholder='LastName'
                  />
               </div>
               <div className='flex flex-col'>
                  <label htmlFor='Mobile-Number'>Mobile-Number</label>
                  <input
                     className='outline-none py-2 px-6 w-[400px] border-2 border-slate-400 rounded-[4px]'
                     type='tel'
                     placeholder='Mobile-Number'
                  />
               </div>
               <div>
                  <p>Gender</p>
                  <div className='flex justify-start items-center gap-x-2'>
                     <input type='radio' name='male' id='male' />
                     <label htmlFor='Gender'>Male</label>
                     <input type='radio' name='female' id='female' />
                     <label htmlFor='Gender'>Female</label>
                     <input type='radio' name='Other' id='Other' />
                     <label htmlFor='Gender'>Other</label>
                  </div>
               </div>
               <div className=' capitalize'>
                  <p>Do You have any haring related issues</p>
                  <div>
                     <input type='radio' name='Other' id='Other' />
                     <label htmlFor='Gender'>Yes</label>
                  </div>
                  <div>
                     <input type='radio' name='Other' id='Other' />
                     <label htmlFor='Gender'>No</label>
                  </div>
               </div>
               <div className=' capitalize'>
                  <p>Do you have any vision related issues</p>
                  <div>
                     <input type='radio' name='Other' id='Other' />
                     <label htmlFor='Gender'>Yes</label>
                  </div>
                  <div>
                     <input type='radio' name='Other' id='Other' />
                     <label htmlFor='Gender'>No</label>
                  </div>
               </div>
               <div className=' capitalize'>
                  <p>Do you have any DF the following conditions</p>
                  <div>
                     <input type='radio' name='Other' id='Other' />
                     <label htmlFor='Gender'>Yes</label>
                  </div>
                  <div>
                     <input type='radio' name='Other' id='Other' />
                     <label htmlFor='Gender'>No</label>
                  </div>
               </div>
               <div className='capitalize'>
                  <p>Do You have any haring related issues</p>
                  <div>
                     <input type='radio' name='Other' id='Other' />
                     <label htmlFor='Gender'>SLEEP ADNEA</label>
                  </div>
                  <div>
                     <input type='radio' name='Other' id='Other' />
                     <label htmlFor='Gender'>BREATHING ISSUES</label>
                  </div>
                  <div>
                     <input type='radio' name='Other' id='Other' />
                     <label htmlFor='Gender'>HEART RELATED ISSUES</label>
                  </div>
                  <div>
                     <input type='radio' name='Other' id='Other' />
                     <label htmlFor='Gender'>KIDNEY RELATED ISSUES</label>
                  </div>
                  <div>
                     <input type='radio' name='Other' id='Other' />
                     <label htmlFor='Gender'>MUSCLE AND BONE RELATED ILLNESS</label>
                  </div>
               </div>
               <div className=' capitalize'>
                  <p>What is your main objective</p>
                  <div>
                     <input type='radio' name='Other' id='Other' />
                     <label htmlFor='Gender'>Improve sleep cycle</label>
                  </div>
                  <div>
                     <input type='radio' name='Other' id='Other' />
                     <label htmlFor='Gender'>Improve over-all well being</label>
                  </div>
               </div>
               <button type='submit' className='bg-green-600 text-white font-bold cursor-pointer px-6 py-2 rounded-sm'>
                  Submit
               </button>
            </form>
         </div>
      </div>
   );
};

export default FormFill;
