import React, { useState } from 'react';

function App() {
  const [number, setNumber] = useState(0);
  const startYear = 2024;
  const [endYear, setEndYear] = useState(0);

  return (
  <div className='bg-orange-500 mb-5  fill-orange-500 '> 
    <h1 className=' text-center text-white'> Finance Details</h1>
      <div className='bg-orange-200'>
        
        <div className=' ml-20  mb-5 '>
          <label className=' text-center '> Monthly Plan</label>
          <input type='number' name='amt' value={number} placeholder='Amount'
            onChange={(e) => setNumber(e.target.value)}
            className='outline-black rounded-none ml-5' />
          <label className=' text-center '> Year Plan</label>
          <input type='number' name='amt' value={endYear} placeholder='2024'
            onChange={(e) => setEndYear(e.target.value)}
            className='outline-black rounded-none ml-5'/>
        </div>

        <div className=' ml-20  mb-5 '>
          <label className=' text-center '> Monthly Plan</label>
          <input type='number' name='amt' placeholder='Amount'
            className='outline-black rounded-none ml-5' />
          <label className=' text-center '> Year Plan</label>
          <input type='number' name='amt'  placeholder='2024'
            className='outline-black rounded-none ml-5'/>
        </div>
        
          <table border="2" width="450px" className='ml-80'>
            <thead>
              <tr>
                <th>Year</th>
                <th>Annual Amount</th>
                <th>Annual Interest</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {(() => {
                let rows = [];
                let cper = 0;
                let tot = 0; 
                
                for (let year = startYear; year <= endYear; year++) {
                  let sum = number * 12;
                  let per = (sum * 20) / 100;
                  cper += per; 

                  let net = sum + cper;
                  tot += net; 

                  rows.push(
                    <tr key={year}>
                      <td>{year}</td>
                      <td>{sum}</td>
                      <td>{cper}</td>
                      <td>{net}</td>
                    </tr>
                  );
                }

                
                rows.push(
                  <tr >
                    <td colSpan={3}>Total</td>
                    <td>{tot}</td>
                  </tr>
                );

                return rows;
              })()}
            </tbody>
          </table>
        </div>
    </div>
  );
}

export default App;