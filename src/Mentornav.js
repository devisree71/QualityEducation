import React from 'react'
import { NavLink } from 'react-router-dom';
import './stunav.css'
function Mentornav() {
  return (
    <>
    <div className='r'>
    <NavLink className='p' to='/'>HOME</NavLink>
    <NavLink className='p' to='/Student'>STUDENT LIST</NavLink>
    <NavLink className='p' to='/Mentorposts'>POSTS</NavLink>
    <NavLink className='p' to='/Mentorqueries'>QUERIES</NavLink>
    </div>
    </>
  )
}
export default Mentornav;