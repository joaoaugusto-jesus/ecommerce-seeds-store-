import React from 'react'
import './shop.css';
import novo from '../images/Novo Projeto.webp'
import terra from '../images/terra.webp'
import { FaHeart } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useState } from 'react';
import Homeproduct from './home_products';


const Shop = ({shop, Filter, allcaterfilter, addToCart}) => {
    
    // Toggle Product detail

    const [showDetail, setShowDetail] = useState(false);
    // Detail page data

    const [detail, setDetail] = useState([]);



    // Showimg detail box
    const detailpage = (product) => {
        const detailData = ([{product}]);
        const productDetail = detailData[0]['product'];
        //  console.log(productDetail);
         setDetail(productDetail)
        setShowDetail(true)
    }
   
    const closeDetails = () => {
        setShowDetail(false)
    }
  return (
   <>
   {
    showDetail ?
    <>
    <div className='productDetail'>
        <button className='closeBtn'onClick={closeDetails}>
        <IoMdClose />
        </button>
        <div className='container'>
            <div className='imgBox'>
                <img src={detail.images} alt=''></img>
            </div>
            <div className='info'>
                <div>
                    <h4># {detail.cat}</h4>
                    <h2>{detail.Name}</h2>
                    <p>Oak tree</p>
                    <h3>€ {detail.price}</h3>
                    <button onClick={() => addToCart(detail)}
                    >Add to cart</button>
                </div>
            </div>
        </div>
   </div>
    </>
    : null
   }
   
   <div className='shop'>
        <h2># shop</h2>
        <p>Home . shop</p>
        <div className='container'>
            <div className='leftBox'>
                <div className='category'>
                    <div className='header'>
                    <h3># all categories</h3>
                </div>
                    <div className='box'>
                        <ul>
                        <li onClick={() => allcaterfilter ()}># All products</li>
                        <li onClick={() => Filter ("tree")}> # tree </li>
                        <li onClick={() => Filter ("garden")}> # garden </li>
                        <li onClick={() => Filter ("oil")}> # oil </li>
                        <li onClick={() => Filter ("tea")}> # tea</li>
                        <li onClick={() => Filter ("nutrients")}> # nutrients</li>
                        <li onClick={() => Filter ("maternidade")}> # maternidade</li>
                        <li onClick={() => Filter ("flower")}> # flowers</li>
                        <li onClick={() => Filter ("compund")}> # bio compund</li>
                        </ul>
                    </div>    
                </div>
                <div className='banner'>
                    <div className='imgBox'>
                        <img src={terra} alt="composto bio"  />
                    </div>
                </div>
            </div> 
            <div className='rightBox'>
                <div className='banner'>
                    <div className='imgBox'>
                        <img src={novo} alt='chá a granel' />
                    </div>
                </div>
           
                <div className='productBox'>
                    <h2>Shop products</h2>
                    <div className='productContainer'>
                    {
                        shop.map((curElm, index) => {
                            return (
                                <>
                                    <div key={index} className='box'>
                                        <div className='imgBox'>
                                            
                                            <img src={curElm.images} alt={curElm.Name || 'product image'} />
                                            <div className='icon'>
                                                <li>
                                                    <FaHeart /> 
                                                </li>
                                                <li onClick={() => detailpage (curElm)}>
                                                    <IoEyeSharp /> 
                                                </li>
                                          </div>
                                        </div>
                                        <div className='detail'>
                                            <h3>{curElm.Name}</h3>
                                            <p>€ {curElm.price}</p>
                                            <button onClick={() => detailpage(curElm)}>Add to cart</button>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                     }
                    </div>
               </div> 
            </div>
        </div>
   </div>
   </>
  )
}

export default Shop