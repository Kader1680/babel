import './product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import {faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';



import { useState } from 'react';
import React from "react";
import slide from '../src/img/slide.png';
import a from '../src/img/a.png'
import b from '../src/img/b.png'
import c from '../src/img/c.png'
import d from '../src/img/d.png'
import e from '../src/img/e.png'
import f from '../src/img/f.png'
import g from '../src/img/g.png'
import h from '../src/img/h.png'
import i from '../src/img/i.png'
import j from '../src/img/j.png'
import k from '../src/img/k.png'


function Product() {

   
   return(

      
      
      <div class="Product_Blog" >
         
         

      

            <div class="slider_product">
               <div class="txt">
                  <p>NEW ARRIVALS</p>
                  <h2>BEST PRODUCT</h2>
               </div>
               <img src={slide} class='slide'/>
            </div>

            

               <div class='global'>
               <div class="products">
                        <div class="kind">
                           <span class='heart'><FontAwesomeIcon icon={faHeart} /></span>
                           <img src={b} class='a' alt='a' />
                        </div>  
                        <div class='data'>
                           <span>Monitor</span>
                           <p>14.55 $</p>
                           <span><FontAwesomeIcon icon={faThumbsUp} /> </span>
                           <button><span>Buy</span><span><FontAwesomeIcon icon={faShoppingCart}/></span></button>
                        </div>
                     </div>

                     <div class="products">
                        <div class="kind">
                           <span class='heart'><FontAwesomeIcon icon={faHeart} /></span>
                           <img src={b} class='a' alt='a' />
                        </div>  
                        <div class='data'>
                           <span>Monitor</span>
                           <p>14.55 $</p>
                           <span><FontAwesomeIcon icon={faThumbsUp} /></span>
                           <button><span>Buy</span><span><FontAwesomeIcon icon={faShoppingCart}/></span></button>
                        </div>
                     </div>
                     <div class="products">
                        <div class="kind">
                        <span class='heart'><FontAwesomeIcon icon={faHeart} /></span>
                           <img src={c} class='a' alt='a' />
                        </div>  
                        <div class='data'>
                           <span>Monitor</span>
                           <p>14.55 $</p>
                           <span><FontAwesomeIcon icon={faThumbsUp} /></span>
                           <button><span>Buy</span><span><FontAwesomeIcon icon={faShoppingCart}/></span></button>
                        </div>

                     </div>
                     <div class="products">
                        <div class="kind">
                           <span class='heart'><FontAwesomeIcon icon={faHeart} /></span>
                           <img src={d} class='a' alt='a' />
                        </div> 
                        <div class='data'>
                           <span>Monitor</span>
                           <p>14.55 $</p>
                           <span><FontAwesomeIcon icon={faThumbsUp} /></span>
                           <button><span>Buy</span><span><FontAwesomeIcon icon={faShoppingCart}/></span></button>
                        </div>
                     </div>
                     <div class="products">
                        <div class="kind">
                           <span class='heart'><FontAwesomeIcon icon={faHeart} /></span>
                           <img src={e} class='a' alt='a' />
                        </div> 
                        <div class='data'>
                           <span>Monitor</span>
                           <p>14.55 $</p>
                           <span><FontAwesomeIcon icon={faThumbsUp} /></span>
                           <button><span>Buy</span><span><FontAwesomeIcon icon={faShoppingCart}/></span></button>
                        </div>

                     </div>
                     <div class="products">
                        <div class="kind">
                        <span class='heart'><FontAwesomeIcon icon={faHeart} /></span>
                                 <img src={f} class='a' alt='a' />
                              </div> 
                        <div class='data'>
                           <span>Monitor</span>
                           <p>14.55 $</p>
                           <span><FontAwesomeIcon icon={faThumbsUp} /></span>
                           <button><span>Buy</span><span><FontAwesomeIcon icon={faShoppingCart}/></span></button>
                        </div>

                     </div>
                     <div class="products">
                        <div class="kind">
                        <span class='heart'><FontAwesomeIcon icon={faHeart} /></span>
                              <img src={g} class='a' alt='a' />
                        </div>  
                        <div class='data'>
                           <span>Monitor</span>
                           <p>14.55 $</p>
                           <span><FontAwesomeIcon icon={faThumbsUp} /></span>
                           <button><span>Buy</span><span><FontAwesomeIcon icon={faShoppingCart}/></span></button>
                        </div>

                     </div>
                     <div class="products">
                        <div class="kind">
                           <span class='heart'><FontAwesomeIcon icon={faHeart} /></span>
                           <img src={h} class='a' alt='a' />
                        </div>  
                        <div class='data'>
                           <span>Monitor</span>
                           <p>14.55 $</p>
                           <span><FontAwesomeIcon icon={faThumbsUp} /></span>
                           <button><span>Buy</span><span><FontAwesomeIcon icon={faShoppingCart}/></span></button>
                        </div>

                     </div>
                     <div class="products">
                        <div class="kind">
                           <span class='heart'><FontAwesomeIcon icon={faHeart} /></span>
                           <img src={i} class='a' alt='a' />
                        </div> 
                        <div class='data'>
                           <span>Monitor</span>
                           <p>14.55 $</p>
                           <span><FontAwesomeIcon icon={faThumbsUp} /></span>
                           <button><span>Buy</span><span><FontAwesomeIcon icon={faShoppingCart}/></span></button>
                        </div>
                     </div>
                     <div class="products">
                        <div class="kind">
                           <span class='heart'><FontAwesomeIcon icon={faHeart} /></span>
                           <img src={j} class='a' alt='a' />
                        </div> 
                        <div class='data'>
                           <span>Monitor</span>
                           <p>14.55 $</p>
                           <span><FontAwesomeIcon icon={faThumbsUp} /></span>
                           <button><span>Buy</span><span><FontAwesomeIcon icon={faShoppingCart}/></span></button>
                        </div>
                     </div>
                     <div class="products">
                        <div class="kind">
                              <span class='heart'><FontAwesomeIcon icon={faHeart} /></span>
                              <img src={k} class='a' alt='a' />
                        </div> 
                        <div class='data'>
                           <span>Monitor</span>
                           <p>14.55 $</p>
                           <span><FontAwesomeIcon icon={faThumbsUp} /></span>
                           <button><span>Buy</span><span><FontAwesomeIcon icon={faShoppingCart}/></span></button>
                        </div>
                     </div>
                     <div class="products">
                        <div class="kind">
                              <span class='heart'><FontAwesomeIcon icon={faHeart} /></span>
                              <img src={h} class='a' alt='a' />
                        </div> 
                        <div class='data'>
                           <span>Monitor</span>
                           <p>14.55 $</p>
                           <span><FontAwesomeIcon icon={faThumbsUp} /></span>
                           <button><span>Buy</span><span><FontAwesomeIcon icon={faShoppingCart}/></span></button>
                        </div>
                     </div>
                     <div class="products">
                        <div class="kind">
                              <span class='heart'><FontAwesomeIcon icon={faHeart} /></span>
                              <img src={b} class='a' alt='a' />
                        </div> 
                        <div class='data'>
                           <span>Monitor</span>
                           <p>14.55 $</p>
                           <span><FontAwesomeIcon icon={faThumbsUp} /></span>
                           <button><span>Buy</span><span><FontAwesomeIcon icon={faShoppingCart}/></span></button>
                        </div>
                     </div>
                     <div class="products">
                        <div class="kind">
                              <span class='heart'><FontAwesomeIcon icon={faHeart} /></span>
                              <img src={f} class='a' alt='a' />
                        </div> 
                        <div class='data'>
                           <span>Monitor</span>
                           <p>14.55 $</p>
                           <span><FontAwesomeIcon icon={faThumbsUp} /></span>
                           <button><span>Buy</span><span><FontAwesomeIcon icon={faShoppingCart}/></span></button>
                        </div>
                     </div>
                     <div class="products">
                        <div class="kind">
                              <span class='heart'><FontAwesomeIcon icon={faHeart} /></span>
                              <img src={e} class='a' alt='a' />
                        </div> 
                        <div class='data'>
                           <span>Monitor</span>
                           <p>14.55 $</p>
                           <span><FontAwesomeIcon icon={faThumbsUp} /></span>
                           <button><span>Buy</span><span><FontAwesomeIcon icon={faShoppingCart}/></span></button>
                        </div>
                     </div>
               </div>
         </div>
      
      )
}

export default Product;