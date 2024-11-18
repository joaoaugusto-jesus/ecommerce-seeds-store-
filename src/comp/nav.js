import React from 'react'
import {MdLocalShipping} from 'react-icons/md';
import { IoSearch } from "react-icons/io5";
import { CiLogin, CiLogout } from "react-icons/ci";
import { RiUser5Fill } from "react-icons/ri";
import logo from '../images/DALL·E 2024-10-21 22.11.18 - A modern logo for an e-commerce store specializing in seeds. The logo should feature a stylized seed or sprout as the central element, representing gr.webp';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';
import './nav.css';

const Nav = ({search, setSearch, searchProduct}) => {

    const { loginWithRedirect, logout, user, isAuthenticated, isLoading  } = useAuth0();
    

    return (
   
    <div className='header'>
       <div className='top_header'>
            <div className='icon'>
                <MdLocalShipping />
            </div>
            <div className='info'>
                <p>Free Shipping When Shopping upto 1000</p>
            </div>
       </div>
       <div className='midHeader'>
       <div className='logo' >
            <img src={logo} alt="logo" />            </div>
            <div className='searchBox'>
               <input type='text' value={search} placeholder='Search' onChange={(e) => setSearch(e.target.value)} /> 
               <button onClick={searchProduct}>
               <IoSearch />
               </button>
            </div>
            {
                isAuthenticated ? 
                // if user is login then Logout btn will shown and also user profile
                <div className='user'>
                <div className='icon'>
                    <CiLogout />
                </div> 
                <div className='btn'>
                    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>
                </div>
            </div>
            :
            //  if user not Login then btn will shown
             <div className='user'>
                <div className='icon'>
                    <CiLogin />
                </div> 
                <div className='btn'>
                    <button onClick={() => loginWithRedirect()}>Login</button>
                </div>
            </div>
            }
           
           
           
        </div>
        <div className='lastHeader'>
           <div className='userProfile'>
            {
                // User Profile will Shown Here
                isAuthenticated ?
            <>
            <div className='icon'>
            <RiUser5Fill />
            </div>
            <div className='info'>
            <h2>{user.name}</h2>
            <p>{user.email}</p>    
            </div>
            </>
            :
            <>
            <div className='icon'>
            <RiUser5Fill />
            </div>
            <div className='user'>
                <p>Please Login</p>
            </div>
            </>
            }
           </div>
           <div className='nav'>
            <ul>
                <li>
                    <Link to='/' className='link'>Home</Link>
                    <Link to='/shop' className='link'>Shop</Link>
                    <Link to='/cart' className='link'>Cart</Link>
                    <Link to='/collection' className='link'>Collection</Link>
                    <Link to='/about' className='link'>About</Link>
                    <Link to='/contact' className='link'>contact</Link>
                </li>
            </ul>
           </div>
           <div className='offer'>
            <p>flat 10% over all items</p>
           </div>
        </div>
    </div>
   
    
  )
}

export default Nav