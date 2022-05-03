import React from 'react';
import './Feature.css';
import Vector from './Vector.png';
import { MdStar } from "react-icons/md";
function Feature() {
    return (
        <div>
            <center><label className='feature'>FEATURED PRODUCTS</label></center>
            <br />
            <br />
            <div className='d-flex justify-content-around'>
                <div className='d-flex'>
                    <img src={Vector} />
                    <div className='ms-4'>
                        <label className='titlea'> Blue Swade Nike <br />Sneakers</label>
                        <br/>
                        <div className='mt-2' >
                            <MdStar color='#FFC600' />
                            <MdStar color='#FFC600' />
                            <MdStar color='#FFC600' />
                            <MdStar color='#FFC600' />
                            <MdStar color=' #C1C8CE' />

                        </div>
                        <br/>
                        <div>
                            <label className='four'>$499</label>
                            <span className='five ms-2'>$599</span>
                        </div>
                    </div>
                </div>
                <div className='d-flex'>
                    <img src={Vector} />
                    <div className='ms-4'>
                        <label className='titlea'> Blue Swade Nike <br />Sneakers</label>
                        <br/>
                     
                        <div className='mt-2'>
                            <MdStar color='#FFC600' />
                            <MdStar color='#FFC600' />
                            <MdStar color='#FFC600' />
                            <MdStar color='#FFC600' />
                            <MdStar color=' #C1C8CE' />

                        </div>
                        <br/>
                     
                        <div>
                            <label className='four'>$499</label>
                            <span className='five ms-2'>$599</span>
                        </div>
                    </div>
                </div>
                <div className='d-flex'>
                    <img src={Vector} />
                    <div className='ms-4'>
                        <label className='titlea'> Blue Swade Nike <br />Sneakers</label>
                        <div className='mt-2'>
                            <MdStar color='#FFC600' />
                            <MdStar color='#FFC600' />
                            <MdStar color='#FFC600' />
                            <MdStar color='#FFC600' />
                            <MdStar color=' #C1C8CE' />

                        </div>
                        <br/>
                   
                        <div>
                            <label className='four'>$499</label>
                            <span className='five ms-2'>$599</span>
                        </div>
                    </div>
                </div>
               
            </div>

            <br/>
           
           
        </div>
    )
}

export default Feature
