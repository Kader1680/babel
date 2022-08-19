import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home';
// import About from './about';
import Header from './header';
import Product from './product';
import Contact from './contact';
  

function App() {
  return (
    

    // <div>
      
    //   <Header />
    // </div>



    <Router>
        <Header/>
        
        <Routes>

          <Route path='' element={<Home/>} />
          
          <Route path='/product' element={<Product/>} />
          <Route path='/contact' element={<Contact/>} />

        </Routes>
        
        


    </Router>

    

        

    
    
  );
}

export default App;
{/* <Route path='/about' element={<About/>} /> */}