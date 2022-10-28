import React from "react";
// import './App.css';
import {BrowserRouter as  Router, Routes, Route} from 'react-router-dom';
import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";
import Product from "./product/product";
import Slider from "./slider/slider";
import Cart from "./cart/cart";
import Check from "./checkout/check";
import Categorie from "./categorie/categorie";
import Computer from "./computer/computer";
import Hardware from "./hardware/hardware";


function App() {

  

  return (

    <div>
    
          <Router>
            <Navbar />
            {/* <Slider /> */}
            <Routes>

                <Route path='/s' element= {<Cart />} />
                <Route path='/' element= {<Slider />} />
                <Route path='/check' element= {<Check />} />
                <Route path='/product' element= {<Product />} />
                <Route path="/categorie" element={<Categorie />} />
                <Route path="/categorie/computer" element={<Computer />} />
                <Route path="/categorie/hardware" element={<Hardware />} />
  
            </Routes>
            <Footer />
          </Router>
      
      

      
      {/* <Router>
      
      
        <Header/>
        <Search />
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/babel' element={<Home title="THis props" />} />
            <Route path='/home' element={<Home title="THis props" Price = "60000$"/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/product' element={<Product/>} />
            <Route path='/contact' element={<Contact/>} /> 
        </Routes>
        
      </Router>
      <Footer /> */}
    </div>
    
    
    
  );
}

export default App;

