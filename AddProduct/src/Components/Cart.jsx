import React from 'react';

const Cart = ({ cart }) => {
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>No Product added to the cart</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <span>{item.name}</span>
            <span>Quantity: {item.quantity}</span>
            <span>Price: ${item.price * item.quantity}</span>
          </div>
        ))
      )}
      <div className="total-price">
        <strong>Total Price: ${totalPrice}</strong>
      </div>
    </div>
  );
};

export default Cart;