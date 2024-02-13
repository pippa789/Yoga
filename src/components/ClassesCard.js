import React from 'react';


  function ClassesCard() {
  const Classes = 
  [
      {
          id:"1",
          title:"Mixed Yoga and Pilates",
          time: "7am till 8am",
      },
      {
          id:"2",
          title:"Gentle Yoga",
          time: "7:30pm till 8:30pm",
      }
  ]
   return(
  
    <div className='classes-card'>
    {Classes.map((Classes, index)=> (
      <div key={index}>
        <span>{Classes.title}</span>
        </div> 
       ))}
       </div>   
     ) 
    
    }

export default ClassesCard
