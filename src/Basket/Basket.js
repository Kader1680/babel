import React from "react";
import './Basket.css'



export default class Basket extends React.Component{

    render(){
        return(
            <div class='basket'>
                <header>
                    <h3>My Basket</h3>
                    <div className="btn">
                        <button>Close</button>
                        <button>Clear Basket</button>
                    </div>
                </header>
                <div className="footer">
                    <span>0 $</span>
                    <button>CHERK OUT</button>
                </div>
            </div>
        )
    }
}




