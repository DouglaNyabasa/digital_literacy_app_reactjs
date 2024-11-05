import React from 'react'
import {BiHome,BiBookAlt,BiMessage,BiSolidReport,BiStats,BiTask} from 'react-icons/bi';
const SideBar = () => {
  return (
    <div className='menu'>
    <div className='logo'>
      <BiBookAlt/>
      <h2>Eduma</h2>
    </div>
    <div className="menu--list">
      <a href="#" className='item'>
         <BiHome/>
         Dashboard
      </a>
      <a href="#" className='item'>
         <BiTask/>
         Your Courses
      </a>
      <a href="#" className='item'>
         <BiHome/>
         Dashboard
      </a>
      <a href="#" className='item'>
         <BiHome/>
         Dashboard
      </a>
    </div>
      
    </div>
  )
}

export default SideBar
