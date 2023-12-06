import React from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const LinkContainer = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  background-color:black;
  width:100%;
  height:50px;
`;


function Nav() {
  return (
    
    <LinkContainer>
      <Link className='linkstyle' to="/"></Link>
      <Link className='linkstyle' to="/catsyoga/Bookings">Book a class</Link>
      <Link className='linkstyle' to="/react-cv/Contact">Contact me</Link>
      <Link className='linkstyle' to="/react-cv/projects">Projects</Link>
    </LinkContainer>
  )
}
export default Nav