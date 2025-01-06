import React from 'react'
import './NewsLetter.css'
function NewsLetter() {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offers On Your Emails </h1>
      <p>subscribe to our newsletter and stay updated</p>
    <div className='input'>
        <input type='email' placeholder='your email id'/>
        <button>Subscribe</button>
    </div>

    </div>
  )
}

export default NewsLetter
