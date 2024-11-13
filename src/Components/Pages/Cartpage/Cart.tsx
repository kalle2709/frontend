import React from 'react'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

import './Cart.css'
import { useNavigate } from 'react-router-dom'

const Cart = () => {

  const navigate = useNavigate();

  const productsHandler = () =>
  {
    navigate('/Productpage')
  }

  return (
    <div>
        <div className = ' vstack gap-3 mainContent'>
            <p className = 'headerStyle'>Shopping Cart</p>
            <p  className='subtextStyle'>You have no items to display in your cart</p>
            <button onClick={() => productsHandler()} className='buttonStyle'>Continue Shopping</button>
        </div>    
    </div>
  )
}

export default Cart
