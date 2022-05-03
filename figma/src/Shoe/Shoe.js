import React from 'react'
import './Shoe.css'
import Shoes1 from './Shoes1.png'
import Bag1 from './Bag1.png'
import Shoe2 from './Shoe2.png'
import Shoe3 from './Shoe3.png'
function Shoe() {
  return (
    <div>
       <img src={Shoes1}/>
       <div className='container '>
       <label className='super '>Super Flash Sale</label>
       <br/>
       <label className='off'>50% Off </label></div>
       <label className='bag fw-bold'>FS-QUILTED MAXI<br/>CROSS BAG</label>
       <div>
       <label className='rate'>$534,33</label>
       <label className='offer'>24% Off</label></div>
       <label className='dollar'>$299,43</label>
       <div className='container d-flex shoes'>
       <img src={Bag1} />
       <img src={Shoe2} className='shoe2'/>
       <img src={Shoe3} className='shoe3'/>
       </div>
       <label className='nike'>FS - Nike Air<br/> Max 270 React...</label>
       <label className='dolar'>$299,43</label>
       <label className='rates'>$534,33</label>
       <label className='ofer'>24% Off</label>
       <label className='max'>FS - Nike Air <br/> Max 270 React...</label>
       <label className='ratess'>$534,33</label>
       <label className='offers'>24% Off</label>
       <label className='dolars'>$299,43</label>
    </div>

  )
}

export default Shoe
