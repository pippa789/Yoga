import React from 'react';
import yogagirl from '../images/yogagirl.jpg'


function PrivateCard() {
  return (
    <div className='private-wrapper'>
      
    <div className='private-text'>Private tuition</div>
    <img src={yogagirl} alt='woman doing yoga' />
    </div>
  )
}

export default PrivateCard