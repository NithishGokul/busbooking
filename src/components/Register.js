// // src/components/Register.js
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import { styled } from '@mui/system';
// import axios from 'axios';
// import './Register.css'; // Import the CSS file

// const StyledTextField = styled(TextField)({
//   marginBottom: '16px',
//   width: '100%',
// });

// const StyledButton = styled(Button)({
//   backgroundColor: 'rgba(33, 150, 243, 0.8)',
//   color: 'white',
//   '&:hover': {
//     backgroundColor: 'rgba(33, 150, 243, 1)',
//   },
// });

// const Register = () => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [dob, setDob] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [password, setPassword] = useState('');
//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate();

//   const validateForm = () => {
//     const errors = {};

//     // Validate username
//     if (!username.trim()) {
//       errors.username = 'Username is required';
//     }

//     // Validate email
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       errors.email = 'Invalid email address';
//     }

//     // Validate phone number (assuming it should have exactly 10 digits)
//     const phoneNumberRegex = /^\d{10}$/;
//     if (!phoneNumberRegex.test(phoneNumber)) {
//       errors.phoneNumber = 'Phone number must be 10 digits';
//     }

//     // Validate password (assuming it should be at least 6 characters)
//     if (password.length < 6) {
//       errors.password = 'Password must be at least 6 characters';
//     }

//     setErrors(errors);

//     // Return true if there are no errors, otherwise false
//     return Object.keys(errors).length === 0;
//   };

//   const handleRegister = async () => {
//     if (validateForm()) {
//       try {
//         const response = await axios.post('http://localhost:3001/users', {
//           username,
//           email,
//           dob,
//           phoneNumber,
//           password,
//         });

//         console.log('User registered:', response.data);
//         // Handle registration success, e.g., redirect to login page
//         navigate('/loginpg');
//       } catch (error) {
//         console.error('Error registering user:', error);
//         // Handle registration failure, show error message, etc.
//       }
//     }
//   };

//   return (
//     <div className="register-container">
//       <div className="register-content">
//         <h2>Create an Account</h2>
//         <form className="register-form">
//           <StyledTextField
//             label="Username"
//             variant="outlined"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             error={errors.username}
//             helperText={errors.username}
//           />
//           <StyledTextField
//             label="Email"
//             type="email"
//             variant="outlined"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             error={errors.email}
//             helperText={errors.email}
//           />
//           <StyledTextField
//             label="Date of Birth"
//             type="date"
//             variant="outlined"
//             value={dob}
//             onChange={(e) => setDob(e.target.value)}
//           />
//           <StyledTextField
//             label="Phone Number"
//             type="tel"
//             variant="outlined"
//             value={phoneNumber}
//             onChange={(e) => setPhoneNumber(e.target.value)}
//             error={errors.phoneNumber}
//             helperText={errors.phoneNumber}
//           />
//           <StyledTextField
//             label="Password"
//             type="password"
//             variant="outlined"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             error={errors.password}
//             helperText={errors.password}
//           />
//           <StyledButton
//             variant="contained"
//             className="register-button"
//             onClick={handleRegister}
//           >
//             Register
//           </StyledButton>
//           <div className="login-link">
//             <p>
//               Already have an account?{' '}
//               <Link to="/loginpg" style={{ color: 'rgba(33, 150, 243, 0.8)', textDecoration: 'none' }}>
//                 Log in
//               </Link>
//             </p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Register;
// export default SignUp;
import React, { useState } from 'react';
import { TextField, Button, Card, Typography } from '@mui/material';
import axios from 'axios';
import './Loginpg.css'

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    dob: '',
    password: '',
    confirmPassword: '',
  });

  const handleSignUp = async () => {
    try {
      const response = await axios.post('http://localhost:3001/users', formData);
      console.log('Registration successful!', response.data);
      window.location.href="/loginpg"
      // Redirect or handle success as needed
    } catch (error) {
      console.error('Registration failed!', error);
      // Handle error scenarios
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="custom-container">

       <Card className="custom-card">
      <Typography variant="h4" gutterBottom className="custom-heading">
       Sign Up
       </Typography>

      <form>        
        <div className="custom-form-group">
        <TextField label="Username" name="username" variant="outlined" onChange={handleChange} fullWidth />
        </div>
        <div className="custom-form-group">
        <TextField label="Email" name="email" type="email" variant="outlined" onChange={handleChange} fullWidth />
        </div>
        <label style={{color:"#666666",marginRight:'200px'}}>Date of Birth</label>
        <div className="custom-form-group">
        <TextField  name="date" type="date"variant="outlined" onChange={handleChange} fullWidth />
        </div>
        <div className="custom-form-group">
        <TextField label="Password" name="password" type="password" variant="outlined" onChange={handleChange} fullWidth />
        </div>
        <TextField
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          variant="outlined"
          onChange={handleChange}
          fullWidth
        />
        <div className="custom-form-group">
        </div>

        <Button type="button" onClick={handleSignUp} variant="contained" color="primary">
          Register
        </Button>
      </form>
      </Card>
    </div>
  );
};

export default SignUp;