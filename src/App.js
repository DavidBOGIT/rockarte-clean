import React from 'react';
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Navbar from './components/Navbar'; 
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <Router>
      <Navbar />  
      <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:category" element={<ProductList />} />
                <Route path="/products/:category/:id" element={<ProductDetail />} /> {/* Ruta para el detalle del producto */}
                <Route path="/contact" element={<Contact />} />
              
               
      </Routes>
    </Router>
  );
}

export default App;
