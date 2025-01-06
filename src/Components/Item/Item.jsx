import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Item.css";

function Item({ id, name, image, new_price, old_price, onAddToCart }) {

  const navigate = useNavigate(); 

  const handleNavigateToProduct = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="item" onClick={handleNavigateToProduct}>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>
        <span className="new-price">${new_price}</span>{" "}
        <span className="old-price">${old_price}</span>
      </p>
     <Link to="/product"><button className="add-to-cart" onClick={handleNavigateToProduct}>
        Shop Now
      </button>
</Link> 
    </div>
  );
}

export default Item;
