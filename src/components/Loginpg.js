// // src/components/Login.js
// import React, { useState } from 'react';
// import { Button, TextField, Container, Typography, CssBaseline } from '@mui/material';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import axios from 'axios';
// import './Login.css';

// const theme = createTheme();

// const Login = () => {
//   const [credentials, setCredentials] = useState({
//     username: '',
//     password: '',
//   });

//   const [loginError, setLoginError] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setCredentials({ ...credentials, [name]: value });
//     // Clear error message when the user starts typing
//     setLoginError('');
//   };

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post('http://localhost:3001/api/login', credentials);

//       if (response.data.success) {
//         console.log('Login successful:', response.data);
//         // Redirect or handle successful login
//       } else {
//         console.log('Login failed! Invalid credentials.');
//         setLoginError('Invalid username or password');
//       }
//     } catch (error) {
//       console.error('Login failed!', error);
//       setLoginError('Error logging in. Please try again.');
//     }
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <Container component="main" maxWidth="xs" className="login-container">
//         <CssBaseline />
//         <div className="login-content">
//           <Typography component="h1" variant="h5">
//             Login
//           </Typography>
//           <form className="login-form">
//             <TextField
//               variant="outlined"
//               margin="normal"
//               required
//               fullWidth
//               id="username"
//               label="Username"
//               name="username"
//               autoFocus
//               value={credentials.username}
//               onChange={handleChange}
//             />
//             <TextField
//               variant="outlined"
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type="password"
//               id="password"
//               value={credentials.password}
//               onChange={handleChange}
//             />
//             {loginError && (
//               <Typography variant="body2" color="error" className="error-message">
//                 {loginError}
//               </Typography>
//             )}
//             <Button
//               type="button"
//               fullWidth
//               variant="contained"
//               color="primary"
//               className="login-button"
//               onClick={handleLogin}
//             >
//               Login
//             </Button>
//           </form>
//         </div>
//       </Container>
//     </ThemeProvider>
//   );
// };

// export default Login;
import React, { useState } from 'react';
import { TextField, Button, Typography, Card } from '@mui/material';
import axios from 'axios';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';
import './Loginpg.css';

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('http://localhost:3001/users', {
        params: credentials,
      });
      if (response.data.length > 0) {
        console.log('Login successful!');
        window.location.href="/";
        // Redirect or handle successful login
      } else {
        console.log('Login failed! Invalid credentials.');
        // Handle invalid login
      }
    } catch (error) {
      console.error('Login failed!', error);
      // Handle error scenarios
    }
  };

  const handleForgotPassword = () => {
    // Implement your forgot password logic here
    console.log('Forgot Password clicked!');
  };

  return (
    <div className="custom-container">
      <Card className="custom-card">
        <Typography variant="h5" className="custom-heading">
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <div className="custom-form-group">
            <TextField label="Username" name="username" variant="outlined" onChange={handleChange} fullWidth />
          </div>
          <div className="custom-form-group">
            <TextField
              label="Password"
              name="password"
              type="password"
              variant="outlined"
              onChange={handleChange}
              fullWidth
            />
          </div>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Login
          </Button>
          <div className="custom-forgot-password-link" onClick={handleForgotPassword}>
            <RouterLink to="/forgot-password">Forgot Password?</RouterLink>
          </div>
          <div className="custom-social-login">
            <Button variant="outlined" color="primary" startIcon={<FaGoogle />}>
              Login with Google
            </Button>
            <Button variant="outlined" color="primary" startIcon={<FaFacebook />}>
              Login with Facebook
            </Button>
          </div>
          <div className="custom-no-account">
            <Typography>
              Don't have an account? <RouterLink to="/signup">Sign Up</RouterLink>
            </Typography>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default Login;