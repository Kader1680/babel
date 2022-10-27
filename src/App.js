import React from "react";
// import './App.css';
// import {BrowserRouter as  Router, Routes, Route} from 'react-router-dom';
import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";
import Product from "./product/product";
import Slider from "./slider/slider";


function App() {
  return (

    <div>
    
      <Navbar />
      <Slider />
      <Product />

      <Footer />
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

