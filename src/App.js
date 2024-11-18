import React, { useState } from 'react'
import Nav from './comp/nav'
import {BrowserRouter} from 'react-router-dom'

import Rout from './comp/rout'
import Footer from './comp/footer'
import Homeproduct from './comp/home_products'

const App = () => {

  //Add to cart
  const [cart, setCart] = useState([]);

  //Shop page product
   const [shop, setShop] = useState(Homeproduct);
  //Shop category filter
  const [search, setSearch] = useState('');
  const Filter = (x) => 
    {
    const catefilter = Homeproduct.filter((product) =>
    {
      return product.cat === x
    })
    setShop(catefilter)
  }
  const allcaterfilter = () => {
    setShop(Homeproduct)
  }
//Shop search filter
  const searchlength = (search || []).length === 0;
  const searchProduct = () => 
    {
    if(searchlength) 
      {
      alert("Please Search Something !")
      console.log("Search Term", search)
    setShop(Homeproduct)
    }
    else{
     
      const searchfilter = Homeproduct.filter((x) => 
      {
        return x.cat === search
    })
    console.log("Filtered Shop:", shop);

    setShop(searchfilter)
  
    }
  }

  ///Add to cart
  
  const addToCart = (product) => 
  { 
    const exist = cart.find((x) => 
      {
          return x.id === product.id
      })
      if(exist)
      {
        alert ("This product is allready added in cart")
      }
      else{
         setCart([...cart, {...product, qty:1}])
         alert ("Added to cart")
      }
   
    
  }
  console.log(cart)
  return (
    <BrowserRouter>
    <Nav search={search} setSearch={setSearch} searchProduct={searchProduct}/>
    <Rout shop={shop} Filter={Filter} allcaterfilter={allcaterfilter} addToCart={addToCart} cart={cart}/>
    <Footer />
    </BrowserRouter>
  )
}

export default App;
 