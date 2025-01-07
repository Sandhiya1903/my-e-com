// import React, { useState } from "react";
import "./Item.css";
import { useNavigate } from "react-router-dom";


function Item({ id, name, image, new_price, old_price}) {
  
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

    </div>
  );
}

export default Item;
