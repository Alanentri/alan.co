import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Ourstore from './pages/OurStore';


function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
           <Route index element={<Home/>}/>
           <Route path="about" element={<About/>}/>
           <Route path="contact" element={<Contact/>}/>
           <Route path="store" element={<Ourstore/>} />
      </Route>
    </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
