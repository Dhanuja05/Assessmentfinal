import React from 'react'
import './Latest.css'
import nikelogo from './nikelogo.png'
import logo from './logo.png'
import kronoslogo from './kronoslogo.png'
function Latest() {
  return (
    <div>
        <center><label className='latest'>LATEST NEWS</label></center>
        <div className=' date container mt-5 d-flex justify-content-around'>
            <label>01 Jan, 2015</label>
            <label>01 Jan, 2015</label>
            <label>01 Jan, 2015</label>
        </div>
        <div className='d-flex labell'>
        <label className='label1'>Fashion Industry</label>
        <label className='label2'>Best Design Tools</label>
        <label className='label3'>HR Community</label></div>
        <div className='d-flex'>
          
          <img src={nikelogo} width='90' height='80' className='nike1'/> 
          <img src={logo} className='logo1'/>
          <img src={kronoslogo}  className='kronos1'/>
          </div>
         
            <div className='loremm'>
          <p className='lorem1'> Lorem Ipsum is simply <br/>dummy text of the <br/>printing and typesetting<br/> industry.</p>
          <p className='lorem2'> Lorem Ipsum is simply <br/>dummy text of the <br/>printing and typesetting<br/> industry.</p>
          <p className='lorem3'> Lorem Ipsum is simply <br/>dummy text of the <br/>printing and typesetting<br/> industry.</p>
          </div>
       
    </div>
  )
}

export default Latest

