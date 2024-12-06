import React from 'react'
import {Routes, Route} from 'react-router'
import Home from './home';
import Shop from './shop';
import Cart from './cart';
import Contact from './contact';

const Rout = ({shop, Filter, allcaterfilter, addToCart, cart, setCart}) => {
  return (
   <>
   <Routes>
        <Route path='/' element={<Home addToCart={addToCart}/>} />
        <Route path='cart' element={<Cart cart={cart} setCart={setCart} />} />
        <Route path='shop' element={<Shop shop={shop} Filter={Filter} allcaterfilter={allcaterfilter} addToCart={addToCart} />} />
        <Route path='contact' element={<Contact />} />
   </Routes>
   </>
  )
}

export default Rout