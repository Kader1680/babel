import React from "react";
import './App.css';
import {BrowserRouter as  Router, Routes, Route} from 'react-router-dom';
import Home from './home';
import About from './about';
import Header from './header';
import Product from './product';
import Contact from './contact';


function App() {
  return (

    <Router>
        <Header/>
              <Routes>
                  <Route path='/' element={<Home/>} />
                  <Route path='/home' element={<Home/>} />
                  <Route path='/about' element={<About/>} />
                  <Route path='/product' element={<Product/>} />
                  <Route path='/contact' element={<Contact/>} /> 
              </Routes>
    </Router>
    
  );
}

export default App;

/* <Router>

<Header/>
<Product/>
      <Routes>

          <Route path='/BABEL/bibal/src/home' element={<Home/>} />

          <Route path='/BABEL/bibal/src/about' element={<About/>} />
          <Route path='/BABEL/bibal/src/product' element={<Product/>} />
          <Route path='/BABEL/bibal/src/contact' element={<Contact/>} /> 

          

      </Routes>

</Router> */