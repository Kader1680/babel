import React from "react";
import { useState } from 'react';
import {Link} from 'react-router-dom';
import './header.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBarsStaggered } from '@fortawesome/free-solid-svg-icons';

function Header() {
    
    // <button>+</button>
    // <button>-</button>
    // <span></span>


    const [list, lblock] = useState(false)

    function LIST() {
        lblock(list => !list)
    }

    let toggle = list ? ' active': '';
    
    // const [show, hidden] = useState(false)

    // function Hid(params) {
    //     hidden(show => !show)
    // }

    // let none = show ? ' none'


    return(
        
        <nav>
            
            <div class="logo">
                Best<span>Clothes</span>
            </div>
            <div class = {`list${toggle}`} >
                <ul>

                    <li><Link class="link" exact to='/home'>Home</Link></li>
                    
                    <li><Link class="link" to='/product'>Product</Link></li>
                    <li><Link class="link" to='/about'>about</Link></li>
                    <li><Link class="link" to='/contact'>Contact</Link></li>
                    
                </ul>
            </div>
            <span onClick={LIST} class='bar'>
                <FontAwesomeIcon icon={faBarsStaggered} />
            </span>
            
        </nav>
    )
}


export default Header

