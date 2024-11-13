import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


const Header = () => {

    const navigate = useNavigate();

    const pageChangeHandler = (page: string) =>
    {
        navigate(`/${page}`)

    }

  return (
    <div className='headerDiv'>  
        <div className = 'hstack gap-3 headerStack'>
            <div className = 'logo'> EC </div>
            <div className = 'title'>E-Cart</div>
            <div className = 'hstack gap-4'> 
                <div className = 'avatar'>MK</div>
                <button className = 'buttonStyles' onClick = {() => pageChangeHandler('')}>Logout</button>
            </div>
        </div>
        <div className = 'hstack gap-3 menuStack'>
            <div></div>
            <div className = 'hstack gap-5 '>
                <button className = 'buttonStyles' onClick = {() => pageChangeHandler('Homepage')}>Home</button>
                <button className = 'buttonStyles' onClick = {() => pageChangeHandler('Productpage')}>Products</button>
                <button className = 'buttonStyles' onClick = {() => pageChangeHandler('Cartpage')}>Cart (0)</button>
                <button className = 'buttonStyles' onClick = {() => pageChangeHandler('Contactpage')}>Contact US</button>
            </div>

        </div>
      
    </div>
  )
}

export default Header