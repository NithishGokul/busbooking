// src/Login.js
import React, { useState } from 'react';
import {Link} from 'react-router-dom';

import './Loginpg.css'; // Import the CSS file
const Login = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement login logic here
    console.log('Login clicked');
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="button" onClick={handleLogin}>
          <Link to='./Sample'style={{color:'white',textDecoration:"none"}}>Login</Link>
       </button>
       <br />
        <div className='Register'>
          <Link to='./Register' style={{color:'white',textDecoration:"none"}}>Signup</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
