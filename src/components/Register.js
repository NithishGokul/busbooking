// src/Register.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import './Register.css'; // Import the CSS file

const StyledTextField = styled(TextField)({
  marginBottom: '16px',
  width: '100%',
});

const StyledButton = styled(Button)({
  backgroundColor: 'rgba(33, 150, 243, 0.8)',
  color: 'white',
  '&:hover': {
    backgroundColor: 'rgba(33, 150, 243, 1)',
  },
});

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
    navigate('/');
  };

  return (
    <div className="register-container">
      <div className="register-content">
        <h2>Create an Account</h2>
        <form className="register-form">
          <StyledTextField
            label="Username"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <StyledTextField
            label="Email"
            type="email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <StyledTextField
            label="Date of Birth"
            type="date"
            variant="outlined"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
          <StyledTextField
            label="Phone Number"
            type="tel"
            variant="outlined"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <StyledTextField
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <StyledButton
            variant="contained"
            className="register-button"
            onClick={handleRegister}
          >
            Register
          </StyledButton>
          <div className="login-link">
            <p>
              Already have an account?{' '}
              <Link to="/loginpg" style={{ color: 'rgba(33, 150, 243, 0.8)', textDecoration: 'none' }}>
                Log in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
