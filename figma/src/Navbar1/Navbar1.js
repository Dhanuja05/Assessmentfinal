import React from 'react'
import './Navbar1.css'
import Ecom from './Ecom.png'
function Navbar1() {
  return (
    <div>
        <div className='container mt-3'>
            <div>
            <img src={Ecom} />
             <label className='fw-bold'>E-Comm</label>
             
        
                 <label className='home'>HOME</label>
                 <label className='bags'>BAGS</label>
                 <label className='sneak'>SNEAKERS</label>
                 <label className='belt'>BELT</label>
                 <label className='cont'>CONTACT</label>
             </div>
            
        </div>
    </div>
  )
}

export default Navbar1