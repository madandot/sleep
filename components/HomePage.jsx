import Link from "next/link";
import React from "react";
const HomePage = () => {
   return (
      <div className='bg-blue-700'>
         <nav className='flex justify-between items-center px-4 py-4 max-w-7xl mx-auto bg-blue-700'>
            <div>
               <h1 className=' text-2xl font-bold'>LOGO</h1>
            </div>
            <div className='flex justify-center items-center gap-x-4 text-xl font-semibold'>
               <Link href={"/fill"} className='text-sm text-right'>
                  Fill the form
               </Link>
               <Link href={"/register"} className='text-sm text-right'>
                  Logout
               </Link>
            </div>
         </nav>
         <div className='grid place-items-center grid-flow-col h-[90vh] '>
            <div>
               <h1 className='text-2xl font-medium capitalize'>sleep tracking</h1>
               <ul className='text-xl capitalize'>
                  <li>sleep duration</li>
                  <li>sleep quality scan</li>
                  <li>disruption</li>
                  <a href='https://meetglimpse.com/sleep-trends/' target='_blank' className=' text-white'>
                     sleep trends
                  </a>
                  <li>display</li>
               </ul>
            </div>
            <div>
               <h1 className='text-2xl font-medium capitalize'>Relaxation</h1>
               <ul className='text-xl capitalize'>
                  <li>guided meditation</li>
                  <li>Breathing exercises</li>
                  <li>calming sound</li>
                  <li>Bed time stories</li>
               </ul>
            </div>
            <div>
               <h1 className='text-2xl font-medium capitalize'>Alarm Remainder</h1>
               <ul className='text-xl capitalize'>
                  <a href='' target='_blank'>
                     Bed time Remainder
                  </a>
                  <li>time</li>
                  <li>sound volume</li>
                  <a href='' target='_blank'>
                     wake up alarm
                  </a>
               </ul>
            </div>
            <div>
               <h1 className='text-2xl font-medium capitalize'>sleep education</h1>
               <ul className='text-xl capitalize flex flex-col text-white'>
                  <a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8314673/' target='_blank'>
                     articles
                  </a>
                  <a href='https://www.youtube.com/channel/UC5jJjELAeaLu4d7lC21fiJA' target='_blank'>
                     videos
                  </a>
               </ul>
            </div>
         </div>
      </div>
   );
};

export default HomePage;
