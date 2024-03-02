import nlogo from './asset/naac.jpg';
import { FaLock } from "react-icons/fa";

function App() {
  return (
    <div className=' bg-gradient-to-tl from-blue-500  to-green-500 min-h-screen'>
      <div>
        <img src={nlogo}  alt='LOGO' className=' w-full' />
      </div>
      
        <div className='justify-center items-center font-serif bg-white p-8 rounded-lg mx-auto mt-44 w-80 '>
          <div>
         <center>
              <label className="text-lg text-center text-green-800  sm: font-medium">LOGIN YOUR ACCOUNT</label><br/><br/>  
              
              <input type='text' name='regno' placeholder='Enter Register Number' 
              className='sm: border-2 rounded-md py-1 ' /><br/><br/>
              
              <input type='date' name='dob' placeholder='dd-mm-yyyy' className='sm: border-2 rounded-md px-5' /><br/><br/>
              <button className='Sm: text-white flex px-14 py-1 rounded-md border-2 bg-gradient-to-r from-blue-500 to-green-500 '> <FaLock />   Sign-in</button>


          </center>
          </div>
          </div>
        </div>
      
   
  );
}

export default App;
