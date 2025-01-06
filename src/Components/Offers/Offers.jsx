import React from 'react'
import "./Offers.css"

import exclusive_image from '../Assets/exclusive_image.png'
function Offers() {
  return (
    <div className='offers'>
      <div className='offers-right'>
        <img src={exclusive_image}alt=''/>
      </div>
      <div className='offers-left'>
  <h1>Unmissable</h1>
  <h1>Deals Await</h1>
  <p>ONLY ON TOP TRENDING PRODUCTS</p>
  <div>
    <button>Explore Now ➜</button>
  </div>
</div>

      </div>
      

      
)}

export default Offers
