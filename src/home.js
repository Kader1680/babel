import './home.css'
import React from "react";
import pub_1 from '../src/img/pub-1.jpg';
import b from '../src/img/b.png'
import d from '../src/img/c.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
function Home() {
    return(
        <div>
            <img src={pub_1} alt="" />
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
                            <img src={d} class='a' alt='a' />
                            </div>  
                            <div class='data'>
                            <span>Monitor</span>
                            <p>14.55 $</p>
                            <span><FontAwesomeIcon icon={faThumbsUp} /></span>
                            <button><span>Buy</span><span><FontAwesomeIcon icon={faShoppingCart}/></span></button>
                            </div>
                </div>
            </div>
            <div class='squre'>
                <h3>About Sixteen Clothing</h3>
                <p>Looking for the best products?</p>
                <p>This template is free to use for your business websites. However, you have no permission to redistribute the downloadable ZIP file on any template collection website. Contact us for more info.</p>
                <ul>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Consectetur an adipisicing elit</li>
                    <li>It aquecorporis nulla aspernatur</li>
                    <li>Corporis, omnis doloremque</li>
                    <li>Non cum id reprehenderit</li>
                </ul>
            </div>
            <div class='note'>
                    <h3>Creative & Unique Sixteen Products</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque corporis amet elite author nulla.</p>
                    <button>Purchase Now</button>

            </div>
        </div>
        
    )
}

export default Home;











