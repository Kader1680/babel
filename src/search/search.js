import React from "react";
import './search.css';
import { useState } from "react";

function Search() {


    const [RmvBasket, addBasket] = useState(false);

    
    return(
        <div>
            <div class="wrap">
                <div class="search">
                    <input type="text" class="searchTerm" placeholder="What are you looking for?"/>
                    <button type="submit" class="searchButton">
                        <i class="fa fa-search"></i>
                    </button>
                    <i onClick={()=>{addBasket(!RmvBasket)}} class="fa-solid fa-bag-shopping"></i>
                </div>
            </div>
            {
                RmvBasket?
                        <div class ="basket">
                            <header>

                                <h3>My Basket</h3>
                                <div className="btn">
                                    <button>Close</button>
                                    <button>Clear Basket</button>
                                </div>


                            </header>
                            <div className="mybasket">

                            </div>
                            <div className="footer">
                                <span>0 $</span>
                                <button>CHERK OUT</button>
                            </div>
                        </div>:null
            }
        </div>

        
    )
}

export default Search





































