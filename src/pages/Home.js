import React from 'react'
import hero from '../images/hero.jpg';
import TitleCard from '../components/TitleCard';
import PrivateCard from '../components/PrivateCard';
import SoundbathCard from '../components/SoundbathCard';
import ClassesCard from '../components/ClassesCard';
function Home() {
  return (
    
    <div className='container1'>
    <TitleCard />
    
    <SoundbathCard />
    <PrivateCard  />
    <ClassesCard />
    </div>
  )
}

export default Home