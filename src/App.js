import React from "react";
import './App.css';
import {BrowserRouter as  Router, Routes, Route} from 'react-router-dom';
import Home from './home';

import About from './about';
import Header from './header';
import Product from './product';
import Contact from './contact';
import Footer from './footer/footer';
import Search from "./search/search";
import Basket from "./Basket/Basket";

function App() {
  return (

    <div>
      <Router>
      
      
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
      <Footer />
    </div>
    
    
    
  );
}

export default App;

