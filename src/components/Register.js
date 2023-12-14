// src/Register.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleRegister = () => {
    // Implement registration logic here

    // Assuming registration is successful, redirect to the 'Sample' page
    console.log('Register clicked');
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('DOB:', dob);
    console.log('Phone Number:', phoneNumber);
    console.log('Password:', password);

    // Redirect to 'Sample' page
    navigate('/sample');
  };

  return (
    <div>
      <h2>Register</h2>
      <form>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <label>Date of Birth:</label>
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
        <label>Phone Number:</label>
        <input
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="button" onClick={handleRegister}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
