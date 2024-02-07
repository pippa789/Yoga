import React from 'react';
import { useState } from 'react';


function ClassesCard() {
const [book, setBook]=useState(0)
  return (
    <>
    <div className='classes-card'>Classes</div>
    <button className='booking-button' onClick={() => setBook(book + 1)}>Book Now</button>
    
    </>
    
    )

}

export default ClassesCard