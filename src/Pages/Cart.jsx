import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import "./CSS/Cart.css";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, totalPrice, removeFromCart } = useContext(ShopContext);

  if (cart.length === 0) {
    return (
      <div className="cart-page-none">
        <p>Your cart is empty 😞</p>
        <Link to="/">
          <button>Shop Now</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      <ul className="cart-items">
        {cart.map((item) => (
          <li key={`${item.id}-${item.selectedSize}`} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p>Size: {item.selectedSize}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.new_price}</p>
            </div>
            <button className="delete-button "onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <div className="total-price ">
       
        <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
      </div>
      
        <button className="delete-button ">buy now</button>
      
    </div>
  );
}

export default Cart;
