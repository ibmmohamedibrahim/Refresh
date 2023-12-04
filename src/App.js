
import React from 'react'
import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Hair from './Components/Hair/Hair';
import Contact from './Components/Contact/Contact';
import Ourstory from './Components/Ourstory/Ourstory';
import Blog from './Components/Blog/Blog';
import Body from './Components/Body/Body';
import Face from './Components/Face/Face';
import Kits from './Components/Kits/Kits';
import Home from './Components/Home/Home';
import Shipp from './Components/Shipp/Shipp';


function App() {
  return (
    <div>
      
      <BrowserRouter>

      <nav className="nav">        
       <Navbar />
       </nav>
       <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/Hair" element={<Hair/>} />
       <Route path="/Contact" element={<Contact/>} />
       <Route path="/Ourstory" element={<Ourstory/>} />
       <Route path="/Blog" element={<Blog/>} />
       <Route path="/Body" element={<Body/>} />
       <Route path="/Face" element={<Face/>} />
       <Route path="/Kits" element={<Kits/>} />
       <Route path="/Shipp" element={<Shipp/>} />
   

       
       </Routes>
       <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

