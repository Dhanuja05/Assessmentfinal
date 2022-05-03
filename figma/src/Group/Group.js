import React from 'react'
import './Group.css'
import shipping from  './shipping.png'
import dollar from './dollar.png'
import people from './people.png'
function Group() {
  return (
    <div>
        <div >
        
         <div className=' d-flex justify-content-around'><img src={shipping}/>
         <img src={dollar}/>
         <img src={people}/>  </div>
         <br/>
         <div className='d-flex justify-content-around title1'>
             <label>FREE SHIPPING</label>
             <label>100% REFUND</label>
             <label>SUPPORT 24/7</label>
         </div>
         <br/>
       
        <div className=' lorem d-flex justify-content-around '>
            <p>Lorem Ipsum is simply <br/>dummy text of the <br/>printing and typesetting <br/>industry.</p>
            <p>Lorem Ipsum is simply <br/>dummy text of the <br/>printing and typesetting <br/>industry.</p>
            <p>Lorem Ipsum is simply <br/>dummy text of the <br/>printing and typesetting <br/>industry.</p>
        </div>
        </div>
    </div>
  )
}

export default Group