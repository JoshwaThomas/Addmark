import React from 'react';
import tailwind from './asset/tailwind.png';
import { MdDarkMode } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

function App() {
  

  return (
    <body className='bg-gradient-to-r from-slate-900 to-gray-900 cover w-[2400px]] h-[950px]'>
        
        <div className='flex-1'>
            {<img src={tailwind}  alt='LOGO' className='w-[150px] h-[30px]  ml-5 justify-start  pt-3'  /> }
                
                <ul className=' flex space-x-6 justify-end  mr-7 text-white cursor-pointer '>
                    <li className=' hover:text-sky-400' >Docs</li>
                    <li className=' hover:text-sky-400' >Components</li>
                    <li className=' hover:text-sky-400' >Blog</li>
                    <li className=' hover:text-sky-400' >Showcase</li>
                    <li className=' hover:text-sky-400' > | </li>
                    <li className=' hover:text-sky-400 pt-1' ><MdDarkMode /></li>
                    <li className=' hover:text-sky-400 pt-1' ><FaGithub /></li>
                </ul>
                
            <div className='pt-20 text-center text-balance '>
                <h1 className='text-white  text-5xl font-black font-sans  '>Rapidly build modern websites without ever leaving your HTML.</h1>
                <p className='pt-5 text-slate-500 text-lg pl-20 pr-20  font-sans '>A utility-first CSS framework packed with classes like <span className='text-sky-500'> flex, pt-4, text-center 
                </span>and <span className='text-sky-500'> rotate-90 </span> that can be composed to build any design, directly in your markup.</p>
            </div>
            <div className='pt-5 justify-center flex space-x-4  '>
                <button className=' cursor-pointer bg-sky-400 text-white p-3 font-normal hover:bg-sky-600  rounded-md '>Get Started</button>
                <span></span>< CiSearch /><input type='text' className=' cursor-pointer  rounded-md pl-6 pr-5 bg-slate-700 text-left hover:bg-slate-500 border-2 hover:border-sky-500  ' 
                placeholder=  "🔍 Quick search...        ctrl+k" />
            </div>
            {/* <div className='box-border h-80 w-60 p-3 border-4 space-y-11'>   */}

            </div>
                
        
    </body>
  );
}

export default App;