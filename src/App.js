import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

              <Route path='/bibal/src/home' element={<Home/>} />
              
              <Route path='/bibal/src/about' element={<About/>} />
              <Route path='/bibal/src/product' element={<Product/>} />
              <Route path='/bibal/src/contact' element={<Contact/>} /> 

        </Routes>
        
        
        
        


    </Router>

    

        

    
    
  );
}

export default App;