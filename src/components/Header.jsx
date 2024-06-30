// import React from 'react'
import { FaCalendarAlt, FaUser, FaCog } from 'react-icons/fa';

const Header = () => {
  return (
    <div className=" p-4 flex flex-row items-center justify-center"> 
       
        
      <div className="px-4  py-2 bg-gray-300 rounded-md text-black mr-4">
        <button className=''>Dashboard</button>
      </div>
      <FaCalendarAlt size={20} className="ml-20" />
      <p className="ml-4">Schedule</p>
      <FaUser size={20} className="ml-20" />
      <p className="ml-4">Profile</p>
      <FaCog size={20} className="ml-20" />
      <p className="ml-4">Settings</p>
    </div>
  )
}

export default Header