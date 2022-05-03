import React from 'react'
import './Rectangle.css'
import Ecom1 from './Ecom1.png'
import westernunion from './westernunion.png'
import mastercard from './mastercard.png'
import Paypal1 from './Paypal1.jpg'
import visa1 from './visa1.png'
import { TiSocialFacebook } from "react-icons/ti";
import { BsTwitter } from "react-icons/bs";
function Rectangle() {
    return (
        <div>
            <div className='rect'>
                <div className='d-flex'>
                    <div className='ecom'>
                        <img src={Ecom1} />
                        <label className='fw-bold'>E-Comm</label>
                        <p className='para ms-3'>Lorem Ipsum is simply dummy text of the <br />printing and typesetting industry.
                            Lorem <br />Ipsum has been the industry's standard <br />dummy text ever.
                            Since the 1500s, when <br /> an unknown printer.</p>
                    </div>
                    <div className='follow'>
                        <label className='us'>Follow Us</label><br /><br />
                        <p className='mb-3 para1'>Since the 1500s, when an unknown<br />
                            printer took a galley of type and <br />scrambled.</p>

                        <TiSocialFacebook color='#385C8E' size='20' />
                        <BsTwitter color='#03A9F4' className='ms-4' size='17' />
                    </div>
                    <div className='contact'>
                        <label className='conta'>Contact Us</label><br /><br />
                        <p className='para2'>E-Comm , 4578 <br />Marmora Road, <br />Glasgow D04 89GR</p>
                    </div>
                </div>
                <br />
                <br /><br /><br />

                <div className='d-flex'>
                    <div className='info'>
                        <label className='mb-4 info1'>Information</label>
                        <div className='below'>About Us<br />
                            Infomation <br />
                            Privacy Policy<br />
                            Terms & Conditions
                        </div>
                    </div>
                    <div className='service'>
                        <label className='mb-4 service1'>Service</label>
                        <div className='below'>About Us<br />
                            Infomation <br />
                            Privacy Policy<br />
                            Terms & Conditions
                        </div>
                    </div>
                    <div className='account'>
                        <label className='mb-4 account1'>My Account</label>
                        <div className='below'>About Us<br />
                            Infomation <br />
                            Privacy Policy<br />
                            Terms & Conditions
                        </div>
                    </div>
                    <div className='our'>
                        <label className='mb-4 our1'>Our Offers</label>
                        <div className='below'>About Us<br />
                            Infomation <br />
                            Privacy Policy<br />
                            Terms & Conditions
                        </div>
                    </div>


                </div>
               <div className='underline1'></div>
               <div>
                   <div className='mail'>© 2018 Ecommerce theme by www.bisenbaev.com</div>
                    
               </div>
               <div >
               <img src={westernunion} className='west me-2'  width='40' height='40'/>
               <img src={mastercard} className=' master me-2' width='40' height='26'/>
               <img src={Paypal1} className=' pay me-2'width='40' height='26'/>
               <img src={visa1}  className='visa
               'width='40' height='26'/></div>

            </div>
        </div>
    )
}

export default Rectangle