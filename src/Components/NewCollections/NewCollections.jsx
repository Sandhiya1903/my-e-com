import React, { useState } from 'react';
import Item from '../Item/Item';
import ShopItem from '../ShopItem/ShopItem'
import './NewCollections.css';
import new_collection from '../Assets/new_collections';

function NewCollections() {
  const [cart, setCart] = useState([]); // Initialize the cart state

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]); // Add the item to the cart
    console.log('Cart:', [...cart, item]); // Optional: Log the updated cart
  };

  return (
    <div className='new-collections'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className='collections'>
        {new_collection.map((item, i) => (
          <ShopItem
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
             // Pass the addToCart function
          />
        ))}
      </div>
    </div> // Properly closed the main wrapper
  );
}

export default NewCollections;
