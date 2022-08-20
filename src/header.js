import React from "react";
import { useState } from 'react';
import {Link} from 'react-router-dom';
import './header.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

                    <li><Link exact to='/home'>Home</Link></li>
                    
                    <li><Link to='/product'>Product</Link></li>
                    <li><Link to='/about'>about</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    
                </ul>
            </div>
            <span onClick={LIST} class='bar'>
                <FontAwesomeIcon icon={faBarsStaggered} />
            </span>
            
        </nav>
    )
}


export default Header

