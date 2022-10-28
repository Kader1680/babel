import React from 'react'
import './computer.css'
import comp1 from '../img/comp1.jpg'
import comp2 from '../img/comp2.jpg'
import comp3 from '../img/comp3.jpg'
import comp4 from '../img/comp4.jpg'

export default function Computer() {
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
                                <img src={comp1} alt="Laptop" />
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
                                <img src={comp2} alt="Red MI Note 8" />
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
                                <img src={comp3} alt="Mens Shirt" />
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
                                <img src={comp4} alt="Head Phone" />
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
