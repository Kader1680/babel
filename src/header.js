import { useState } from 'react';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {faBarsStaggered } from '@fortawesome/free-solid-svg-icons';

function Header() {

    const [list, lblock] = useState(false)

    function LIST() {
        lblock(list => !list)
    }

    let toggle = list ? ' active': '';



    return(
        <nav>
            
            <div class="logo">
                Best<span>Clothes</span>
            </div>
            <div class = {`list${toggle}`} >
                <ul>
                    <li><a href='/BABEL/bibal/src/home'>Home</a></li>
                    <li><a href='/BABEL/bibal/src/product'>Product</a></li>
                    <li><a href='/BABEL/bibal/src/about'>About</a></li>
                    <li><a href='/BABEL/bibal/src/contact'>Contact</a></li>
                    
                </ul>
            </div>
            <span onClick={LIST} class='bar'>
                <FontAwesomeIcon icon={faBarsStaggered} />
            </span>
            
        </nav>
    )
}


export default Header;

