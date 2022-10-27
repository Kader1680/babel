import React from 'react'
import './product.css'
import one from '../img/1.png'
import two from '../img/2.png'
import three from '../img/3.png'
import foor from '../img/4.jpg'
export default function Product() {
    return (
        <div>
            <div class="py-3 py-md-5 bg-light">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h4 class="mb-4">Our Products</h4>
                    </div>
                    <div class="col-md-3">
                        <div class="product-card">
                            <div class="product-card-img">
                                <label class="stock bg-success">In Stock</label>
                                <img src={one} alt="Laptop" />
                            </div>
                            <div class="product-card-body">
                                <p class="product-brand">HP</p>
                                <h5 class="product-name">
                                    <a href="">
                                            HP Laptop 
                                    </a>
                                </h5>
                                <div>
                                    <span class="selling-price">$500</span>
                                    <span class="original-price">$799</span>
                                </div>
                                <div class="mt-2">
                                    <a href="" class="btn btn1 add">Add To Cart</a>
                                    <a href="" class="btn btn1 like"><i class="fa fa-heart"></i></a>
                                    <a href="" class="btn btn1 view"> View </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="product-card">
                            <div class="product-card-img">
                                <label class="stock bg-success">In Stock</label>
                                <img src={two} alt="Red MI Note 8" />
                            </div>
                            <div class="product-card-body">
                                <p class="product-brand">MI</p>
                                <h5 class="product-name">
                                    <a href="">
                                            Red MI Note 8
                                    </a>
                                </h5>
                                <div>
                                    <span class="selling-price">$200</span>
                                    <span class="original-price">$300</span>
                                </div>
                                <div class="mt-2">
                                    <a href="" class="btn btn1 add">Add To Cart</a>
                                    <a href="" class="btn btn1b"> <i class="fa fa-heart"></i> </a>
                                    <a href="" class="btn btn1 view"> View </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="product-card">
                            <div class="product-card-img">
                                <label class="stock bg-success">In Stock</label>
                                <img src={three} alt="Mens Shirt" />
                            </div>
                            <div class="product-card-body">
                                <p class="product-brand">Levis</p>
                                <h5 class="product-name">
                                    <a href="">
                                            Mens Shirt 
                                    </a>
                                </h5>
                                <div>
                                    <span class="selling-price">$299</span>
                                    <span class="original-price">$359</span>
                                </div>
                                <div class="mt-2">
                                    <a href="" class="btn btn1 add">Add To Cart</a>
                                    <a href="" class="btn btn1 like"> <i class="fa fa-heart"></i> </a>
                                    <a href="" class="btn btn1 view"> View </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="product-card">
                            <div class="product-card-img">
                                <label class="stock bg-success">In Stock</label>
                                <img src={foor} alt="Head Phone" />
                            </div>
                            <div class="product-card-body">
                                <p class="product-brand">Asus</p>
                                <h5 class="product-name">
                                    <a href="">
                                        Head Phone
                                    </a>
                                </h5>
                                <div>
                                    <span class="selling-price">$399</span>
                                    <span class="original-price">$499</span>
                                </div>
                                <div class="mt-2">
                                    <a href="" class="btn btn1 add">Add To Cart</a>
                                    <a href="" class="btn btn1 like"> <i class="fa fa-heart"></i> </a>
                                    <a href="" class="btn btn1 view"> View </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
        </div>
    )
}
