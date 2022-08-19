import { useState } from 'react';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {faBarsStaggered } from '@fortawesome/free-solid-svg-icons';

function Header() {

    const [list, lstvisble] = useState(false)

    function LIST() {
        lstvisble(list => !list)
    }

    let toggle = list ? ' .block' : null;



    return(
        <nav>
            
            <div class="logo">
                Best<span>Clothes</span>
            </div>
            <div class = {`list${toggle}`} >
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/product'>Product</a></li>
                    <li><a href='/about'>About</a></li>
                    <li><a href='/contact'>Contact</a></li>
                    
                </ul>
            </div>
            <span onClick={LIST} class='bar'>
                <FontAwesomeIcon icon={faBarsStaggered} />
            </span>
            
        </nav>
    )
}


export default Header;

