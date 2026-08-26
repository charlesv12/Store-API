import { useState } from 'react'
import NavBar from './layouts/NavBarLayout.jsx'
import FooterLayout from './layouts/FooterLayout.jsx'
import ProductCard from './components/ProductCard';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import './App.css'

const products = [
  { id: 1, name: 'Wireless Mouse', price: 599 },
  { id: 2, name: 'Mechanical Keyboard', price: 2499 },
  { id: 3, name: 'USB-C Hub', price: 899 },
];

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/:id" element={<ProductDetail />} />
    </Routes>
  );
}