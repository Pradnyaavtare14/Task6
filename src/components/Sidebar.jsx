// src/components/Sidebar.js
// import React from 'react';
import { FaHome, FaSquare, FaCircle, FaCalendar, FaUser } from 'react-icons/fa';
import { FaSquarePlus } from 'react-icons/fa6';
// import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="h-screen w-20 flex flex-col items-center  text-white shadow-lg ml-20">
      <div className="mt-8 flex justify-center">
        {/* Replace with your symbol */}
        <FaSquarePlus size={32} className="icon-border hover:stroke-blue-900" style={{ color: 'black', marginTop:"20px" }} />
      </div>
      <nav>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li className="flex justify-center mt-8"> {/* Increased spacing */}
          <FaHome size={24} className="icon-border hover:stroke-blue-900"  style={{ border: 'black',  marginTop:"20px" }} /> {/* Changed color */}
           
          </li>
          <li className="flex justify-center mt-6 "> {/* Increased spacing */}
          <FaSquare className="icon-border hover:stroke-blue-900" size={24} style={{ border: 'black', marginTop:"20px"}} /> {/* Changed color */}
      
          </li>
          <li className="flex justify-center  mt-6"> {/* Increased spacing */}
          <FaCircle className="icon-border hover:stroke-blue-900" size={24} style={{ color: 'black' , marginTop:"20px"}} /> {/* Changed color */}
          
          </li>
          <li className="flex justify-center  mt-6"> {/* Increased spacing */}
          <FaCalendar className="icon-border hover:stroke-blue-900" size={24} style={{ color: 'black' , marginTop:"20px"}} /> {/* Changed color */}
         
          </li>
          <li className="flex justify-center  mt-6 "> {/* Increased spacing */}
          <FaUser className="icon-border hover:stroke-blue-900" size={24} style={{ color: 'black', marginTop:"20px" }} /> {/* Changed color */}
          
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
