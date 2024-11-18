import React from 'react'
import './footer.css'
import { FaHeadphonesAlt, FaPiggyBank, FaShippingFast, FaWallet} from 'react-icons/fa';
import logo from '../images/DALL·E 2024-10-21 22.11.18 - A modern logo for an e-commerce store specializing in seeds. The logo should feature a stylized seed or sprout as the central element, representing gr.webp';


const Footer = () => {
  return (
    <div className='footer'>
        <div className='container'>
            <div className='leftBox'>
                <div className='box'>
                    <div className='iconBox'>
                        <FaPiggyBank />
                    </div>
                    <div className='detail'>
                        <h3>Great Saving</h3>
                        <p>ffffffff</p>
                    </div>
                </div>
                <div className='box'>
                    <div className='iconBox'>
                        <FaShippingFast />
                    </div>
                    <div className='detail'>
                        <h3>Free delivery</h3>
                        <p>ffffffff</p>
                    </div>
                </div>
                <div className='box'>
                    <div className='iconBox'>
                        <FaHeadphonesAlt />
                    </div>
                    <div className='detail'>
                        <h3>24/7 </h3>
                        <p>ffffffffffffffff</p>
                    </div>
                </div>
                <div className='box'>
                    <div className='iconBox'>
                        <FaWallet />
                    </div>
                    <div className='detail'>
                        <h3>moneyback</h3>
                        <p>ffffffffffffffff</p>
                    </div>
                </div>
                
            </div>
                <div className='rightBox'>
                    <div className='header'>
                        <img alt='logo' src={logo} />
                        <p>lorem ip...</p>

                    </div>
                    <div className='bottom'>
                       <div className='box'>
                        <h3>Your account</h3>
                         <ul>
                            <li>About us</li>
                            <li>Account</li>
                            <li>Payment</li>
                            <li>Sales</li>
                         </ul>
                       </div>
                       <div className='box'>
                            <h3>products</h3>
                            <ul>
                                <li>Delivery</li>
                                <li>Track order</li>
                                <li>New product</li>
                                <li>Old product</li>
                            </ul>
                       </div>
                       <div className='box'>
                            <h3>contact us</h3>
                            <ul>
                                <li>023-3200, xxxxxxxxxxxxxxxxxxx</li>
                                <li>+(351) 99999999</li>
                                <li>New product</li>
                                <li>info@gmail.com</li>
                            </ul>
                       </div>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Footer