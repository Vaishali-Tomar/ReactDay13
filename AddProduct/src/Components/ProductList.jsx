import React from 'react';

const ProductList = ({ products, addToCart, removeFromCart, cart }) => {
  const getQuantity = (productId) => {
    const product = cart.find((item) => item.id === productId);
    return product ? product.quantity : 0;
  };

  return (
    <div className="product-list">
      <h2>Products</h2>
      {products.map((product) => (
        <div key={product.id} className="product">
          <span>{product.name}</span>
          <button onClick={() => removeFromCart(product)}>-</button>
          <span>{getQuantity(product.id)}</span>
          <button onClick={() => addToCart(product)}>+</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
