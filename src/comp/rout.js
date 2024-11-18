import React from 'react'
import {Routes, Route} from 'react-router'
import Home from './home';
import Shop from './shop';
import Cart from './cart';


const Rout = ({shop, Filter, allcaterfilter, addToCart, cart, setCart}) => {
  return (
   <>
   <Routes>
        <Route path='/' element={<Home />} />
        <Route path='cart' element={<Cart cart={cart} setCart={setCart} />} />
        <Route path='shop' element={<Shop shop={shop} Filter={Filter} allcaterfilter={allcaterfilter} addToCart={addToCart} />} />
   </Routes>
   </>
  )
}

export default Rout