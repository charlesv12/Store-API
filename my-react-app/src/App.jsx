import { useState } from 'react'
import NavBar from './layouts/NavBarLayout.jsx'
import FooterLayout from './layouts/FooterLayout.jsx'
import ProductCard from './components/ProductCard';
import './App.css'

const products = [
  { id: 1, name: 'Wireless Mouse', price: 599 },
  { id: 2, name: 'Mechanical Keyboard', price: 2499 },
  { id: 3, name: 'USB-C Hub', price: 899 },
];

export default function App() {
  return (
    <div className="grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}