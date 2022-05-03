import React from 'react'
import './Home.css'
function Home() {
    return (
        <div>
            <div className='category'>

                <label className='ms-5 title mb-3 '>Category</label>
                <br />
                <label className='ms-5 content'>
                    <label className='mb-3'>Coporate Shoes</label> <br />
                    <label className='mb-3'>Sneakers</label> <br />
                    <label className='mb-3'>Sandals </label> <br />
                    <label className='mb-3'>Sport Shoe</label><br />
                    <label>Trainers</label><br />
                </label>
                <div className='corporate'>
                    <label className='mb-3'>Coporate Shoes</label> <br />
                    <label className='mb-3'>Sneakers</label><br />
                    <label className='mb-3'>Sandals </label><br />
                    <label className='mb-3'>Sport Shoe</label><br />
                    <label >Trainers</label>
                </div>
                <div className='col3'>
                    <label className='title mb-3'>Category</label>
                    <br/>
                    <label className='content'>
                        <label className='mb-3'>HOT DEAL</label><br/>
                        <label className='mb-3'>Sunglasses</label><br/>
                        <label className='mb-3'>Belts</label><br/>
                        <label className='mb-3'>Handbags</label><br/>
                        <label >Sneakers</label><br/>
                    </label>
                </div>
                <div className='col4 content'>
               <label className='mb-3'>HOT DEAL</label> <br/>
               <label className='mb-3'>Sunglasses</label><br/>
               <label className='mb-3'>Belts</label><br/>
               <label className='mb-3'>Handbags</label><br/>
               <label >Sneakers</label><br/>
                </div>
                <div className=' col5'>
                    <label className='title mb-3'>Category</label><br/>
                    <label className='content'>
                    <label className='mb-3'>Coporate Shoes</label><br/>
                    <label className='mb-3'>Sneakers</label><br/>
                    <label className='mb-3'>Sandals</label><br/>
                    <label className='mb-3'>Sport Shoe</label><br/>
                    <label className='mb-3'>Trainers</label><br/></label>
                </div>
            </div>
        </div>
    )
}

export default Home