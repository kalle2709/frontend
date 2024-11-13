import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import './App.css';
import Login from './Components/Login/Login';
import Homepage from './Components/Pages/Homepage/Homepage';
import Products from './Components/Pages/Productspage/Products';
import Cart from './Components/Pages/Cartpage/Cart';
import Contact from './Components/Pages/ContactPage/Contact';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

function App() {
  const location = useLocation();

  return (
    <div className = 'appStyle'>
      {location.pathname !== "/" && <Header/>}
      
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Homepage" element={<Homepage />} />
        <Route path="/Productpage" element={<Products />} />
        <Route path="/Cartpage" element={<Cart />} />
        <Route path="/Contactpage" element={<Contact />} />
      </Routes>
      
      {location.pathname !== "/" && <Footer />}
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
