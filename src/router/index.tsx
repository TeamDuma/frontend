import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../components/About';
import Contact from '../components/Contact';
import Home from '../components/Home/Home';
import Products from '../components/Products';
import Shop from '../components/Shop';




export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Products' element={<Products />} />
       <Route path='/About' element={<About />} />
       <Route path='/Shop' element={<Shop />} /> 
       <Route path='/Contact' element={<Contact />} />
    </Routes>
  );
}
