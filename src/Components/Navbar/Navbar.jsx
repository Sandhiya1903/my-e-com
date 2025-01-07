import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';

function Navbar() {
  const [menu,setMenu]= useState("shop")
    return (
    <div className='navbar'>
       <div className='nav-logo'>  

       <img className='nav-img' src={logo} alt=""/>
       <p>Fashora</p>
       </div>

       <ul className='nav-menu'>
        <li onClick={()=>{setMenu("shop")}}><Link style={ {textDecoration:'none' , color:"black"}}to='/'>shop</Link>{menu==="shop"? <hr/>:<></>}</li>
        <li onClick={()=>{setMenu("mens")}}><Link style={ {textDecoration:'none', color:"black"}}to='/mens'>men</Link>{menu==="mens"? <hr/>:<></>}</li>
        <li onClick={()=>{setMenu("womens")}}><Link style={ {textDecoration:'none', color:"black"}}to='/womens'>women</Link>{menu==="womens"? <hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link style={ {textDecoration:'none', color:"black"}}to='/kids'>kids</Link>{menu==="kids"? <hr/>:<></>}</li>
       </ul>
       
       <div className='nav-login-cart'>
        <Link to='/login'><button>Login </button></Link>
        <Link to='/cart'><img src={cart_icon} alt=''/></Link>
      
       </div>
      
    </div>
  )
}

export default Navbar
