import React from "react";
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer () {
    return(
        
        <footer>
            <div class="footer-content">
                <h3>Foolish Developer</h3>
                <p>Now I have added a description in the footer design using the following codes. Text font-size: 14px and color white used.</p>
                <ul class="socials">
                    <li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-google-plus"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-youtube"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-linkedin "></i></a></li>
                </ul>
                
                <div class="footer-bottom">
                    <p>copyright &copy;2021 <a href="#">foolishdeveloper</a>  </p>
                </div>

                <div class="footer-menu">
                    <ul class="f-menu">
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Contact</a></li>
                        <li><a href="">Blog</a></li>
                    </ul>
                </div>
                
            </div>
        </footer>
    )
}
export default Footer