import { useState } from 'react';
import data from './data';
import React from 'react';
import Tours from './component/Tours';



function App() {

  const [tours,settours]=useState(data);

  function removetour(id){ // id as a parameter le li becz sb same ho sakta hai but always unique so matched id ko chod ke baki sari tours ui pe phirse display krdi
    const newtours = tours.filter(tour=> tour.id !== id );
    settours(newtours);
  }
   
  // yha remove tour wala function defined hai but hum usko call kr rhe hai card.js ke ander to Tours wale component me tours ke sath sath removetour wala fucntion bhi pass krna padega as a props 
  
  if(tours.length === 0){  // sb jb tours pe non intrested pe click kr diya to sb hat gye to tours kkeft wala div aur refresh wala button dikhega aur jb refresh pe click karenge to settours me phirse pura data dal denge 
    return(
      <div className='refresh'>
        <h2>No Tours Left!</h2>
        <button className="mt-5 px-8 py-2 border border-white bg-black text-white font-semibold hover:bg-white hover:text-black transition duration-300"
         onClick={()=>settours(data)}>
            Refresh
        </button>
      </div>
    );
  }
  
  return (
    <div className='app'> 
      <Tours tours={tours} removetour={removetour} ></Tours>   
    </div> // starting me heading pdi thi aur tours pade the so ek parent div ke ander heading bna di aur tour wala custom componet bna diya 
  )
}

export default App
