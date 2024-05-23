import React, { useState } from 'react';
import './App.css';
import ProductList from './Components/ProductList';
import Cart from './Components/Cart';

const Products = [
  { id: 1, name: 'Product-1', price: 100 },
  { id: 2, name: 'Product-2', price: 200 },
  { id: 3, name: 'Product-3', price: 300 },
];

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct.quantity === 1) {
        return prevCart.filter((item) => item.id !== product.id);
      } else {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
    });
  };

  return (
    <div className="App">
      <div className="container">
        <ProductList products={Products} addToCart={addToCart} removeFromCart={removeFromCart} cart={cart} />
        <Cart cart={cart} />
      </div>
    </div>
  );
}

export default App;
