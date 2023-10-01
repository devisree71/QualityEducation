import React from 'react'
import './stunav.css'
import { NavLink } from 'react-router-dom';
function Navbar() {
  return (
    <>
    <div className='r'>
    <NavLink className='p' to='/'>HOME</NavLink>
    <NavLink className='p' to='/courses'>COURSES</NavLink>
    <NavLink className='p' to='/Quizes'>QUIZES</NavLink>
    <NavLink className='p' to='/career'>CAREER GUIDANCE</NavLink>
    <NavLink className='p' to='/scholar'>SCHOLARSHIPS</NavLink>
    <NavLink className='p' to='/post'>POSTS</NavLink>
    </div>
    </>
  )
}
export default Navbar;