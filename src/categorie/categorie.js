import React from 'react'
import './categorie.css'
import c1 from '../img/computer.jpg';
import c2 from '../img/Cat-Hard.jpg';
import c3 from '../img/software.jpg';
import c4 from '../img/hosting.jpg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Computer from '../computer/computer';
import Hardware from '../hardware/hardware';
export default function Categorie() {
    return (
    <div>
            
            <div class="py-3 py-md-5 bg-light">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h4 class="mb-4">Our Categories</h4>
                </div>
                <div class="col-6 col-md-3">
                    <div class="category-card">
                        <a href="">
                            <div class="category-card-img">
                                <img src={c1} class="w-100" alt="Laptop" />
                            </div>
                            <div class="category-card-body" >
                                <h5 >Computer</h5>
                                    <Routes>
                                        <Route path='/categorie
                                        /computer' element={<Computer/>} />
                                    </Routes>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-6 col-md-3">
                    <div class="category-card">
                        <a href="">
                            <div class="category-card-img">
                                <img src={c2} class="w-100" alt="Mobile Devices" />
                            </div>
                            <div class="category-card-body">
                                <h5>Hardware</h5>
                                <Routes>
                                    <Route path='/categorie/hardware' element={<Hardware />} />
                                </Routes>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-6 col-md-3">
                    <div class="category-card">
                        <a href="">
                            <div class="category-card-img">
                                <img src={c3} class="w-100" alt="Mens Fashion" />
                            </div>
                            <div class="category-card-body">
                                <h5>Software</h5>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-6 col-md-3">
                    <div class="category-card">
                        <a href="">
                            <div class="category-card-img">
                                <img src={c4} class="w-100" alt="Women Fashion" />
                            </div>
                            <div class="category-card-body">
                                <h5>Hosting</h5>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
