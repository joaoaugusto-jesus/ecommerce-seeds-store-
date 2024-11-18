import React, {useEffect, useState} from 'react';
import './home.css';
import {Link} from 'react-router-dom';
import Homeproduct from './home_products';
import {FaEye, FaHeart, FaFacebook, FaTwitter, FaInstagramSquare, FaYoutube, FaShoppingCart} from "react-icons/fa";

const Home = () => {
  // Product category
  const [newProduct, setNewProduct] = useState(Homeproduct);
  const [featuredProduct, setFeaturedProduct] = useState(Homeproduct);
  const [topProduct, setTopProduct] = useState(Homeproduct);
  // Trending products
  const [ trendingProduct, setTrendingProduct] = useState([]);
  //Filter trending products

  const filtercate = (x) => {
    const filterproduct = Homeproduct.filter((curElm) => {
        return curElm.type === x
    })
    setTrendingProduct(filterproduct)
  }
  //////All trending products
  const alltrendingproducts = () => 
  {
    setTrendingProduct(Homeproduct)
  }

  //Product Type
  useEffect(() =>
  {
    alltrendingproducts();
    productcategory()
  }, [])
  
  const productcategory = () => {

    const newcategory = Homeproduct.filter((x) => {

      return x.type === 'new'
    })
    console.log("New Products:", newcategory);
    setNewProduct(newcategory)

    // featured product
    const featuredcategory = Homeproduct.filter((x) =>
    {
      return x.type === 'featured'
    })
    console.log("Featured Products:", featuredcategory);
    setFeaturedProduct(featuredcategory)
   
    // top product
    const topcategory = Homeproduct.filter((x) => 
    {
      return x.type === 'top'
    
    })
    console.log("Top Products:", topcategory);
    setTopProduct(topcategory)
  }

  return (
    <>
      <div className='home'>
        <div className='topBanner'>
          <div className='contant'>
            <h3>Soil</h3>
            <h2>Biological</h2>
            <p>30% off at your first order</p>
            <Link to='/shop' className='link'>Shop Now</Link>
          </div>
        </div>
        <div className='trending'>
          <div className='container'>
            <div className='leftBox'>
              <div className='header'>
                <div className='heading'>
                  <h2 onClick={() => alltrendingproducts(

                  )}>trending product</h2>
                </div>
                <div className='cate'>
                  <h3 onClick={() =>filtercate ('new') }>New</h3>
                  <h3 onClick={() =>filtercate ('featured')}>Featuring</h3>
                  <h3 onClick={() =>filtercate ('top')}>Top Selling</h3>
                </div>
              </div>
              <div className='products'>
                <div className='container'>
                  { 
                    trendingProduct.map((curElm) => 
                      {
                      return (
                      
                          <div className='box' key={curElm.id}>
                            <div className='imgBox'>
                              <img src={curElm.images} alt={curElm.Name}>
                              </img>
                              <div className='icon'>
                                  <div className='iconBox'>
                                   <FaEye />
                                  </div>
                                   <div className='iconBox'>
                                   <FaHeart />
                                  </div>
                              </div>
                            </div>
                            <div className='info'>
                              <h3>{curElm.Name}</h3>
                              <p>${curElm.price}</p>
                             <button className='btn'>Add to cart</button>
                            </div>
                          </div>
                       
                      )
                    })
                  }
                </div>
                <button>Show more</button>
              </div>
            </div>
            <div className='rightBox'>
              <div className='right-container'>
                <div className='testimonial'>
                  <div className='head'>
                    <h3>Our testimonial</h3>
                  </div>
                  <div className='detail'>
                    <div className='imgBox'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEtTQjxULqzUv1rm2RePK1EHSXPGzFq8gEpg&s" alt="Testimonial"/> 
                    </div>
                    <div className='info'>
                      <h3>Ana Seed</h3>
                      <h4>web designer</h4>
                      <p>Finest product in the market, quality seeds</p>
                    </div>
                  </div>
                </div>
                <div className='newsletter'>
                  <div className='head'>
                    <h3>newsletter</h3>
                    </div>
                    <div className='form'>
                      <p>join our mailing</p>
                      <input type="email" placeholder='Email' onChange={(e) => (e.target.value)} autoComplete='off'></input>
                      <button>subscribe</button>
                      <div className='iconBox'>
                        <div className='icon'>
                          <FaFacebook />
                        </div>
                       <div className='icon'>
                         <FaTwitter />
                        </div>
                        <div className='icon'>
                          <FaInstagramSquare />
                        </div>
                        <div className='icon'>
                         <FaYoutube />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div  className='banners'>
                  <div className='container'>
                    <div className='leftBox'>
                      <div className='box'>
                        <img src='/biofertlizer.webp' alt='banner'></img>
                      </div>
                      <div className='box'>
                        <img src='sale.webp' alt='sale discount 30%'></img>
                      </div>
                    </div>
                    <div className='rightBox'>
                      <div className='top'>
                        <img src='banner.webp' alt=''></img>
                      </div>
                    </div>
                  </div>
              <div className='producType'>
                  <div className='container'>
                    <div className='box'>
                      <div className='header'>
                        <h2>New Product</h2>
                      </div>
                        {
                          newProduct.map((elm) => {

                            return (
                            <>
                            <div className='productBox' key={elm.id}>
                              <div className='imgBox'>
                                <img src={elm.images} alt='banner'></img>
                              </div>
                              <div className='detail'>
                               <h3>{elm.Name}</h3>
                               <p>$ {elm.price}</p>
                               <div className='icon'>
                                <button> <FaEye /></button>
                                <button> <FaHeart /></button>
                                <button> <FaShoppingCart /></button>
                               </div>
                              </div>
                            </div>
                          
                            </>
                            )
                          }
                        )}
                          
                    </div>
                    <div className='box'>
                      <div className='header'>
                        <h2>Featured Product</h2>
                      </div>
                        {
                          featuredProduct.map((elm) => {

                            return (
                            <>
                            <div className='productBox' key={elm.id}>
                              <div className='imgBox'>
                                <img src={elm.images} alt='featured products'></img>
                              </div>
                              <div className='detail'>
                               <h3>{elm.Name}</h3>
                               <p>$ {elm.price}</p>
                               <div className='icon'>
                                <button> <FaEye /></button>
                                <button> <FaHeart /></button>
                                <button> <FaShoppingCart /></button>
                               </div>
                              </div>
                            </div>
                          
                            </>
                            )
                          }
                        )}
                          
                    </div>
                    <div className='box'>
                      <div className='header'>
                        <h2>Top Product</h2>
                      </div>
                        {
                          topProduct.map((elm) => {

                            return (
                            <>
                            <div className='productBox' key={elm.id}>
                              <div className='imgBox'>
                                <img src={elm.images} alt='top products'></img>
                              </div>
                              <div className='detail'>
                               <h3>{elm.Name}</h3>
                               <p>$ {elm.price}</p>
                               <div className='icon'>
                                <button> <FaEye /></button>
                                <button> <FaHeart /></button>
                                <button> <FaShoppingCart /></button>
                               </div>
                              </div>
                            </div>
                          
                            </>
                            )
                          }
                        )}
                          
                    </div>
                  </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Home;
