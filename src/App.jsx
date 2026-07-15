import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Home from './pages/Home';
import ProductDetailsPage from './pages/ProductDetailsPage';
import FloatingSocialWidget from './components/FloatingSocialWidget';

function App() {
  return (
    <CartProvider>
      <FloatingSocialWidget />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:slug" element={<ProductDetailsPage />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
