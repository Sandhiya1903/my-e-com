import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import "./CSS/Product.css";

function Product() {
  const { productID } = useParams();
  const { all_product, addToCart } = useContext(ShopContext);
  const [selectedSize, setSelectedSize] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  // Scroll to the top of the page when the component is mounted
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (!all_product || all_product.length === 0) {
    return <div>Loading...</div>;
  }

  const product = all_product.find((item) => item.id.toString() === productID);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size before adding to cart!");
      return;
    }
    addToCart({ ...product, selectedSize });
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);
  };

  return (
    <div className="product-page">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-details">
        <h1>{product.name}</h1>
        <p>
          <span className="new-price">${product.new_price}</span>{" "}
          <span className="old-price">${product.old_price}</span>
        </p>
        <p>{product.description || "No description available."}</p>
        <div className="size-selection">
          <h3>Select Size:</h3>
          <div className="size-options">
            {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
              <button
                key={size}
                className={`size-button ${
                  selectedSize === size ? "selected" : ""
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        <button className="add-to-cart-button" onClick={handleAddToCart}>
          Add to Cart
        </button>
        {showPopup && <div className="popup">Item added to cart!</div>}
      </div>
    </div>
  );
}

export default Product;
