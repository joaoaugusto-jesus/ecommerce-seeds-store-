import React from 'react'
import './cart.css';
import { Link } from 'react-router-dom';
import { FaWindowClose } from "react-icons/fa";

const Cart = ({ cart, setCart }) => {
    // Increase quantity
    const incqty = (product) => {
        const exist = cart.find((x) => x.id === product.id);
        setCart(cart.map((curElm) => 
            curElm.id === product.id ? { ...exist, qty: exist.qty + 1 } : curElm
        ));
    };

    // decrease quantity
    const decqty = (product) => {
        const exist = cart.find((x) => x.id === product.id);
        if (exist.qty > 1) {
            setCart(cart.map((curElm) => 
                curElm.id === product.id ? { ...exist, qty: exist.qty - 1 } : curElm
            ));
        }
    };

      // Remove item
      const removeItem = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    };
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
                                    <p>Total: €{curElm.price * curElm.qty}</p>
                                </div>
                                  <div className='quantity'>
                                    <button onClick={() => incqty(curElm)}>+</button>
                                    <input type='number' value={curElm.qty} readonly></input>
                                    <button onClick={() => decqty(curElm)}>-</button>
                                </div>
                                <div className='icon'>
                                    <ul>
                                        <li><FaWindowClose onClick={() => removeItem(curElm.id)} /></li>
                                    </ul>
                                    
                                </div>
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