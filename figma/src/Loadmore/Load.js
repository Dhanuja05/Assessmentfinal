import React from 'react'
import './Load.css'
import darkblue from './darkblue.png'
function Load() {
  return (
    <div>
        <center><label className='load'>LOAD MORE </label></center>
        <center><div className='under'></div></center>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className='adidas'>
        <div className='img1'>
              <img src={darkblue}/>
          </div>
          <label className='adidas1'>Adidas Men Running<br/>Sneakers</label><br/>
          <label className='per mt-5'>Performance and design. Taken right to the edge.</label>
          <div>
          <label className='shop mt-3'>SHOP NOW</label> 
          <br/>
          <div className='underline mt-1'></div> 
          </div>
        </div>
    </div>
  )
}

export default Load
