import React from 'react'
import './cart.css';
import { Link } from 'react-router-dom';

const Cart = ({cart}) => {
    
  return (
    <div className='cart'>
        <h3># Cart</h3>
        {
            cart.length === 0 &&
            <>
            <div className='empty-cart'>
                <h2>
                    Your Shopping cart is empty
                </h2>
                    <Link to='/shop'>
                <button>Shop Now</button>
                </Link>
            </div>
            </>
        }
        <div className='container'> 
            {
                cart.map((curElm) => {
                    return (
                        <>
                        <div className='box' key={curElm.id}>
                           <div className='img-box'>
                                <img src={curElm.images} alt='item' />
                            </div> 
                            <div className='detail'>
                                <div className='info'>
                                   <h4>{curElm.cat}</h4>
                                    <h3>{curElm.Name}</h3>
                                    <p>Price: €{curElm.price}</p> 
                                </div>
                                  <div className='quantity'>
                                    <button>+</button>
                                    <input type='number' value={curElm.qty}></input>
                                    <button>-</button>
                                </div>
                              
                                <p>Total: €{curElm.price * curElm.qty}</p>
                            </div>    
                        </div>
                        </>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Cart