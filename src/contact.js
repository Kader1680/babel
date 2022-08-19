import './contact.css'
import React from "react";

import login from '../src/img/login.jpg';

function Contact() {
    return(
        <div class="contact">
            <div class='wall_contact'>
                <img src = {login}/>
            </div>
            <div class='square'>
                <div class="form">
                    <form>
                        <input placeholder='Full Name'></input><br></br>
                        <input placeholder='Email Adress'></input><br></br>
                        <input placeholder='Your Subject'></input><br></br>
                        <textarea placeholder='Message' ></textarea>
                    </form>
                    <button>Send Message</button>
                </div>
                <div class='info'>
                    <h3>Accordion Title One</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisic elit. Sed voluptate nihil eumester consectetur similiqu consectetur.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisic elit. Et, consequuntur, modi mollitia corporis ipsa voluptate corrupti elite.</p>

                    <p>Second Title Here</p>
                    <p>Accordion Title Three</p>
                    <p>Fourth Accordion Title</p>

                </div>
            </div>
        </div>
    )

}

export default Contact;






