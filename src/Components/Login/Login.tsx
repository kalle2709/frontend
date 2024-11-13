import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';



const Login = () => {
    
    const[userName, setUsername] = useState<string>('');
    const[password, setPassword] = useState<string>('');

    const navigate = useNavigate();

    const userNameHandler = (e:any) =>
    {
        setUsername(e.target.value);

    }
    const passwordhandler = (e:any) =>
    {
        setPassword(e.target.value);

    }

    const loginHandler = () =>
    {
      setUsername('');
      setPassword('')
      navigate('/Homepage')
    }



  return (
    <div className = 'mainDiv'>
      <Container className = 'loginContainer'>
        <div className='vstack gap-3 itemsStack'>
          <div className='headerText'>Welcome to E-Cart</div>
          <input className = 'nameStyle'  onChange = {userNameHandler} value={userName} placeholder='UserName'/>
          <input className = 'nameStyle' onChange = {passwordhandler} value = {password} type = 'password' placeholder='Password'/>
          <button className='loginbuttonStyle' onClick={loginHandler} disabled= {userName == '' || password == ''}>Login</button>

        </div>
        
        
      </Container>

    </div>
  )
}
export default Login;
