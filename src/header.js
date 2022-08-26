import React from "react";
import { useState } from 'react';
import {Link} from 'react-router-dom';
import './header.css';


function Header() {
    

    const [bar, close] = useState(false)
    const [list, setlist] = useState(false)
    function Click() {
        close(!bar)
        setlist(!list)
    }
    
    

    return(
        
        <nav>
            
            <div class="logo">
                Best<span>Clothes</span>
                
            </div>
            <div  className = {` list ${list ? 'active' : ''} `}>
                <ul>

                    <li><Link class="link" exact to='/home'>Home</Link></li>
                    
                    <li><Link class="link" to='/product'>Product</Link></li>
                    <li><Link class="link" to='/about'>about</Link></li>
                    <li><Link class="link" to='/contact'>Contact</Link></li>
                    
                </ul>
            </div>
            <span class='bar'>
                <i  onClick={Click} className={bar ? 'fas fa-close ' : 'fas fa-bars'} ></i>
            </span> 
            
        </nav>

        
    )
}


export default Header

