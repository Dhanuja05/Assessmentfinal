import React from 'react'
import './Navbar.css'
import {RiArrowDropDownFill} from "react-icons/ri";
import { BsPerson } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";
function Navbar() {
  return (
    <div className='container mt-4'>
        <div className='d-flex'>
            <div >
            <label>EN</label>
            <RiArrowDropDownFill/>
            <label>USD</label>
            <RiArrowDropDownFill color='#22262A'/></div>
         <div className='profile'>
            <BsPerson size='22'/>
            <label className='ms-1'>My profile</label>
            </div>
            <div className='d-flex'>
            <FiShoppingCart className='mt-1  ms-5' size='20'/>
            <div className='dot'>
              
            </div>
            <label className='num'>2</label>
           
            </div>

            <label className='ms-5'>Items</label>

            <label className='colour ms-4'>$0.00</label>

            <AiOutlineSearch className='ms-2 mt-1' size='16'/>
        </div>
    </div>
  )
}

export default Navbar